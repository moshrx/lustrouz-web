import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { src, srcSet, sizes } from '../lib/images'

const BOOKING_URL = 'https://lustrouz.square.site/'

export default function Hero() {
  const eyebrowRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const metaRef = useRef(null)
  const scrollRef = useRef(null)
  const overlayRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 })
      .fromTo(imageRef.current, { scale: 1.08 }, { scale: 1, duration: 2.2, ease: 'power2.out' }, 0)
      .fromTo(eyebrowRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=1.4')
      .fromTo(headlineRef.current?.querySelectorAll('.hero-line') || [], { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.12 }, '-=0.6')
      .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      .fromTo(ctaRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
      .fromTo(metaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, '-=0.4')
      .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2')

    gsap.to(scrollRef.current?.querySelector('.scroll-dot'), {
      y: 18,
      repeat: -1,
      yoyo: true,
      duration: 1.4,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', background: '#1A1614' }}
    >
      {/* Background image — using <img> instead of background-image so the browser
          can apply srcSet + fetchpriority for the LCP. */}
      <img
        ref={imageRef}
        src={src('hero', 1600)}
        srcSet={srcSet('hero', [800, 1200, 1600, 2000])}
        sizes={sizes.hero}
        alt=""
        aria-hidden="true"
        width="1600"
        height="900"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.55) saturate(0.9)' }}
      />

      {/* Gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,22,20,0.55) 0%, rgba(26,22,20,0.25) 35%, rgba(26,22,20,0.35) 65%, rgba(26,22,20,0.75) 100%)',
        }}
      />

      {/* Soft accent */}
      <div
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,168,130,0.18), transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-20">
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full">
          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="text-[10px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8 font-medium flex items-center"
            style={{ color: '#C4A882', letterSpacing: '0.28em' }}
          >
            <span className="inline-block w-8 sm:w-10 h-px mr-3" style={{ background: '#C4A882' }} />
            Medical Skincare · Toronto
          </p>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-serif leading-[1.02] mb-7 sm:mb-9"
            style={{
              color: '#FAF7F3',
              fontSize: 'clamp(2.6rem, 8vw, 6.5rem)',
              maxWidth: '14ch',
              fontWeight: 400,
            }}
          >
            <span className="hero-line block">Skin elevated</span>
            <span className="hero-line block">
              with <em style={{ color: '#C4A882', fontStyle: 'italic', fontWeight: 300 }}>intention.</em>
            </span>
          </h1>

          {/* Subhead */}
          <p
            ref={subRef}
            className="font-sans font-light mb-9 sm:mb-11"
            style={{
              color: 'rgba(250,247,243,0.82)',
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              maxWidth: '46ch',
              lineHeight: 1.7,
            }}
          >
            Expert care and advanced treatments — customized for acne, pigmentation, sensitivity, and compromised barriers. Science, skill, and subtle luxury.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center mb-12 sm:mb-16">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-9 py-4 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 text-center justify-center"
              style={{ background: '#C4A882', color: '#FAF7F3', letterSpacing: '0.16em' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#A8896A'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(196,168,130,0.35)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C4A882'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Book a Consultation
            </a>
            <a
              href="#treatments"
              onClick={(e) => { e.preventDefault(); document.querySelector('#treatments')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-8 sm:px-9 py-4 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 text-center justify-center"
              style={{ border: '1px solid rgba(250,247,243,0.45)', color: '#FAF7F3', letterSpacing: '0.16em' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C4A882'; e.currentTarget.style.color = '#C4A882' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(250,247,243,0.45)'; e.currentTarget.style.color = '#FAF7F3' }}
            >
              View Treatments
            </a>
          </div>

          {/* Meta strip */}
          <div
            ref={metaRef}
            className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[10px] sm:text-xs tracking-widest uppercase"
            style={{ color: 'rgba(250,247,243,0.55)', letterSpacing: '0.2em' }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full" style={{ background: '#C4A882' }} />
              Certified Medical Aesthetician
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full" style={{ background: '#C4A882' }} />
              7+ Years Clinical Experience
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-1 h-1 rounded-full" style={{ background: '#C4A882' }} />
              Custom Treatment Plans
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          ref={scrollRef}
          type="button"
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-0"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to next section"
          style={{ minHeight: 'auto' }}
        >
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{ color: 'rgba(250,247,243,0.55)', letterSpacing: '0.24em' }}
          >
            Scroll
          </span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(250,247,243,0.18)' }}>
            <div className="scroll-dot w-px h-4 absolute top-0" style={{ background: '#C4A882' }} />
          </div>
        </button>
      </div>
    </section>
  )
}
