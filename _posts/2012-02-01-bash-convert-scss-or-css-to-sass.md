---
layout: single
title: Bash Convert All Your SCSS (or CSS) to SASS in One Line
description: SCSS is great and all, but, I mean, c'mon… no semi-colons!
author: Eric D. Fields
status: published
date: 2012-02-01 10:40:05
---

I've been using — nay, depending on — [SaSS](http://sass-lang.com) and [Compass](http://compass-style.org) for at least a year (I'll get around to contributing, I swear). At the time when I picked it up, I was not familiar with Ruby or YAML, so its indentation-based syntax took a little while for me to wrap my head around.

But [HipHost](http://hiphost.com) uses Ruby On Rails, so I've gotten to know and love Ruby. I took another stab at using the SASS syntax and now I'll never go back.

The only problem is I've got quite a few .scss partials that I need to convert now. Well open up that Terminal; here's one line of bash to the rescue:

<script src="https://gist.github.com/1717578.js?file=gistfile1.txt"></script>

You can replace that first *\*.scss* with *\** or *\*.css* depending on what's in your [pwd](http://en.wikipedia.org/wiki/Pwd). Just remember to change your from (-F) argument accordingly.