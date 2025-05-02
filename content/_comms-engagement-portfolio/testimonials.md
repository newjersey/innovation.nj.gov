---
title: Testimonials
order: 4
---

There is no better way to tell your story than to have residents do the storytelling for you. We  film real residents who are featured in our ads as they share their own personal experiences with State programs. These testimonials are used on State websites, as well as utilized to create ads to run in paid media campaigns.

{% assign testominialsItems = site.data.cePortfolioMedia | where_exp: "item", "item.group == 'testimonials'" | sort: "title" %}
{% include simple-card.html items=testominialsItems colwidth=6 %}
