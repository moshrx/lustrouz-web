import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../assets/optimized/logo.png'
import { BOOKING_URL, SHOP_URL } from '../lib/constants'

const links = [
  { label: 'Home', to: '/', anchor: '#home' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'Shop Our Products', to: SHOP_URL, external: true },
  { label: 'About', to: '/', anchor: '#about' },
  { label: 'Visit', to: '/', anchor: '#visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const focusables = menuRef.current?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    ) || []
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    first?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || focusables.length === 0) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => { if (e.matches) setMenuOpen(false) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const scrollToAnchor = (anchor) => {
    setTimeout(() => {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const handleNav = (event, link) => {
    setMenuOpen(false)
    if (!link.anchor) return
    event.preventDefault()

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: link.anchor } })
      return
    }

    scrollToAnchor(link.anchor)
  }

  return (
    <>
    <a href="#main" className="skip-to-content">Skip to content</a>
    <nav
      className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="site-nav__inner">
        <Link
          to="/"
          onClick={(event) => handleNav(event, { anchor: '#home' })}
          className="site-nav__brand"
          aria-label="Lustrouz Aesthetics home"
        >
          <img src={logoImg} alt="Lustrouz Aesthetics" width="168" height="50" decoding="async" />
        </Link>

        <div className="site-nav__links">
          {links.map((link) =>
            link.external ? (
              <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} onClick={(event) => handleNav(event, link)}>
                {link.label}
              </Link>
            )
          )}
        </div>

        <a className="site-nav__cta btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Book a Free Consultation
        </a>

        <button
          ref={toggleRef}
          className="site-nav__toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__panel">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} onClick={(event) => handleNav(event, link)}>
                {link.label}
              </Link>
            )
          )}
          <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Consultation
          </a>
          <div className="mobile-menu__visit">
            <span>North York studio</span>
            <strong>1275 Finch Ave W</strong>
            <small>Toronto, ON</small>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
