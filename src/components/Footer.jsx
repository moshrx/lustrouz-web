import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../assets/optimized/logo-transparent.png'
import { BOOKING_URL, INSTAGRAM, SHOP_URL, TIKTOK } from '../lib/constants'

const navLinks = [
  { label: 'Explore Treatments', to: '/treatments' },
  { label: 'Transformations', to: '/', anchor: '#results' },
  { label: 'Shop', to: SHOP_URL, external: true, note: 'Partner store — GlyMed Plus Canada' },
  { label: 'Plan Your Visit', to: '/', anchor: '#visit' },
  { label: 'About', to: '/', anchor: '#about' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const [navOpen, setNavOpen] = useState(false)

  const handleNav = (e, link) => {
    if (link.external) return
    if (link.anchor) {
      e.preventDefault()
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: link.anchor } })
      } else {
        document.querySelector(link.anchor)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const footerLinkColor = 'var(--color-muted)'

  return (
    <footer>
      <div
        className="px-5 sm:px-8 lg:px-12 py-3 sm:py-7"
        style={{
          background: 'var(--color-deep-accent)',
          color: 'var(--color-bg)',
          borderBlock: '1px solid hsl(36 71.43% 98.63% / 0.14)',
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'hsl(36 71.43% 98.63% / 0.78)', letterSpacing: '0.24em' }}>
            Begin Your Journey
          </p>
          <h3
            className="font-serif mb-5 sm:mb-6 mx-auto"
            style={{
              color: 'var(--color-bg)',
              fontSize: 'clamp(1.7rem, 3.6vw, 2.6rem)',
              lineHeight: 1.15,
              fontWeight: 400,
              maxWidth: '22ch',
            }}
          >
            Skincare that blends <em style={{ color: 'var(--color-bg)', fontStyle: 'italic', fontWeight: 300 }}>science, skill, and subtle luxury.</em>
          </h3>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-9 py-4 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 justify-center"
            style={{ background: 'var(--color-accent)', color: 'var(--color-surface)', letterSpacing: '0.16em' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 28px hsl(0 0% 0% / 0.3)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Begin Your Journey
          </a>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="mb-4 inline-flex" aria-label="Lustrouz Aesthetics Home">
              <img
                src={logoImg}
                alt="Lustrouz Aesthetics"
                width="235"
                height="201"
                loading="lazy"
                decoding="async"
                className="h-24 sm:h-28 w-auto"
              />
            </Link>
            <p
              className="font-sans font-light text-sm leading-relaxed max-w-sm"
              style={{ color: 'var(--color-muted)', lineHeight: 1.85 }}
            >
              Advanced skincare tailored for acne, pigmentation, sensitivity, and skin barrier repair.
            </p>
          </div>

          <div className="md:col-span-3">
            <button
              type="button"
              onClick={() => setNavOpen((o) => !o)}
              className="md:pointer-events-none w-full flex items-center justify-between md:justify-start gap-2 mb-1"
            >
              <p className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--color-text)', letterSpacing: '0.2em' }}>Navigation</p>
              <span
                className="md:hidden text-base leading-none transition-transform duration-200"
                style={{ color: 'var(--color-accent)', transform: navOpen ? 'rotate(45deg)' : 'rotate(0)' }}
              >+</span>
            </button>
            <div className={`flex-col gap-3.5 ${navOpen ? 'flex' : 'hidden'} md:flex mt-3`}>
              {navLinks.map((l) => (
                l.external ? (
                  <div key={l.label}>
                    <a
                      href={l.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm transition-colors duration-200"
                      style={{ color: footerLinkColor }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
                    >
                      {l.label}
                    </a>
                    {l.note && (
                      <p className="font-sans text-xs mt-0.5" style={{ color: 'hsl(0 0.97% 20.2% / 0.38)', lineHeight: 1.4 }}>
                        {l.note}
                      </p>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.label}
                    to={l.to}
                    onClick={(e) => handleNav(e, l)}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: footerLinkColor }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
                  >
                    {l.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs tracking-widest uppercase font-medium mb-5" style={{ color: 'var(--color-text)', letterSpacing: '0.2em' }}>Visit & Connect</p>

            <div className="text-sm space-y-1 mb-5" style={{ color: 'var(--color-muted)' }}>
              <p>1275 Finch Ave W</p>
              <p>North York, ON M3J 0L5</p>
              <p>Toronto, Canada</p>
            </div>

            <a
              href="tel:+14379801164"
              className="block text-sm mb-5 transition-colors duration-200"
              style={{ color: footerLinkColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
            >
              +1 (437) 980-1164
            </a>

            <div className="flex flex-col gap-3 mb-6">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors duration-200"
                style={{ color: footerLinkColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="text-sm">@lustrouz_bynzsha</span>
              </a>
              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors duration-200"
                style={{ color: footerLinkColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
                </svg>
                <span className="text-sm">@lustrouz_aesthetics</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid hsl(0 0.97% 20.2% / 0.14)', background: 'hsl(36 20% 97%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3 text-center">
          <p className="text-xs font-sans" style={{ color: 'hsl(0 0.97% 20.2% / 0.45)', lineHeight: 1.6 }}>
            The information on this website is for general informational purposes only and does not constitute medical advice. Treatment results vary by individual. All services are aesthetic, not medical, and are not intended to diagnose, treat, cure, or prevent any disease or medical condition. A consultation is required before any treatment is performed.
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid hsl(0 0.97% 20.2% / 0.14)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-2 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
            <p className="text-xs" style={{ color: 'hsl(0 0.97% 20.2% / 0.55)', letterSpacing: '0.06em' }}>
              © {new Date().getFullYear()} Lustrouz Aesthetics. All rights reserved.
            </p>
            <span className="hidden sm:inline text-xs" style={{ color: 'hsl(0 0.97% 20.2% / 0.3)' }}>·</span>
            <p className="text-xs" style={{ color: 'hsl(0 0.97% 20.2% / 0.45)', letterSpacing: '0.06em' }}>
              Developed by{' '}
              <a
                href="https://peiwebstudio.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: 'hsl(0 0.97% 20.2% / 0.55)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(0 0.97% 20.2% / 0.55)')}
              >
                Pei Webstudio
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <Link
              to="/privacy-policy"
              className="text-xs transition-colors duration-200"
              style={{ color: 'hsl(0 0.97% 20.2% / 0.55)', letterSpacing: '0.06em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(0 0.97% 20.2% / 0.55)')}
            >
              Privacy Policy
            </Link>
            <span className="text-xs" style={{ color: 'hsl(0 0.97% 20.2% / 0.3)' }}>·</span>
            <Link
              to="/terms"
              className="text-xs transition-colors duration-200"
              style={{ color: 'hsl(0 0.97% 20.2% / 0.55)', letterSpacing: '0.06em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(0 0.97% 20.2% / 0.55)')}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
