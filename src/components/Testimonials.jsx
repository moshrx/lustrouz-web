import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Real reviews from Google. Lightly trimmed for length; nothing rephrased.
const reviews = [
  {
    quote:
      "I had an amazing experience at Lustrouz Aesthetics with Shahama! She helped me get rid of my skin tags — the whole procedure was totally painless and done with great care. She clearly explained everything before starting and gave detailed aftercare instructions. What impressed me the most is that Shahama even followed up a few days later to make sure everything was healing well — that really shows how much she cares about her clients.",
    name: 'Jifin Ahmed',
    detail: 'Google Review · Skin Tag Removal',
  },
  {
    quote:
      "I had such a wonderful experience at Lustrouz Aesthetics! The clinic has such a calm, luxurious vibe, and everything feels so clean and professional. Shahama is absolutely amazing — she explained every step of my treatment and made me feel so comfortable throughout. My skin felt hydrated, fresh, and glowing right after. Definitely my go-to place from now on!",
    name: 'Hiba Rinsha',
    detail: 'Google Review',
  },
  {
    quote:
      "From the moment I walked in, she made me feel comfortable and well cared for. She took the time to explain each step of the treatment and customized everything to my skin's needs. The results were incredible — my skin feels so refreshed and glowing! You can tell she's passionate about helping her clients look and feel their best. Highly recommend her to anyone looking for professional, personalized aesthetic care.",
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
        <p className="text-xs tracking-widest uppercase mb-8 sm:mb-10 font-medium" style={{ color: '#C4A882', letterSpacing: '0.24em' }}>
          <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: '#C4A882' }} />
          Client Stories
        </p>

        {/* Stars + verified badge */}
        <div className="flex flex-col items-center gap-3 mb-8 sm:mb-10">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#C4A882', fontSize: '1.15rem' }} aria-hidden="true">★</span>
            ))}
          </div>
          <p className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(250,247,243,0.45)', letterSpacing: '0.2em' }}>
            Verified · Google Reviews
          </p>
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

        {/* Link to Google reviews */}
        <a
          href="https://www.google.com/maps/place/lustrouz+Aesthetics/@43.7637016,-79.4876457,17z/data=!4m8!3m7!1s0x882b35afeffabbe9:0x839c95d12e168c42!9m1!1b1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 sm:mt-10 text-xs tracking-widest uppercase font-medium transition-colors duration-200"
          style={{ color: 'rgba(250,247,243,0.55)', letterSpacing: '0.18em' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#C4A882')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,243,0.55)')}
        >
          Read all reviews on Google
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
