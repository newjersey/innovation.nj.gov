---
title: Social
order: 3
---

Social media is one of the best places to activate residents. Our ads work hard to break through the clutter and grab our audience’s attention, with a strong “call to action” to get them to click.

## Business.NJ.gov

{% assign socialBusinessItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-business'" | sort: "title" %}
{% include simple-card.html items=socialBusinessItems colwidth=6 %}

## Some College No Degree

{% assign socialSomeCollegeItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-some-college'" | sort: "title" %}
{% include simple-card.html items=socialSomeCollegeItems colwidth=6 %}

## Higher Ed

{% assign socialHigherEdItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-higher-ed'" | sort: "title" %}
{% include simple-card.html items=socialHigherEdItems colwidth=6 %}

## My Career NJ
{% assign socialMyCareerItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-my-career'" %}
{% include simple-card.html items=socialMyCareerItems colwidth=6 %}

## Direct File
{% assign socialDfItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'social-df'" %}
{% include simple-card.html items=socialDfItems colwidth=6 %}
