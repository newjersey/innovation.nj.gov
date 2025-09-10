---
layout: blog
title: How New Jersey is using AI to help businesses get permits faster
date: 2025-09-10
author: Katherine Nammacher, Product Lead, Business Experience Initiative
promoted: 1
excerpt: "How the Office of Innovation is using AI prompting to make business permits and licenses easier to understand."
image: /assets/images/news/technicallylogo.webp
figure:
  url: /assets/images/news/
  caption: " "
  alt-text: " "
---

_Note: This originally appeared as a guest post on [Technical.ly](https://technical.ly/civic-news/ai-business-permits-new-jersey-guest-post/)_

[Business.nj.gov](http://business.nj.gov) provides a single website for business owners to start and run businesses. The site just celebrated 5 years, and our latest data shows that it helps businesses start and grow about [30% faster](https://business.nj.gov/page/impactreport).

One key reason the site is so helpful is that business owners can use it to understand and manage permits, licenses and registrations (a category I'll refer to as "permits" for the sake of this blog post).

Business owners want all of their permit information from across government agencies in one place: required information, a link to complete it, what to expect post-submission, built-in reminders for renewals, etc.

That's why we've manually added hundreds of New Jersey's business permits to business.nj.gov. We research the permit, create plain language instructions, have experts review the instructions and publish them on the site.

However, it takes about eight hours for each permit to be researched and drafted. That's why we built the Permit Drafter – to accelerate how we create that content to scale this work and get more permits and resources onto the site. The Permit Drafter saves about 3.5 hours per permit.

So how does it work?

## The Permit Drafter: What we built

To start, a content strategist on our team researches the permit, including who should obtain it, when it is required, the steps involved, and what to expect.

They go to the Permit Drafter and upload that research into a generative AI tool (using a large language model or LLM). The tool takes the research, with a predetermined prompt sequence (called a "prompt chain"), sends it to the LLM and receives a first draft. The content strategist takes that gen AI draft and edits it into the final permit instructions seen on the website.

The prompt chain in our Permit Drafter has seven key steps:

- Introduce the context by defining the overall goal and a persona for the LLM to use
- Upload 15 examples of previously-completed permit instructions written in the style and structure used on business.nj.gov
- Upload research files and direct the LLM to: review the research files, determine key information from the research, and identify similarities with the examples from #2
- Generate the first draft by providing technical guidance for the output (e.g., "create a long, detailed markdown file that lists out every piece of required info and sources")
- Reprocess the output instructions, revise the draft, and list the changes made
- Revise the draft to follow federal plain language guidelines
- Revise the draft to follow [business.nj.gov](http://business.nj.gov)'s own editorial guidelines

Then, the content strategist simply uses a checklist to audit the gen AI's draft (more on this below), and edit it into the final version.

<div class="usa-alert usa-alert--info usa-alert--no-icon">
  <div class="usa-alert__body">
    <p class="usa-alert__text usa-prose">
      <h2> Tips for honing LLM prompts </h2>
      <p> In honing the prompts ("prompt engineering"), LLMs have their own attributes to test - which many have written about. Here's what made a big difference for us:</p> 
      <ul class="usa-list">
        <li>
          The wording of prompts themselves, especially being direct, sharp, and exact (e.g., "list out three" instead of "list a few")
        </li>
        <li>
          Ask the LLM to articulate what about the prompt is unclear, how you might improve it, or its interpretation of the prompt. This gave us very helpful feedback to hone the prompts
        </li>
        <li>
          Include successful examples of what you want it to generate (even just one will help, though we included 15 for the Permit Drafter)
        </li>
        <li>
          Use a variety of different types of prompts in the same sequence (e.g., persona definition, examples, self-auditing, etc.)
        </li>
        <li>
          Have the LLM review what it wrote and the prompts given, and have it revise the draft again using the original instructions (and list out what changed)
        </li>
        <li>
          Split up long prompt instructions. (For example: We had originally combined our internal editorial guidelines with the plain language guidelines, but it was too much context in one prompt. When separated, the results were substantially better.)
        </li>
        <li>
          Have the LLM list sources cited, including whether the information is directly taken from a source or if it was written information that was inferred from sources
        </li>
      </ul>
    </p>
  </div>
</div>

Our team learned a lot from building a product with gen AI, especially how to build it into existing processes and workflows strategically. Here are three key lessons from this experience:

## Make sure non-technical team members can independently experiment with prompts

As we were testing and refining the tool, we wanted to ensure that everyone on the team (technical or not) could experiment independently and iterate quickly with the prompts. To do this, we structured the experimentation process around using LLM chatbots.

We defined key features our team would need to experiment with, and our operations team identified two LLM chatbots already used by the State of New Jersey (and both had APIs for building a more extensive tool later). Each person experimented with prompts with the chatbots and brought learnings to the team, similar to doing iterations of a design or idea before sharing.

This structure made it easy for people to test different strategies for prompting by playing with large rewrites, varied prompt ordering, small word changes, and more. Each member found different things to improve, so we learned substantially faster from all the concurrent experimentation.

## Audit output from the start, and include end users

As we experimented, we needed a set of success criteria for the team to drive towards.

We defined the attributes for a good draft of permit instructions (including components for human-written content and gen AI-created content), and turned that into a detailed rubric and grading matrix. We used it to measure the quality of the LLM's output, which helped us systematically learn how to improve our prompts.

We also shared screenshots of our prompt chains on a digital whiteboard with the team, taking notes about any variations in outputs, inaccuracies, hallucinations, and other issues. We would choose a particularly good gen AI draft and fully audit it, over and over.

At the beginning of the project, we chose a set of simple permits to hone the prompts and gen AI draft, and then added more complex permits over time. Starting with a simple base allowed us to gradually introduce complexity: different file types, longer documents, more disparate information and convoluted resources, more opaque permit requirements, etc.

As the output became more consistent and reliably good, we shifted our auditing to be lighter weight — going from the intense grading system to a lighter rubric and finally to the audit checklist (shown below). We also learned about the strengths and shortcomings of the LLM.

Writing a checklist for users was key, as they were the ones working directly with the gen AI draft. We wanted to ensure they were set up for success, and knew exactly how to audit the draft. (We've heard from users that this checklist also highlights what they should be thinking about regardless of whether the permit was written manually or using the Permit Drafter.)

Overall, building and refining an audit process in an intentional way helped us sharpen how we work with LLM-generated content - giving us a roadmap for how to iterate toward the most helpful resources for business owners.

<div class="usa-alert usa-alert--info usa-alert--no-icon">
  <div class="usa-alert__body">
    <p class="usa-alert__text usa-prose">
      <h2> Audit checklist </h2>
      <p class="text-bold"> Completeness of research materials </p> 
      <ul>
        <li>
        Do the research materials include all the information required for this permit?
        </li>
        <li>
        Do the resource materials contain accurate and updated information?
        </li>
        <li>
        Did the Permit Drafter use all uploaded resource materials to generate the draft?
        </li>
      </ul>
      <p class="text-bold"> Accuracy and completeness of output </p>
      <ul>
        <li>
          Does the permit draft include source citations (or notes when it inferred information) from the research materials?
        </li>
        <li>
          Have you compared the output with the uploaded research materials to ensure that all information is accurate?
        </li>
        <li>
          Is there any information missing from the output?
        </li>
      </ul>
      <p class="text-bold">Information hierarchy and redundancy</p>
      <ul>
        <li>
          Is the permit draft organized correctly and intuitively?
        </li>
        <li>
          Is information repeated (or redundant) in the draft?
        </li>
        <li>
          Does the permit draft only include info for that particular use case?
        </li>
      </ul>
      <p class="text-bold">Voice and editorial guidelines </p>
      <ul>
        <li>
          Does the permit draft follow our voice, tone, and editorial guidelines?
        </li>
        <li>
          Does the permit draft follow <a href="https://www.plainlanguage.gov/guidelines/">federal plain language guidelines</a>, and adhere to how we typically word specific phrases/terms?
        </li>
        <li>
          Is there any biased language included in the draft?
        </li>
      </ul>
    </p>
  </div>
</div>

## **Uncover strategies that maximize the strengths of both LLMs and humans**

In using the new tech of gen AI, we learned a lot about how to incorporate it appropriately into our work - especially how we managed around its strengths and shortcomings.

Here are the strategies we used to build the Permit Drafter into the team's processes.

### Optimize prompts for consistency

LLMs often give different responses for the same prompt sequence and have occasional hallucinations. To mitigate these, we honed prompts to focus on consistency and to reduce hallucinations (with slightly more weight on consistency), and had users check each permit for any hallucinations (using the audit checklist shared above).

Ensuring a consistent response also increased our confidence that the audit checklist would be relevant and useful for the gen AI drafts because we had a crisp and reliable idea of what to expect in those LLM-created drafts.

### Use the LLM for turning research materials into the first draft (not the final)

During testing, the LLM generated a great first draft in terms of translating raw materials into a structured format and categorizing information correctly. However, it struggled to turn that content into a crisp and focused final draft - something content strategists excel in doing.

Given this shortcoming, we designed a process where the content strategist uses the Permit Drafter to generate the first draft. Then the content strategist edits that draft to hone the content into a final version (and has it reviewed by agency partners).

### Require the LLM to include all relevant information (have a human delete superfluous content)

We also learned that LLMs cannot always determine what's important (and will delete key information), nor can they strategically prioritize content. If the LLM included all possible information, users could easily audit the draft for completeness and accuracy.

Then, they could quickly edit the content down, prioritize key information, remove redundant instructions, and shape the final draft.

### Test multiple LLM models to identify the right one

We had access to two different models, which were configured slightly differently. As the team tested with each, the outputs varied more than we anticipated. With access to both, we were able to choose one that best matched what we needed for the final product.

The Permit Drafter is just one successful tool for how gen AI can assist state employees in their jobs, and ensure business owners get the key information they need faster. To learn more about the impact of [business.nj.gov](http://business.nj.gov), read the [recent Impact Report](https://business.nj.gov/page/impactreport). To learn more about gen AI, the NJ Office of Innovation has [shared gen AI how-to guides and other gen AI resources](https://innovation.nj.gov/skills/ai-how-tos/).

_Author's note: Thank you to amazing project teammates: Dan Hinze, Spencer Wohlers, Regina Lam, Kirsty Carrihill-Knoll and Micah Castelo_
