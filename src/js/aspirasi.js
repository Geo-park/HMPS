/* ============================================
   HMPS INF — Aspirasi Page Init
   ============================================ */

import { initTheme } from './theme.js'
import { initNavbar } from './navbar.js'
import { initFloatingBtn } from './floating-btn.js'
import { initPageTransitions } from './page-transition.js'
import { initFooter } from './footer.js'
import { initReveal } from './reveal.js'

document.addEventListener('DOMContentLoaded', () => {
  initNavbar()
  initTheme()
  initFooter()
  initFloatingBtn()
  initPageTransitions()
  initReveal()
})
