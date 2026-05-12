import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    quote: "Shahama took the time to actually understand my skin before recommending anything. Six weeks in, my acne has calmed completely and my barrier finally feels healthy. The consultation alone is worth it.",
    name: 'Amara K.',
    detail: 'Acne Treatment Plan',
  },
  {
    quote: "I've struggled with melasma for years and tried everything. The customized peel and aftercare protocol actually moved the needle — and Shahama never once oversold or pushed something I didn't need.",
    name: 'Priya S.',
    detail: 'Pigmentation Care',
  },
  {
    quote: "The studio is so peaceful and intentional. Every step is explained, every product is purposeful. It feels like medical care and luxury skincare merged into one — exactly what I was looking for.",
    name: 'Danielle M.',
    detail: 'Signature Facial',
  },
  {
    quote: "After over-exfoliating for months my skin was reactive to everything. Shahama's barrier-repair plan brought my skin back to a place I didn't think was possible. Forever client.",
    name: 'Fatima R.',
    detail: 'Barrier Repair',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    )
  }, [])

  const goTo = (i) => {
    gsap.fromTo(quoteRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' })
    setActive(i)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return
      setActive((prev) => {
        const next = (prev + 1) % reviews.length
        gsap.fromTo(quoteRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' })
        return next
      })
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const r = reviews[active]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-12 overflow-hidden"
      style={{ background: '#1A1614' }}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* Decorative quote mark */}
      <div
        aria-hidden="true"
        className="absolute top-12 sm:top-16 left-1/2 -translate-x-1/2 font-serif pointer-events-none select-none"
        style={{
          color: 'rgba(196,168,130,0.08)',
          fontSize: 'clamp(8rem, 22vw, 16rem)',
          lineHeight: 0.7,
          fontWeight: 400,
        }}
      >
        “
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-xs tracking-widest uppercase mb-10 sm:mb-14 font-medium" style={{ color: '#C4A882', letterSpacing: '0.24em' }}>
          <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: '#C4A882' }} />
          Client Stories
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8 sm:mb-10">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: '#C4A882', fontSize: '1.05rem' }} aria-hidden="true">★</span>
          ))}
        </div>

        {/* Quote */}
        <div ref={quoteRef}>
          <blockquote
            className="font-serif font-light italic mb-8 sm:mb-10 mx-auto"
            style={{
              color: '#FAF7F3',
              fontSize: 'clamp(1.2rem, 2.4vw, 1.7rem)',
              lineHeight: 1.55,
              maxWidth: '46ch',
              fontWeight: 300,
            }}
          >
            “{r.quote}”
          </blockquote>

          <cite className="not-italic" style={{ display: 'block' }}>
            <span className="font-sans font-medium text-sm tracking-wider block" style={{ color: '#C4A882', letterSpacing: '0.14em' }}>
              {r.name}
            </span>
            <span className="font-sans font-light text-xs block mt-1" style={{ color: 'rgba(250,247,243,0.45)', letterSpacing: '0.08em' }}>
              {r.detail}
            </span>
          </cite>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10 sm:mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                background: i === active ? '#C4A882' : 'rgba(196,168,130,0.28)',
                minHeight: 'auto',
              }}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === active ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
