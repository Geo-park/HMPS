/* ============================================
   HMPS INF — useCounter hook
   Replaces initCounters() from main.js
   ============================================ */
import { useEffect, useRef } from 'react'

export function useCounter(to, suffix = '', deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const steps = 36
        let i = 0
        const iv = setInterval(() => {
          i++
          const eased = 1 - Math.pow(1 - i / steps, 3)
          el.textContent = Math.round(to * eased) + suffix
          if (i >= steps) {
            clearInterval(iv)
            el.textContent = to + suffix
          }
        }, 26)
        observer.unobserve(el)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
