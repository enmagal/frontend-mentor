# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/enmagal/Frontend-Mentor/tree/master/interactive-rating-component](https://github.com/enmagal/Frontend-Mentor/tree/master/interactive-rating-component)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

**Previous and Next element style**

It was a little bit chalenging to find how to select the previous and next element in the ratings buttons. The solution that I found is the following one :

```html
<div class="rating-list">
  <button class="rating" id="1">1</button>
  <button class="rating" id="2">2</button>
  <button class="rating" id="3">3</button>
  <button class="rating" id="4">4</button>
  <button class="rating" id="5">5</button>
</div>
```
```css
.rating:hover + .rating,
.rating:has(+ .rating:hover) {
  color: var(--clr-neutral-100);
  background-color: var(--clr-neutral-300);
}
```

**Submission**

It was my first time using JavaScript and it was very interesting. I guess my code is not perfect but it works and I am quite happy with it. Getting the submit button to work took some thought and this is the solution I came up with:

```html
<div class="component">
  <div class="rating-state">

    <!-- Rating state content -->

    <button class="primary-button | submit">Submit</button>
  </div>

  <div class="thank-you-state">
    
    <!-- Thank you state content -->

  </div>
</div>
```
```css
.rating-state {
  display: flex;
  flex-direction: column;
  gap: var(--size-500);
}

.thank-you-state {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: var(--size-400);
}
```
```js
const button = document.querySelector(".submit");
const thank_state = document.querySelector(".thank-you-state");
const rating_state = document.querySelector(".rating-state");

button.addEventListener("click", () => {
  thank_state.style.display = "flex";
  rating_state.style.display = "none";
});
```

## Author

- Website - [Enzo Magal](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)