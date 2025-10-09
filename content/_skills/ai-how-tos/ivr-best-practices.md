---
title: Human-Centered IVR Design — Best Practices and Examples
permalink: /skills/ai-how-tos/ivr-best-practices
menu-group: "Generative AI How-to Guides"
---

This guide provides a list of best practices and examples for creating a human-centered interactive voice response (IVR) menu for your contact center.

## Who This Is For

This guide is for government employees, program leaders, and contact center managers who want to design IVR (phone menu) systems that build trust with the public, increase efficiency, and create a more human experience in public-sector contact centers.

This guide offers practical advice based on:

- Real-world user testing and data
- Insights from contact center professionals across New Jersey
- Lessons learned from working with callers who are navigating critical services

Too often, IVRs feel adversarial — as if they’re designed to keep people out rather than help them. That drives callers to look for shortcuts (like pressing “0” or choosing “Other”) instead of selecting the right call path, which can delay support or overwhelm agents.

This guide helps flip that dynamic by showing how thoughtful IVR design can:

- Reduce caller frustration
- Make it easier for people to get answers on their own
- Ensure the right calls get to the right agents

## Menu Best Practices

### Keep it simple:

- **Limit each menu to 5 options if possible.** Users can only remember a limited number of options in their heads. If you have 9 menu items, it can take up to a minute to listen to them all. Users often forget earlier options and will be forced to repeat the menu or randomly select an option out of frustration.

- **Limit the number of sub-menus.** If menus become too complicated, users stop trying to select the option that best represents their issue and, instead, try to figure out the quickest path to reaching an agent, often resorting to spamming zero. Each menu should capture critical information to route users to the right place and/or address common, high-volume self-service questions. Anything else should be removed.

- **Keep flows linear.** Every step in the IVR should advance a caller towards speaking to a knowledgeable agent. For example, if a self-service attempt fails, users should be directed to speak with an agent, rather than being sent back to navigate the menu. If the user doesn’t see an option that represents their issue, there should be an option for “all other issues.” The audio-only nature of IVRs makes them difficult to navigate, and users quickly feel like they’re in a maze, trying to find the few paths that lead to an agent. It’s incredibly frustrating for users, leading them to bypass opportunities to quickly resolve their questions and route to agents who aren’t able to help them.

### Speak in terms the resident understands:

- **Don’t use jargon or internal terms to set menu items.** The goal of the IVR is to accurately understand the reason for the call and direct users to the appropriate agent or resources to resolve their issue quickly. When we use terms that the user is unfamiliar with, callers may make random selections, which reduces their ability to get a quick answer and limits the efficiency and effectiveness of the IVR.

### Be strategic with self-serve options:

- **Don’t try to self-serve everything that can be self-served.** Identify common, high volume questions that have a high likelihood of easily being self-served, either because the agency has a good understanding of those questions (i.e. an agent is likely to give a standard answer from a script), or you have well tested content or support that addresses the issue (i.e. claim status checking tool, video about the application process, etc). If every menu item has a lengthy string of messages after it or if there are too many options, users stop listening and start trying to find the options that will get them to an agent the fastest.

- **After a self-serve attempt, direct users to an agent**. Do not try multiple times to address users’ questions using self-serve. This can trap users in IVR loops or long menu branches, which lead to user frustration.

- **Don’t answer a question a user hasn’t asked.** It’s tempting to broadcast answers or requests to all users in the system, but users often lack the context to understand those instructions at that time. If there’s a strong rationale for playing a message to a user, make sure it’s clear why the user is getting this message, how it relates to their current call, and ensure it’s in the proper place in the flow.

  **Example:** a user is entering the IVR for the first time, and is trying to determine which option will address their issue for their claim status:

  **DON’T** broadcast a message about getting papers ready to speak with an agent or how to request tax forms at the top of the first IVR menu or welcome message.

  **DO** have an option for tax forms during tax season when question volume increases and play self-serve there.

  **DO** play reminders about having important documents on hand during transfer messages or when users are waiting on hold in the queue.

## Example IVR Flow - TDI-FLI

Drafted by Jennifer Mahlstedt, NJDOL

### Language Selection 

**Path**: _Language Selection_ → _Main Menu_

