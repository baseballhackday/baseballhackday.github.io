# Baseball Hack Day 

2023 date is Saturday, March 11!

Baseball Hack Day is a fun, free, friendly one-day IRL hacking/coding/designing competition for baseball fans. 

Boston, Chicago, Los Angeles, San Diego, and Toronto

`#HackBaseball`

- [Join us in Slack](http://baseballhackday-slack.herokuapp.com/)
- [Wanna start your own chapter?](https://docs.google.com/document/d/1bwzyhGPWIfZ6w5FyQqUOpu_s8vkUwcrPy2UHvw4QImY/edit?usp=sharing)
- [Interested in sponsoring?](https://docs.google.com/document/d/1N1UtvOCPPPdMF-Y7zvwGZOL5cObL9a2Z0ouOUB5JCTA/edit?usp=sharing)


Getting Started
---------------

Baseball Hack Day website is built with Jekyll*/GitHub Pages 
([how to use Jekyll* on Github Pages](https://help.github.com/articles/using-jekyll-with-pages)) (* Requires ruby)

If you don't have **Node/Gulp**, install [node.js](https://nodejs.org/en/). Easiest way it to use [Homebrew](http://brew.sh/) on Mac from your terminal by
  `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
then 
  `brew install node`
and install npm and gulp globally by running 
  `sudo npm install npm gulp -g`

Run `gulp` from this repo's root to start compiling css. 
It will launch watch by default. <code>control-c</code> to stop. Or, run `gulp sass` to compile the css once

**Local development** To run jekyll locally to test your website while developing, run  
```
bundle exec jekyll serve --watch
``` 
 Your website should be viewable by going to [localhost:4000](http://localhost:4000/)
 
* For the first time only, you have to run `brew install ruby` and `gem install bundler` then `bundle install`. For more Ruby/gem, this [GoRails tutorial on setting up Mac](https://gorails.com/setup/osx/10.14-mojave) is helpful.


How to update chapter info
--------------------------

- Create a new branch off of master, for example, I will create a imaginary chapter in Tokyo. `git checkout master` `git checkout -b tokyo-update`
- You would want to copy `/city-template` into `/tokyo` folder. This will become the url of the page (i.e. baseballhackday.com/tokyo). You want to edit the index.html. Use /boston and /toronto as examples. 
- header styles are managed in `/scss/_city-show.scss`
- Once the page is built, you want to link it up in `_includes/pick-your-city.html`. Links will appear on every page. Use absolute links, starting with `/`.
- Now create a pull request against master. Then please ask to merge it. I like doing it though pull request since changes are documented and easier to revert if needed. If you have admin access, please feel free to merge. 

