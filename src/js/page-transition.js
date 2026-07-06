/* ============================================
   HMPS INF — Page Transitions
   Overlay HTML + critical CSS ada di setiap HTML file.
   Module ini hanya handle interception link click.
   ============================================ */

export function initPageTransitions() {
  const fill = document.querySelector('#pt-overlay .pt-fill')
  if (!fill) return

  // Intercept all internal link clicks
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]')
    if (!a) return

    const href = a.getAttribute('href')
    // Skip: anchors, mailto, tel, external, new-tab
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || a.target) return

    try {
      if (new URL(href, location.href).origin !== location.origin) return
    } catch {
      return
    }

    e.preventDefault()
    fill.classList.remove('pt-in')
    fill.classList.add('pt-out')

    setTimeout(() => {
      location.href = href
    }, 460)
  })
}
