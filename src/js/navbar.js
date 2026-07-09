/* ============================================
   HMPS INF — Navbar + Mega Menu Logic v2
   ============================================ */

const DEPT_DATA = [
  { id: 'internal', name: 'Internal', color: '#7F77DD', icon: 'building' },
  { id: 'kominfo', name: 'Kominfo', color: '#1D9E75', icon: 'speakerphone' },
  { id: 'mikat', name: 'Mikat', color: '#BA7517', icon: 'star' },
  { id: 'eksternal', name: 'Eksternal', color: '#378ADD', icon: 'world' },
  { id: 'pao', name: 'PAO', color: '#D85A30', icon: 'settings' },
  { id: 'pp', name: 'PP', color: '#D4537E', icon: 'heart' },
  { id: 'ekraf', name: 'EKRAF', color: '#5865F2', icon: 'bulb' },
]

const NAV_STRUCTURE = [
  { label: 'Beranda', href: '/index.html' },
  {
    // Menu ini tetap menyertakan FAQ karena tautannya mengarah ke bagian FAQ yang tertanam di halaman Tentang.
    label: 'Tentang', mega: true,
    cols: [
      {
        title: 'Explore',
        links: [
          { label: 'Sejarah', href: '/tentang.html#sejarah', icon: 'clock' },
          { label: 'Nilai Organisasi', href: '/tentang.html#nilai', icon: 'award' },
          { label: 'Struktur Organisasi', href: '/tentang.html#struktur', icon: 'building' },
        ]
      },
      {
        title: 'Info',
        links: [
          { label: 'Visi & Misi', href: '/tentang.html#visi-misi', icon: 'target' },
          { label: 'FAQ', href: '/tentang.html#faq', icon: 'help' },
        ]
      }
    ]
  },
  {
    label: 'Departemen', href: '/departemen.html'
  },
  {
    label: 'Akademik', mega: true,
    cols: [
      {
        title: 'Belajar',
        links: [
          { label: 'Roadmap Kuliah', href: '/roadmap.html', icon: 'map' },
          { label: 'Skill-UP Hub', href: '#', icon: 'rocket', disabled: true },
        ]
      },
      {
        title: 'Info',
        links: [
          { label: 'Beasiswa Corner', href: '#', icon: 'school', disabled: true },
          { label: 'Pengumuman', href: '#', icon: 'bell', disabled: true },
        ]
      }
    ]
  },
  {
    label: 'Aspirasi', mega: true,
    cols: [
      {
        title: 'Sampaikan',
        links: [
          { label: 'Form Aspirasi', href: '#', icon: 'message', disabled: true },
        ]
      },
      {
        title: 'Khusus',
        links: [
          { label: 'Pengaduan UKT', href: '#', icon: 'file-invoice', disabled: true },
          { label: 'RAPI (PP)', href: '#', icon: 'heart', disabled: true },
        ]
      }
    ]
  },
  { label: 'Galeri', href: '#', disabled: true },
  { label: 'SIAKAD', href: 'https://neosiakad.uinbanten.ac.id/', mega: false },
]

/* ── Build Navbar ── */
function buildNavbar() {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  navbar.innerHTML = `
    <div class="navbar__inner">

      <a href="/index.html" class="navbar__logo">
        <img src="/asset/logo_hmps.png" alt="Logo HMPS Informatika UIN Sultan Maulana Hasanuddin Banten" loading="lazy" class="navbar__logo-mark" />
        <span class="navbar__logo-text"><b>HMPS</b> INF</span>
      </a>

      <nav class="navbar__nav" aria-label="Navigasi utama">
        ${NAV_STRUCTURE.map(item => buildNavItem(item)).join('')}
      </nav>

      <div class="navbar__actions">
        <button class="icon-btn theme-toggle" id="themeToggle" aria-label="Toggle tema">
          ${iconSun()}
        </button>
        <button class="navbar__hamburger" id="hamburger" aria-label="Buka menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>

    </div>

    <div class="navbar__mobile" id="mobileMenu">
      ${buildMobileMenu()}
    </div>
  `
}

