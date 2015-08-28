---
layout: post
title:  "Jekyll posts: Implementing pagination"
date:   2015-08-25 14:30:00
categories: jekyll
tags: posts jekyll pagination
---

##The problem
Jekyll provides a pretty neat posting system in which one doesn't need much to create new blog entries. Jekyll comes by default with a page that lists the blog entries found in the *_post* folder (as long as they were formatted properly). As a blog grows bigger and bigger, the list of entries can get quite long and, from a design point of view, this can drive to a design failure. Therefore we want to have pagination available. <!--more-->

##The solution
We start by noticing that Jekyll provides tools for paginating ass seen in the [Jekyll documentation]. You get a pretty fair tutorial and code for enablig and displaying pagination. I've modified such code to display the excerpt instead of the whole post content. Check out [the raw for blog/index.html].

##A new problem: navigation overcrowding
While the pagination tutorial works like a charm, it brings a small issue with the current way we have of displaying the navigation menu. The problem is that we are forming the menu using the following code

{% highlight html %}
{% raw %}
<div class="trigger">
  {% for page in site.pages %}
    {% if page.title %}
        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
    {% endif %}
  {% endfor %}
</div>
{% endraw %}
{% endhighlight %}

##A solution to the new problem
Initially that's a fine code but the issue is that pagination will create a items in *sites.pages* as for example *blog/page2* and *blog/page3*. This is, the navigation menu will show one *Blog* item in the navigation menu for every page of pagination there is. The following solution was thought while having in mind 2 points:

1. There will be a blog, there will be entries in it, and every blog page will have title **Blog**
2. The blog first page will be available at {% raw %}{{ site.url }}/blog {% endraw %}

{% highlight html %}
{% raw %}
<div class="trigger">
  {% for page in site.pages %}
    {% if page.title %}
      {% if page.title != "Blog" %}
        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
      {% endif %}
    {% endif %}
  {% endfor %}
  <a class="page-link" href="/blog/{{ prepend: site.url }}">Blog</a>
</div>
{% endraw %}
{% endhighlight %}

> EDIT: While I like generalizing code and making it as abstract as possible, I realized that the code looks smoother and nicer when just manually creating the navingation anyways. As the items from the navigation menu are relative, I don't need to have much in mind, just list the items I want to place.

[Jekyll documentation]: http://jekyllrb.com/docs/variables/
[the raw for blog/index.html]: https://github.com/emiliolcc/emiliolcc.github.io/raw/master/blog/index.html
