import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BOOKING_URL = 'https://lustrouz.square.site/'

const concerns = [
  {
    title: 'Acne & Breakouts',
    desc: "Active breakouts, hormonal congestion, post-acne marks — we calm, clear, and rebuild without stripping the skin.",
    icon: '✦',
  },
  {
    title: 'Pigmentation',
    desc: 'Melasma, sun damage, and uneven tone — softened progressively with brightening protocols and barrier care.',
    icon: '◈',
  },
  {
    title: 'Sensitive Skin',
    desc: "Reactive, easily flushed, or irritated skin — gentle, calming treatments designed to restore comfort.",
    icon: '◉',
  },
  {
    title: 'Compromised Barrier',
    desc: 'Over-exfoliated or weakened skin barrier — restorative protocols that rebuild resilience and hydration.',
    icon: '◆',
  },
]

export default function BeautyConcerns() {
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
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-12"
      style={{ background: '#FAF7F3' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: '#C4A882', letterSpacing: '0.24em' }}>
            <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: '#C4A882' }} />
            What We Address
          </p>
          <h2
            className="font-serif mb-5"
            style={{
              color: '#2C2C2C',
              fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Common <em style={{ color: '#C4A882', fontStyle: 'italic', fontWeight: 300 }}>skin concerns</em>
          </h2>
          <p className="font-sans font-light max-w-md mx-auto" style={{ color: '#6B6660', fontSize: '1rem', lineHeight: 1.8 }}>
            Real, lasting results come from understanding your skin first. Here's where we focus.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {concerns.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-400 group cursor-pointer"
              style={{ background: '#F5F0EB', minHeight: '100%' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(44,44,44,0.09)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <span
                className="text-2xl mb-5 block transition-transform duration-300 group-hover:scale-110"
                style={{ color: '#C4A882' }}
                aria-hidden="true"
              >
                {c.icon}
              </span>

              <h3
                className="font-serif text-lg sm:text-xl mb-3"
                style={{ color: '#2C2C2C', fontWeight: 400 }}
              >
                {c.title}
              </h3>
              <p
                className="font-sans font-light text-sm leading-relaxed flex-1 mb-6"
                style={{ color: '#6B6660', lineHeight: 1.75 }}
              >
                {c.desc}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-[11px] tracking-widest uppercase font-medium flex items-center gap-2 transition-all duration-200"
                style={{ color: '#C4A882', letterSpacing: '0.18em' }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = '10px' }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = '8px' }}
              >
                Book Consultation
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
