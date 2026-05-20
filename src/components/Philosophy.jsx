import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import estheticianImg from '../assets/optimized/esthetician-shahama.jpeg'

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
  const cardRef = useRef(null)
  const copyRef = useRef(null)
  const pillarsRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
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
      className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 sm:mb-24">
          {/* Founder photo card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <figure
              ref={cardRef}
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: '1px solid rgba(23,23,23,0.15)',
                aspectRatio: '4/5',
                background: 'var(--color-surface-2)',
              }}
            >
              <img
                src={estheticianImg}
                alt="Shahama Nellanchery, Certified Medical Aesthetician, at the Lustrouz Aesthetics studio"
                width="1120"
                height="1400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{ background: 'linear-gradient(to top, rgba(15,12,10,0.78) 0%, rgba(15,12,10,0.0) 45%)' }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-10">
                <p className="text-[10px] tracking-widest uppercase mb-2" style={{ color: 'var(--color-bg)', letterSpacing: '0.28em', opacity: 0.78 }}>
                  Founder · est. 2022
                </p>
                <p
                  className="font-serif"
                  style={{
                    color: 'var(--color-bg)',
                    fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)',
                    lineHeight: 1.2,
                    fontWeight: 400,
                  }}
                >
                  Shahama Nellanchery
                </p>
                <p
                  className="font-sans font-light text-sm mt-1.5"
                  style={{ color: 'hsl(36 71.43% 98.63% / 0.78)' }}
                >
                  Certified Medical Aesthetician
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Right copy */}
          <div ref={copyRef} className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>
              <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
              About the Clinic
            </p>
            <h2
              className="font-serif mb-7"
              style={{
                color: 'var(--color-text)',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
              }}
            >
              Where medical precision meets <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>subtle luxury.</em>
            </h2>
            <p
              className="font-sans font-light mb-5"
              style={{ color: 'var(--color-muted)', fontSize: '1.02rem', lineHeight: 1.85 }}
            >
              At Lustrouz Aesthetics, we are dedicated to elevating your skin through expert care, advanced treatments, and a personalized approach to beauty. We believe that true confidence begins with healthy, well-nurtured skin, and our goal is to help you achieve just that.
            </p>
            <p
              className="font-sans font-light mb-5"
              style={{ color: 'var(--color-muted)', fontSize: '1.02rem', lineHeight: 1.85 }}
            >
              Led by <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>Shahama Nellanchery</strong>, a certified Medical Aesthetician with over 3 years of experience in clinical aesthetics and 4 years of background in anesthetic nursing, our clinic is built on a strong foundation of medical knowledge and aesthetic precision. This dual expertise allows us to deliver treatments that are not only effective but also safe, gentle, and tailored to each client’s unique skin needs.
            </p>
            <p
              className="font-sans font-light mb-5"
              style={{ color: 'var(--color-muted)', fontSize: '1.02rem', lineHeight: 1.85 }}
            >
              We focus on creating customized treatment plans for concerns such as acne, sensitivity, pigmentation, and compromised skin barriers. Every service begins with an in-depth consultation to ensure we fully understand your skin and provide solutions that offer real, lasting results.
            </p>
            <p
              className="font-sans font-light mb-5"
              style={{ color: 'var(--color-muted)', fontSize: '1.02rem', lineHeight: 1.85 }}
            >
              At Lustrouz Aesthetics, we take a refined and minimalistic approach to beauty, enhancing your natural features rather than altering them. Our space is designed to offer a calm, comfortable, and professional environment where you can feel confident and cared for.
            </p>
            <p
              className="font-sans font-light"
              style={{ color: 'var(--color-text)', fontSize: '1.05rem', lineHeight: 1.85, fontStyle: 'italic' }}
            >
              Experience skincare that blends science, skill, and subtle luxury.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="mb-20 sm:mb-24">
          <div className="flex items-center justify-center gap-4 mb-12 sm:mb-14">
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent))' }} />
            <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>Our Approach</p>
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent))' }} />
          </div>

          <div ref={pillarsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-14">
            {pillars.map((p, i) => (
              <div key={p.label} className="text-center">
                <p
                  className="font-serif mb-3"
                  style={{
                    color: 'var(--color-text)',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontStyle: i === 1 ? 'italic' : 'normal',
                    fontWeight: 400,
                  }}
                >
                  {p.label}.
                </p>
                <p
                  className="font-sans font-light max-w-xs mx-auto"
                  style={{ color: 'var(--color-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}
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
          className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 sm:pt-14"
          style={{ borderTop: '1px solid rgba(23,23,23,0.25)' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-serif mb-2 sm:mb-3"
                style={{
                  color: 'var(--color-accent)',
                  fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] sm:text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-muted)', letterSpacing: '0.16em' }}
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
