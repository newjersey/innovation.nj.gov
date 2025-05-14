---
title: Out Of Home
order: 5
---

Billboards, transit ads, and outdoor digital displays reach a lot of people with a high-impact format. We always try to include a QR code (except for ads that appear on highways) to increase the “call to action”—so audiences are able to respond immediately and to allow us to track the impact of these units.

## DirectFile
{% assign outOfHomeItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'out-of-home-direct-file'" | sort: "title" %}
{% include simple-card.html items=outOfHomeItems colwidth=6 %}

## Higher Ed
{% assign outOfHomeItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'out-of-home-higher-ed'" | sort: "title" %}
{% include simple-card.html items=outOfHomeItems colwidth=6 %}

## Summer EBT
{% assign outOfHomeItems = site.data.ce-portfolio-media | where_exp: "item", "item.group == 'out-of-home-summer-ebt'" | sort: "title" %}
{% include simple-card.html items=outOfHomeItems colwidth=6 %}
