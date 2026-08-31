/* ============================================
   HMPS INF — Navigation Data
   ============================================ */

export const DEPT_DATA = [
  { id: 'internal', name: 'Internal', color: '#6366F1', icon: 'building' },
  { id: 'kominfo', name: 'Kominfo', color: '#1D9E75', icon: 'speakerphone' },
  { id: 'mikat', name: 'Mikat', color: '#BA7517', icon: 'star' },
  { id: 'eksternal', name: 'Eksternal', color: '#378ADD', icon: 'world' },
  { id: 'pao', name: 'PAO', color: '#D85A30', icon: 'settings' },
  { id: 'pp', name: 'PP', color: '#D4537E', icon: 'heart' },
  { id: 'ekraf', name: 'EKRAF', color: '#5865F2', icon: 'bulb' },
]

export const NAV_STRUCTURE = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Tentang', mega: true,
    cols: [
      {
        title: 'Explore',
        links: [
          { label: 'Tentang Kami', href: '/tentang#tentang', icon: 'clock' },
          { label: 'Struktur Organisasi', href: '/tentang#struktur', icon: 'building' },
          { label: 'Nilai Organisasi', href: '/tentang#nilai', icon: 'award' },
        ]
      },
      {
        title: 'Info',
        links: [
          { label: 'Departemen', href: '/tentang#departemen', icon: 'building' },
          { label: 'Visi & Misi', href: '/tentang#visi-misi', icon: 'target' },
          { label: 'FAQ', href: '/tentang#faq', icon: 'help' },
        ]
      }
    ]
  },
  { label: 'Galeri', href: '/galeri' },
  { label: 'SIAKAD', href: 'https://neosiakad.uinbanten.ac.id/' },
]

/* ── Icon paths ── */
export const DEPT_ICON_PATHS = {
  building: `<path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>`,
  speakerphone: `<path d="M18 8a6 6 0 0 1 0 8"/><path d="M22 6a10 10 0 0 1 0 12"/><path d="M6 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l6 4V4L6 8z"/>`,
  star: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  world: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
  settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
  heart: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
  bulb: `<line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>`,
}

export const LINK_ICON_PATHS = {
  clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  award: `<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>`,
  target: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
  building: `<path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>`,
  help: `<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
}
