import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = options.children ? Array.from(el.children) : [el]

    // Set initial hidden state only after JS runs (progressive enhancement)
    targets.forEach((t) => {
      t.style.opacity = '0'
      t.style.transform = options.x ? 'translateX(-32px)' : 'translateY(24px)'
      t.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const delay = options.children ? i * 80 : 0
            setTimeout(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'none'
            }, delay)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => io.observe(t))
    return () => {
      io.disconnect()
      // Restore visibility on cleanup
      targets.forEach((t) => {
        t.style.opacity = ''
        t.style.transform = ''
        t.style.transition = ''
      })
    }
  }, [options.children, options.x])
  return ref
}
