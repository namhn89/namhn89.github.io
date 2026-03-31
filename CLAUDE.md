# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website hosted on GitHub Pages (namhn89.github.io). No build system — pure HTML/CSS/JS, deployed directly from the repository.

## Development

Open `index.html` directly in a browser or use any static file server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

No package manager, no build step, no test suite.

## Architecture

**Single file, section-based layout** — `index.html` contains all sections (Home, About, Work, Education, Project, Blog, Contact) navigated via anchor links and scroll-spy.

**Key files:**
- `index.html` — entire portfolio page (~678 lines)
- `assets/css/style.css` — all styles, dark theme with `#0077ff` accent
- `assets/js/script.js` — main JS: preloader, audio toggle, typing animation, hamburger menu, scroll-spy, smooth scroll
- `assets/js/app.js` — particles.js config for hero background
- `blog/*.html` — individual blog post pages (self-contained HTML files)

**External dependencies via CDN only:** jQuery, Font Awesome 5.15.3, Google Fonts (Outfit), particles.js, vanilla-tilt.js, Google Analytics (G-E2NHTRMLWG).

## Design System

- Dark background: `#202020` / `#2b2b2b` (alternating sections)
- Accent: `#0077ff`
- Font: "Outfit" (Google Fonts)
- Fluid sizing with `clamp()` throughout CSS
- Responsive breakpoints handled with media queries; mobile nav uses hamburger toggle

## Adding Content

- **New blog post:** create `blog/new-post.html` (copy an existing blog HTML as template), then add a card to the `#blog` section in `index.html`
- **New project:** add a card inside the `#project` section in `index.html`
- **Work/Education history:** extend the timeline markup in the respective sections
- **Images:** place in the appropriate `assets/img/` subdirectory (`company_logo/`, `project/`, `blog/`, etc.)
