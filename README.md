# Portfolio — Maksym Nesterchuk

My personal portfolio page: eight websites from production work, each redesigned and rebranded so no client material is shown.

## Live Preview

[nester02.github.io](https://nester02.github.io/)

## Technologies Used

- HTML5
- CSS3 with BEM naming, custom properties and `@property` animations
- Vanilla JavaScript (IntersectionObserver)
- GitHub Pages

## Getting Started

No build step — it is a static page.

```bash
git clone https://github.com/nester02/nester02.github.io.git
cd nester02.github.io
```

Open `index.html` in a browser, or serve the folder with any static server, for example `npx serve .`

## Features

- Compact intro with links to the work section and the CV
- Case cards: a screenshot of each site, and on hover a panel with the site type, language, page count, a short description and an "Open site" button
- Animated running border on the cards, paused when a card is off screen
- Responsive layout for mobile, tablet and desktop; touch devices get the details without hover
- Respects `prefers-reduced-motion`
- Footer with email, Telegram, GitHub and CV download
