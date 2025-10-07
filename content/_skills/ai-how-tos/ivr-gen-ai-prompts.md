---
title: GenAI Prompt Toolkit for Designing Government Call Center Menus
permalink: /skills/ai-how-tos/ivr-gen-ai-prompts
menu-group: "Generative AI How-to Guides"
---

This guide walks government staff through using GenAI (like ChatGPT or NJ’s AI Assistant) to create effective, user-friendly IVR (phone menu) scripts for public programs.

Written by Joseph DeLaTorre and Jessica Lax

## Who This Is For

This toolkit is for **non-technical and technical government staff** working on **call center interactive voice response (IVR) system design**. It can help you:

- Generate a first draft of a call center menu that callers will hear
- Incorporate changes based on real data from FAQs or call stats
- Evaluate and improve a menu or menu draft
- Move toward an optimized menu script that will enhance your customer experience

## Using GenAI Responsibly

In general, consider GenAI to be like a smart but inexperienced intern — helpful, but you’re still the expert. You can’t be certain if the work is accurate or shared in confidence, but AI can be an invaluable thought partner and writer.

## Do’s and Don’ts of genAI

### Do

- Review everything AI produces before using it.

- Iterate or give feedback to AI if you don’t like the output

- Be direct: GenAI works best with clear, simple instructions

- Give AI examples of what you do or don’t want

### Don’t

- Share users’ personal information

- Share private information or internal documents

- Assume the AI is accurate

- Use vague requests like “make it better” – Instead tell AI how to make it better

## Step 1: Create the First IVR Menu Draft

Follow this prompt guidance to create a simple, human-centered menu that avoids jargon and helps callers quickly get what they need. This prompt provides an initial version to build upon in later prompts.

### Prompt Structure:

1. Assign the AI a role: Who is it pretending to be
2. Provide context on the task and relevant background info
3. Be clear about what you want the output to achieve
4. Explain what the output should look like

### A Prompt for Creating the Initial IVR Menu Structure:

You are an expert in human-centered menu design for government call centers.

You're building an IVR menu for New Jersey’s _[insert program name]_ support line. Follow these best practices:

- Limit options to 5 or fewer
- Use plain language (6th grade level)
- Include self-service if possible (with SMS links)
- Reduce sub-menus
- Route calls clearly
- Allows users to replay the message by pressing star

Your output should include:

- Each main menu option (with number/title)
- What happens when that option is selected
- The spoken prompt users will hear
- Any self-service or SMS message text

Review the attached best practices design guide for examples and additional best practices.

## Step 2: Iterate Using Real Data

Once you have a draft, refine it using any data you have such as websites, call data, agent scripts, and more. By incorporating data such as websites, PDFs, FAQs, call flows, call reasons, agent scripts, and transcripts, AI can create more data-driven guidance on menus. After you have started with the initial prompt offered above, you can add any of the following prompts when attaching additional data or links.

### Prompt Structure

For each prompt, explain what the document is, what type of information it provides, and how that information can be leveraged to inform the next menu iteration.

### If you have FAQs, a website, or PDFs:

Use _[insert document name or content]_ to identify top caller issues and find opportunities for self-service. Update the menu to reflect this.

**Note**: The NJ AI Assistant cannot currently review websites; however, this feature will be available in the future. For now, you can copy website content into a Word document and upload that as a reference.

### If you have an old call menu:

The attached call menu is _[describe issue: too complex, confusing, etc.]_. Use best practices shared earlier to redesign a simpler version with better routing and less user friction.

### If you have call reason data or analytics:

Use this data on top call reasons and common issues to update the menu to address top user needs better and include high-volume self-service options where possible.

### If you have agent scripts:

These agent scripts show how agents solve user problems. Use them to suggest IVR menu options and self-service prompts that can resolve common questions instead of forcing a caller to wait for an agent's assistance.

### If you have call transcripts:

These are real call transcripts between users and contact center agents. Please analyze them to:

