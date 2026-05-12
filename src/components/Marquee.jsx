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
              color: i % 2 ? 'rgba(250,247,243,0.85)' : '#C4A882',
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            {item}
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: 'rgba(196,168,130,0.6)' }}
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
        background: '#1A1614',
        borderTop: '1px solid rgba(196,168,130,0.15)',
        borderBottom: '1px solid rgba(196,168,130,0.15)',
      }}
      aria-hidden="true"
    >
      <div className="marquee-track flex whitespace-nowrap py-5 sm:py-6 will-change-transform">
        {/* Two identical groups → the track is exactly 2× the content,
            so translateX(-50%) creates a perfect, seamless loop. */}
        <Group items={items} />
        <Group items={items} />
      </div>
    </section>
  )
}
