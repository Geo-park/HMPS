/* ============================================
   HMPS INF — Departemen Logic v4
   Tab pills + animasi karakter per dept
   ============================================ */

const DEPT_ANIMATIONS = {
  internal:  { name: 'slideLeft',   duration: '0.5s',  easing: 'cubic-bezier(0.22,1,0.36,1)' },
  kominfo:   { name: 'fadeScale',   duration: '0.45s', easing: 'cubic-bezier(0.22,1,0.36,1)' },
  mikat:     { name: 'bounceUp',    duration: '0.55s', easing: 'cubic-bezier(0.34,1.56,0.64,1)' },
  eksternal: { name: 'slideRight',  duration: '0.5s',  easing: 'cubic-bezier(0.22,1,0.36,1)' },
  pao:       { name: 'staggerFade', duration: '0.5s',  easing: 'cubic-bezier(0.22,1,0.36,1)' },
  pp:        { name: 'fadeSlow',    duration: '0.7s',  easing: 'ease' },
  ekraf:     { name: 'scaleSpin',   duration: '0.5s',  easing: 'cubic-bezier(0.22,1,0.36,1)' },
}

const STATUS_COLOR = {
  'Direncanakan': '#BA7517',
  'Berjalan':     '#378ADD',
  'Selesai':      '#1D9E75',
  'Rutin':        '#7F77DD',
}

