import { useState, useEffect } from 'react'
import Logo from './Logo'

const BOOKING_URL = 'https://lustrouz.square.site/'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close mobile menu when crossing the md breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => { if (e.matches) setMenuOpen(false) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    }
  }

  const onDarkHero = !scrolled && !menuOpen
  const linkColor = onDarkHero ? '#FAF7F3' : '#2C2C2C'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(245,240,235,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,168,130,0.18)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="shrink-0 -ml-1"
          style={{ minHeight: 'auto' }}
          aria-label="Lustrouz Aesthetics — Home"
        >
          <span className="hidden sm:inline-flex" style={{ color: linkColor }}>
            <Logo variant="full" size={36} />
          </span>
          <span className="sm:hidden inline-flex" style={{ color: linkColor }}>
            <Logo variant="compact" size={32} />
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9 lg:gap-12">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-xs lg:text-sm tracking-widest uppercase font-medium transition-colors duration-200"
              style={{ color: linkColor, letterSpacing: '0.18em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C4A882')}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-xs lg:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300"
            style={{ background: '#C4A882', color: '#FAF7F3', letterSpacing: '0.14em' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#A8896A'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#C4A882'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{ background: linkColor, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'translateY(-4px)' }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{ background: linkColor, opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{ background: linkColor, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'translateY(4px)' }}
          />
        </button>
      </div>

      {/* Mobile menu — full screen overlay */}
      <div
        className="md:hidden fixed left-0 right-0 overflow-hidden transition-all duration-500"
        style={{
          top: '64px',
          height: menuOpen ? 'calc(100svh - 64px)' : '0',
          background: 'rgba(245,240,235,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div className="px-6 pt-10 pb-12 flex flex-col gap-7 h-full">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="font-serif text-3xl transition-colors duration-200"
              style={{
                color: '#2C2C2C',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, color 0.2s`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-6 px-8 py-3.5 text-xs tracking-widest uppercase font-medium rounded-full"
            style={{
              background: '#C4A882',
              color: '#FAF7F3',
              letterSpacing: '0.16em',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s',
            }}
          >
            Book Consultation
          </a>

          <div className="mt-auto pt-8" style={{ borderTop: '1px solid rgba(196,168,130,0.25)' }}>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#C4A882', letterSpacing: '0.2em' }}>Visit</p>
            <p className="font-serif text-base" style={{ color: '#2C2C2C' }}>1275 Finch Ave W</p>
            <p className="font-sans text-sm" style={{ color: '#6B6660' }}>North York · Toronto</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
