import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BOOKING_URL } from '../lib/constants'
import { findCategoryBySlug } from '../lib/treatmentCategories'

const imgFrameStyle = `
  .img-frame { aspect-ratio: 4 / 3; }
  .aside-img { width: 100%; }
  @media (min-width: 640px) {
    .img-frame[data-ratio="1/1"]  { aspect-ratio: 1 / 1; }
    .img-frame[data-ratio="4/3"]  { aspect-ratio: 4 / 3; }
    .img-frame[data-ratio="auto"] { aspect-ratio: auto; }
    .aside-img { flex: 0 0 260px; max-width: 260px; }
  }
`

function ImgFrame({ img }) {
  const ratio = img.ratio ?? (img.isBeforeAfter ? '1/1' : 'auto')
  const fit = img.isBeforeAfter ? 'cover' : 'contain'
  return (
    <figure className="m-0">
      <div
        className="img-frame"
        data-ratio={ratio}
        style={{
          borderRadius: '6px',
          overflow: 'hidden',
          background: 'var(--color-surface)',
        }}
      >
        <img
          src={img.src}
          alt={img.caption}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }}
        />
      </div>
      <figcaption
        className="font-sans mt-2"
        style={{ color: 'var(--color-muted)', fontSize: '0.78rem', lineHeight: 1.5, opacity: 0.75 }}
      >
        {img.caption}
      </figcaption>
    </figure>
  )
}

function TreatmentAccordion({ name, desc, images, index, isOpen, onToggle }) {
  const paras = desc.split('\n\n')
  const btnRef = useRef(null)

  function handleToggle() {
    const wasOpen = isOpen
    onToggle()
    if (!wasOpen) {
      requestAnimationFrame(() => {
        if (!btnRef.current) return
        const navHeight = document.querySelector('.site-nav')?.offsetHeight ?? 80
        const top = btnRef.current.getBoundingClientRect().top + window.scrollY - navHeight - 16
        window.scrollTo({ top, behavior: 'smooth' })
      })
    }
  }

  return (
    <div
      style={{
        borderTop: index === 0 ? '1px solid rgba(23,23,23,0.16)' : 'none',
        borderBottom: '1px solid rgba(23,23,23,0.16)',
      }}
    >
      <button
        ref={btnRef}
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        className="w-full flex items-baseline justify-between gap-6 py-5 sm:py-6 text-left"
        style={{ background: 'transparent', minHeight: 'auto' }}
      >
        <span
          className="font-serif"
          style={{
            color: 'var(--color-text)',
            fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          {name}
        </span>
        <span
          aria-hidden="true"
          className="font-serif shrink-0"
          style={{
            color: 'var(--color-accent)',
            fontSize: '1.5rem',
            lineHeight: 1,
            transition: 'transform 220ms ease',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="pb-8">
          {/* When 4+ images: on desktop, pull first image to the right of the description */}
          {images && images.length >= 4 ? (
            <>
              <div className="sm:flex sm:gap-6 sm:items-start mb-8">
                <div
                  className="font-sans font-light"
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    flex: '1 1 0',
                    minWidth: 0,
                  }}
                >
                  {paras.map((para, i) => (
                    <p key={i} style={{ marginBottom: i < paras.length - 1 ? '1em' : 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-6 sm:mt-0 aside-img">
                  <ImgFrame img={images[0]} />
                </div>
              </div>
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: images.length - 1 === 1
                    ? '1fr'
                    : images.length - 1 === 2
                      ? 'repeat(2, 1fr)'
                      : 'repeat(auto-fill, minmax(240px, 1fr))',
                }}
              >
                {images.slice(1).map((img, i) => (
                  <ImgFrame key={i} img={img} />
                ))}
              </div>
            </>
          ) : (
            <>
              <div
                className="font-sans font-light mb-8"
                style={{
                  color: 'var(--color-muted)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  maxWidth: '60ch',
                }}
              >
                {paras.map((para, i) => (
                  <p key={i} style={{ marginBottom: i < paras.length - 1 ? '1em' : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
              {images && images.length > 0 && (
                <div
                  className="grid gap-4"
                  style={{
                    gridTemplateColumns: images.length === 1
                      ? '1fr'
                      : images.length === 2
                        ? 'repeat(2, 1fr)'
                        : 'repeat(auto-fill, minmax(240px, 1fr))',
                  }}
                >
                  {images.map((img, i) => (
                    <ImgFrame key={i} img={img} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default function CategoryPage() {
  const { slug } = useParams()
  const category = findCategoryBySlug(slug)
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (category) {
      document.title = `${category.title} · Lustrouz Aesthetics`
    }
    return () => {
      document.title = 'Lustrouz Aesthetics · Medical Skincare Clinic · Toronto'
    }
  }, [category, slug])

  if (!category) {
    return (
      <div className="site-shell">
        <Navbar />
        <main id="main" style={{ paddingTop: '8rem', minHeight: '60vh', textAlign: 'center' }}>
          <p className="font-serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Category not found.
          </p>
          <Link to="/" style={{ color: 'var(--color-accent)' }}>
            Back to home →
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="site-shell">
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="category-hero">
          <div className="category-hero__media" aria-hidden="true">
            <img
              src={category.heroImage}
              alt=""
              fetchPriority="high"
              style={category.heroPosition ? { objectPosition: category.heroPosition } : undefined}
            />
            <div className="category-hero__overlay" />
          </div>
          <div className="container-shell category-hero__inner">
            <p className="eyebrow category-hero__eyebrow">{category.eyebrow}</p>
            <h1 className="display-title category-hero__title">{category.title}</h1>
            <p className="lead-copy category-hero__copy">{category.summary}</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a Consultation
            </a>
          </div>
        </section>

        <style>{imgFrameStyle}</style>

        {/* Treatments accordion */}
        <section
          className="py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12"
          style={{ background: 'var(--color-surface)' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p
                className="text-xs tracking-widest uppercase mb-5 font-medium"
                style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}
              >
                <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
                Treatments in this Category
                <span className="inline-block w-8 h-px align-middle ml-3" style={{ background: 'var(--color-accent)' }} />
              </p>
              <h2
                className="font-serif"
                style={{
                  color: 'var(--color-text)',
                  fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
                  lineHeight: 1.15,
                  fontWeight: 400,
                }}
              >
                What you can book.
              </h2>
            </div>

            <div>
              {category.treatments.map((t, i) => (
                <TreatmentAccordion
                  key={t.name}
                  name={t.name}
                  desc={t.desc}
                  images={t.images}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>

            <div className="mt-12 sm:mt-16 text-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-9 sm:px-10 py-4 text-xs sm:text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 justify-center"
                style={{
                  border: '1px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.16em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)'
                  e.currentTarget.style.color = 'var(--color-surface)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
