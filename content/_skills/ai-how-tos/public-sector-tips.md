---
title: 9 Tips for Building GenAI Tools for Public Sector Professionals
permalink: /skills/ai-how-tos/public-sector-tips
menu-group: "Generative AI How-to Guides"
---

At the Office of Innovation, we’ve been building small but impactful internal-facing generative artificial intelligence (genAI) tools that are saving staff 83-99% on certain administrative tasks, freeing them to work on more complex and impactful work.

What is the most significant lesson in building with genAI? Building AI products that work well for public sector professionals requires solving problems that go far beyond writing good prompts. There are technical hurdles, including timeouts and data processing quirks, as well as infrastructure decisions that can make or break your project. Below, we outline some of our key takeaways that guide our AI builds.

**Disclaimer:** The products and services mentioned in this guide were available through our state IT contracts and are provided for illustrative purposes only. They do not constitute endorsements. Similar solutions may be available from other providers.

## 1. Responsible AI Products in Government

Before diving into the technical tips, it's critical to address the ethical responsibilities that come with using AI in government services.

### Communicate AI Limitations Clearly

Make sure everyone on your team—and the people who will use your product—understands that AI can make mistakes. Generative AI sometimes "hallucinates," meaning it confidently presents information that isn't true or makes up facts that sound plausible but are incorrect. This is especially important in government, where the level of accuracy can directly affect people's lives.

### Always Keep Humans in the Loop

AI should enhance human decision-making, not replace it. Design your system so that:

- A human reviews AI outputs before they become final decisions
- Users understand when they're interacting with AI vs. humans
- There's always a way for people to reach a human if needed
- Critical tasks have human oversight and approval

### Just Because You Can Use AI, Doesn't Mean You Should

Not every government process is appropriate for AI, even if the technology could handle it. Before building, consider the ethical implications of using genAI; we won’t get into all of those considerations here but some initial questions could be:

- **Accountability**: Do we have the right safeguards and oversight in place?
- **Bias and Fairness**: Could AI bias harm certain groups of people?
- **Privacy**: Can we ensure that user data is private and secure?
- **Transparency**: Will users know genAI is being used in this way?

### Make it a Team Conversation

These aren't decisions for one person to make alone. Include diverse perspectives from your team, stakeholders, and communities that will be affected by your AI product, if any.

## 2. Start with Product Fundamentals

Building AI products starts by following the same principles as most products: Understand the problem, design for users, and iterate based on feedback. These principles become even more critical with AI because the technology can seem magical but often fails in unexpected ways.

Before building anything, start with these questions:

1. What specific problem are you solving?
2. How is this problem currently solved?
3. What does success look like to your user?

## 3. Test Your Use Case

You need to determine if a Large Language Model (LLM) is the right technology to solve your problem. Generative AI isn’t great at everything; it is particularly good at:

1. Administrative tasks
2. Brainstorming
3. Summarizing information
4. Writing user-friendly content
5. Drafting translations
6. Replicating templates and examples with new data sets
7. Researching answers it finds on the internet or in a given knowledge base
8. Identifying trends or patterns

The fastest way to determine if your use case can benefit from genAI is to test your idea using a straightforward example with an AI chat interface. To do this, your government needs to provide a secure genAI chat interface.

### Work with Your IT Department to Access a Secure AI Chat Environment

**_Tip for NJ Staff:_** You can access a state-licensed LLM through the New Jersey AI Assistant, Microsoft Azure, or Amazon Bedrock. These sites are secure. Use the assistant or a chat playground to try different prompts and see if you can get a result that would benefit you.

### Use AI Prompt Generation to Test Prompts and Output

Have AI improve your own prompts by comparing its output to human-created work.

**Step 1: Identify an Example Project You Already Completed**

**Step 2: Assemble Key Artifacts**

- Original input data
- Ideal final product (created by a human)
- Examples of good quality outputs

**Step 3: Get initial output**