<figure style="margin:0;margin-block:1.33em">
  <figcaption><strong>Menu Prompt</strong></figcaption>
  <div class="usa-alert usa-alert--info usa-alert--no-icon">
    <div class="usa-alert__body">
      <blockquote style="margin:0;">
        <p class="usa-alert__text text-italic">
          Thanks for calling New Jersey’s Temporary Disability and Family Leave Insurance Line.
        <ol>
          <li class="text-italic">
            For English, press 1.
          </li>
          <li class="text-italic">
            Para español, presione 2.
          </li>
        </ol>
        </p>
      </blockquote>
    </div>
  </div>
</figure>

### Main Menu 

**Path**: _Language Selection_ → _Main Menu_

<figure style="margin:0;margin-block:1.33em">
  <figcaption><strong>Menu Prompt</strong></figcaption>
  <div class="usa-alert usa-alert--info usa-alert--no-icon">
    <div class="usa-alert__body">
        <blockquote style="margin:0;">
          <p class="usa-alert__text text-italic">
          Thanks for calling New Jersey’s Temporary Disability and Family Leave Insurance Line.
          <ol>
            <li class="text-italic">
              If you’re a worker applying for benefits, press 1.
            </li>
            <li class="text-italic">
              For employers and healthcare professionals, press 2.
            </li>
            <li class="text-italic">
              To hear these options again, press star.
            </li>
          </ol>
        </p>
      </blockquote>
    </div>
  </div>
</figure>

### Persona Selection Menu 

**Path**: _Language Selection_ → _Main Menu; Press 1_ → _Persona Selection Menu_

<figure style="margin:0;margin-block:1.33em">
  <figcaption><strong>Menu Prompt</strong></figcaption>
  <div class="usa-alert usa-alert--info usa-alert--no-icon">
    <div class="usa-alert__body">
      <blockquote style="margin:0;">
        <p class="usa-alert__text text-italic">
          Choose the option that best describes your leave: 
          <ol>
            <li class="text-italic">
              If you’re pregnant or recently delivered a baby, press 1.
            </li>
            <li class="text-italic">
              All other new parents including fathers, partners, adoptive and foster, press 2
            </li>
            <li class="text-italic">
              If you’re recovering from illness, injury or surgery, press 3.
            </li>
            <li class="text-italic">
              If you’re caring for an ill or injured loved one, press 4.
            </li>
            <li class="text-italic">
              If none of these scenarios fit your current situation, press 5.
            </li>
            <li class="text-italic">
              To hear these options again, press star.
            </li>
          </ol>
        </p>
      </blockquote>
    </div>
  </div>
</figure>

### Employer/Provider Selection Menu 

**Path**: _Language Selection → Main Menu; Press 2 → Employer Provider Menu_

<figure style="margin:0;margin-block:1.33em">
  <figcaption><strong>Menu Prompt</strong></figcaption>
  <div class="usa-alert usa-alert--info usa-alert--no-icon">
    <div class="usa-alert__body">
      <blockquote style="margin:0;">
        <p class="usa-alert__text text-italic">
          Please select from the following options: 
        <ol>
          <li class="text-italic">
            For employers, press 1.
          </li>
          <li class="text-italic">
            For healthcare professionals, press 2.
          </li>
          <li class="text-italic">
            To hear these options again, press star.
          </li>
        </ol>
        </p>
      </blockquote>
    </div>
  </div>
</figure>

### Claimant Call Reason Menu 

**Path**: _Language Selection → Main Menu; Press 1 → Worker Menu; Press 1 → Persona Selection Menu_

<figure style="margin:0;margin-block:1.33em">
  <figcaption><strong>Menu Prompt</strong></figcaption>
  <div class="usa-alert usa-alert--info usa-alert--no-icon">
    <div class="usa-alert__body">
      <blockquote style="margin:0;">
        <p class="usa-alert__text text-italic">
          Before we connect you to an agent, please choose the reason for your call.
          <ol>
            <li class="text-italic">
            To check your claim status, press 1.
              <ul>
                <li>While you wait for an agent, would you like to receive a text message with helpful links about claim status? If yes, press 1. Otherwise, stay on the line and you’ll be transferred to an agent. To hear this message again, press star.</li>
              </ul>
            </li>
            <li class="text-italic">
              For help with your application, press 2.  
              <ul>
                <li>While you wait for an agent, would you like to receive a text message with additional help with your application? If yes, press 1. Otherwise, stay on the line and you’ll be transferred to an agent. To hear this message again, press star.</li>
              </ul>
            </li>
            <li class="text-italic">
              For login support, like resetting your password, press 3. 
              <ul>
                <li>While you wait for an agent, would you like to receive a text message with a link to reset your password? If yes, press 1. Otherwise, stay on the line and you’ll be transferred to an agent. To hear this message again, press star.</li>
              </ul>
            </li>
            <li class="text-italic">
              To extend or end your claim, press 4.
            </li>
            <li class="text-italic">
              For payment or debit card issues, press 5.
            </li>
            <li class="text-italic">
              For all other questions, press 6.
            </li>
            <li class="text-italic">
              To hear these options again, press star.
            </li>
          </ol>
        </p>
      </blockquote>
    </div>
  </div>
