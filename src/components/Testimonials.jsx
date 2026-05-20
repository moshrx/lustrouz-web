import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    quote:
      "I had an amazing experience at Lustrouz Aesthetics with Shahama! She helped me get rid of my skin tags. The whole procedure was totally painless and done with great care. She clearly explained everything before starting and gave detailed aftercare instructions. What impressed me the most is that Shahama even followed up a few days later to make sure everything was healing well, and that really shows how much she cares about her clients.",
    name: 'Jifin Ahmed',
    detail: 'Google Review · Skin Tag Removal',
  },
  {
    quote:
      "I had such a wonderful experience at Lustrouz Aesthetics! The clinic has such a calm, luxurious vibe, and everything feels so clean and professional. Shahama is absolutely amazing. She explained every step of my treatment and made me feel so comfortable throughout. My skin felt hydrated, fresh, and glowing right after. Definitely my go-to place from now on!",
    name: 'Hiba Rinsha',
    detail: 'Google Review',
  },
  {
    quote:
      "From the moment I walked in, she made me feel comfortable and well cared for. She took the time to explain each step of the treatment and customized everything to my skin's needs. The results were incredible. My skin feels so refreshed and glowing! You can tell she's passionate about helping her clients look and feel their best. Highly recommend her to anyone looking for professional, personalized aesthetic care.",
    name: 'Dilsana',
    detail: 'Google Review',
  },
  {
    quote:
      "The process was smooth and painless. Initially, I was afraid to undergo the procedure of skin tag removal; however, Shahama informed me about what to expect. Afterwards, I felt reassured about going through with the procedure. Overall, I had a positive experience at Lustrouz Aesthetics. I recommend it to others.",
    name: 'Nicole Writer',
    detail: 'Google Review · Skin Tag Removal',
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
      className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
    >
      <div
        aria-hidden="true"
        className="absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 font-serif pointer-events-none select-none"
        style={{
          color: 'rgba(23,23,23,0.14)',
          fontSize: 'clamp(8rem, 22vw, 16rem)',
          lineHeight: 0.7,
          fontWeight: 400,
        }}
      >
        “
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>
            <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
            Client Stories
            <span className="inline-block w-8 h-px align-middle ml-3" style={{ background: 'var(--color-accent)' }} />
          </p>
          <h2
            className="font-serif"
            style={{
              color: 'var(--color-text)',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Words from <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>real clients.</em>
          </h2>
        </div>

        {/* Quote card */}
        <div
          className="rounded-3xl px-6 py-10 sm:p-14 lg:p-16 relative"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid rgba(23,23,23,0.22)',
            boxShadow: '0 30px 60px -30px rgba(35,31,32,0.15)',
          }}
        >
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: 'var(--color-accent)', fontSize: '1.15rem' }} aria-hidden="true">★</span>
              ))}
            </div>
            <p className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.2em' }}>
              Verified · Google Reviews
            </p>
          </div>

          <div ref={quoteRef} aria-live="polite" aria-atomic="true">
            <blockquote
              className="font-serif font-light italic mb-7 sm:mb-9 mx-auto text-center"
              style={{
                color: 'var(--color-text)',
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                lineHeight: 1.6,
                maxWidth: '52ch',
                fontWeight: 300,
              }}
            >
              “{r.quote}”
            </blockquote>

            <cite className="not-italic block text-center">
              <span className="font-sans font-medium text-sm tracking-wider block" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.14em' }}>
                {r.name}
              </span>
              <span className="font-sans font-light text-xs block mt-1" style={{ color: '#8C8780', letterSpacing: '0.08em' }}>
                {r.detail}
              </span>
            </cite>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8 sm:mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                background: i === active ? 'var(--color-accent)' : 'rgba(23,23,23,0.35)',
                minHeight: 'auto',
              }}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === active ? 'true' : 'false'}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/lustrouz+Aesthetics/@43.7637016,-79.4876457,17z/data=!4m8!3m7!1s0x882b35afeffabbe9:0x839c95d12e168c42!9m1!1b1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-xs tracking-widest uppercase font-medium transition-colors duration-200"
            style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.18em' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
          >
            Read all reviews on Google
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
