# Baseball Hack Day 

Baseball Hack Day is a fun, free, friendly one-day hacking/coding/designing competition for baseball fans. 

Boston, Chicago, Cincinnati, Los Angeles, New York, San Diego, Seattle, Toronto, Twin Cities

`#HackBaseball`

- [Join us in Slack](http://baseballhackday-slack.herokuapp.com/)
- [Wanna start your own chapter?](https://docs.google.com/document/d/1bwzyhGPWIfZ6w5FyQqUOpu_s8vkUwcrPy2UHvw4QImY/edit?usp=sharing)
- [Interested in sponsoring?](https://docs.google.com/document/d/1N1UtvOCPPPdMF-Y7zvwGZOL5cObL9a2Z0ouOUB5JCTA/edit?usp=sharing)

## This website is built with Jekyll

 It follows the
[thoughtbot styleguide](https://github.com/thoughtbot/guides) 
Jekyll is a static site generator built in Ruby. 


Getting Started
---------------

**Node/Gulp** If you don't have it, install [node.js](https://nodejs.org/en/). Easiest way it to use [Homebrew](http://brew.sh/) by
  `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
then 
  `brew install node`
and install npm and gulp globally by running 
  `sudo npm install npm gulp -g`

Run gulp to compile css from sass by simply run `gulp` from your terminal within your repo. 
It will launch watch by default. <code>control-c</code> to stop. If you only want the css compiled once, run `gulp sass`

**Local development, RUBY/Jekyll** To run jekyll locally to test your website while developing, run  
```
bundle exec jekyll serve --watch
``` 
(Requires ruby *) Your website should be viewable by going to [localhost:4000](http://localhost:4000/)

Github's doc on [how to use Jekyll on Github Pages](https://help.github.com/articles/using-jekyll-with-pages) is also helpful. 


* You may have to run `brew install ruby` and `gem install bundler` then `bundle install` once. This [GoRails tutorial on setting up Mac](https://gorails.com/setup/osx/10.14-mojave) is helpful.

* Update. After upgrading my Mac to Mojave, I was unable to use Apple's native Ruby. [This jeckyll thread](https://github.com/jekyll/jekyll/issues/7274#issuecomment-425069689) helps. 

How to update chapter info
--------------------------

- Create a new branch off of master, for example, I will create a imaginary chapter in Tokyo. `git checkout master` `git checkout -b tokyo-update`
- You would want to copy `/new-city-template` into `/tokyo` folder. This will become the url of the page (i.e. baseballhackday.com/tokyo). You want to edit the index.html. Use boston and philly as examples. 
- header styles are managed in `/scss/_city-show.scss`
- Once the page is built, you want to link it up in `_includes/pick-your-city.html`. Links will appear on every page. 
- Now create a pull request against master. Then please ask to merge it. I like doing it though pull request since changes are documented and easier to revert if needed. 


Credits
-------

![thoughtbot](http://thoughtbot.com/logo.png)

[Proteus](http://github.com/thoughtbot/proteus) is maintained and funded by [thoughtbot, inc](http://thoughtbot.com/community)

Also based on Daigo Fujiwara's [jekyll-foundation-6-starter](https://github.com/daigofuji/jekyll-foundation-6-starter)



License
-------

The names and logos for thoughtbot are trademarks of thoughtbot, inc.
