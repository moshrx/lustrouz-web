import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../assets/optimized/logo-transparent.png'
import { BOOKING_URL, SHOP_URL } from '../lib/constants'
import { treatmentCategories } from '../lib/treatmentCategories'

const links = [
  {
    label: 'Explore Treatments',
    dropdown: treatmentCategories.map((c) => ({
      label: c.title,
      to: `/treatments/${c.slug}`,
    })),
  },
  { label: 'Transformations', to: '/', anchor: '#results' },
  { label: 'Shop', to: SHOP_URL, external: true, note: 'Partner store' },
  { label: 'Plan Your Visit', to: '/', anchor: '#visit' },
  { label: 'About', to: '/', anchor: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const dropdownContainerRef = useRef(null)

  useEffect(() => {
    if (!openDropdown) return
    const onDocClick = (e) => {
      if (!dropdownContainerRef.current?.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenDropdown(null)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [openDropdown])

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
    setOpenDropdown(null)
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
          <img src={logoImg} alt="Lustrouz Aesthetics" width="235" height="201" decoding="async" />
        </Link>

        <div className="site-nav__links" ref={dropdownContainerRef}>
          {links.map((link) => {
            if (link.dropdown) {
              const isOpen = openDropdown === link.label
              return (
                <div key={link.label} className="site-nav__dropdown-wrap">
                  <button
                    type="button"
                    className="site-nav__dropdown-toggle"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                  >
                    {link.label}
                  </button>
                  <div
                    className={`site-nav__dropdown ${isOpen ? 'is-open' : ''}`}
                    role="menu"
                    aria-hidden={!isOpen}
                  >
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            if (link.external) {
              return (
                <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className="site-nav__external-link">
                  {link.label}
                  {link.note && (
                    <span className="site-nav__partner-badge">{link.note}</span>
                  )}
                </a>
              )
            }
            return (
              <Link key={link.label} to={link.to} onClick={(event) => handleNav(event, link)}>
                {link.label}
              </Link>
            )
          })}
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
          {links.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="mobile-menu__group">
                  <span className="mobile-menu__group-title">{link.label}</span>
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.to}
                      onClick={() => setMenuOpen(false)}
                      className="mobile-menu__sub"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )
            }
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mobile-menu__external-link"
                >
                  <span>{link.label}</span>
                  {link.note && (
                    <span className="mobile-menu__partner-badge">{link.note}</span>
                  )}
                </a>
              )
            }
            return (
              <Link key={link.label} to={link.to} onClick={(event) => handleNav(event, link)}>
                {link.label}
              </Link>
            )
          })}
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
