# Lustrouz Aesthetics

Marketing site for **Lustrouz Aesthetics**, a medical skincare clinic in North York, Toronto, led by Shahama Nellanchery, Certified Medical Aesthetician.

Built with Vite + React 19 and Tailwind v4. Editorial design, mobile-first, optimized for LCP.

## Stack

| Tool | Why |
| --- | --- |
| Vite 8 | Fast dev server + tiny production bundle |
| React 19 | Component model |
| Tailwind 4 | Utility-first styling via `@tailwindcss/vite` |
| GSAP + ScrollTrigger | Hero timeline + scroll-in animations |
| Cormorant Garamond + Inter (Google Fonts) | Editorial serif + clean sans pairing |
| Unsplash CDN | All photography (responsive `srcSet` per slot) |

No backend. The booking flow links out to [lustrouz.square.site](https://lustrouz.square.site/).

## Getting started

```bash
npm install
npm run dev       # local dev server (Vite)
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

Node 18+ recommended.

## Project structure

```
src/
  App.jsx                  Section composition
  index.css                Tailwind + design tokens + motion prefs
  components/
    Navbar.jsx             Fixed header, scroll-aware, mobile overlay
    Hero.jsx               LCP hero (preloaded image, GSAP timeline)
    Marquee.jsx            Seamless infinite-loop trust strip
    Philosophy.jsx         "About" section + founder + 3 pillars + stats
    Treatments.jsx         6 service cards (custom srcSet per card)
    BeautyConcerns.jsx     4 skin concerns grid
    Testimonials.jsx       Real Google reviews carousel
    VisitUs.jsx            Studio photo + hours + Google Map embed
    Footer.jsx             CTA strip + sitemap + contact
    Logo.jsx               Pure-SVG typographic logo (theme-aware via currentColor)
  lib/
    images.js              Centralized Unsplash catalog + srcSet helpers
```

### `src/lib/images.js`

Every image goes through one helper so we never hardcode CDN URLs in components:

```js
import { src, srcSet, sizes } from './lib/images'

<img
  src={src('hero', 1600)}
  srcSet={srcSet('hero', [800, 1200, 1600, 2000])}
  sizes={sizes.hero}
  width="1600"
  height="900"
  alt=""
/>
```

To change a photo, edit the ID in `PHOTOS`. Every component that uses it updates automatically.

### `src/components/Logo.jsx`

Pure typographic SVG/HTML with no raster and no network. `currentColor`-driven so it adopts whatever parent color is in scope. Three sizes: `full`, `compact`, `mark`.

## Design system

Colors live as CSS variables in `src/index.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#F5F0EB` | Page background (warm cream) |
| `--color-cream` | `#FAF7F3` | Card / contrast surface |
| `--color-text` | `#2C2C2C` | Primary text |
| `--color-muted` | `#6B6660` | Secondary text |
| `--color-accent` | `#C4A882` | Brand gold |
| `--color-accent-dark` | `#A8896A` | Hover state for gold |
| `--color-dark` | `#1A1614` | Dark sections (testimonials, footer) |

Typography: Cormorant Garamond (serif headings, italic accents) + Inter (UI / body).

## Performance

- **LCP hero** preloaded in `index.html` via `<link rel="preload" as="image" imagesrcset=...>` so the fetch starts before JS parses.
- `<link rel="preconnect">` for `images.unsplash.com` and `fonts.gstatic.com`.
- Every `<img>` ships with explicit `width` / `height` (no CLS), `loading="lazy"` (except hero), `decoding="async"`, and a `srcSet` matching its real slot.
- Unsplash URLs use `auto=format` so modern browsers receive AVIF/WebP automatically.
- Fonts use `display=swap` to keep text rendering uninterrupted.
- Animations honor `prefers-reduced-motion` (defined in `index.css`).
- Logo is pure SVG/HTML, zero bytes over the wire after gzip.

Current production sizes (gzip):

```
dist/index.html     ≈ 1.3 KB
dist/assets/*.css   ≈ 5.4 KB
dist/assets/*.js    ≈ 117 KB
```

## Mobile UX

- 44px minimum touch targets globally.
- 64px nav with full-screen overlay menu, body-scroll lock, staggered link reveal.
- Responsive type via `clamp()` everywhere a heading appears.
- `viewport-fit=cover` + `100svh` for proper iOS notch handling.
- Carousel pauses on hover/focus; reduces to no-motion if requested.

## Content references

- Booking: <https://lustrouz.square.site/>
- Instagram: <https://www.instagram.com/lustrouz_bynzsha/>
- Google Maps: `1275 Finch Ave W, North York, ON M3J 0L5`
- Testimonials are real Google reviews, lightly trimmed for length; the section links out to the source.

## Deploy

The site is fully static. Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, GitHub Pages):

```bash
npm run build
# upload dist/ to your host
```

No environment variables, no server runtime required.

## License

Proprietary. © Lustrouz Aesthetics. All rights reserved.
