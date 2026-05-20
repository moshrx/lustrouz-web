const items = [
  'Medical Skincare',
  'Customized Plans',
  'Acne · Pigmentation · Sensitivity',
  'Certified Aesthetician',
  'Toronto · North York',
  'In-depth Consultation',
]

function Group({ items }) {
  return (
    <div className="flex items-center shrink-0">
      {items.map((item, i) => (
        <div key={i} className="flex items-center">
          <span
            className="font-serif italic px-7 sm:px-10"
            style={{
              color: 'var(--color-text)',
              fontSize: 'clamp(1.2rem, 2.6vw, 1.9rem)',
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            {item}
          </span>
          <span
            className="w-1 h-1 rounded-full shrink-0"
            style={{ background: 'hsl(0 0.97% 20.2% / 0.5)' }}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      className="overflow-hidden"
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid hsl(0 0.97% 20.2% / 0.12)',
        borderBottom: '1px solid hsl(0 0.97% 20.2% / 0.12)',
      }}
      aria-hidden="true"
    >
      <div className="marquee-track flex whitespace-nowrap py-5 sm:py-6 will-change-transform">
        <Group items={items} />
        <Group items={items} />
      </div>
    </section>
  )
}
