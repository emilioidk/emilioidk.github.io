---
layout: portfolio
title:  "The Restaurant's Logo"
img: "/assets/TRL.png"
miniimg: "/assets/TRLmini.png"
status: "online"
link: "http://emilio.lundgaardlopez.com/TRL-Single-Page/"
characteristics: "Gimp, frontend, NodeJS, bower, grunt, jade, sass, PureCSS, responsiveness, git, backend, WordPress"
---

As practice, I made a web development project. I tried to reproduce the whole process, from informal specification of the client, to finalization of the backend.

The restaurant The Restaurant's Logo was in need for a simple yet nice looking and responsive webpage. They of course had some requests that you can check out in [this Trello board](https://trello.com/b/5MUIudjz/the-restaurant-s-logo-single-page).

I started out by making a [design](https://github.com/emilioidk/TRL-Single-Page/tree/master/design) on GIMP. This is a very important step for me because on one hand I get to peek into the DOM without starting to code at all. There were 2 files: one showing how the webpage is expected to look when being displayed on a screen wider than certain breakpoint, and the other one detailing how it should look for smaller screens.

The next step was developing the [frontend](https://github.com/emilioidk/TRL-Single-Page/tree/master/frontend). Several tools and frameworks were used for this. First step was to set up tools for automatization. Grunt is a very important part of the development stage because it takes care of all the dirty work. I set up grunt to perform several tasks for me:

- translate jade file to HTML,
- compile scss file to CSS
- uglify javascript to minimize file sizes
- compact css as much as possible using cssmin
- watch for changes and regenerate the files

I also used [live.js](http://livejs.com/) to autorefresh my browser whenever I make changes in the code. Cool stuff!

While much of the styling for the page is homemade, I used [PureCSS](http://purecss.io/) in several parts of the process. Mainly the grid and the forms styling.

The [backend](https://github.com/emilioidk/TRL-Single-Page/tree/master/backend) was developed as a WordPress theme. All the text that is being displayed can be modified in the customize page for the theme, as well as the logo, business name and other information.

[Go over to GitHub](https://github.com/emilioidk/TRL-Single-Page) to check it out.
