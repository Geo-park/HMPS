/* ============================================
   HMPS INF — Theme Logic v2
   ============================================ */

const THEME_KEY = 'hmps-theme'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY)
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  updateToggleIcon(theme)
}

function updateToggleIcon(theme) {
  const btn = document.getElementById('themeToggle')
  if (!btn) return
  btn.innerHTML = theme === 'dark' ? iconSun() : iconMoon()
  btn.setAttribute('aria-label', theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap')
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || getSystemTheme()
  const next = current === 'dark' ? 'light' : 'dark'
  localStorage.setItem(THEME_KEY, next)
  applyTheme(next)
}

function iconSun() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`
}

function iconMoon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`
}

export function initTheme() {
  const theme = getSavedTheme() || getSystemTheme()
  applyTheme(theme)

  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!getSavedTheme()) applyTheme(e.matches ? 'dark' : 'light')
  })
}