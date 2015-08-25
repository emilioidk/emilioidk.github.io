---
layout: post
title:  "Jekyll: toggling information on click."
date:   2015-08-24 10:30:00
categories: jekyll
tags: gh-pages repository jekyll
---
##The problem

Recently I got to talk with a career and job advisor and he pointed out some things about my current job search. One of the things he mentioned was that sometimes it's impossible for an employer to look at 200 CVs he might get for an opening in his company. Instead, it's a common practice to quickly skip through the CVs to see if there's enough information there to give the CV a better look at. <!--more-->This means it is important to shorten my CV as much as possible without losing relevant information.

##The solution(s)

We came out with two ideas to help ease that initial hover look given to the CV. The first one was to create a new "short" CV in which I display important information but without much details. If the person reading finds it interesting they can refer to my [online CV](http://emilio.lundgaardlopez.com/cv) for more information. Even though this document should relieve the problem a bit, it could still be interesting to shorten, at least visually, the content of my online CV.
For this I'm taking the well known technique of displaying all the main headers (e.g. "Persona details", "Academic experience", etc.) but the actual information will be collapsed. Next to each header there will be an arrow offering to collapse or expand the information.
While using JQuery would be an easy option, we are going to do it using just Javascript and CSS. As I'm using markup to style my page, it's somehow umconfortable to predict the structure of the content. However, we can add content straight in HTML and we will do so to mark properly the data we want to toggle.
Initially, we will also need to change headers in the Markup form to classic HTML. This will provide a more flexible header (as we will see in the solution, we will need to add a class to each header).
The final solution will look something like this:

>**NOTE:** The &#8594 code is the unicode for the arrow &#8594;. Similarly, &#8595 is unicode for &#8595;.

{% highlight html %}
{% raw %}
<h2 id="toggle1" class="toggleInfo">Something <span id="toggle1A">&#8594;</span><h2>
<span id="toggle1" style="display:none;">
  ...
</span>
{% endraw %}
{% endhighlight %}

This will be accompanied by the following script that adds a listner to each of the elements of the class toggleInfo and links the event *click* to a function that does the job og toggling the visibility of the information and chages the direction of the arrow displayed next to the title.


{% highlight javascript%}
<script>
var classname = document.getElementsByClassName("toggleInfo");

var myFunction = function() {
  var info = document.getElementById(this.getAttribute("id") + "I");
  var arrow = document.getElementById(this.getAttribute("id") + "A");

  if(info.style.display != "none")
  {
    info.style.display = "none";
    arrow.innerHTML = "&#8595;"
  }
  else
  {
    info.style.display = "block";
    arrow.innerHTML = "&#8594;"
  }
};

for(var i=0;i<classname.length;i++){
    classname[i].addEventListener('click', myFunction, false);
}
{% endhighlight %}

##A new problem: mixing raw HTML and Markdown properly

While this solution works in certain parts of the CV, it moslty doesn't work. The reason for this is that markdown processes the document and translates

{% highlight html %}
{% raw %}
<span>
  * Item1

  * Item2

  * Item3
</span>
{% endraw %}
{% endhighlight %}


into

{% highlight html %}
<span>
  <ul>
    <li>Item1</li>
  </ul>
</span>
  * Item2
  * Item3  
{% endhighlight %}

insteaf of

{% highlight html %}
<span>
  <ul>
  <li>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
  </ul>
</span>
{% endhighlight %}

##The solution to the new problem

There is probably a more sophisticated solution out there but what I found faster and simpler was to:

1. Use Markdown to style and format the document as wanted
2. Open the processed document in a browser.
3. Copy the processed HTML
4. Insert it in the pre-processed .md file inside a *div*. The Markdown processor will not format anything inside a div and will display it as is.