function buildNavItem(item) {
  if (!item.mega) {
    if (item.disabled) {
      return `
        <div class="nav-item">
          <span class="nav-link nav-link--disabled">${item.label}<span class="nav-badge">Ongoing</span></span>
        </div>
      `
    }

    return `
      <div class="nav-item">
        <a href="${item.href}" class="nav-link">${item.label}</a>
      </div>
    `
  }

  if (item.dept) {
    return `
      <div class="nav-item" data-mega>
        <button class="nav-link" aria-haspopup="true" aria-expanded="false">
          ${item.label} ${iconChevron()}
        </button>
        <div class="mega-menu mega-menu--dept">
          <div class="mega-menu__col-title">7 Departemen</div>
          <div class="mega-menu__dept-grid">
            ${DEPT_DATA.map(d => `
              <a href="/departemen.html#${d.id}" class="mega-menu__dept-item">
                <div class="mega-menu__dept-icon"
                  style="background:${d.color}18; color:${d.color}">
                  ${deptIcon(d.icon)}
                </div>
                <span class="mega-menu__dept-name">${d.name}</span>
              </a>
            `).join('')}
          </div>
          <div class="mega-menu__divider">
            <a href="/departemen.html" class="mega-menu__link">
              ${iconGrid()}
              Lihat Semua Departemen
            </a>
          </div>
        </div>
      </div>
    `
  }

  return `
    <div class="nav-item" data-mega>
      <button class="nav-link" aria-haspopup="true" aria-expanded="false">
        ${item.label} ${iconChevron()}
      </button>
      <div class="mega-menu">
        <div class="mega-menu__grid">
          ${item.cols.map(col => `
            <div>
              <div class="mega-menu__col-title">${col.title}</div>
              <div class="mega-menu__links">
                ${col.links.map(link => link.disabled ? `
                  <span class="mega-menu__link mega-menu__link--disabled">
                    <svg class="mega-menu__link-icon" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2">
                      ${getIconPath(link.icon)}
                    </svg>
                    ${link.label}
                    <span class="nav-badge">Ongoing</span>
                  </span>
                ` : `
                  <a href="${link.href}" class="mega-menu__link">
                    <svg class="mega-menu__link-icon" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2">
                      ${getIconPath(link.icon)}
                    </svg>
                    ${link.label}
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
}

function buildMobileMenu() {
  return NAV_STRUCTURE.map(item => {
    if (!item.mega) {
      if (item.disabled) {
        return `<span class="mobile-nav-link mobile-nav-link--disabled">${item.label}<span class="nav-badge">Ongoing</span></span>`
      }
      return `<a href="${item.href}" class="mobile-nav-link">${item.label}</a>`
    }

    if (item.dept) {
      return `
        <div>
          <button class="mobile-accordion__trigger">
            ${item.label} ${iconChevron()}
          </button>
          <div class="mobile-accordion__content">
            ${DEPT_DATA.map(d => `
              <a href="/departemen.html#${d.id}" class="mobile-accordion__link"
                style="color:${d.color}">${d.name}</a>
            `).join('')}
            <a href="/departemen.html" class="mobile-accordion__link">Lihat Semua →</a>
          </div>
        </div>
      `
    }

    const allLinks = item.cols.flatMap(c => c.links)
    return `
      <div>
        <button class="mobile-accordion__trigger">
          ${item.label} ${iconChevron()}
        </button>
        <div class="mobile-accordion__content">
          ${allLinks.map(l => l.disabled ? `
            <span class="mobile-accordion__link mobile-accordion__link--disabled">${l.label}<span class="nav-badge">Ongoing</span></span>
          ` : `
            <a href="${l.href}" class="mobile-accordion__link">${l.label}</a>
          `).join('')}
        </div>
      </div>
    `
  }).join('')
}

/* ── Scroll-aware navbar ── */
function initScrollAware() {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll() // run sekali saat init
}

/* ── Active link ── */
function setActiveLink() {
  const path = window.location.pathname
  // Normalize: treat '/' and '/index.html' the same
  const normPath = (path === '/' || path === '') ? '/index.html' : path

  document.querySelectorAll('.nav-link[href], .mega-menu__link').forEach(el => {
    const href = el.getAttribute('href')
    if (!href) return
    // Strip hash before comparing
    const hrefPath = href.split('#')[0]
    if (hrefPath && hrefPath === normPath) el.classList.add('active')
  })
}

/* ── Mega menu interaction ── */
function initMegaMenu() {
  document.querySelectorAll('.nav-item[data-mega]').forEach(item => {
    const btn = item.querySelector('.nav-link')
    let closeTimer = null

    const open = () => {
      clearTimeout(closeTimer)
      document.querySelectorAll('.nav-item[data-mega]').forEach(other => {
        if (other !== item) {
          other.classList.remove('open')
          other.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false')
        }
      })
      item.classList.add('open')
      btn?.setAttribute('aria-expanded', 'true')
    }

    const close = () => {
      closeTimer = setTimeout(() => {
        item.classList.remove('open')
        btn?.setAttribute('aria-expanded', 'false')
      }, 150)
    }

    item.addEventListener('mouseenter', open)
    item.addEventListener('mouseleave', close)
    item.querySelector('.mega-menu')?.addEventListener('mouseenter', () => clearTimeout(closeTimer))
    item.querySelector('.mega-menu')?.addEventListener('mouseleave', close)

    btn?.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        item.classList.contains('open') ? close() : open()
      }
      if (e.key === 'Escape') {
        item.classList.remove('open')
        btn.setAttribute('aria-expanded', 'false')
      }
    })
  })

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-item[data-mega]')) {
      document.querySelectorAll('.nav-item[data-mega].open').forEach(item => {
        item.classList.remove('open')
        item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false')
      })
    }
  })
}

/* ── Mobile accordion ── */
function initMobileAccordion() {
  document.querySelectorAll('.mobile-accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling
      const isOpen = trigger.classList.contains('open')

      document.querySelectorAll('.mobile-accordion__trigger.open').forEach(t => {
        t.classList.remove('open')
        t.nextElementSibling?.classList.remove('open')
      })

      if (!isOpen) {
        trigger.classList.add('open')
        content?.classList.add('open')
      }
    })
  })
}

/* ── Hamburger ── */
function initHamburger() {
  const hamburger = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('mobileMenu')
  if (!hamburger || !mobileMenu) return

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open')
    mobileMenu.classList.toggle('open', isOpen)
    hamburger.setAttribute('aria-expanded', isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })
}

/* ── Icon helpers ── */
function iconChevron() {
  return `<svg class="nav-link__chevron" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2">
    <polyline points="6 9 12 15 18 9"/>
  </svg>`
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

function iconGrid() {
  return `<svg class="mega-menu__link-icon" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>`
}

function deptIcon(name) {
  const paths = {
    building: `<path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>`,
    speakerphone: `<path d="M18 8a6 6 0 0 1 0 8"/><path d="M22 6a10 10 0 0 1 0 12"/><path d="M6 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l6 4V4L6 8z"/>`,
    star: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
    world: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
    settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
    heart: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
    bulb: `<line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>`,
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    ${paths[name] || ''}
  </svg>`
}

function getIconPath(name) {
  const paths = {
    clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    award: `<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>`,
    target: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
    mail: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
    map: `<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>`,
    rocket: `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>`,
    school: `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`,
    help: `<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
    bell: `<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>`,
    message: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
    'file-invoice': `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>`,
    heart: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
  }
  return paths[name] || ''
}

/* ── Export ── */
export function initNavbar() {
  buildNavbar()
  initScrollAware()
  initMegaMenu()
  initMobileAccordion()
  initHamburger()
  setActiveLink()
}

export { iconSun, iconMoon, DEPT_DATA }