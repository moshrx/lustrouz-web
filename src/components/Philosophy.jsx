import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { src, srcSet, sizes } from '../lib/images'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  { label: 'Intentional', detail: 'Every plan begins with a thorough consultation.' },
  { label: 'Evidence-led', detail: 'Treatments rooted in clinical knowledge.' },
  { label: 'Personalized', detail: 'Tailored to your unique skin needs.' },
]

const stats = [
  { value: '3+', label: 'Years Clinical Aesthetics' },
  { value: '4+', label: 'Years Anesthetic Nursing' },
  { value: '100%', label: 'Custom Treatment Plans' },
]

export default function Philosophy() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const copyRef = useRef(null)
  const pillarsRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
      gsap.fromTo(
        copyRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
      gsap.fromTo(
        pillarsRef.current?.children || [],
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: pillarsRef.current, start: 'top 85%' },
        }
      )
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-12"
      style={{ background: '#FAF7F3' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
          {/* Left image */}
          <div ref={imgRef} className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ aspectRatio: '4/5', background: '#EFE7DE' }}
              >
                <img
                  src={src('founder', 900)}
                  srcSet={srcSet('founder', [480, 800, 1200])}
                  sizes={sizes.founder}
                  alt="Shahama Nellanchery — Certified Medical Aesthetician"
                  width="800"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-3 sm:-right-5 px-5 py-4 rounded-2xl backdrop-blur-md"
                style={{
                  background: 'rgba(26,22,20,0.92)',
                  border: '1px solid rgba(196,168,130,0.25)',
                  maxWidth: '220px',
                }}
              >
                <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: '#C4A882', letterSpacing: '0.2em' }}>Led by</p>
                <p className="font-serif text-base sm:text-lg leading-tight" style={{ color: '#FAF7F3' }}>Shahama Nellanchery</p>
                <p className="text-[11px] mt-1" style={{ color: 'rgba(250,247,243,0.6)' }}>Certified Medical Aesthetician</p>
              </div>
            </div>
          </div>

          {/* Right copy */}
          <div ref={copyRef} className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: '#C4A882', letterSpacing: '0.24em' }}>
              <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: '#C4A882' }} />
              About the Clinic
            </p>
            <h2
              className="font-serif mb-7"
              style={{
                color: '#2C2C2C',
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                lineHeight: 1.08,
              }}
            >
              Where medical precision meets <em style={{ color: '#C4A882', fontStyle: 'italic', fontWeight: 300 }}>subtle luxury.</em>
            </h2>
            <p
              className="font-sans font-light mb-5"
              style={{ color: '#555', fontSize: '1.02rem', lineHeight: 1.85 }}
            >
              At Lustrouz Aesthetics, we elevate your skin through expert care, advanced treatments, and a personalized approach to beauty. True confidence begins with healthy, well-nurtured skin — our goal is to help you achieve just that.
            </p>
            <p
              className="font-sans font-light"
              style={{ color: '#555', fontSize: '1.02rem', lineHeight: 1.85 }}
            >
              Led by <strong style={{ color: '#2C2C2C', fontWeight: 500 }}>Shahama Nellanchery</strong>, a Certified Medical Aesthetician with over 3 years in clinical aesthetics and 4 years in anesthetic nursing — our practice is built on medical knowledge and aesthetic precision, delivering treatments that are safe, gentle, and effective.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="mb-20 sm:mb-24">
          <div className="flex items-center justify-center gap-4 mb-12 sm:mb-14">
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to right, transparent, #C4A882)' }} />
            <p className="text-xs tracking-widest uppercase" style={{ color: '#C4A882', letterSpacing: '0.24em' }}>Our Approach</p>
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to left, transparent, #C4A882)' }} />
          </div>

          <div ref={pillarsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-14">
            {pillars.map((p, i) => (
              <div key={p.label} className="text-center">
                <p
                  className="font-serif mb-3"
                  style={{
                    color: '#2C2C2C',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontStyle: i === 1 ? 'italic' : 'normal',
                    fontWeight: 400,
                  }}
                >
                  {p.label}.
                </p>
                <p
                  className="font-sans font-light max-w-xs mx-auto"
                  style={{ color: '#6B6660', fontSize: '0.92rem', lineHeight: 1.7 }}
                >
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-4 sm:gap-8 pt-14 sm:pt-16"
          style={{ borderTop: '1px solid rgba(196,168,130,0.25)' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-serif mb-2 sm:mb-3"
                style={{
                  color: '#C4A882',
                  fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] sm:text-xs tracking-widest uppercase"
                style={{ color: '#6B6660', letterSpacing: '0.16em' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