1. Write a prompt explaining the task
2. Share examples of good quality work and ask if the AI understands what made them good examples
3. Give the AI your input data and ask for a draft
4. Ask the AI to review and rewrite its draft based on your key criteria (e.g., accuracy, completeness, bias)
5. Save your prompts and the draft output

**Step 4: Improve your prompts**

1. Start a new session and give the AI both its draft and the human version
2. Ask AI to compare the two versions, giving it specific criteria of what makes for a good version
3. Share your original prompts and ask how to improve the prompts to make the AI draft better match the human version
4. Copy and test with those prompts

**Step 5: Test**

- Test your prompt with a few examples, and make any necessary tweaks to the prompt accordingly.

## 4. Choose Your LLM and LLM Product

Think of choosing an LLM like choosing between different types of cars: they generally do the same thing, but an SUV and a pickup truck have different strengths for different scenarios. There are many genAI models you may have access to. Sometimes one LLM works better than another, and you can find evaluations online that recommend different LLMs depending on the task you are looking to accomplish.

**Tip for NJ staff:** Thanks to New Jersey’s Office of Information Technology, you have access to dozens of LLMs in AWS, Microsoft, and the NJ AI Assistant. You should only be using State-approved LLMs.

**Tip for NJ Staff:** As an example, the Office of Innovation team sometimes uses Claude 3.7 Sonnet to build end-to-end genAI products. That tool is accessible via OIT-provided Amazon Bedrock.

### Understand the Limitations of Different AI APIs

There are different LLMs, and different ways to connect with an LLM through APIs – not all APIs offer the same functionality. For example, if your state has access to Amazon Bedrock, you can access Claude through a standard API or an agentic API – each has its own pros and cons.

### Product Types We Used

**Standard API:**

- Access to a simple LLM implementation
- No "memory" between prompts (though achievable by including prior context)
- **Best for:** lightweight applications that need only “one-off” interactions with the LLM without additional context

**Agentic API:**

- Enhanced version that gives LLMs more capabilities
- Allowed LLMs to integrate with tools such as databases, web crawling, and executing custom code
- Can optionally access memory at different points in the LLM interaction across prompts
- **Best for:** complex applications that require persistent memory across sessions, or for the LLM to access specialized tools such as web crawling or databases
- **Current limitation**: System prompts, which apply across all sessions and modify LLM behavior, can be challenging to configure and result in unexpected responses, such as asking too many follow-up questions

## 5. Choosing Your Tech Stack

Now that you have proven that AI can help you with your work, consider building a product that can replicate the task multiple times.

**The main challenge:** Choosing a tech stack that works with the timeout limits that often occur when multiple prompts and conversations with the API are involved.

Your tech stack will, in part, depend on what LLM you are using.

**Tip for NJ Staff:** If you are using Claude, you will need to work within an environment where you can access where the Claude API is available.

### What worked for us:

**AWS Lambda (backend)** - Allows up to 15 minutes of timeout, perfect for back-and-forth with Bedrock. Can store finalized prompts in an S3 bucket (or directly in the code); in S3 it is conveniently accessible via Lambda.

**AWS Amplify (frontend)** - Handles file uploads and prompt interfaces.

**S3 buckets** - Temporarily store files and save static prompts that don't change.

### What didn't work:

**Building everything in Amplify** - Hard 30-second limit per task. LLMs need several minutes, so this always fails.

**Other AWS options** (App Runner, EC2+ECR) - Too much setup overhead for simple internal apps, or had other blocking issues.

## 6. Processing Data

**The main challenge**: You won't know if an LLM is reading your data or hallucinating without testing. When LLMs can't access file data, they won’t tell you; instead, they make up responses without mentioning the problem. Test by asking for specific information: "reproduce the contents of page 4. Ask the LLM to reference specific content from images to "prove" it can interpret image content.

**What to test for:**

1. Is it reading text?
2. Is it reading information in an image?
3. Is it reading text in an image?
4. If you are using a non-native PDF, i.e. a file without text embedded: Is the LLM reading text in this “scanned” PDF?

