# Moaaz Afzal — Unity Game Developer

Personal portfolio. Next.js App Router, Tailwind CSS 4, Framer Motion.
Deployed as a static export to GitHub Pages.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # server build
npm run build:pages  # static export into ./out, as CI does it
```

## Content

Everything the page says lives in `lib/content.ts`: bio, stats, services,
the shipped-game list and the client quotes. Each figure there is sourced
from the live Fiverr profile or the live store listings, not invented, and
the file says which. Change it there, not in the components.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the
export and publishes it to Pages. `next.config.ts` sets `basePath` to the
repository name, so the site is served from `/moaazafzal-Game-Developer`.

## Contact form

The form posts to FormSubmit, which relays to the inbox in `lib/content.ts`.
FormSubmit emails that address a confirmation link on the first submission
and delivers nothing until it is clicked.
