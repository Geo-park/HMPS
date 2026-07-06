/* ============================================
   HMPS INF — Reveal on Scroll
   ============================================ */

export function initReveal() {
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
}
