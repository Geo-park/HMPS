/* ============================================
   HMPS INF — Departemen Data
   ============================================ */

export const DEPT_ANIMATIONS = {
  internal:  { name: 'slideLeft',   duration: '0.5s',  easing: 'cubic-bezier(0.22,1,0.36,1)' },
  kominfo:   { name: 'fadeScale',   duration: '0.45s', easing: 'cubic-bezier(0.22,1,0.36,1)' },
  mikat:     { name: 'bounceUp',    duration: '0.55s', easing: 'cubic-bezier(0.34,1.56,0.64,1)' },
  eksternal: { name: 'slideRight',  duration: '0.5s',  easing: 'cubic-bezier(0.22,1,0.36,1)' },
  pao:       { name: 'staggerFade', duration: '0.5s',  easing: 'cubic-bezier(0.22,1,0.36,1)' },
  pp:        { name: 'fadeSlow',    duration: '0.7s',  easing: 'ease' },
  ekraf:     { name: 'scaleSpin',   duration: '0.5s',  easing: 'cubic-bezier(0.22,1,0.36,1)' },
}

export const STATUS_COLOR = {
  'Upcoming':     '#D85A30',
  'Berjalan':     '#378ADD',
  'Selesai':      '#1D9E75',
}

export const DEPTS = [
  {
    id: 'internal', name: 'Internal', fullName: 'Departemen Internal',
    color: '#6366F1',
    icon: `<path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>`,
    desc: 'Menjaga kekompakan internal, mengurus administrasi, dan memastikan seluruh anggota HMPS INF terhubung dengan baik.',
    visi: 'Menciptakan lingkungan organisasi yang solid, harmonis, dan saling mendukung.',
    misi: ['Mengelola administrasi dan data keanggotaan', 'Menyelenggarakan kegiatan pembinaan anggota', 'Memastikan komunikasi internal berjalan lancar'],
    proker: [
      { nama: 'IT Camp',          status: 'Upcoming', tanggal: '13–14 Sep 2026', lokasi: 'TBA', pj: 'Dept. Internal', desc: 'Kegiatan kemah dan pelatihan kepemimpinan untuk anggota HMPS INF.' },
      { nama: 'Informatika Care', status: 'Berjalan', tanggal: '2026',            lokasi: 'TBA', pj: 'Dept. Internal', desc: 'Kegiatan sosial dan kepedulian antar anggota himpunan.' },
    ]
  },
  {
    id: 'kominfo', name: 'Kominfo', fullName: 'Komunikasi & Informasi',
    color: '#1D9E75',
    icon: `<path d="M18 8a6 6 0 0 1 0 8"/><path d="M22 6a10 10 0 0 1 0 12"/><path d="M6 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l6 4V4L6 8z"/>`,
    desc: 'Mengelola informasi, dokumentasi, dan komunikasi publik HMPS INF kepada seluruh sivitas akademik dan masyarakat luas.',
    visi: 'Menjadi pusat informasi yang terpercaya dan kreatif untuk HMPS INF.',
    misi: ['Mengelola media sosial dan website resmi', 'Mendokumentasikan seluruh kegiatan HMPS INF', 'Menyebarkan informasi beasiswa dan akademik'],
    proker: [
      { nama: 'Informatika Update', status: 'Berjalan', tanggal: '2026', lokasi: 'Online',         pj: 'Muhammad Sulthan Fajri Rabbani', desc: 'Konten rutin update informasi akademik dan organisasi di media sosial.' },
      { nama: 'Informatika Moment', status: 'Berjalan', tanggal: '2026', lokasi: 'Online',         pj: 'Dept. Kominfo',                  desc: 'Dokumentasi momen penting kegiatan HMPS INF.' },
      { nama: 'Beasiswa Corner',    status: 'Berjalan', tanggal: '2026', lokasi: 'Online/Offline', pj: 'Muhammad Sulthan Fajri Rabbani', desc: 'Menyebarkan informasi beasiswa aktif kepada mahasiswa Informatika.' },
    ]
  },
  {
    id: 'mikat', name: 'Mikat', fullName: 'Minat & Bakat',
    color: '#BA7517',
    icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
    desc: 'Mengembangkan potensi, minat, dan bakat mahasiswa Informatika melalui program pelatihan dan kompetisi.',
    visi: 'Menjadi inkubator bakat mahasiswa Informatika yang berdaya saing.',
    misi: ['Memfasilitasi pengembangan minat dan bakat', 'Menyelenggarakan pelatihan skill teknis', 'Mendorong partisipasi kompetisi mahasiswa'],
    proker: [
      { nama: 'INFORMATIKA SKILL-UP', status: 'Upcoming', tanggal: '20 Sep – 12 Des 2026', lokasi: 'TBA', pj: 'Dept. Mikat', desc: 'Program pelatihan skill intensif dengan 5 track: Coding, Desain Digital, Database, Jaringan, dan Project Dev.' },
    ]
  },
  {
    id: 'eksternal', name: 'Eksternal', fullName: 'Departemen Eksternal',
    color: '#378ADD',
    icon: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
    desc: 'Membangun jejaring dan kolaborasi HMPS INF dengan pihak eksternal — lembaga, komunitas, dan masyarakat.',
    visi: 'Menjadi jembatan kolaborasi antara HMPS INF dan dunia luar.',
    misi: ['Membangun kerjasama dengan organisasi lain', 'Menyelenggarakan kegiatan pengabdian masyarakat', 'Memperluas jaringan mahasiswa Informatika'],
    proker: [
      { nama: 'PIJAR DESA',      status: 'Upcoming', tanggal: 'Agt 2026', lokasi: 'TBA', pj: 'Dept. Eksternal', desc: 'Program pengabdian masyarakat berbasis teknologi informasi untuk desa di sekitar UIN SMH Banten.' },
      { nama: 'LENTERA DIGITAL', status: 'Upcoming', tanggal: 'Sep 2026', lokasi: 'TBA', pj: 'Dept. Eksternal', desc: 'Kegiatan literasi digital untuk masyarakat umum.' },
      { nama: 'ANALOGI',         status: 'Upcoming', tanggal: 'Okt 2026', lokasi: 'TBA', pj: 'Dept. Eksternal', desc: 'Seminar dan diskusi kolaborasi antar himpunan mahasiswa informatika.' },
    ]
  },
  {
    id: 'pao', name: 'PAO', fullName: 'Pengembangan Aparatur Organisasi',
    color: '#D85A30',
    icon: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
    desc: 'Meningkatkan kapasitas, kapabilitas, dan kualitas seluruh pengurus dan anggota HMPS INF.',
    visi: 'Membentuk kader organisasi yang tangguh, profesional, dan berintegritas.',
    misi: ['Menyelenggarakan pelatihan kepemimpinan', 'Melakukan evaluasi kinerja organisasi', 'Membangun sistem kaderisasi yang berkelanjutan'],
    proker: [
      { nama: 'Upgrading & Rapat Kerja "Lazarus"', status: 'Selesai',  tanggal: '21 Jun 2026', lokasi: 'TBA',            pj: 'Dept. PAO', desc: 'Rapat kerja perdana dan upgrading pengurus HMPS INF periode 2026/2027.' },
      { nama: 'Rapat Evaluasi',                    status: 'Berjalan',  tanggal: '2026',        lokasi: 'Sekretariat',    pj: 'Dept. PAO', desc: 'Evaluasi berkala kinerja seluruh departemen.' },
      { nama: 'Pleno Tengah',                      status: 'Upcoming', tanggal: '3 Okt 2026',  lokasi: 'TBA',            pj: 'Dept. PAO', desc: 'Sidang pleno pertanggungjawaban tengah periode.' },
      { nama: 'Pleno Akhir',                       status: 'Upcoming', tanggal: '26 Des 2026', lokasi: 'TBA',            pj: 'Dept. PAO', desc: 'Sidang pleno akhir dan laporan pertanggungjawaban.' },
      { nama: 'Best of The Month',                 status: 'Berjalan',  tanggal: '2026',        lokasi: 'Online/Offline', pj: 'Dept. PAO', desc: 'Apresiasi bulanan untuk pengurus/anggota terbaik.' },
    ]
  },
  {
    id: 'pp', name: 'PP', fullName: 'Pemberdayaan Perempuan',
    color: '#D4537E',
    icon: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
    desc: 'Mendorong peran aktif mahasiswi Informatika dalam organisasi dan memberikan ruang aman untuk beraspirasi.',
    visi: 'Mewujudkan kesetaraan dan keberdayaan perempuan dalam ekosistem Informatika UIN SMH Banten.',
    misi: ['Menyelenggarakan kegiatan pemberdayaan perempuan', 'Menyediakan layanan aspirasi khusus', 'Mendorong partisipasi aktif mahasiswi dalam organisasi'],
    proker: [
      { nama: 'Informabeauty',            status: 'Upcoming', tanggal: '10 Nov 2026', lokasi: 'TBA',    pj: 'Dept. PP', desc: 'Kegiatan perawatan diri, pengembangan karakter, dan pemberdayaan perempuan.' },
      { nama: 'RAPI (Ruang Aspirasi)',    status: 'Berjalan',  tanggal: '2026',        lokasi: 'Online', pj: 'Dept. PP', desc: 'Layanan aspirasi khusus melalui form anonim untuk mahasiswi Informatika.' },
      { nama: 'Kajian Kesetaraan Gender', status: 'Upcoming', tanggal: '14 Nov 2026', lokasi: 'TBA',    pj: 'Dept. PP', desc: 'Diskusi dan kajian mengenai kesetaraan gender dalam dunia teknologi.' },
    ]
  },
  {
    id: 'ekraf', name: 'EKRAF', fullName: 'Ekonomi & Kreatif',
    color: '#5865F2',
    icon: `<line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>`,
    desc: 'Mengembangkan jiwa kewirausahaan, kreativitas, dan inovasi mahasiswa Informatika melalui kolaborasi dan produk digital.',
    visi: 'Menjadi penggerak ekonomi kreatif berbasis teknologi di lingkungan HMPS INF.',
    misi: ['Mengembangkan produk dan layanan kreatif', 'Menyelenggarakan workshop kewirausahaan', 'Membangun ekosistem ekonomi kreatif mahasiswa'],
    proker: [
      { nama: 'Pembuatan Website Himpunan', status: 'Berjalan', tanggal: '2026',     lokasi: 'Online', pj: 'Dept. EKRAF', desc: 'Pembangunan website resmi HMPS INF sebagai wajah digital organisasi.' },
      { nama: 'Workshop Kreatif',           status: 'Berjalan', tanggal: 'TBA 2026', lokasi: 'TBA',    pj: 'Dept. EKRAF', desc: 'Workshop desain, konten kreatif, dan kewirausahaan digital.' },
    ]
  },
]
