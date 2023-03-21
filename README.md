# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JS

### What I learned

As Im used to work with frameworks, mainly with react. It was challenging to implement filtering and searching as an SPA-like application, but actually surprised that its not that difficult to do so. And that is totally factible to build re-render-like functionalities and components-like additions dynamically.

I also learned the event listeners DOMNodeInserted and DOMNodeRemoved

```js
filterBox.addEventListener("DOMNodeInserted", async function () {
  /****/
});

filterBox.addEventListener("DOMNodeRemoved", async function () {
  /****/
});
```

### Continued development

Further investigation on event listeners and better ways to implement searching functionalities with the best practices to do it more efficient and performance friendly.

## Author

- Website - [David Gomez Gonzalez](https://www.david-gomez.xyz)
- Frontend Mentor - [dav9go](https://www.frontendmentor.io/profile/dav9go)
