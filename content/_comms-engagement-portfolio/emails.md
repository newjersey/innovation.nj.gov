---
title: Emails
order: 7
---

Email is a great way to explain a complex program to people and to “nurture” audiences from interested to activated.

## Higher Ed

{% assign higherEdEmailItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'emails-higher-ed'" | sort: "title" %}
{% include simple-card.html items=higherEdEmailItems colwidth=6 %}

## DirectFile

{% assign directFileEmailItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'emails-direct-file'" | sort: "title" %}
{% include simple-card.html items=directFileEmailItems colwidth=6 %}

