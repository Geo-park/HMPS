/* ============================================
   HMPS INF — useReveal hook
   Replaces initReveal() from reveal.js
   ============================================ */
import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const check = () => {
      const trigger = window.innerHeight * 0.94
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add('in')
        } else {
          el.classList.remove('in')
        }
      })
    }

    const t0 = setTimeout(check, 40)
    const t1 = setTimeout(check, 250)

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])
}
