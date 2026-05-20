import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BOOKING_URL } from '../lib/constants'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    title: 'Signature Facials',
    treatments: [
      'Signature Classic Facial',
      'Oxygen Deep Pore Cleansing',
      'Glow & Go Dermaplaning',
      'Clarifying Detox Glow Facial',
      'Acne Management with High Frequency',
      'Back Facial',
    ],
  },
  {
    title: 'Advanced Facials & Treatments',
    treatments: [
      'EstheGlow Hydro Infusion Facial',
      'Signature Lustrouz Experience',
      'Korean Glass Skin O₂ Facial',
      'Skin Revival Anti-Aging Facial',
      'Clarity Complexion Peel Treatment',
      'Oxygen Peel with AHA Booster',
      'Essential 30% Lactic Acid Peel',
      'Brightening Eye Treatment',
      'TCA Skin Correction Treatment',
      'Zena Algae Peel',
    ],
  },
  {
    title: 'Micro-needling & Hair Restoration',
    treatments: [
      'Classic Skin Renewal Series (Dr. Pen)',
      'Premium Skin Transformation Series (XCellaris Pro / Twist)',
      'Collagen Induction Treatment with PRP',
      'XCellaris Pro Scalp Restoration Therapy',
      'Clinical Hair Regrowth Therapy (PRP + Microneedling)',
    ],
  },
  {
    title: 'Skin Tag Removal',
    treatments: ['Skin Tag Removal'],
  },
  {
    title: 'B.Shape Body Contouring',
    treatments: ['B.Shape Body Contouring'],
  },
]

function CategoryBlock({ category, index }) {
  const blockRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      blockRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: blockRef.current, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <div ref={blockRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
      <div className="lg:col-span-4">
        <p
          className="text-[10px] tracking-widest uppercase mb-3 font-medium"
          style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.28em' }}
        >
          {String(index + 1).padStart(2, '0')} · Category
        </p>
        <h3
          className="font-serif"
          style={{
            color: 'var(--color-text)',
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
            lineHeight: 1.15,
            fontWeight: 400,
          }}
        >
          {category.title}
        </h3>
      </div>

      <ul className="lg:col-span-8 space-y-0" style={{ borderTop: '1px solid rgba(23,23,23,0.16)' }}>
        {category.treatments.map((name) => (
          <li
            key={name}
            className="flex items-baseline gap-5 py-4 sm:py-5"
            style={{ borderBottom: '1px solid rgba(23,23,23,0.16)' }}
          >
            <span
              className="font-serif italic shrink-0"
              style={{
                color: 'var(--color-accent)',
                fontSize: '0.85rem',
                opacity: 0.7,
                minWidth: '1.5rem',
              }}
              aria-hidden="true"
            >
              ◆
            </span>
            <span
              className="font-serif"
              style={{
                color: 'var(--color-text)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.4,
                fontWeight: 400,
              }}
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Treatments() {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current?.children || [],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
      }
    )
  }, [])

  return (
    <section
      id="treatments"
      className="py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16 sm:mb-20">
          <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>
            <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
            All Treatments
            <span className="inline-block w-8 h-px align-middle ml-3" style={{ background: 'var(--color-accent)' }} />
          </p>
          <h2
            className="font-serif mb-5"
            style={{
              color: 'var(--color-text)',
              fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Crafted for <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>your skin.</em>
          </h2>
          <p
            className="font-sans font-light max-w-md mx-auto"
            style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.8 }}
          >
            Every treatment begins with an in-depth consultation. We build solutions around your concerns, never one-size-fits-all.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {categories.map((c, i) => (
            <CategoryBlock key={c.title} category={c} index={i} />
          ))}
        </div>

        <div className="mt-20 sm:mt-24 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-9 sm:px-10 py-4 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 justify-center"
            style={{ border: '1px solid var(--color-accent)', color: 'var(--color-accent)', letterSpacing: '0.16em' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-surface)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
