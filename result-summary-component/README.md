# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/enmagal/Frontend-Mentor/tree/master/result-summary-component](https://github.com/enmagal/Frontend-Mentor/tree/master/result-summary-component)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

**Gradient Background**

I've never use linear gradient before and it was interesting.

```html
<div class="score bg-gradient"></div>
```

```css
.bg-gradient {
  background: linear-gradient(
    to bottom,
    var(--clr-gradient-bg-100),
    var(--clr-gradient-bg-400)
  );
}
```

**Aspect-ratio**

The parameter aspect-ratio was a good way to make the circle have height equal to width.

```html
<div class="score-circle">
  <p class="score-number">76</p>
  <p class="text-neutral-300-op">of 100</p>
</div>
```

```css
.score-circle {
  display: flex;
  width: fit-content;
  aspect-ratio: 1 / 1;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    to bottom,
    var(--clr-gradient-circle-100),
    var(--clr-gradient-circle-400)
  );
  padding: var(--size-600);
  border-radius: 100%;
}
```

## Author

- Website - [Enzo Magal](https://www.your-site.com)
- Frontend Mentor - [@enzo-magal](https://www.frontendmentor.io/profile/enzo-magal)
- Twitter - [@magal_enzo](https://twitter.com/magal_enzo)