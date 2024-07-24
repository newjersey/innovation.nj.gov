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
        'layout' => 'job',
        'title' => title,
        'location' => job['categories']['location'],
        'team' => job['categories']['team']
      }

      # Convert front matter to YAML
      front_matter_yaml = front_matter.to_yaml

      # Generate the full content with front matter and job description
      content = <<~EOS
        ---
        #{front_matter_yaml}---
        #{job['description']}
      EOS

      # Create the path for the job page
      path = File.join(site.source, "content/_join/#{slug}.md")

      # Write the content to the file
      FileUtils.mkdir_p(File.dirname(path))
      File.open(path, 'w') do |file|
        file.write(content)
      end
    end
  end
end