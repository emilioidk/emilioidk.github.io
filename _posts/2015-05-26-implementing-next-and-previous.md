---
layout: post
title:  "Jekyll: Implementing Previous post and Next post"
date:   2015-05-26 11:53:00
categories: jekyll
tags: jeyll previous next post
---
## The problem

**Jekyll** handles blogging quite well so I don't really need to worry about routing the posts or publish them at all. However there is a small things that most blogs provide automatically that is normally quite useful. This is when at the end of a post there appears a link to the _previous post_ and one to the _next post_. <!--more-->

## The solution

Fortunately, **Jekyll** does provide a way of know if there are such things as previous and next post, as well as provides access to its url. The following code was added to the _post_ layout:

{% highlight html %}
{% raw %}
<div class="post">
  <div id="previousPost" style="float:left;width:50%;">
    {%if page.previous %}
      <a href="{{ site.url }}{{ site.baseurl }}{{ page.previous.url }}">Prev: {{ page.previous.title }}</a>
    {% endif %}
  </div>
  <div id="nextPost" style="float:right;width:50%;">
    {%if page.next %}
      <a href="{{ site.url }}{{ site.baseurl }}{{ page.next.url }}">Next: {{ page.next.title }}</a>
    {% endif %}
  </div>
</div>
{% endraw %}
{% endhighlight %}
