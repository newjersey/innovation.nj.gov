---
title: Photography
order: 6
---

At every video shoot, the featured residents are photographed for use across all non-video assets. This gives our creative assets a consistent look and feel and helps reinforce the program’s message.

## Business.NJ.gov Original Campaign

{% assign businessOriginalItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'photo-business-original'" | sort: "title" %}
{% include simple-card.html items=businessOriginalItems colwidth=6 %}

## Business.NJ.gov Spanish-speaking Business Owners Campaign


{% assign businessHispanicItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'photo-business-hispanic'" | sort: "title" %}
{% include simple-card.html items=businessHispanicItems colwidth=6 %}

## Some College No Degree


{% assign someCollegeItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'photo-some-college'" | sort: "title" %}
{% include simple-card.html items=someCollegeItems colwidth=6 %}

## Higher Ed Campaign


{% assign higherEdItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'photo-higher-ed'" | sort: "title" %}
{% include simple-card.html items=higherEdItems colwidth=6 %}
