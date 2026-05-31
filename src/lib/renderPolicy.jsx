// Renders policy body text (markdown-lite: **bold**, bullet lists) as safe JSX.
// No dangerouslySetInnerHTML — safe for static content and screen readers.

function inlineBold(text) {
  const parts = text.split(/\*\*(.+?)\*\*/)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: 'var(--color-text)', fontWeight: 500 }}>{part}</strong>
      : part
  )
}

export function renderPolicyBody(text) {
  return text.split('\n\n').map((block, i) => {
    const lines = block.split('\n')

    if (lines.length > 1 && lines.every((l) => l.startsWith('- '))) {
      return (
        <ul key={i} className="space-y-2 mb-5 pl-0" style={{ listStyle: 'none' }}>
          {lines.map((line, j) => (
            <li key={j} className="flex gap-3 font-sans font-light text-sm sm:text-base" style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
              <span style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.15em' }} aria-hidden="true">–</span>
              <span>{inlineBold(line.replace(/^- /, ''))}</span>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p key={i} className="font-sans font-light text-sm sm:text-base mb-5" style={{ color: 'var(--color-muted)', lineHeight: 1.85 }}>
        {inlineBold(block)}
      </p>
    )
  })
}
