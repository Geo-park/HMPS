/* ============================================
   HMPS INF — Tentang Data (FAQ + Org Chart)
   ============================================ */

export const FAQ_DATA = [
  {
    cat: 'Umum',
    items: [
      { q: 'Apa itu HMPS INF?', a: 'HMPS INF adalah Himpunan Mahasiswa Program Studi Informatika UIN Sultan Maulana Hasanuddin Banten. Kami adalah organisasi resmi yang mewadahi seluruh mahasiswa Program Studi Informatika.' },
      { q: 'Apa arti tagline "Kita Satu, Kita Informatika"?', a: 'Tagline ini menggambarkan semangat persatuan dan kekeluargaan seluruh mahasiswa Informatika tanpa membedakan angkatan.' },
      { q: 'Bagaimana cara menghubungi HMPS INF?', a: 'Kamu bisa menghubungi kami via WhatsApp di 083866273495, Instagram @hmpsinformatikaa, atau email hmpsinformatikauinbanten@gmail.com.' },
      { q: 'Di mana sekretariat HMPS INF?', a: 'Sekretariat HMPS INF berada di Jl. Syeh Nawawi Al Bantani No. 01, Gedung B FSAINS UIN SMHB, Curug, Kota Serang, Banten.' },
    ]
  },
  {
    cat: 'Keanggotaan',
    items: [
      { q: 'Siapa saja yang menjadi anggota HMPS INF?', a: 'Seluruh mahasiswa aktif Program Studi Informatika UIN SMH Banten otomatis menjadi anggota himpunan.' },
      { q: 'Bagaimana cara menjadi pengurus?', a: 'Rekrutmen pengurus dibuka setiap awal periode kepengurusan melalui open recruitment yang diumumkan di media sosial himpunan.' },
    ]
  },
  {
    cat: 'Program Kerja',
    items: [
      { q: 'Apa saja program kerja unggulan?', a: 'Beberapa program unggulan meliputi IT Camp, INFORMATIKA SKILL-UP, PIJAR DESA, Informabeauty, dan berbagai workshop pengembangan skill.' },
      { q: 'Apakah kegiatan terbuka untuk umum?', a: 'Sebagian kegiatan seperti seminar dan workshop terbuka untuk umum, sementara kegiatan internal dikhususkan bagi anggota.' },
    ]
  },
  {
    cat: 'Aspirasi',
    items: [
      { q: 'Bagaimana cara menyampaikan aspirasi?', a: 'Aspirasi dapat disampaikan melalui halaman Aspirasi pada website ini — pesanmu akan diteruskan langsung ke WhatsApp pengurus.' },
      { q: 'Apakah pengaduan UKT akan dirahasiakan?', a: 'Ya, seluruh data pengaduan UKT bersifat rahasia dan hanya ditangani oleh pengurus yang berwenang.' },
      { q: 'Apa itu RAPI?', a: 'RAPI (Ruang Aspirasi) adalah layanan aspirasi anonim dari Departemen PP khusus untuk mahasiswi Informatika.' },
    ]
  },
]

export const BPH_CORE = [
  { name: '— Pending —', role: 'Ketua Umum',      color: '#7F77DD' },
  { name: '— Pending —', role: 'Sekretaris Umum', color: '#7F77DD' },
  { name: '— Pending —', role: 'Bendahara Umum',  color: '#7F77DD' },
]

export const DEPTS_ORG = [
  {
    id: 'internal', name: 'Internal', fullName: 'Departemen Internal',
    color: '#7F77DD',
    icon: `<path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>`,
    members: [
      { name: '— Pending —', role: 'Kepala Departemen', batch: '20XX' },
      { name: '— Pending —', role: 'Sekretaris Dept',   batch: '20XX' },
      { name: '— Pending —', role: 'Bendahara Dept',    batch: '20XX' },
      { name: '— Pending —', role: 'Anggota',           batch: '20XX' },
    ]
  },
  {
    id: 'kominfo', name: 'Kominfo', fullName: 'Komunikasi & Informasi',
    color: '#1D9E75',
    icon: `<path d="M18 8a6 6 0 0 1 0 8"/><path d="M22 6a10 10 0 0 1 0 12"/><path d="M6 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l6 4V4L6 8z"/>`,
    members: [
      { name: 'Muhammad Sulthan Fajri Rabbani', role: 'Kepala Departemen', batch: '20XX' },
      { name: '— Pending —', role: 'Sekretaris Dept',   batch: '20XX' },
      { name: '— Pending —', role: 'Bendahara Dept',    batch: '20XX' },
      { name: '— Pending —', role: 'Anggota',           batch: '20XX' },
    ]
  },
  {
    id: 'mikat', name: 'Mikat', fullName: 'Minat & Bakat',
    color: '#BA7517',
    icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
    members: [
      { name: '— Pending —', role: 'Kepala Departemen', batch: '20XX' },
      { name: '— Pending —', role: 'Sekretaris Dept',   batch: '20XX' },
      { name: '— Pending —', role: 'Bendahara Dept',    batch: '20XX' },
      { name: '— Pending —', role: 'Anggota',           batch: '20XX' },
    ]
  },
  {
    id: 'eksternal', name: 'Eksternal', fullName: 'Departemen Eksternal',
    color: '#378ADD',
    icon: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
    members: [
      { name: '— Pending —', role: 'Kepala Departemen', batch: '20XX' },
      { name: '— Pending —', role: 'Sekretaris Dept',   batch: '20XX' },
      { name: '— Pending —', role: 'Bendahara Dept',    batch: '20XX' },
      { name: '— Pending —', role: 'Anggota',           batch: '20XX' },
    ]
  },
  {
    id: 'pao', name: 'PAO', fullName: 'Pengembangan Aparatur Organisasi',
    color: '#D85A30',
    icon: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
    members: [
      { name: '— Pending —', role: 'Kepala Departemen', batch: '20XX' },
      { name: '— Pending —', role: 'Sekretaris Dept',   batch: '20XX' },
      { name: '— Pending —', role: 'Bendahara Dept',    batch: '20XX' },
      { name: '— Pending —', role: 'Anggota',           batch: '20XX' },
    ]
  },
  {
    id: 'pp', name: 'PP', fullName: 'Pemberdayaan Perempuan',
    color: '#D4537E',
    icon: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
    members: [
      { name: '— Pending —', role: 'Kepala Departemen', batch: '20XX' },
      { name: '— Pending —', role: 'Sekretaris Dept',   batch: '20XX' },
      { name: '— Pending —', role: 'Bendahara Dept',    batch: '20XX' },
      { name: '— Pending —', role: 'Anggota',           batch: '20XX' },
    ]
  },
  {
    id: 'ekraf', name: 'EKRAF', fullName: 'Ekonomi & Kreatif',
    color: '#5865F2',
    icon: `<line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>`,
    members: [
      { name: '— Pending —', role: 'Kepala Departemen', batch: '20XX' },
      { name: '— Pending —', role: 'Sekretaris Dept',   batch: '20XX' },
      { name: '— Pending —', role: 'Bendahara Dept',    batch: '20XX' },
      { name: '— Pending —', role: 'Anggota',           batch: '20XX' },
    ]
  },
]