</figure>

### SMS Message Text

<div class="usa-alert usa-alert--info usa-alert--no-icon">
  <div class="usa-alert__body">
    <blockquote style="margin:0;">
      <p class="usa-alert__text text-italic">
        <ul>
          <li class="text-italic">
            Claim Status – NJ Dept of Labor: Click the link below to check the status of your claim and what to expect based on your status. <a href="https://www.nj.gov/labor/myleavebenefits/worker/resources/claims-status.shtml#checkStatus">https://www.nj.gov/labor/myleavebenefits/worker/resources/claims-status.shtml#checkStatus</a>
          </li>
          <li class="text-italic">
            Help with Application – NJ Dept of Labor: Click the link below for a step-by-step walkthrough of the online applications and helpful tips along the way. <a href="https://www.nj.gov/labor/myleavebenefits/worker/resources/applicationvideos.shtml">https://www.nj.gov/labor/myleavebenefits/worker/resources/applicationvideos.shtml</a>
          </li>
          <li class="text-italic">
            Login Support – NJ Dept of Labor: Click the link below to reset your online password. <a href="https://secure.dol.state.nj.us/sso/XUI/?realm=tdi#passwordReset/">https://secure.dol.state.nj.us/sso/XUI/?realm=tdi#passwordReset</a>
          </li>
        </ul>
      </p>
    </blockquote>
  </div>
</div>

### Employer Call Reason Menu 

**Path**: _Language Selection → Main Menu; Press 1 → Employer/Provider Menu; Press 1 → Employer Call Reason Menu_

<figure style="margin:0;margin-block:1.33em">
  <figcaption><strong>Menu Prompt</strong></figcaption>
  <div class="usa-alert usa-alert--info usa-alert--no-icon">
    <div class="usa-alert__body">
      <blockquote style="margin:0;">
        <p class="usa-alert__text text-italic">
          For employers, select from the following options
        <ol>
          <li class="text-italic">
            To report fraud or benefits incorrectly paid to your employee, press 1.
          </li>
          <li class="text-italic">
            For questions about a form you received, press 2. 
          </li>
          <li class="text-italic">
            For questions about a private insurance plan, press 3. 
            <ul>
              <li>The best way to contact our Private Plan unit is to send an email to ppins@dol.nj.gov. We’ll provide an email response as soon as possible.</li>
            </ul>
          </li>
          <li class="text-italic">
            For all other questions, press 4. 
          </li>
          <li class="text-italic">
            To hear these options again, press star.
          </li>
        </ol>
        </p>
      </blockquote>
    </div>
  </div>
</figure>

### Healthcare Professional Call Reason Menu 

**Path** _Language Selection → Main Menu; Press 1 → Employer/Provider Menu; Press 2 → Healthcare Professional Call Reason Menu_

<figure style="margin:0;margin-block:1.33em">
  <figcaption><strong>Menu Prompt</strong></figcaption>
  <div class="usa-alert usa-alert--info usa-alert--no-icon">
    <div class="usa-alert__body">
      <blockquote style="margin:0;">
        <p class="usa-alert__text text-italic">
           For Healthcare Professionals, select from the following options.
          <ol>
            <li class="text-italic">
              For our mailing address and fax number, press 1. 
              <ul>
                <li>Correspondence can be faxed to 609-984-4138, or mailed to the Division of Temporary Disability and Family Leave Insurance PO Box 387 Trenton, New Jersey 08625-0387.</li>
                <li>To hear this message again, press star.</li>
                <li>To return to the previous menu, press 1.</li>
              </ul>
            </li>
            <li class="text-italic">
              For help completing a medical certification, press 2.
            </li>
            <li class="text-italic">
              For all other questions or issues, press 3.
            </li>
            <li class="text-italic">
              To hear these options again, press star.
            </li>
          </ol>
        </p>
      </blockquote>
    </div>
  </div>
</figure>

_For questions on this guide, contact [joe@innovation.nj.gov](mailto:joe@innovation.nj.gov)._
