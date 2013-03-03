---
layout: page
title: Alex Lewis
tagline: Web Developer

---
{% include JB/setup %}


{% for post in site.posts %}
  <h4>{{ post.title }}</h4>
  {{ post.content }}
{% endfor %}