1. Identify the most frequent call reasons based on repeated questions and themes.
2. Rewrite those call reasons in plain language that reflects how users actually speak.
3. For each frequent, generalizable question, provide a brief self-service answer that could be included in the IVR or sent via SMS. Use this information to update or recommend an improved IVR menu that:

- Focuses on the most common user needs
- Uses user-friendly language
- Reduces agent load through self-service where possible

## Step 3: Improve Language or Coverage

Refine the menu by focusing on the areas that need the most improvement.

### For more user-friendly language:

Rewrite the menu options in plain language at a 6th-grade reading level using language commonly used by callers. _[if available, ask the AI Assistant to reference transcripts to understand user-centric language]_

### To add a missing but essential call reason (SME-driven):

As the subject matter expert, I know we get a lot of questions about [insert call reason or topic], [if self-servable, “we typically tell users” add current answer to address the issue]

Please add this call reason to the IVR menu by:

1. Writing the menu option in plain, user-friendly language.
2. Explaining what happens when users select it (e.g., routed to an agent, or a self-service option).
3. If an answer is provided, add a short self-service answer or link that could be played or sent via SMS to quickly resolve the issue without the caller needing to wait for an agent.

## Step 4: Evaluate the Draft

The AI draft doesn’t need to be perfect. Use this quick checklist and scoring guide to assess whether your draft is working.

### First: Review the Overall Menu

Start by checking the menu against the IVR Best Practices:

- No more than 5 menu options
- Limited number of or no submenus
- All paths can lead to an agent (No dead ends sending you back to previous menus)
- Self-service is available where appropriate

If the menu doesn’t meet these criteria, you can either adjust the AI prompt or manually make changes.

### Second: Rate Each Menu Option

Evaluate each menu option on a scale of 1 to 5:

- 1 = Low Quality
- 5 = High Quality

Consider the following:

1. (Clarity) Is the language clear and easy to understand?
2. (Top Call Reason) Is it a common issue?
3. (Routing) Is it essential for routing to the right department or agent? 4\. (Self-Service) Can it be solved more quickly with a standard self-service answer?

A menu option that scores **4 or 5 on clarity** and scores a **4 or 5 on at least one other criterion** is a strong candidate to keep. Depending on your ratings, you can refine the AI prompt or manually improve the menu.

## Step 5: Move to a Final Document

GenAI is great for generating drafts, but don’t spend too long tweaking copy with AI. Move to a document you can share and collaborate with colleagues when:

- The structure of the menu meets the criteria listed above, and you only have minor language and ranking tweaks
- The menu is ready for stakeholder feedback or approval
- The menu copy needs to be finalized and/or handed off to your technical team

## Step 6: Maintain & Improve Over Time

Creating a human-centered IVR menu is not a one-time task — it should evolve based on real usage patterns, expected changes in type or volume of questions (seasonal issues), permanent program changes and new legislation, launch of new digital tools, etc. After launching your menu, plan for regular review and iteration. Here’s how:

### Use Data to Evaluate Performance

#### Track Selection Rates:

Monitor the number of callers who select each menu option. Options with consistently low usage may be confusing, unnecessary, or poorly named.

#### Watch the “Other” Bucket:

A high volume of callers choosing “Other” is a red flag. It often means:

- The listed options don’t cover their issue (coverage gap).
- The wording is unclear or too complex
- Callers are shortcutting to an agent to avoid frustration (often caused by long or complicated menus)

### Modify with Purpose

#### Remove or Replace Low-Usage Options:

If an option is rarely used and not mission-critical, consider removing it or replacing it with a more relevant one.

#### Refine Language:

Use caller-friendly words, not internal program names. Shorten long prompts that overwhelm or confuse users.

#### Consolidate Menus:

Avoid deep submenus unless absolutely necessary. Simpler menus lead to faster resolution.

### When to Revisit the Menu

- Every 2–4 months, (1-2 months post-launch)
- Whenever a new service or policy is changed, introduced, or publicly discussed/debated
- Before and after season spikes (Tax Season, application period opens, applications closed)
- If support teams notice repeated confusion or misrouted calls

_For questions on this guide, contact jessica@innovation.nj.gov and joe@innovation.nj.gov._
