import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import heroImg from '../assets/home-header.JPG.jpeg'
import { BOOKING_URL } from '../lib/constants'
import { treatmentCategories } from '../lib/treatmentCategories'

export default function Hero() {
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const dropdownRef = useRef(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' }
      )
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.08, delay: 0.45, ease: 'power3.out' }
      )
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!dropdownOpen) return

    const onClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setDropdownOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [dropdownOpen])

  return (
    <section id="home" className="hero">
      <picture className="hero__media" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          width="816"
          height="1100"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner container-shell">
        <div ref={contentRef} className="hero__content">
          <p className="eyebrow hero__eyebrow">Medical Skincare · Toronto</p>
          <h1 className="display-title hero__title">
            Advanced skincare treatments tailored to your skin goals.
          </h1>
          <p className="lead-copy hero__copy">
            Expert care and advanced treatments, customized for acne, pigmentation, sensitivity, and compromised barriers.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book with us
            </a>
            <div ref={dropdownRef} className="hero__dropdown-wrap">
              <button
                type="button"
                className="btn btn-secondary"
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((open) => !open)}
              >
                View Treatments
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    marginLeft: '0.5rem',
                    transition: 'transform 180ms ease',
                    transform: dropdownOpen ? 'rotate(0)' : 'rotate(180deg)',
                  }}
                >
                  ▴
                </span>
              </button>
              <div
                className={`hero__dropdown ${dropdownOpen ? 'is-open' : ''}`}
                role="menu"
                aria-hidden={!dropdownOpen}
              >
                {treatmentCategories.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/treatments/${c.slug}`}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="hero__proof" aria-label="Practice highlights">
          <div>
            <strong>7+</strong>
            <span>Years combined clinical care</span>
          </div>
          <div>
            <strong>5★</strong>
            <span>Client-rated Google care</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Consultation-led plans</span>
          </div>
        </div>
      </div>
    </section>
  )
}
