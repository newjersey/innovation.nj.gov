require 'net/http'
require 'json'
require 'yaml'

module Jekyll
  class LeverJobsGenerator < Generator
    safe true

    def generate(site)
      # Replace with your actual Lever.co API endpoint
      lever_api_endpoint = 'https://api.lever.co/v0/postings/NJStateOfficeofInnovation'
      uri = URI(lever_api_endpoint)

      response = Net::HTTP.get(uri)
      jobs = JSON.parse(response)

      jobs.each do |job|
        create_job_page(site, job)
      end
    end

    def create_job_page(site, job)
      title = job['text']
      slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
      front_matter = {
        'title' => title,
        'team' => job['categories']['team'],
        'applyURL' => job['applyUrl'],
        'publish' => true,
      }

      # Convert front matter to YAML
      front_matter_yaml = front_matter.to_yaml

      # Generate the full content with front matter and job description
      content = <<~EOS
        #{front_matter_yaml}---
        #{build_job_listing_html(job)}
      EOS

      # Create the path for the job page
      path = File.join(site.source, "content/_join/#{slug}.md")

      # Write the content to the file
      FileUtils.mkdir_p(File.dirname(path))
      File.open(path, 'w') do |file|
        file.write(content)
      end
    end

    def build_job_listing_html(job)
      job_listing = ""
    
      if job['description']
        job_listing += format_html_to_markdown(job['description'])    
        job_listing += "\n"                    
      end
    
      if job['lists']
        job['lists'].each do |list|
          if list && list.key?('text') && list.key?('content')
            job_list_markdown = format_html_to_markdown(list['content'])

            job_listing += "\n### #{list['text']}\n#{job_list_markdown}\n"
          end
        end
      end
    
      if job['additional']
        job_listing += format_html_to_markdown(job['additional'])
          
      end
    
      job_listing
    end

    def format_html_to_markdown(text)
      formatted_text = text
          .gsub(/<div><b style="font-size: 18px">(.*?)<\/b>/) do |match| "## #{$1.strip}" end
          .split('<div>').join("\n")
          .gsub(/<br>|<div>|<\/div>/, '')
          
      if text.include?('</li><li>')
          formatted_text = formatted_text
            .split('</li><li>').map { |item| "- #{item.strip}" }.join("\n")
            .gsub(/<\/?li>/, '')
      end
        
      formatted_text
    end
  end
end