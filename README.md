# Baseball Hack Day 

Baseball Hack Day is a fun, free, friendly one-day hacking/coding/designing competition for baseball fans. 

#HackBaseball 

## This website is built with Proteus and Jekyll
[Proteus](http://github.com/thoughtbot/proteus) is a collection of useful
starter kits to help you prototype faster. It follows the
[thoughtbot styleguide](https://github.com/thoughtbot/guides) and includes our
favorite front end tools. 
Jekyll is a static site generator built in Ruby. 


Getting Started
---------------
Clone and install dependencies
```
bundle install
```

Run the server and watch for changes in your files
```
jekyll serve -w
```

Deploy to Github Pages
```
jekyll build && git subtree push --prefix build origin master
```

Or install the [Proteus gem](https://github.com/thoughtbot/proteus) and enjoy some shortcuts. 

Stylesheets, fonts, images, and javascript files go in the `/source/_assets/` directory.
Vendor stylesheets and javascripts should go in each of their `/vendor/` directories.

Issues
------

If you have problems, please create a
[GitHub Issue](https://github.com/thoughtbot/proteus-jekyll/issues).

Contributing
------------

Have a fix or want to add a feature?
[Pull Requests](https://github.com/thoughtbot/proteus-jekyll/pulls) are welcome!


Credits
-------

![thoughtbot](http://thoughtbot.com/logo.png)

This application is maintained and funded by [thoughtbot, inc](http://thoughtbot.com/community)

Thank you to all [the contributors](https://github.com/thoughtbot/proteus-jekyll/contributors)!

License
-------

The names and logos for thoughtbot are trademarks of thoughtbot, inc.

Proteus Jekyll is Copyright © 2014 thoughtbot, inc. It is free software, and may be
redistributed under the terms specified in the LICENSE file.
