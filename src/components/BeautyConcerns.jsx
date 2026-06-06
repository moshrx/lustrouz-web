
const concerns = [
  {
    title: 'Acne & Breakouts',
    desc: "Active breakouts, hormonal congestion, and post-acne marks. We calm, clear, and rebuild without stripping the skin.",
    icon: '✦',
  },
  {
    title: 'Hyperpigmentation & Uneven Skin',
    desc: 'Melasma, sun damage, and uneven tone, softened progressively with brightening protocols and barrier care.',
    icon: '◈',
  },
  {
    title: 'Fine Lines & Wrinkles',
    desc: 'Early signs of aging around the eyes, mouth, and forehead. Collagen-stimulating protocols that smooth and firm.',
    icon: '✧',
  },
  {
    title: 'Sensitive Skin',
    desc: "Reactive, easily flushed, or irritated skin. Gentle, calming treatments designed to restore comfort.",
    icon: '◉',
  },
  {
    title: 'Compromised Barrier',
    desc: 'Over-exfoliated or weakened skin barriers. Restorative protocols that rebuild resilience and hydration.',
    icon: '◆',
  },
  {
    title: 'Hair Loss & Thinning',
    desc: 'Thinning, shedding, and post-partum hair loss. PRP and scalp restoration therapies designed to support the natural hair growth cycle.',
    icon: '❋',
  },
]

export default function BeautyConcerns() {

  return (
    <section
      id="concerns"
      className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>
            <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
            What We Address
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
            Common <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>skin concerns</em>
          </h2>
          <p className="font-sans font-light max-w-md mx-auto" style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
            Real, lasting results come from understanding your skin first. Here's where we focus.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {concerns.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-500 group"
              style={{ background: 'var(--color-surface)', minHeight: '100%', border: '1px solid rgba(23,23,23,0.15)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(35,31,32,0.09)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <span
                className="text-2xl mb-5 block transition-transform duration-300 group-hover:scale-110"
                style={{ color: 'var(--color-accent)' }}
                aria-hidden="true"
              >
                {c.icon}
              </span>

              <h3
                className="font-serif text-lg sm:text-xl mb-3"
                style={{ color: 'var(--color-text)', fontWeight: 400 }}
              >
                {c.title}
              </h3>
              <p
                className="font-sans font-light text-sm leading-relaxed flex-1"
                style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