We found that the answer varies depending on your LLM and the product you are using.

Once you know what data isn’t being read by an LLM, you will need to preprocess it into a format the LLM can read. For example, if your LLM doesn’t read text within an image, but reads text, you will need to preprocess the text images into texts so the LLM can read it.

### Data processing approaches:

**OCR (Optical Character Recognition):**

- Extracts text from scanned images in PDFs
- Less reliable results for:
  - Graphical data (charts, images, page layout)
  - Handwritten images
- **Best for**: Large quantities of scanned typewritten text images

**Embedded Text Extraction:**

- Extracts text from computer-generated PDFs with high accuracy
- Misses graphical data
- **Best for**: Native PDFs without graphical data

**Upload to LLM:** Depending on how PDFs are passed to LLMs, they either:

- Extract embedded text only, or
- Process PDF as an image, reading both text and image data (newer models increasingly have this capability).
- Most versatile option

**Key insight**: LLM capabilities vary not only between models (e.g., Claude, OpenAI, etc) but also between applications (Claude Agent vs Claude Chat API). Test different file types to understand what your LLM can read.

### Handling Large File Collections

**The challenge**: API gateway has a 10MB upload limit, but real applications often need to process much larger collections of files.

**What we learned**: The data about a document (metadata, text content) might fit within the 10MB limit, but attachments (multiple images and documents) often exceed this threshold.

### Approaches to Explore:

**Option 1: Compress and chunk data**

- Compress all data together on the frontend
- Send it to the backend in smaller chunks (around 3MB each)
- Decompress on the backend so both the frontend and the backend have the same data structure

**Option 2: Pre-signed S3 uploads**

- Frontend uploads files directly to S3 using pre-signed URLs
- Send only the S3 URLs and document names to the backend
- Backend fetches files from S3 when needed
- Avoids the 10MB API gateway limit entirely
- More complex architecture, but probably the "right" way according to current recommended practices

### Processing Large Individual Files

**The challenge:** What do you do when a single document exceeds your model's input limits but you need both accurate text extraction and image understanding?

**Our hybrid streaming approach:** Instead of choosing between text extraction or LLM processing, you can combine both by processing large files in chunks while maintaining context.

**How it works:** Stream PDF data to the model in manageable chunks (up to 4MB)

1. Ask the model to extract text and summarize images within that chunk
2. Have the model identify the last complete section or document header in the chunk
3. Store the extracted content and use the returned header as the starting point
4. Loop the process for the next 4MB section, beginning at the saved header
5. Continue until the entire document is processed

**Why this approach works:**

1. **Stays within model limits:** Each 4MB chunk fits comfortably within input constraints
2. **Maintains accuracy**: Preserves precise text extraction while adding AI image understanding
3. **Preserves context**: Using document headers as checkpoints ensures no content is lost or duplicated
4. **Handles mixed content:** Processes both text and images in the same workflow

**Best for:** Large government documents with mixed content (reports with charts, forms with images, lengthy PDFs with embedded graphics) where you need both text accuracy and image interpretation.

This approach combines the precision of text extraction with the versatility of LLM image processing, giving you the best of both worlds for complex document processing.

## 7. File Upload Integrity

**The main challenge**: Files uploaded through your system can become corrupted or unusably large if not properly configured at each layer of your architecture.

**What we experienced:** Files uploaded from the frontend arrived in our S3 storage with significantly larger file sizes and were corrupted, even though they were named correctly.

**The root cause:** The API gateway wasn't configured to handle binary files (like images, PDFs, or documents). By default, API gateways treats all requests as text-based unless explicitly told otherwise.

**Understanding component hierarchy**: When multiple layers in a system handle the same data (frontend → API gateway → backend service), each layer must be configured appropriately. Even if your frontend correctly labels a file as image/png, the API gateway acts as a gatekeeper that needs explicit permission to pass binary data through without corruption.

**Our solution:** Configure binary media types in the API gateway:

