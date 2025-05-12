---
title: Social
order: 3
---

Social media is one of the best places to activate residents. Our ads work hard to break through the clutter and grab our audience’s attention, with a strong “call to action” to get them to click.

## Business.NJ.gov Paid Social Videos (English)

{% assign socialBusinessItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-business'" | sort: "title" %}
{% include simple-card.html items=socialBusinessItems colwidth=6 %}

## Some College No Degree Paid Social Videos (English)

{% assign socialSomeCollegeItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-some-college'" | sort: "title" %}
{% include simple-card.html items=socialSomeCollegeItems colwidth=6 %}

## Higher Ed Paid Social Videos (English)

{% assign socialHigherEdItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-higher-ed'" | sort: "title" %}
{% include simple-card.html items=socialHigherEdItems colwidth=6 %}

## Direct File (English)
{% assign socialDfEngishItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-df-english'" | sort: "title" %}
{% include simple-card.html items=socialDfEngishItems colwidth=6 %}

## Direct File (Spanish)

{% assign socialDfSpanishItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-df-spanish'" | sort: "title" %}
{% include simple-card.html items=socialDfSpanishItems colwidth=6 %}
