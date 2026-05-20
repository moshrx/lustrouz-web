import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../assets/optimized/logo.png'
import { BOOKING_URL, INSTAGRAM, SHOP_URL } from '../lib/constants'

const navLinks = [
  { label: 'Explore Treatments', to: '/treatments' },
  { label: 'Target Concerns', to: '/', anchor: '#concerns' },
  { label: 'Shop', to: SHOP_URL, external: true },
  { label: 'Plan Your Visit', to: '/', anchor: '#visit' },
  { label: 'About', to: '/', anchor: '#about' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

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

  const footerLinkColor = 'hsl(36 71.43% 98.63% / 0.68)'

  return (
    <footer style={{ background: 'var(--color-deep-accent)', color: 'var(--color-bg)' }}>
      <div
        className="px-5 sm:px-8 lg:px-12 py-14 sm:py-16"
        style={{ borderBlock: '1px solid hsl(36 71.43% 98.63% / 0.14)' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase mb-4 sm:mb-5" style={{ color: 'hsl(36 71.43% 98.63% / 0.78)', letterSpacing: '0.24em' }}>
            Begin Your Journey
          </p>
          <h3
            className="font-serif mb-7 sm:mb-9 mx-auto"
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

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="mb-6 inline-flex" aria-label="Lustrouz Aesthetics Home">
              <img
                src={logoImg}
                alt="Lustrouz Aesthetics"
                width="180"
                height="56"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto"
              />
            </Link>
            <p
              className="font-sans font-light text-sm leading-relaxed max-w-sm"
              style={{ color: 'hsl(36 71.43% 98.63% / 0.62)', lineHeight: 1.85 }}
            >
              A refined medical skincare clinic in North York, Toronto. Customized treatments led by Shahama Nellanchery, Certified Medical Aesthetician.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3.5">
            <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: 'var(--color-bg)', letterSpacing: '0.2em' }}>Navigation</p>
            {navLinks.map((l) => (
              l.external ? (
                <a
                  key={l.label}
                  href={l.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm transition-colors duration-200"
                  style={{ color: footerLinkColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={(e) => handleNav(e, l)}
                  className="font-sans text-sm transition-colors duration-200"
                  style={{ color: footerLinkColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
                >
                  {l.label}
                </Link>
              )
            ))}
          </div>

          <div className="md:col-span-4">
            <p className="text-xs tracking-widest uppercase font-medium mb-5" style={{ color: 'var(--color-bg)', letterSpacing: '0.2em' }}>Visit & Connect</p>

            <div className="text-sm space-y-1 mb-5" style={{ color: 'hsl(36 71.43% 98.63% / 0.62)' }}>
              <p>1275 Finch Ave W</p>
              <p>North York, ON M3J 0L5</p>
              <p>Toronto, Canada</p>
            </div>

            <a
              href="tel:+14379801164"
              className="block text-sm mb-5 transition-colors duration-200"
              style={{ color: footerLinkColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bg)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
            >
              +1 (437) 980-1164
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mb-6 transition-colors duration-200"
              style={{ color: footerLinkColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bg)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = footerLinkColor)}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-sm">@lustrouz_bynzsha</span>
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid hsl(36 71.43% 98.63% / 0.14)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'hsl(36 71.43% 98.63% / 0.42)', letterSpacing: '0.06em' }}>
            © {new Date().getFullYear()} Lustrouz Aesthetics. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'hsl(36 71.43% 98.63% / 0.42)', letterSpacing: '0.06em' }}>
            North York · Toronto, ON
          </p>
        </div>
      </div>
    </footer>
  )
}
