/* ============================================
   HMPS INF — Main Entry Point v2
   ============================================ */

import { initTheme } from './theme.js'
import { initNavbar } from './navbar.js'
import { initFloatingBtn } from './floating-btn.js'
import { initPageTransitions } from './page-transition.js'
import { initFooter } from './footer.js'
import { initReveal } from './reveal.js'


/* ── Stat Counter ── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]')
  if (!counters.length) return

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target
      const to = parseInt(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      const steps = 36
      let i = 0
      const iv = setInterval(() => {
        i++
        const eased = 1 - Math.pow(1 - i / steps, 3)
        el.textContent = Math.round(to * eased) + suffix
        if (i >= steps) { clearInterval(iv); el.textContent = to + suffix }
      }, 26)
      observer.unobserve(el)
    })
  }, { threshold: 0.5 })

  counters.forEach(el => observer.observe(el))
}


document.addEventListener('DOMContentLoaded', () => {
  initNavbar()
  initTheme()
  initFloatingBtn()
  initFooter()
  initReveal()
  initCounters()
  initPageTransitions()
})