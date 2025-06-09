---
title: Work With Us
permalink: /join/
layout: page
---

## Join Our Team

The New Jersey State Office of Innovation is looking for team members that are eager to tackle urgent, complex challenges and make an impact at scale. Our work improves the lives of New Jerseyans by solving problems differently - we use modern technologies and best practices from the public and private sector to transform government.

Our [team members](https://innovation.nj.gov/about/team/our-team/) are talented, experienced, and dedicated to making a positive difference.

Are you motivated to modernize benefit programs to enable agencies to efficiently serve millions of New Jerseyans? Our [Unemployment Insurance modernization work](https://innovation.nj.gov/projects/ui-application-redesign/) has reduced the median time it takes to complete an application to less than 28 minutes – down from nearly 4 hours on average.

Do you want to build new tools that help residents access benefits? More than 100,000 expecting parents in New Jersey have used the [Maternity Coverage Timeline Tool](https://innovation.nj.gov/projects/maternity-coverage-tool/) to help identify what benefits they can access and when.

Are you excited about serving Garden State businesses and aspiring entrepreneurs through the creation of a modernized and centralized customer service experience? [Business.NJ.gov](https://innovation.nj.gov/projects/business-nj-gov/) has served more than 4 million people, and facilitated the creation of tens of thousands of businesses.

At the Office of Innovation, we use data-driven, agile, and human-centered design practices to make an impact across issue and policy areas. We embed with our partners and work rapidly to identify, test, and deploy solutions that help New Jerseyans.

If you are interested in becoming a part of the team, explore current openings below or feel free to contact us with any questions at [team@innovation.nj.gov](mailto:team@innovation.nj.gov).

{% if site.join and site.join.size > 0 %}

### Job Opportunities

{% for job in site.join %}

- [{{job.title}}]({{job.url}})
  {% endfor %}
  {% endif %}

We regularly add new roles, so check back in a few weeks for new opportunities or submit a [general interest application](https://innovation.nj.gov/join/general-interest/).

### The New Jersey Office of Innovation is proud to be an equal opportunity employer

{: .maxw-mobile-lg}
We are deeply committed to the principles of equity, diversity, and inclusiveness and seek to create a pluralistic community for all.

We strongly encourage people of color, members of racial and ethnic minority groups, women, LGBTQI+ people, those with disabilities, and Veterans to apply. We are committed to building a team that is reflective of New Jersey’s incredible diversity.

We do not discriminate against any candidate because of color, race, age, religion, sex, gender identity or expression, sexual orientation, membership in an employee organization, pregnancy, marital status, status as a parent, ancestry, national origin, disability (physical or mental), family medical history or genetic information, political affiliation, military service, retaliation, or other non-merit based factors.

### Eligibility

You must be authorized to work in the United States. Candidates may be required to pass a background check and complete additional steps as part of the application and onboarding process. You will be considered an “at-will” employee, meaning both employer and employee have the right to terminate employment with or without cause or notice.

## Contracting Opportunities

The Office of Innovation occasionally posts procurement opportunities to support our efforts to improve the lives of New Jerseyans by modernizing how the State delivers programs, policies, and services. Open opportunities, when available, will be listed below.

### Current Solicitations

{% if site.data.contract-solicitations and site.data.contract-solicitations.size > 0 %}
{% for rfp in site.data.contract-solicitations %}

- [{{rfp.title}}]({{rfp.url}})
  {% for rfpUpdate in rfp.updates %}
  - [{{rfpUpdate.title}}]({{rfpUpdate.url}})
    {% endfor %}

{% endfor %}
{% else %}
There are no open requests at this time.
{% endif %}

### Other Contracting Opportunities with the State of New Jersey

For more information about how to find opportunities to do business with the State, please visit [Business.NJ.gov](https://business.nj.gov/pages/government-contracting) or visit the website of individual State agencies.
