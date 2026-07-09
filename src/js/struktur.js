import { initTheme } from './theme.js'
import { initNavbar } from './navbar.js'
import { initFloatingBtn } from './floating-btn.js'
import { initPageTransitions } from './page-transition.js'
import { initFooter } from './footer.js'
import { initReveal } from './reveal.js'


const DEPTS = [

  {
    id: 'internal', name: 'Departemen Internal', color: '#6366F1', members: [
      { role: 'Kepala Departemen', name: '—' },
      { role: 'Sekretaris Dept', name: '—' },
      { role: 'Anggota', name: '—' },
      { role: 'Anggota', name: '—' },
    ]
  },
  {
    id: 'kominfo', name: 'Komunikasi & Informasi', color: '#1D9E75', members: [
      { role: 'Kepala Departemen', name: 'Muhammad Sulthan Fajri Rabbani' },
      { role: 'Sekretaris Dept', name: '—' },
      { role: 'Anggota', name: '—' },
    ]
  },
  {
    id: 'mikat', name: 'Minat & Bakat', color: '#BA7517', members: [
      { role: 'Kepala Departemen', name: '—' },
      { role: 'Sekretaris Dept', name: '—' },
      { role: 'Anggota', name: '—' },
    ]
  },
  {
    id: 'eksternal', name: 'Departemen Eksternal', color: '#378ADD', members: [
      { role: 'Kepala Departemen', name: '—' },
      { role: 'Sekretaris Dept', name: '—' },
      { role: 'Anggota', name: '—' },
    ]
  },
  {
    id: 'pao', name: 'Pengembangan Aparatur Organisasi', color: '#D85A30', members: [
      { role: 'Kepala Departemen', name: '—' },
      { role: 'Sekretaris Dept', name: '—' },
      { role: 'Anggota', name: '—' },
    ]
  },
  {
    id: 'pp', name: 'Pemberdayaan Perempuan', color: '#D4537E', members: [
      { role: 'Kepala Departemen', name: '—' },
      { role: 'Sekretaris Dept', name: '—' },
      { role: 'Anggota', name: '—' },
    ]
  },
  {
    id: 'ekraf', name: 'Ekonomi & Kreatif', color: '#5865F2', members: [
      { role: 'Kepala Departemen', name: '—' },
      { role: 'Sekretaris Dept', name: '—' },
      { role: 'Anggota', name: '—' },
    ]
  },
]

document.addEventListener('DOMContentLoaded', () => {
  initNavbar()
  initTheme()
  initFooter()
  initFloatingBtn()
  initPageTransitions()
  initReveal()

  const wrap = document.getElementById('dept-struktur')
  if (!wrap) return

  wrap.innerHTML = DEPTS.map(d => `
    <div class="dept-structure-section" id="${d.id}">
      <h2 class="block-title reveal dept-structure-title">
        <div class="dept-structure-icon" style="background:${d.color}18;color:${d.color};">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        ${d.name}
      </h2>
      <div class="struktur-grid reveal">
        ${d.members.map(m => `
          <article class="card struktur-card">
            <div class="ph ph-avatar"><span>Foto</span></div>
            <span class="struktur-role" style="color:${d.color}">${m.role}</span>
            <span class="struktur-name">${m.name}</span>
            <span class="struktur-batch">2026/2027</span>
          </article>
        `).join('')}
      </div>
    </div>
  `).join('')
})

