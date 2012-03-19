---
layout: single
title: Bless this CSS Mess with Compass
description: My workaround for using Bless with Compass & Sass
author: Eric D. Fields
status: published
date: 2012-02-29 18:14:29
updated: 2012-03-05 16:23:12
---

I reached a small, nightmarish victory yesterday while testing some new styles on [HipHost](http://hiphost.com) in IE: two of my CSS files surpassed [Internet Explorer's CSS Selector Limit](http://www.habdas.org/2010/05/30/msie-4095-selector-limit/) for a single stylesheet file: 4095.

Yay!

## Fuck.

Hm? What's [this](http://blesscss.com/)? 

## Woah.

[Bless](http://blesscss.com/) is a node.js module that checks a CSS file for the IE selector limit. If it reaches it, it breaks it into smaller files and then links them all with @imports in the original foo.css file.

But we're not running node.js. :(

After extensive Googling, there's no good equivalent or port of Bless for Compass, Sass, Rails, or even straight Ruby. 

## From Compass to Bless

As a Compass user, my ideal scenario would be to run a Ruby version of Bless after every compile. A reasonable alternative would be to pass the Compass output to Bless.

Luckily there is a way to [configure a callback in our compass.rb](http://compass-style.org/help/tutorials/configuration-reference/), so that certainly puts us on the right path:

    on_stylesheet_saved do |filename| 
	    # do something with fileneame
    end 

We can then run the Bless executable (`blessc`) like this:

    on_stylesheet_saved do |filename| 
	    system('./lib/node_modules/bless/bin/blessc',filename,'-f')
    end 

In the immortal words of the Apache placeholder DocumentRoot: "It works!"

## Requisite Gotcha

For HipHost, we're still on Rails 3.0. That means no asset pipeline, so we're using the [asset packager](https://github.com/sbecker/asset_packager/) gem.

For produciton, asset packager takes the stylesheet groups you've defined and concatenates and minifies them. It calls these files **groupname*_packaged*.css**, which of course screws up the @import directives Bless was kind enough to create.

My solution was to make a new stylesheet group for foo\_blessed1 so at least the Blessed @imports are minified and created for production. I then just go into foo\_packaged.css and manually update the path for foo\_blessed1.css to foo\_blessed1\_packaged.css.

**UPDATE**: Did it.

in `vendor/plugins/asset_packager/lib/synthesis/asset_package.rb` find the method `compress_css` and add the following:

    source.gsub!(/-blessed\d+/,'\0_packaged')

## I'm no Ruby developer…

I took a quick stab at hacking asset_packager to do this for me, but gave up having spent too much time working on this already. Anything I accomplish will probably be pretty specific to our needs and not be worth open-sourcing, but I'll certainly share my success when it happens.

## Mixing Rails and Node.js

This approach obviously creates a non-gem dependency situation for our app. But installing node.js on any major package management system is as to easy to worry much about it:

    brew/apt-get/yum install node
    curl http://npmjs.org/install.sh | sh

## Better solution?

[Ping me](http://twitter.com/ericdfields) if you have some ideas. Porting Bless to Ruby feels like the cleanest solution, but I may be wrong. If there's a better way to glue node modules as dependencies to Rails apps, that could be it too.







