import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BOOKING_URL } from '../lib/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bshapeBeforeAfter from '../assets/optimized/tp-b-shape-before-after.jpeg'
import bshapeDevice from '../assets/optimized/tp-bshape-device.jpeg'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  'Fat reduction',
  'Muscle toning',
  'Skin tightening',
  'Cellulite reduction',
  'No surgery · No downtime',
]

export default function BShapeSpotlight() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const copyRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        }
      )
      gsap.fromTo(
        copyRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden"
      style={{ background: 'var(--color-deep-accent, #1a0f0a)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: before/after image + device badge */}
          <div ref={imgRef} className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/3', background: 'rgba(255,255,255,0.05)' }}
            >
              <img
                src={bshapeBeforeAfter}
                alt="B.Shape TMC before and after — visible abdominal contouring after 4 sessions in 8 days"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>

            {/* Floating device card */}
            <div
              className="absolute -bottom-5 -right-2 sm:right-4 rounded-xl overflow-hidden shadow-2xl hidden sm:block"
              style={{
                width: '140px',
                aspectRatio: '1/1',
                border: '2px solid rgba(255,255,255,0.12)',
                background: '#fff',
              }}
            >
              <img
                src={bshapeDevice}
                alt="B.Shape TMC device"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Result badge */}
            <div
              className="absolute top-4 left-4 rounded-full px-4 py-2 text-xs font-medium tracking-wider uppercase"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-surface)',
                letterSpacing: '0.14em',
              }}
            >
              Results in 4 sessions
            </div>
          </div>

          {/* Right: copy */}
          <div ref={copyRef}>
            <p
              className="text-xs tracking-widest uppercase mb-5 font-medium"
              style={{ color: 'var(--color-accent)', letterSpacing: '0.24em' }}
            >
              <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
              Featured Treatment
            </p>

            <h2
              className="font-serif mb-5"
              style={{
                color: 'hsl(36 71% 97%)',
                fontSize: 'clamp(1.8rem, 3.8vw, 2.9rem)',
                lineHeight: 1.08,
                fontWeight: 400,
              }}
            >
              B.Shape Body{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>
                Contouring
              </em>
            </h2>

            <p
              className="font-sans font-light mb-3"
              style={{ color: 'hsl(36 71% 90% / 0.75)', fontSize: '1rem', lineHeight: 1.85 }}
            >
              The B.Shape TMC uses High Intensity Tesla Electromagnetic Contractions to sculpt, firm, and reduce the appearance of stubborn fat — without surgery, incisions, or downtime. Target your abdomen, thighs, buttocks, and arms across a series of comfortable in-clinic sessions.
            </p>
            <p
              className="font-sans font-light mb-8"
              style={{ color: 'hsl(36 71% 90% / 0.5)', fontSize: '0.82rem', lineHeight: 1.7 }}
            >
              Not suitable for clients with metal implants, pacemakers, or during pregnancy. Individual results vary. A consultation is required prior to treatment.
            </p>

            {/* Benefit pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {benefits.map((b) => (
                <span
                  key={b}
                  className="text-xs font-sans font-medium px-4 py-2 rounded-full"
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'hsl(36 71% 97% / 0.85)',
                    background: 'rgba(255,255,255,0.06)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/treatments/body-contouring"
                className="flex-1 text-center px-6 py-3.5 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-surface)',
                  letterSpacing: '0.14em',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Learn More
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3.5 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'hsl(36 71% 97%)',
                  letterSpacing: '0.14em',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'hsl(36 71% 97%)' }}
              >
                Book a Session
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
