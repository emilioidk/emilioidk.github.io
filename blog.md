---
layout: page
title: Blog
permalink: /blog/
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">
        {{ post.date | date: "%b %-d, %Y" }}
        {% for tag in post.tags %}
          {{ tag }}
        {% endfor %}
      </span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <span class="post-meta">
        {% for category in post.categories %}
          {{ category }}
        {% endfor %}
      </span>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
