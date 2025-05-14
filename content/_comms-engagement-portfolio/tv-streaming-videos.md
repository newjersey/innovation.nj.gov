---
title: TV/Streaming Videos
order: 2
---

Our videos are developed based on insights into our audience’s motivations and aspirations. The videos feature real residents, putting them in control of their journey and validating the progress they have made. This approach works to be inspiring, aspirational, and activating.

## Higher Ed
{% assign tvStreamingItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'tv-streaming-higher-ed'" | sort: "title" %}
{% include simple-card.html items=tvStreamingItems colwidth=6 %}

## Business.NJ.gov
{% assign tvStreamingItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'tv-streaming-business'" | sort: "title" %}
{% include simple-card.html items=tvStreamingItems colwidth=6 %}

## Business.NJ.gov Spanish-speaking business owners
{% assign tvStreamingItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'tv-streaming-business-spanish'" | sort: "title" %}
{% include simple-card.html items=tvStreamingItems colwidth=6 %}

## Some College No Degree
{% assign tvStreamingItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'tv-streaming-some-college'" | sort: "title" %}
{% include simple-card.html items=tvStreamingItems colwidth=6 %}

## My Career NJ
{% assign tvStreamingItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'tv-streaming-my-career'" | sort: "title" %}
{% include simple-card.html items=tvStreamingItems colwidth=6 %}
