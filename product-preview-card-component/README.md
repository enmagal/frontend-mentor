# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/enmagal/Frontend-Mentor/tree/master/product-preview-card-component](https://github.com/enmagal/Frontend-Mentor/tree/master/product-preview-card-component)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

**Data-type : disabled**

I used data-type instead of another class to help readability of the class. 

```html
<div class="prices">
  <p class="price">$149.99</p>
  <p class="price" data-type="disabled">$169.99</p>
</div>
```
```css
.price {
  color: var(--clr-primary-400);
  font-size: var(--fs-700);
}

.price[data-type="disabled"] {
  font-family: var(--ff-body);
  color: var(--clr-neutral-200);
  font-size: var(--fs-300);
  text-decoration: line-through;
}
```

**Responsive image**

There are two versions of the card image, it was challenging to find how to change the url in repsonsive mode. The solution I found is to create two elements, one for each screen size and display one or the other depending on the screen.

```html
<img
  class="product-image-desktop"
  src="./images/image-product-desktop.jpg"
  alt=""
/>
<img
  class="product-image-mobile"
  src="./images/image-product-mobile.jpg"
  alt=""
/>
```
```css
.product-image-mobile {
  width: 100%;
}

.product-image-desktop {
  display: none;
}

@media (min-width: 50em) {
  .product-image-desktop {
    display: block;
    width: 50%;
  }

  .product-image-mobile {
    display: none;
  }
}
```

## Author

- Website - [Enzo Magal](https://www.your-site.com)
- Frontend Mentor - [@enzo-magal](https://www.frontendmentor.io/profile/enzo-magal)
- Twitter - [@magal_enzo](https://twitter.com/magal_enzo)