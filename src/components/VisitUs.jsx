import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import studio800 from '../assets/optimized/studio-reception-800.jpeg'
import studio1200 from '../assets/optimized/studio-reception-1400.jpeg'
import studioTreatmentDay from '../assets/optimized/studio-treatment-day.jpeg'

gsap.registerPlugin(ScrollTrigger)

import { BOOKING_URL, INSTAGRAM } from '../lib/constants'

const MAPS_LINK = 'https://maps.app.goo.gl/s4hyoXD8gRuHbBUs9?g_st=ic'

export default function VisitUs() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
      gsap.fromTo(
        rightRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>
            <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
            Find Us
            <span className="inline-block w-8 h-px align-middle ml-3" style={{ background: 'var(--color-accent)' }} />
          </p>
          <h2
            className="font-serif"
            style={{
              color: 'var(--color-text)',
              fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Visit the <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>studio.</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Info */}
          <div ref={leftRef}>
            {/* Studio photos of the real Lustrouz Aesthetics studio */}
            <div
              className="rounded-2xl overflow-hidden mb-4 sm:mb-5"
              style={{ aspectRatio: '3/4', background: 'var(--color-surface-2)' }}
            >
              <img
                src={studio1200}
                srcSet={`${studio800} 800w, ${studio1200} 1400w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="The Lustrouz Aesthetics reception, with warm wood paneling, a marble desk, and the LUSTROUZ signage above"
                width="1400"
                height="1867"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="rounded-2xl overflow-hidden mb-8 sm:mb-10"
              style={{ aspectRatio: '4/3', background: 'var(--color-surface-2)' }}
            >
              <img
                src={studioTreatmentDay}
                alt="Bright treatment room with linen-dressed bed, LED therapy lamp, and a soft daylight palette"
                width="1100"
                height="825"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact details */}
            <div className="space-y-7 sm:space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: 'var(--color-accent)', letterSpacing: '0.2em' }}>Address</p>
                <p className="font-serif text-lg sm:text-xl" style={{ color: 'var(--color-text)', fontWeight: 400 }}>1275 Finch Ave W</p>
                <p className="font-serif text-lg sm:text-xl" style={{ color: 'var(--color-text)', fontWeight: 400 }}>North York, ON M3J 0L5</p>
                <p className="font-sans text-sm mt-1" style={{ color: 'rgba(109,100,96,0.72)' }}>Toronto, Canada</p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: 'var(--color-accent)', letterSpacing: '0.2em' }}>Hours</p>
                <div className="space-y-1.5">
                  {[
                    ['Monday – Friday', '10:00 AM – 7:00 PM'],
                    ['Saturday', '10:00 AM – 6:00 PM'],
                    ['Sunday', 'By Appointment'],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between font-sans text-sm gap-4" style={{ color: 'var(--color-muted)' }}>
                      <span>{day}</span>
                      <span style={{ color: 'rgba(109,100,96,0.72)' }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: 'var(--color-accent)', letterSpacing: '0.2em' }}>Contact</p>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm inline-flex items-center gap-2 transition-colors duration-200"
                  style={{ color: 'var(--color-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  @lustrouz_bynzsha
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3.5 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 justify-center"
                  style={{ border: '1px solid var(--color-accent)', color: 'var(--color-accent)', letterSpacing: '0.14em' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-surface)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)' }}
                >
                  Get Directions
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3.5 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 justify-center"
                  style={{ background: 'var(--color-accent)', color: 'var(--color-surface)', letterSpacing: '0.14em' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Reserve a Visit
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div
            ref={rightRef}
            className="rounded-2xl overflow-hidden lg:sticky lg:top-28"
            style={{ height: 'clamp(360px, 60vh, 640px)' }}
          >
            <iframe
              title="Lustrouz Aesthetics, 1275 Finch Ave W, North York"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.558746988697!2d-79.49269548439786!3d43.76644307490394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f0ff5aa4a1b%3A0xbfc7c5b0d86a12a3!2s1275%20Finch%20Ave%20W%2C%20North%20York%2C%20ON%20M3J%200L5%2C%20Canada!5e0!3m2!1sen!2sca!4v1715000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'saturate(0.75) contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
