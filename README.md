# Lustrouz Aesthetics Website

Production-ready Vite + React landing page for Lustrouz Aesthetics.

## Commands

```bash
npm install
npm run lint
npm run build
npm run preview
```

## Deploy

Build output is generated in `dist/`. Deploy the contents of `dist/` to any static host, with the site served from the domain root.

Verified before deploy:

- ESLint passes
- Production build passes
- `npm audit --audit-level=moderate` reports 0 vulnerabilities
- Production preview serves HTML, CSS, JS, and favicon successfully
- External booking, Instagram, Google Maps, Google Fonts, and Unsplash image URLs respond successfully
