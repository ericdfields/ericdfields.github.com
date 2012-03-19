---
layout: single
title: Web design deserves better tools than the crap we're stuck with now
description: Designing for the web with responsive web design principles means throwing out the old, static-mockup based way of doing things and designing directly in the browser. We need new tools that respect this process, like Gradient.
author: Eric D. Fields
status: published
---

As an industry, we web design-types are torpedoing into the responsively designed future while our design tools are stuck in the mockup-driven past. 

We now have the know-how to serve dozens of devices, resolutions and bandwidths with one codebase and a design that adapts to its device. The old flow of designing a mockup with a 960-pixel grid, getting sign-off and coding it up is **dead**. 

## Dead, dead, dead!

We could attempt a mockup-driven approach to responsive design. Why not pick a few resolutions we want to support for an arbitrary amount of devices and then just do static mockups that address each scenario? We could, but now we've multiplied the amount of work we do by a factor of n, and our finished design won't feel quite right when coded. 

Not only that, but what gives you the right to only support a handful of devices? Let the user use whatever device they have in their hands to get at it.

> "But everything needs to be approved by The Creative Director. That's their job! We need to stay on-brand, on-message! Margins of exactly 12px!"

Sure, no doubt. No one wants a grumpy Creative Director. But there's no reason why you can't design responsively today and still please any number of stakeholders.

## Design the parts, assemble the whole

What I find myself doing more and more is **designing *components* in the browser** where their **context is 1:1** — no pictures of websites here, folks — where I can **easily test multiple viewport sizes**. (I'm not sure that component is the right word yet, but it works for now.)

For me, a component is any given idea of a thing that a good website must have:

* good typography
* a uniform set of form inputs and buttons
* navigation or [chrome](http://www.mediawiki.org/wiki/Athena#Notes_on_Nomenclature)
* adaptive layout

Right now it's a big, slow, dumb challenge to attempt to do all these things well in static mockups and expect the result to be pushed into code perfectly. These days, I often work on something like my header, paragraph and list styles with markup and CSS in a browser using real content, test it across multiple viewports and devices, then move on to the next component when I'm happy with the results.

You can't do anything like this in Photoshop, Fireworks, or any other tool where the output is only vector or bitmap. The output needs to be code.

### Ugh. Code?

Yeah, but just the web standards: HTML, CSS & Javascript. 

Look: we create paintings with brushes and paint on canvas; we make music with things that make noises; we need to design websites with things that make web standards code, specifically **good code** — not too much, just for a specific component, that [gracefully degrades](http://www.digital-web.com/articles/fluid_thinking/). (This is not the article where we weigh the merits of screen designers coding their work. There are [plenty](http://www.google.com/search?client=safari&rls=en&q=web+designers+should+code&ie=UTF-8&oe=UTF-8) [out there](http://www.google.com/search?client=safari&rls=en&q=web+designers+should+code&ie=UTF-8&oe=UTF-8#hl=en&client=safari&rls=en&sa=X&ei=N_DWTsTEHue60QHSx-mCDg&ved=0CBoQBSgA&q=web+designers+should+not+code&spell=1&bav=on.2,or.r_gc.r_pw.r_cp.,cf.osb&fp=191ba1b4eac78944&biw=1395&bih=671).)

## Do I smell future?

I actually started writing this article a couple days ago with no particular tool in mind, only wild fantasies of what a modern and future-forward web design app would be like. 

But serendipity is a clever girl, and [Gradient 1.0](http://www.gradientapp.com/) was released today in the [Mac App Store](http://itunes.apple.com/us/app/gradient/id481981128?ls=1&mt=12). 

In a nut, Gradient is a remarkably intuitive tool for doing 90% of the gradients we web designers need on the regular. Just look at the first boot screen:
       
<p class="img"><img src="http://ericdfields.s3.amazonaws.com/img/gradientapp_1.0_first-boot.png"></p>

Gradient makes the task of designing gradients in CSS3 as easy as designing them in an image editor. With a UI like this, I might actually argue that its the most enjoyable gradient editing tool I've ever used.

The current problem with creating gradients using CSS3 is the boatload of vendor prefixes you need to make them work across browser, as well as having a fall-back strategy (usually a solid color) for older browsers. You can streamline this process quite a bit using [SASS](http://sass-lang.com/) and especially [Compass](http://compass-style.org/) to compile your CSS, but you still have to ⌘-R your browser to see the results.

Gradient gives you a sexy interface for interactive gradient editing and outputs beautiful CSS3 instantly. With SASS support and multi-step gradients on the way, this app is a model of future web design tools. If you're as excited about this [New Way](http://www.youtube.com/watch?v=V0_WJDige0s "Jump to 1:00") as I am, please support the [Jumpzero](http://jumpzero.com/) guys by purchasing the app.

Onwards.