1. Go to API gateway console settings
2. Find "Binary Media Types" section
3. Add the content types you need (e.g., image/png, application/pdf, application/octet-stream)
4. This tells API gateway to treat these file types as binary data, not text

**Key insight**: Proper file handling requires configuration at every layer of your system. Missing configuration at any single layer can corrupt your data, even if everything else is set up correctly.

## 8. Managing Timeouts

All LLM-based products have timeout limits. Here's what we experienced and how we resolved common timeout challenges.

**AWS Lambda Function Execution:**

- Default timeout: 3 seconds
- Maximum timeout: 900 seconds (15 minutes)

**Strategies to handle Lambda timeouts:**

1. **Increase timeout settings** (up to 15 minutes maximum)
2. **Optimize your code**:
   - Review for inefficiencies causing long execution times
   - Optimize database queries and external API calls
   - Consider asynchronous or parallel processing
3. **Use AWS Step Functions** for long-running workflows:
   - Split logic into smaller Lambda functions
   - Better error handling and retries
4. **Offload heavy tasks**:
   - Use AWS SQS, SNS, or EventBridge for queuing
   - Consider AWS Batch, AWS Glue, or EC2/ECS for heavy processing
5. **Configure retries and Dead Letter Queues (DLQ)** for monitoring and recovery

**AWS Lambda Function Initialization:**

- [Phase of Lambda execution](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html) where the environment is initialized and libraries are installed
- The timeout is 10 seconds, and cannot be changed
- 10-second time limit is easy to exceed if using large packages

**Strategies to handle Lambda Initialization timeouts:**

1. Use [Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html) to reduce overall package size by storing imported packages elsewhere, and thus reduce the build time.

**API Gateway Limitations:**

- 29-second maximum response time
- After 29 seconds, it returns a 504 Gateway Timeout error
- Code execution continues, but the API gateway stops waiting

**Strategies to handle API gateway timeouts:**

1. **Keep Lambda execution under 29 seconds**
2. **Use response streaming for model responses:**
   - Forces the model to respond as they're generated (on a settable interval)
   - Prevents internal server timeouts when model responses take longer than 60 seconds
3. **Use async patterns**:
   - Return immediately with status ("Accepted")
   - Do heavy work asynchronously (SQS, SNS, Step Functions)
   - Continuously ping the backend from the frontend to update the status
4. **Implement WebSockets or polling**:
   - Return immediately and have the client poll for status
   - Use a WebSocket API gateway for real-time updates
5. **Offload long-running jobs** to:
   - Batch jobs
   - Step Functions
   - Other backend processing services

## 9. Evaluating and Scaling Your Product

Once you get good results with one example, test with 5-10 more examples.

**Rate each example 1-5 on:**

- Accuracy
- Completeness
- Bias
- Tone (if relevant)

**Break it down:** If your output has sections (like memo parts) or columns (like spreadsheets), evaluate each piece separately.

**Take notes:** Write why something scored low so you can try and address it in your prompt.

**Look for patterns:** If you see the same problems repeatedly, improve your prompts or tech.

## Final Thoughts

Building AI products in government isn't only about the technology—it's about serving people better while doing so responsibly. The lessons above come from real projects with real challenges, and we hope they help you avoid some of the pitfalls we encountered. Remember that every AI system is different, and what worked for us might need adjustments for your specific use case. Start small, test thoroughly, keep humans involved in important decisions, and don't be afraid to reach out to others who've walked this path.

Keep in mind that AI technology is constantly evolving. This guide represents a snapshot of the technology and best practices as of fall 2025. What's true today about model capabilities, API limitations, and implementation approaches may change significantly in the coming months and years. Stay connected with the AI development community and be prepared to adapt your approaches as the technology advances.

The goal isn't perfect AI—it's better government services that people can trust.

_This piece was written by Senior Advisor for Responsible AI Jessica Lax with contributions from Walker Gosrich, Joseph Aiello, Spencer Wohlers, and Dan Hinze._

_Added October 7, 2025_
