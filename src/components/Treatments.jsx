import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { src, srcSet, sizes } from '../lib/images'

gsap.registerPlugin(ScrollTrigger)

const BOOKING_URL = 'https://lustrouz.square.site/'

const services = [
  {
    title: 'Signature Facial',
    tagline: 'Bespoke',
    desc: 'A custom facial built from your consultation — deep cleansing, targeted serums, and finishing care designed for your skin profile.',
    image: 'signatureFacial',
    duration: '75 min',
  },
  {
    title: 'Acne Treatment',
    tagline: 'Clarifying',
    desc: 'Multi-step protocol pairing extractions, decongesting treatment, and barrier-supportive finish to clear and calm active breakouts.',
    image: 'acne',
    duration: '60 min',
  },
  {
    title: 'Chemical Peel',
    tagline: 'Resurfacing',
    desc: 'Medical-grade peel customized in strength and formulation to address pigmentation, texture, and dullness — with zero guesswork.',
    image: 'chemicalPeel',
    duration: '45 min',
  },
  {
    title: 'Pigmentation Care',
    tagline: 'Brightening',
    desc: 'A focused regimen for melasma, sun damage, and post-inflammatory marks — softening tone while protecting the skin barrier.',
    image: 'pigmentation',
    duration: '60 min',
  },
  {
    title: 'Barrier Repair',
    tagline: 'Restorative',
    desc: 'For compromised, reactive, or sensitized skin — a gentle protocol that rebuilds resilience and restores comfort.',
    image: 'barrier',
    duration: '60 min',
  },
  {
    title: 'Microneedling',
    tagline: 'Renewing',
    desc: 'Controlled micro-channels stimulate collagen, refine texture and scarring, and improve serum absorption for visible renewal.',
    image: 'microneedling',
    duration: '75 min',
  },
]

function TreatmentCard({ title, tagline, desc, image, duration, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        delay: (index % 3) * 0.1,
        scrollTrigger: { trigger: cardRef.current, start: 'top 85%' },
      }
    )
  }, [index])

  return (
    <article
      ref={cardRef}
      className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-500"
      style={{ background: '#FAF7F3' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 24px 60px rgba(44,44,44,0.10)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '4/3', background: '#EFE7DE' }}
      >
        <img
          src={src(image, 900)}
          srcSet={srcSet(image, [480, 800, 1200])}
          sizes={sizes.treatment}
          alt={title}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1200ms]"
          style={{ transformOrigin: 'center' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(26,22,20,0.35) 0%, transparent 55%)' }}
        />
        <span
          className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-widest uppercase rounded-full backdrop-blur-md"
          style={{
            background: 'rgba(250,247,243,0.85)',
            color: '#A8896A',
            letterSpacing: '0.18em',
            fontWeight: 500,
          }}
        >
          {tagline}
        </span>
        <span
          className="absolute bottom-4 right-4 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full"
          style={{
            background: 'rgba(26,22,20,0.6)',
            color: '#FAF7F3',
            letterSpacing: '0.18em',
            backdropFilter: 'blur(8px)',
          }}
        >
          {duration}
        </span>
      </div>

      {/* Text */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3
          className="font-serif text-xl sm:text-2xl mb-3"
          style={{ color: '#2C2C2C', fontWeight: 400 }}
        >
          {title}
        </h3>
        <p
          className="font-sans font-light text-sm leading-relaxed flex-1 mb-6"
          style={{ color: '#6B6660', lineHeight: 1.75 }}
        >
          {desc}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start text-xs tracking-widest uppercase font-medium flex items-center gap-2 transition-all duration-200"
          style={{ color: '#C4A882', letterSpacing: '0.16em' }}
          onMouseEnter={(e) => { e.currentTarget.style.gap = '12px' }}
          onMouseLeave={(e) => { e.currentTarget.style.gap = '8px' }}
        >
          Book Now
          <span className="text-base">→</span>
        </a>
      </div>
    </article>
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
      className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-12"
      style={{ background: '#F5F0EB' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-14 sm:mb-20">
          <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: '#C4A882', letterSpacing: '0.24em' }}>
            <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: '#C4A882' }} />
            Treatments
            <span className="inline-block w-8 h-px align-middle ml-3" style={{ background: '#C4A882' }} />
          </p>
          <h2
            className="font-serif mb-5"
            style={{
              color: '#2C2C2C',
              fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Crafted for <em style={{ color: '#C4A882', fontStyle: 'italic', fontWeight: 300 }}>your skin.</em>
          </h2>
          <p
            className="font-sans font-light max-w-md mx-auto"
            style={{ color: '#6B6660', fontSize: '1rem', lineHeight: 1.8 }}
          >
            Every treatment begins with an in-depth consultation. We build solutions around your concerns — never one-size-fits-all.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((s, i) => (
            <TreatmentCard key={s.title} {...s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-9 sm:px-10 py-4 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 justify-center"
            style={{ border: '1px solid #C4A882', color: '#C4A882', letterSpacing: '0.16em' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#C4A882'; e.currentTarget.style.color = '#FAF7F3'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C4A882'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
