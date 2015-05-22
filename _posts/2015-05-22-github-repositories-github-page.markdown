---
layout: post
title:  "GitHub Pages: recognizing GitHub hosted pages in repositories"
date:   2015-05-22 16:58:22
categories: github
tags: gh-pages repository jekyll
---
## The problem
When hosted my page in GitHub Pages I found that I get access to an API with the information about my github user. This is very useful as I can for example list all my public repositories, and provide a link to them so visitor can check out my _attemps_ to develop. The easiest way to list them was provided by the documentation of [GitHub Pages] itself:

{% highlight ruby %}
{% raw %}
<ul>
{% for repository in site.github.public_repositories %}
  <li> <a href="{{ repository.html_url }}">{{ repository.name }}</a></li>
{% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

The problem with this code is that *respository.html_url* doesn't take into account whether the repository has a GitHub Page set up. To check whether there is a page or not we need to check if there is a branch for the project called _gh-pages_. One way of doing this is assigning the *html_url* before starting to cycle through the branches. If a brach named _gh-pages_ apperas, change the address of the link to the GitHub Page. the final code is:

{% highlight ruby %}
{% raw %}
<ul>
{% for repository in site.github.public_repositories %}
  {% assign link_url = {{ repository.html_url }} %}
  {% for branch in respository.branches_url %}
    {% if branch.name == "gh-pages" %}
      {% assign link_url = {{ site.url }}/{{ repository.name }}%}
    {% endif %}
  {% endfor %}
  <li> <a href="{{ link_url }}">{{ repository.name }}</a></li>
{% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

[GitHub Pages]: https://pages.github.com
