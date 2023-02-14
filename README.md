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

Default branch of this repo is `source`.

Baseball Hack Day website is built with Gatsby CLI and GitHub Pages. Clone this repo and run `npm install`.

Originally developed on **node** v18.14.0 and **npm** v9.3.1 on February, 2023

```shell
npm start
```

Local dev site is now running at <http://localhost:8000>!

## Deployment

Following [Gatsby's instruction on GithubPages](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)

```shell
npm run deploy
```

The build content `public` is copied over to `main` branch, then pushed.

## Google fonts

- Hepta+Slab:wght@700;800;900

- Montserrat:ital,wght@0,400;0,700;1,400;1,700

How to update chapter info
--------------------------

- Create a new branch off of `source`, for example, I will create a imaginary chapter in Tokyo. `git checkout source` `git checkout -b tokyo-update`
- You would want to copy `src/pages/boston.js` file as `src/pages/tokyo.js`. This will become the url of the page (i.e. baseballhackday.com/tokyo). You want to edit the index.js. Use /boston and /toronto as examples.
- header styles are managed in styled component, but site styles are in `src/components/layout.js`
- Once the page is built, you want to link it up in `src/pages/index.js` and footer in `src/components/layout.js`. Links will appear on every page. Use absolute links, starting with `/`.
- Now create a pull request against `source`. Then slack someone. If you have admin access, please feel free to review and merge.

## 🚀 Learn more about Gatsby

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
