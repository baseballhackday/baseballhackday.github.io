# Baseball Hack Day 

2023 date is Saturday, March 11!

Baseball Hack Day is a fun, free, friendly one-day IRL hacking/coding/designing competition for baseball fans. 

Boston, San Diego, and Toronto

`#HackBaseball`

- [Join us in Slack](https://join.slack.com/t/baseballhackday/shared_invite/zt-1cnldwbkk-h_oAJO_PJfchijcOujJoHw)
- [Wanna start your own chapter?](https://docs.google.com/document/d/1bwzyhGPWIfZ6w5FyQqUOpu_s8vkUwcrPy2UHvw4QImY/edit?usp=sharing)
- [Interested in sponsoring?](https://docs.google.com/document/d/1N1UtvOCPPPdMF-Y7zvwGZOL5cObL9a2Z0ouOUB5JCTA/edit?usp=sharing)


Getting Started
---------------

Baseball Hack Day website is built with Gatsby CLI and GitHub Pages. Clone this repo and run `npm install`.

Originally developped on **node** v18.14.0 and **npm** v9.3.1 on February, 2023

    ```shell
    npm run develop
    ```

Local dev site is now running at http://localhost:8000!

Run `gulp` from this repo's root to start compiling css. 
It will launch watch by default. <code>control-c</code> to stop. Or, run `gulp sass` to compile the css once

**Local development** To run jekyll locally to test your website while developing, run  
```
bundle exec jekyll serve --watch
``` 
 Your website should be viewable by going to [localhost:4000](http://localhost:4000/)
 
* For the first time only, you have to run `brew install ruby` and `gem install bundler` then `bundle install`. For more Ruby/gem, this [GoRails tutorial on setting up Mac](https://gorails.com/setup/osx/10.14-mojave) is helpful.


## Google fonts 
Hepta+Slab:wght@700;800;900
Montserrat:ital,wght@0,400;0,700;1,400;1,700

How to update chapter info
--------------------------

- Create a new branch off of master, for example, I will create a imaginary chapter in Tokyo. `git checkout master` `git checkout -b tokyo-update`
- You would want to copy `/city-template` into `/tokyo` folder. This will become the url of the page (i.e. baseballhackday.com/tokyo). You want to edit the index.html. Use /boston and /toronto as examples. 
- header styles are managed in `/scss/_city-show.scss`
- Once the page is built, you want to link it up in `_includes/pick-your-city.html`. Links will appear on every page. Use absolute links, starting with `/`.
- Now create a pull request against master. Then please ask to merge it. I like doing it though pull request since changes are documented and easier to revert if needed. If you have admin access, please feel free to merge. 


## 🚀 Learn more

    - [Documentation](https://www.gatsbyjs.com/docs/)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/)

    - [Guides](https://www.gatsbyjs.com/tutorial/)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/)

    - [Plugin Library](https://www.gatsbyjs.com/plugins)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/)


# Google Tag 

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L9M4VJWNCE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L9M4VJWNCE');
</script>
```