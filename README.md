# Biccas SaaS Frontend

A clean React + Vite landing page for a SaaS product with auth flow, pricing, testimonials, and dashboard access.

## Project structure

- `src/App.jsx` – main page composition and app state
- `src/components/` – reusable UI sections and modals
- `src/data/siteContent.js` – shared content and configuration
- `src/utils/helpers.js` – small utility helpers
- `src/index.css` – global styles and animations
- `server/` – backend API for auth-related features

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the frontend locally:
   ```bash
   npm run dev
   ```
3. Open the app in the browser using the Vite local URL.

## Production build

```bash
npm run build
```

## Useful scripts

- `npm run dev` – start local development server
- `npm run build` – production build
- `npm run preview` – preview production build locally

## Notes

- The site is organized around reusable content and utility modules to make future edits easier.
- Auth and dashboard actions are managed centrally in the main app state so modal behavior stays predictable.
