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

The page opens with three kinds of work (`pillars`), in this order: mobile
games (Android and iOS, client games plus the studio), web games, and VR / XR
simulations (`sims`: Workshop MR (`xr`) and FlowLab (`flowlab`)). The sections below follow the
same order (`app/page.tsx`).

## Hosted builds and media

- `public/play/workshop-mr/`: the browser build of Workshop MR (Unity WebGL,
  Brotli with the decompression fallback, so Pages can serve it without
  special headers). It runs on computers and phones. To update it, build
  `Workshop MR > Build > Web (WebGL)` in the moaazafzal/workshop-mr project
  and copy `Builds/Web/*` here. Keep each file under GitHub's 100 MB limit.
- `public/video/workshop-mr-tutorial.mp4`: the narrated tutorial, re-encoded
  at 720p for the page (the 1080p original is a release asset of the
  workshop-mr repository).
- `public/img/xr/qr-workshop-mr.svg`: QR code for the browser build, made with
  macOS Core Image (`CIQRCodeGenerator`) and checked by decoding it back.
- `public/play/flowlab/`: the browser build of FlowLab (moaazafzal/flowlab,
  `FlowLab > Build > Web (WebGL)` or `WebBuild.Build` in batch mode, then copy
  `Builds/Web/*` here). Same Brotli + fallback setup.
- `public/video/flowlab-showcase.mp4`: 60 s captioned showcase, 720p (recorded
  by the `Showcase` play-mode test in the flowlab repo). Stills in
  `public/img/sims/` come from that project's screenshot tests;
  `qr-flowlab.svg` is made the same way as the Workshop MR code.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the
export and publishes it to Pages. `next.config.ts` sets `basePath` to the
repository name, so the site is served from `/moaazafzal-Game-Developer`.

## Contact form

The form posts to FormSubmit, which relays to the inbox in `lib/content.ts`.
FormSubmit emails that address a confirmation link on the first submission
and delivers nothing until it is clicked.
