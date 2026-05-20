import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import heroImg from '../assets/home-header.JPG.jpeg'
import { BOOKING_URL } from '../lib/constants'

export default function Hero() {
  const contentRef = useRef(null)
  const statsRef = useRef(null)

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
            Expert care and advanced treatments, customized for acne, pigmentation, sensitivity, and compromised barriers. Science, skill, and subtle luxury.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Free Consultation
            </a>
            <Link className="btn btn-secondary" to="/treatments">
              View Treatments
            </Link>
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
