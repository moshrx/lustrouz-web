/**
 * Centralized image catalog with optimized URL helpers.
 *
 * Each entry uses Unsplash's `images.unsplash.com/photo-<id>` CDN with:
 *   - auto=format  → modern formats (AVIF / WebP) when supported
 *   - fit=crop     → focal-aware cropping
 *   - q=80         → strong quality / size tradeoff
 *   - w=<width>    → server-side resize to the size we actually need
 *
 * Use `src(name, width)` for a single src or `srcSet(name)` for responsive.
 */

const PHOTOS = {
  // Hero: quiet, editorial close-up of skin / treatment
  hero: 'photo-1570172619644-dfd03ed5d881',
  // Founder portrait: calm female aesthetician portrait
  founder: 'photo-1581091226825-a6a2a5aee158',
  // Treatments
  signatureFacial: 'photo-1570172619644-dfd03ed5d881',
  acne: 'photo-1616394584738-fc6e612e71b9',
  chemicalPeel: 'photo-1571646034647-52e6ea84b28c',
  pigmentation: 'photo-1598440947619-2c35fc9aa908',
  barrier: 'photo-1556228720-195a672e8a03',
  microneedling: 'photo-1620916566398-39f1143ab7be',
}

const BASE = 'https://images.unsplash.com'

export function src(nameOrId, width = 1200) {
  const id = PHOTOS[nameOrId] || (nameOrId?.startsWith('photo-') ? nameOrId : null)
  if (!id) return ''
  return `${BASE}/${id}?auto=format&fit=crop&q=80&w=${width}`
}

export function srcSet(nameOrId, widths = [480, 800, 1200, 1800]) {
  return widths.map((w) => `${src(nameOrId, w)} ${w}w`).join(', ')
}

export const sizes = {
  // Hero spans the viewport
  hero: '100vw',
  // Founder card occupies ~ 40% on desktop, full on mobile
  founder: '(min-width: 1024px) 40vw, 100vw',
  // Treatment grid: 3 cols desktop, 2 cols tablet, 1 col mobile
  treatment: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
}
