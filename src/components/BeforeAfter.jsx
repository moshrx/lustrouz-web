import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img2 from '../assets/optimized/before-after-IMG_2694.jpeg'
import img3 from '../assets/optimized/before-after-IMG_8343.jpeg'
import img4 from '../assets/optimized/before-after-IMG_8352.jpeg'
import img5 from '../assets/optimized/before-after-acne-clearing-2.jpeg'
import { BOOKING_URL } from '../lib/constants'

gsap.registerPlugin(ScrollTrigger)

const results = [
  { src: img2, label: 'Acne Clearing', detail: 'Multi-step custom protocol' },
  { src: img5, label: 'Hyperpigmentation', detail: 'Targeted light therapy' },
  { src: img3, label: 'Skin Tag Removal', detail: 'Precision, painless treatment' },
  { src: img4, label: 'Texture Refinement', detail: 'Smoother, healthier skin' },
]

export default function BeforeAfter() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="results"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>
            <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
            Real Results
            <span className="inline-block w-8 h-px align-middle ml-3" style={{ background: 'var(--color-accent)' }} />
          </p>
          <h2
            className="font-serif mb-5"
            style={{
              color: 'var(--color-text)',
              fontSize: 'clamp(1.7rem, 3.6vw, 2.6rem)',
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Visible <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>transformations.</em>
          </h2>
          <p
            className="font-sans font-light max-w-md mx-auto"
            style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.8 }}
          >
            A small selection of recent client journeys. Every result is shared with consent.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {results.map((r) => (
            <figure
              key={r.label}
              className="group rounded-2xl overflow-hidden transition-all duration-500"
              style={{ background: 'var(--color-bg)', border: '1px solid rgba(23,23,23,0.18)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(35,31,32,0.10)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '4/5', background: 'var(--color-surface-2)' }}
              >
                <img
                  src={r.src}
                  alt={`${r.label} result`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(23,45,49,0.45) 0%, transparent 55%)' }}
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-widest uppercase rounded-full backdrop-blur-md"
                  style={{
                    background: 'rgba(255,253,252,0.85)',
                    color: 'var(--color-accent-dark)',
                    letterSpacing: '0.18em',
                    fontWeight: 500,
                  }}
                >
                  Result
                </span>
              </div>
              <figcaption className="p-5 sm:p-6">
                <h3
                  className="font-serif text-lg sm:text-xl mb-1"
                  style={{ color: 'var(--color-text)', fontWeight: 400 }}
                >
                  {r.label}
                </h3>
                <p className="font-sans font-light text-sm" style={{ color: 'var(--color-muted)' }}>
                  {r.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-9 sm:px-10 py-4 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 justify-center"
            style={{ border: '1px solid var(--color-accent)', color: 'var(--color-accent)', letterSpacing: '0.16em' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-surface)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}
