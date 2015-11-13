---
layout: post
title:  "Development: Re implementing phpFortune. Part 1: the plan."
date:   2015-11-13 18:30:00
categories: development php mysql phpfortune
tags: fortune cookie development php mysql databases
---

##phpFortune

phpFortune was one of the first apps I did using PHP and MySQL. It was my intention to learn about the almighty PHP and I though the project was small enough to keep my sanity trying to keep track of everything but also big and extensible enough, in case I would like to add new features in the future. While I found it really useful to develop it, it is time for me to retake and undust some old PHP and even if I could really likely work on my old code to make some changes and improve phpFortune, I've decided to re implement the whole application into a phpFortune 2.0. The reason for this decision is that I'd like to use this exercise to try a more administrative approach to development. I'll try to design and document the project by stages and hopefully it will be a good example to compare it in the future with more sophisticated and better engineered projects.

##Goal
It is quite simple: phpFortune is a simple application that queries a quotes database and returns a quote. I found a set of quotes of the kind "QUOTE - AUTHOR" which was quite easy to put in my own database. From there it was quite straightforward: establish a connection with the database, get a random quote, and return it to the caller (I'd just actually display it).

This time, while the goal of the application will be similar, we will plan the app with some characteristics that would make it more useful.

- Divide the application into sensible modules. Hide sensitive information.
- Create a schema representing a quote dividing characteristics from a quote (e.g. author, year, translation, orignal language, etc.).
- Provide a page for adding quotes.
- Provide a page for searching quotes.

For the moment, I don't think there are many more things to add, but if the application is developed smartly, more features should easily  be able to be added in the future.
