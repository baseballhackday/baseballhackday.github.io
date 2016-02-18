# Baseball Hack Day 

Baseball Hack Day is a fun, free, friendly one-day hacking/coding/designing competition for baseball fans. 

#HackBaseball 

## This website is built Jekyll

 It follows the
[thoughtbot styleguide](https://github.com/thoughtbot/guides) 
Jekyll is a static site generator built in Ruby. 


Getting Started
---------------

If you don't have it, install [node.js](https://nodejs.org/en/). Easiest way it to use [Homebrew](http://brew.sh/) by
  `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
then 
  `brew install node`
and install npm and gulp globally by running 
  `sudo npm install npm gulp -g`

Run gulp to compile css from sass by simply run `gulp` from your terminal within your repo. 
It will launch watch by default. <code>control-c</code> to stop. If you only want the css compiled once, run `gulp sass`

To run jekyll locally to test your website while developing, run  `bundle exec jekyll serve --watch` (Requires ruby *) Your website should be viewable by going to [localhost:4000](http://localhost:4000/)

Github's doc on [how to use Jekyll on Github Pages](https://help.github.com/articles/using-jekyll-with-pages) is also helpful. 


* You may have to run `brew install ruby` and `sudo gem install bundler` then `sudo bundle install` once. [Mac OS X 10.11 nokogiri trouble](http://stackoverflow.com/questions/23668684/failed-to-build-gem-native-extension-when-i-run-bundle-install)




Credits
-------

![thoughtbot](http://thoughtbot.com/logo.png)

[Proteus](http://github.com/thoughtbot/proteus) is maintained and funded by [thoughtbot, inc](http://thoughtbot.com/community)

Thank you to all [the contributors](https://github.com/thoughtbot/proteus-jekyll/contributors)!

Also based on Daigo Fujiwara's https://github.com/daigofuji/jekyll-foundation-6-starter



License
-------

The names and logos for thoughtbot are trademarks of thoughtbot, inc.

Proteus Jekyll is Copyright © 2014 thoughtbot, inc. It is free software, and may be
redistributed under the terms specified in the LICENSE file.
