/* ============================================
   HMPS INF — Navigation Data
   ============================================ */

export const NAV_STRUCTURE = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Profil', mega: true,
    cols: [
      {
        title: 'Explore',
        links: [
          { label: 'Tentang Kami', href: '/tentang#tentang', icon: 'clock' },
          { label: 'Struktur Organisasi', href: '/tentang#struktur', icon: 'building' },
          { label: 'Departemen', href: '/tentang#departemen', icon: 'building' },
        ]
      },
      {
        title: 'Info',
        links: [
          { label: 'Nilai Organisasi', href: '/tentang#nilai', icon: 'award' },
          { label: 'Visi & Misi', href: '/tentang#visi-misi', icon: 'target' },
          { label: 'FAQ', href: '/tentang#faq', icon: 'help' },
        ]
      }
    ]
  },
  {
    label: 'Layanan', mega: true, compact: true,
    cols: [
      {
        title: 'Layanan',
        links: [
          { label: 'Servis Elektronik', href: '/servis', icon: 'smartphone' },
          { label: 'Marketplace', href: '/marketplace', icon: 'shopping' },
          { label: 'Ruang Aspirasi Perempuan', href: 'https://ruangaspirasiperempuaninformatika.netlify.app/', icon: 'heart' },
        ]
      }
    ]
  },
  {
    label: 'Informasi',
    mega: true,
    compact: true,
    cols: [
      {
        title: 'Informasi',
        links: [
          { label: 'Pengumuman', href: '/pengumuman', icon: 'megaphone' },
          { label: 'Event', href: '/event', icon: 'clock' },
          { label: 'Galeri', href: '/galeri', icon: 'image' },
          { label: 'Arsip', href: '/arsip', icon: 'archive' },
          { label: 'Kontak Dosen', href: '/kontak-dosen', icon: 'phone' },
          { label: 'Roadmap Matkul', href: '/roadmap', icon: 'map' },
        ]
      }
    ]
  },
  {
    label: 'SIAKAD',
    href: 'https://neosiakad.uinbanten.ac.id/',
    accent: 'purple'
  }
]

export const LINK_ICON_PATHS = {
  clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  award: `<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>`,
  target: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
  building: `<path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>`,
  help: `<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  heart: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
  megaphone: `<path d="M3 11v2a2 2 0 0 0 2 2h2l7 4V5l-7 4H5a2 2 0 0 0-2 2z"/><path d="M18 9a4 4 0 0 1 0 6"/>`,
  image: `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>`,
  external: `<path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>`,
  archive: `<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>`,
  laptop: `<rect x="3" y="4" width="18" height="12" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/>`,
  smartphone: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`,
  phone: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`,
  map: `<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>`,
  shopping: `<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>`,
}