const DEPTS = [
  {
    id: 'internal', name: 'Internal', fullName: 'Departemen Internal',
    color: '#7F77DD',
    icon: `<path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>`,
    desc: 'Menjaga kekompakan internal, mengurus administrasi, dan memastikan seluruh anggota HMPS INF terhubung dengan baik.',
    visi: 'Menciptakan lingkungan organisasi yang solid, harmonis, dan saling mendukung.',
    misi: ['Mengelola administrasi dan data keanggotaan', 'Menyelenggarakan kegiatan pembinaan anggota', 'Memastikan komunikasi internal berjalan lancar'],
    struktur: [
      { role: 'Kepala Departemen', name: 'Nama Kadep',   batch: '2023' },
      { role: 'Wakil Kepala',      name: 'Nama Wakadep', batch: '2023' },
      { role: 'Staff',             name: 'Anggota 1',    batch: '2024' },
      { role: 'Staff',             name: 'Anggota 2',    batch: '2024' },
    ],
    proker: [
      { nama: 'IT Camp',          status: 'Upcoming', tanggal: '13–14 Sep 2026', lokasi: 'TBA', pj: 'Dept. Internal', desc: 'Kegiatan kemah dan pelatihan kepemimpinan untuk anggota HMPS INF.' },
      { nama: 'Informatika Care', status: 'Upcoming', tanggal: 'TBA 2026',       lokasi: 'TBA', pj: 'Dept. Internal', desc: 'Kegiatan sosial dan kepedulian antar anggota himpunan.' },
    ]
  },
  {
    id: 'kominfo', name: 'Kominfo', fullName: 'Komunikasi & Informasi',
    color: '#1D9E75',
    icon: `<path d="M18 8a6 6 0 0 1 0 8"/><path d="M22 6a10 10 0 0 1 0 12"/><path d="M6 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l6 4V4L6 8z"/>`,
    desc: 'Mengelola informasi, dokumentasi, dan komunikasi publik HMPS INF kepada seluruh sivitas akademik dan masyarakat luas.',
    visi: 'Menjadi pusat informasi yang terpercaya dan kreatif untuk HMPS INF.',
    misi: ['Mengelola media sosial dan website resmi', 'Mendokumentasikan seluruh kegiatan HMPS INF', 'Menyebarkan informasi beasiswa dan akademik'],
    struktur: [
      { role: 'Kepala Departemen', name: 'Muhammad Sulthan Fajri Rabbani', batch: '2023' },
      { role: 'Wakil Kepala',      name: '—', batch: '2023' },
      { role: 'Staff',             name: '—', batch: '2024' },
    ],
    proker: [
      { nama: 'Informatika Update', status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Online',         pj: 'Muhammad Sulthan Fajri Rabbani', desc: 'Konten rutin update informasi akademik dan organisasi di media sosial.' },
      { nama: 'Informatika Moment', status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Online',         pj: 'Dept. Kominfo',                  desc: 'Dokumentasi momen penting kegiatan HMPS INF.' },
      { nama: 'Beasiswa Corner',    status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Online/Offline', pj: 'Muhammad Sulthan Fajri Rabbani', desc: 'Menyebarkan informasi beasiswa aktif kepada mahasiswa Informatika.' },
    ]
  },
  {
    id: 'mikat', name: 'Mikat', fullName: 'Minat & Bakat',
    color: '#BA7517',
    icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
    desc: 'Mengembangkan potensi, minat, dan bakat mahasiswa Informatika melalui program pelatihan dan kompetisi.',
    visi: 'Menjadi inkubator bakat mahasiswa Informatika yang berdaya saing.',
    misi: ['Memfasilitasi pengembangan minat dan bakat', 'Menyelenggarakan pelatihan skill teknis', 'Mendorong partisipasi kompetisi mahasiswa'],
    struktur: [
      { role: 'Kepala Departemen', name: '—', batch: '2023' },
      { role: 'Wakil Kepala',      name: '—', batch: '2023' },
      { role: 'Staff',             name: '—', batch: '2024' },
    ],
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
    struktur: [
      { role: 'Kepala Departemen', name: '—', batch: '2023' },
      { role: 'Wakil Kepala',      name: '—', batch: '2023' },
      { role: 'Staff',             name: '—', batch: '2024' },
    ],
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
    struktur: [
      { role: 'Kepala Departemen', name: '—', batch: '2023' },
      { role: 'Wakil Kepala',      name: '—', batch: '2023' },
      { role: 'Staff',             name: '—', batch: '2024' },
    ],
    proker: [
      { nama: 'Upgrading & Rapat Kerja \u201cLazarus\u201d', status: 'Selesai',  tanggal: '21 Jun 2026', lokasi: 'TBA',            pj: 'Dept. PAO', desc: 'Rapat kerja perdana dan upgrading pengurus HMPS INF periode 2026/2027.' },
      { nama: 'Rapat Evaluasi',                              status: 'Rutin',    tanggal: 'Rutin 2026',  lokasi: 'Sekretariat',    pj: 'Dept. PAO', desc: 'Evaluasi berkala kinerja seluruh departemen.' },
      { nama: 'Pleno Tengah',                                status: 'Upcoming', tanggal: '3 Okt 2026',  lokasi: 'TBA',            pj: 'Dept. PAO', desc: 'Sidang pleno pertanggungjawaban tengah periode.' },
      { nama: 'Pleno Akhir',                                 status: 'Upcoming', tanggal: '26 Des 2026', lokasi: 'TBA',            pj: 'Dept. PAO', desc: 'Sidang pleno akhir dan laporan pertanggungjawaban.' },
      { nama: 'Best of The Month',                           status: 'Rutin',    tanggal: 'Rutin 2026',  lokasi: 'Online/Offline', pj: 'Dept. PAO', desc: 'Apresiasi bulanan untuk pengurus/anggota terbaik.' },
    ]
  },
  {
    id: 'pp', name: 'PP', fullName: 'Pemberdayaan Perempuan',
    color: '#D4537E',
    icon: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
    desc: 'Mendorong peran aktif mahasiswi Informatika dalam organisasi dan memberikan ruang aman untuk beraspirasi.',
    visi: 'Mewujudkan kesetaraan dan keberdayaan perempuan dalam ekosistem Informatika UIN SMH Banten.',
    misi: ['Menyelenggarakan kegiatan pemberdayaan perempuan', 'Menyediakan layanan aspirasi khusus', 'Mendorong partisipasi aktif mahasiswi dalam organisasi'],
    struktur: [
      { role: 'Kepala Departemen', name: '—', batch: '2023' },
      { role: 'Wakil Kepala',      name: '—', batch: '2023' },
      { role: 'Staff',             name: '—', batch: '2024' },
    ],
    proker: [
      { nama: 'Informabeauty',            status: 'Upcoming', tanggal: '10 Nov 2026', lokasi: 'TBA',    pj: 'Dept. PP', desc: 'Kegiatan perawatan diri, pengembangan karakter, dan pemberdayaan perempuan.' },
      { nama: 'RAPI (Ruang Aspirasi)',    status: 'Rutin',    tanggal: 'Rutin 2026',  lokasi: 'Online', pj: 'Dept. PP', desc: 'Layanan aspirasi khusus melalui form anonim untuk mahasiswi Informatika.' },
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
    struktur: [
      { role: 'Kepala Departemen', name: '—', batch: '2023' },
      { role: 'Wakil Kepala',      name: '—', batch: '2023' },
      { role: 'Staff',             name: '—', batch: '2024' },
    ],
    proker: [
      { nama: 'Pembuatan Website Himpunan', status: 'Berjalan', tanggal: '2026',     lokasi: 'Online', pj: 'Dept. EKRAF', desc: 'Pembangunan website resmi HMPS INF sebagai wajah digital organisasi.' },
      { nama: 'Workshop Kreatif',           status: 'Upcoming', tanggal: 'TBA 2026', lokasi: 'TBA',    pj: 'Dept. EKRAF', desc: 'Workshop desain, konten kreatif, dan kewirausahaan digital.' },
    ]
  },
]

let activeDept = 'internal'

function svgIcon(path, size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${path}</svg>`
}

/* ── Tab Pills ── */
function renderTabs() {
  const tabs = document.getElementById('depTabs')
  if (!tabs) return
  tabs.innerHTML = DEPTS.map(d => `
    <button
      class="dep-tab ${d.id === activeDept ? 'active' : ''}"
      style="--accent:${d.color}"
      onclick="selectDept('${d.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        ${d.icon}
      </svg>
      ${d.name}
    </button>
  `).join('')
}

/* ── Content ── */
function renderContent(deptId) {
  const d = DEPTS.find(x => x.id === deptId)
  if (!d) return

  const anim = DEPT_ANIMATIONS[deptId]
  const wrap = document.getElementById('depContent')
  if (!wrap) return

  wrap.style.setProperty('--accent', d.color)
  wrap.style.animation = 'none'
  wrap.offsetHeight
  wrap.style.animation = `${anim.name} ${anim.duration} ${anim.easing} forwards`

  wrap.innerHTML = `
    <article class="card dep-hero" style="border-color:${d.color}33">
      <div class="dep-hero-icon" style="background:${d.color}; color:#fff;">
        ${svgIcon(d.icon, 30)}
      </div>
      <div>
        <div class="dep-hero-tag" style="color:${d.color}">${d.name}</div>
        <h2>${d.fullName}</h2>
        <p>${d.desc}</p>
      </div>
    </article>

    <div class="dep-vm">
      <article class="card dep-vm-card" style="border-top:3px solid ${d.color}">
        <div class="vm-icon" style="background:${d.color}18;color:${d.color};width:46px;height:46px;border-radius:11px;display:grid;place-items:center;margin-bottom:16px;">
          ${svgIcon('<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>')}
        </div>
        <h3>Visi</h3>
        <p>${d.visi}</p>
      </article>
      <article class="card dep-vm-card" style="border-top:3px solid ${d.color}">
        <div class="vm-icon" style="background:${d.color}18;color:${d.color};width:46px;height:46px;border-radius:11px;display:grid;place-items:center;margin-bottom:16px;">
          ${svgIcon('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>')}
        </div>
        <h3>Misi</h3>
        <ul class="vm-list">
          ${d.misi.map(m => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${d.color}" stroke-width="2" style="flex-shrink:0;margin-top:3px;">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              ${m}
            </li>
          `).join('')}
        </ul>
      </article>
    </div>

    <div class="dep-sec-title">
      <div style="width:28px;height:28px;border-radius:8px;background:${d.color}18;color:${d.color};display:grid;place-items:center;">
        ${svgIcon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>', 16)}
      </div>
      Struktur Pengurus
    </div>
    <div class="struktur-grid">
      ${d.struktur.map((s, i) => `
        <article class="card struktur-card" style="animation:fadeScale .5s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both">
          <div class="ph ph-avatar" style="width:80px;height:80px;"><span>foto</span></div>
          <span class="struktur-role" style="color:${d.color}">${s.role}</span>
          <span class="struktur-name">${s.name}</span>
          <span class="struktur-batch">Angkatan ${s.batch}</span>
        </article>
      `).join('')}
    </div>

    <div class="dep-sec-title">
      <div style="width:28px;height:28px;border-radius:8px;background:${d.color}18;color:${d.color};display:grid;place-items:center;">
        ${svgIcon('<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>', 16)}
      </div>
      Program Kerja
    </div>
    <div class="proker-grid">
      ${d.proker.map((p, i) => `
        <article class="card proker-card" onclick="openModal('${d.id}',${i})"
          style="--accent:${d.color};animation:fadeScale .5s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s both">
          <span class="proker-badge" style="color:${STATUS_COLOR[p.status]||d.color};background:${STATUS_COLOR[p.status]||d.color}1a">
            <span class="dot" style="background:${STATUS_COLOR[p.status]||d.color}"></span>
            ${p.status}
          </span>
          <h4>${p.nama}</h4>
          <p>${p.desc}</p>
          <span class="proker-more" style="color:${d.color}">
            Detail
            ${svgIcon('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>', 14)}
          </span>
        </article>
      `).join('')}
    </div>
  `
}

/* ── Select ── */
window.selectDept = function(id) {
  activeDept = id
  renderTabs()
  renderContent(id)
  if (window.innerWidth < 768) {
    document.getElementById('depContent')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/* ── Modal ── */
window.openModal = function(deptId, idx) {
  const d = DEPTS.find(x => x.id === deptId)
  const p = d.proker[idx]
  document.getElementById('modalContent').innerHTML = `
    <span class="proker-badge" style="color:${STATUS_COLOR[p.status]||d.color};background:${STATUS_COLOR[p.status]||d.color}1a">
      <span class="dot" style="background:${STATUS_COLOR[p.status]||d.color}"></span>
      ${p.status}
    </span>
    <h3 class="modal-title">${p.nama}</h3>
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-meta">
      <div><span class="modal-meta-label">Departemen</span><b>${d.fullName}</b></div>
      <div><span class="modal-meta-label">Tanggal</span><b>${p.tanggal}</b></div>
      <div><span class="modal-meta-label">Lokasi</span><b>${p.lokasi}</b></div>
      <div><span class="modal-meta-label">Penanggung Jawab</span><b>${p.pj}</b></div>
    </div>
  `
  document.getElementById('modalOverlay').classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden')
  document.body.style.overflow = ''
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  const modalClose   = document.getElementById('modalClose')
  const modalOverlay = document.getElementById('modalOverlay')
  if (modalClose)   modalClose.onclick = closeModal
  if (modalOverlay) modalOverlay.onclick = e => { if (e.target === modalOverlay) closeModal() }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() })

  renderTabs()
  renderContent(activeDept)
})