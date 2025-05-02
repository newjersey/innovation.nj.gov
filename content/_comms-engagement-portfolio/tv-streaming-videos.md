---
title: TV/Streaming Videos
order: 2
---

Our videos are developed based on insights into our audience’s motivations and aspirations. The videos feature real residents, putting them in control of their journey and validating the progress they have made. This approach works to be inspiring, aspirational, and activating.

{% assign tvStreamingItems = site.data.cePortfolioMedia | where_exp: "item", "item.group == 'tv-streaming'" | sort: "title" %}
{% include simple-card.html items=tvStreamingItems colwidth=6 %}
