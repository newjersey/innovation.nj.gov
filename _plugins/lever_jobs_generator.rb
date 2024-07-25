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

      begin
        response = Net::HTTP.get(uri)
       
        Jekyll.logger.info "Got the JSON info #{response}"
        jobs = JSON.parse(response)

        puts "\n---\n\nsite.source: #{site.source}\n\n---\n"
        puts "\n---\n\ncurrent directory: #{File.dirname(__FILE__)}\n\n---\n"
        puts "\n---\n\ncurrent abs directory: #{File.expand_path(File.dirname(__FILE__))}\n\n---\n"

        jobs.each do |job|
          create_job_page(site, job)
        end

        puts "list of files in the _join directory (post-generation):"

        # Specify the directory you want to list the files of
        directory_path = File.join(site.source, "content/_join")

        # List each file in the specified directory
        Dir.foreach(directory_path) do |filename|
          # Skip the current and parent directory entries
          next if filename == '.' || filename == '..'
          
          # Construct the full path to the file
          file_path = File.join(directory_path, filename)
          
          # Print the filename if it's a file (not a directory)
          puts filename if File.file?(file_path)
        end
        
      rescue => e 
        Jekyll.logger.error "Error fetching Lever JSON data: #{e.message}"
      end
      
    end

    def create_job_page(site, job)
      title = job['text']
      slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
      front_matter = {
        'title' => title,
        'team' => job['categories']['team'],
        'applyURL' => job['applyUrl'],
        'published' => true,
      }

      # Convert front matter to YAML
      front_matter_yaml = front_matter.to_yaml

      # Generate the full content with front matter and job description
      content = <<~EOS
        #{front_matter_yaml}---
        #{build_job_listing_html(job)}
      EOS

      Jekyll.logger.info ""
      Jekyll.logger.info "generated file content #{content}"
      Jekyll.logger.info ""

      # Create the path for the job page
      path = File.join(site.source, "content/_join/#{slug}.md")

      # Write the content to the file
      FileUtils.mkdir_p(File.dirname(path))
      Jekyll.logger.info ""
      Jekyll.logger.info "generated file path #{File.dirname(path)}"
      Jekyll.logger.info ""
      File.open(path, 'w') do |file|
        file.write(content)
        Jekyll.logger.info ""
        Jekyll.logger.info "wrote to file"
        Jekyll.logger.info ""
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