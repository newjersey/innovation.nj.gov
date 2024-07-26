require 'rake'
require 'net/http'
require 'json'
require 'yaml'
require 'fileutils'
require 'nokogiri'

task :generate_jobs do
  # Replace with your actual Lever.co API endpoint
  lever_api_endpoint = 'https://api.lever.co/v0/postings/NJStateOfficeofInnovation'
  uri = URI(lever_api_endpoint)

  dir_path = File.join(__dir__, 'content', '_join')
  FileUtils.mkdir_p(dir_path) unless Dir.exist?(dir_path)

  begin
    response = Net::HTTP.get(uri)
    jobs = JSON.parse(response)
    puts "Fetched #{jobs.size} jobs from Lever API"

    jobs.each do |job|
      title = job['text']
      slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
      front_matter = {
        'title' => title,
        'team' => job['categories']['team'],
        'applyURL' => job['applyUrl'],
        'published' => true
      }

      content = <<~EOS
        #{front_matter.to_yaml}---
        #{build_job_listing_html(job)}
      EOS

      file_path = File.join(dir_path, "#{slug}.md")
      File.open(file_path, 'w') { |file| file.write(content) }
      puts "Created #{file_path}"
    end

  rescue => e
    puts "Error fetching Lever JSON data: #{e.message}"
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
  # Parse the HTML text with Nokogiri
  doc = Nokogiri::HTML::DocumentFragment.parse(text)
  # Process each <div> element
  doc.css('div').each do |div|
    # Check for <b> tags with specific style and replace with markdown headers
    div.css('b[style="font-size: 18px"]').each do |b|
      b.replace("## #{b.text.strip}\n")
    end

    # Replace <br> tags with newlines
    div.css('br').each do |br|
      br.replace("\n")
    end
  end

  # Process <li> elements for markdown list formatting
  doc.css('li').each do |li|
    li.replace("- #{li.text.strip}\n")
  end

  doc.text
end