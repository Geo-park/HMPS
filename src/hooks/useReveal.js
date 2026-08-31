/* ============================================
   HMPS INF — useReveal hook
   Replaces initReveal() from reveal.js
   ============================================ */
import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const check = () => {
      const trigger = window.innerHeight * 0.94
      document.querySelectorAll('.reveal:not(.in)').forEach(el => {
        if (el.getBoundingClientRect().top < trigger) el.classList.add('in')
      })
    }

    const t0 = setTimeout(check, 40)
    const t1 = setTimeout(check, 250)
    const t2 = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'))
    }, 1400)

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])
}
