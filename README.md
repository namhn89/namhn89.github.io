## My Portfolio Website

Personal portfolio site for Nam Nguyen — about me, work experience, projects, blog, and a travel photo gallery.

Live at [namhn89.github.io](https://namhn89.github.io)

## Build with

[![HTML](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)](https://en.wikipedia.org/wiki/HTML)&nbsp;
[![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)&nbsp;
[![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://en.wikipedia.org/wiki/JavaScript)

## Structure

```text
index.html            Main page (About, Work Experience, Projects, Blog, Gallery, Contact)
gallery/*.html         One page per gallery album/destination
assets/css/            style.css (main site), gallery.css (album pages)
assets/js/             script.js (nav, audio, typing effect, scroll spy), gallery.js (lightbox)
assets/img/            Photos, logos, and favicons
blog/*.html            Individual blog posts
```

## Run locally

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser.
