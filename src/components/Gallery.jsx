import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pic2 from '../assets/pics/IMG_8346.JPG.jpeg'
import pic3 from '../assets/pics/IMG_8347.JPG.jpeg'
import pic5 from '../assets/pics/IMG_8349.JPG.jpeg'
import pic6 from '../assets/pics/IMG_8353.JPG.jpeg'
import pic7 from '../assets/pics/IMG_8460.jpeg'
import pic8 from '../assets/pics/IMG_8518.jpeg'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  { src: pic2, alt: 'Custom treatment in progress' },
  { src: pic3, alt: 'Skincare ritual' },
  { src: pic7, alt: 'Steam-and-cold treatment under the LED arc light' },
  { src: pic5, alt: 'Treatment finishing touches' },
  { src: pic8, alt: 'LED red-light therapy session in progress' },
  { src: pic6, alt: 'Glow after treatment' },
]

export default function Gallery() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>
            <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
            Inside the Studio
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
            Moments from <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>our work.</em>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
        >
          {photos.map((p, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl group"
              style={{
                aspectRatio: i % 5 === 0 ? '4/5' : '1/1',
                background: 'var(--color-surface-2)',
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(23,45,49,0.35) 0%, transparent 60%)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
