/**
 * Editorial typographic logo for Lustrouz Aesthetics.
 * Pure type (no raster), uses currentColor → theme-aware everywhere.
 * Sharp at every size, ~zero bytes, instant render.
 *
 * Variants:
 *   "full"    — Monogram + LUSTROUZ + AESTHETICS  (header/footer)
 *   "compact" — Monogram + LUSTROUZ               (tight mobile navbar)
 *   "mark"    — Monogram only                     (favicons, small badges)
 */
export default function Logo({ variant = 'full', size = 44, color = 'currentColor' }) {
  const monogramSize = size
  const wordSize = Math.round(size * 0.36)
  const taglineSize = Math.round(size * 0.19)

  return (
    <span
      className="inline-flex items-center gap-3 leading-none select-none"
      style={{ color }}
      aria-label="Lustrouz Aesthetics"
    >
      {/* Monogram — pure typographic LZ ligature */}
      <span
        className="font-serif relative"
        style={{
          fontSize: `${monogramSize}px`,
          lineHeight: 1,
          letterSpacing: '-0.08em',
          fontWeight: 500,
          fontStyle: 'normal',
          paddingRight: '0.05em',
          color: 'currentColor',
        }}
      >
        <span style={{ display: 'inline-block' }}>L</span>
        <span style={{ display: 'inline-block', fontStyle: 'italic' }}>Z</span>
        {/* Hairline accent under the monogram */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '6%',
            right: '6%',
            bottom: '0.18em',
            height: '1px',
            background: 'currentColor',
            opacity: 0.5,
          }}
        />
      </span>

      {variant !== 'mark' && (
        <span className="flex flex-col leading-none">
          <span
            className="font-serif"
            style={{
              fontSize: `${wordSize}px`,
              letterSpacing: '0.22em',
              fontWeight: 500,
              color: 'currentColor',
            }}
          >
            LUSTROUZ
          </span>
          {variant === 'full' && (
            <span
              className="font-sans"
              style={{
                fontSize: `${taglineSize}px`,
                letterSpacing: '0.36em',
                opacity: 0.65,
                marginTop: '4px',
                color: 'currentColor',
                fontWeight: 400,
              }}
            >
              AESTHETICS
            </span>
          )}
        </span>
      )}
    </span>
  )
}
