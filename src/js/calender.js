import { initTheme } from './theme.js'
import { initNavbar } from './navbar.js'
import { initFloatingBtn } from './floating-btn.js'
import { initPageTransitions } from './page-transition.js'
import { initFooter } from './footer.js'
import { initReveal } from './reveal.js'



/* ── Data Event dari Kalender Proker 2026 ── */

const DEPT_COLORS = {
  'PAO':      '#6366F1',
  'Internal': '#1D9E75',
  'External': '#378ADD',
  'Kominfo':  '#BA7517',
  'PP':       '#D4537E',
  'EKRAF':    '#5865F2',
  'Mikat':    '#BA7517',
  'Sekum':    '#6B6B80',
}

const EVENTS = [
  { date: '2026-06-21', name: 'Upgrading & Rapat Kerja "Lazarus"', dept: 'PAO' },
  { date: '2026-06-26', name: 'Form Aspirasi PP', dept: 'PP' },
  { date: '2026-07-26', name: 'Form Aspirasi PP', dept: 'PP' },
  { date: '2026-08-19', name: 'PIJAR DESA', dept: 'External' },
  { date: '2026-08-26', name: 'Form Aspirasi PP', dept: 'PP' },
  { date: '2026-09-13', name: 'IT Camp (Hari 1)', dept: 'Internal' },
  { date: '2026-09-14', name: 'IT Camp (Hari 2)', dept: 'Internal' },
  { date: '2026-09-18', name: 'Kajian PPTA', dept: 'PP' },
  { date: '2026-09-20', name: 'Informatika Skill UP', dept: 'Mikat' },
  { date: '2026-09-23', name: 'Lentera Digital', dept: 'External' },
  { date: '2026-09-26', name: 'Form Aspirasi PP', dept: 'PP' },
  { date: '2026-10-03', name: 'Pleno Tengah', dept: 'PAO' },
  { date: '2026-10-24', name: 'ANALOGI', dept: 'External' },
  { date: '2026-10-26', name: 'Form Aspirasi PP', dept: 'PP' },
  { date: '2026-11-10', name: 'InformaBeauty', dept: 'PP' },
  { date: '2026-11-14', name: 'Kajian Kesetaraan Gender', dept: 'PP' },
  { date: '2026-11-26', name: 'Form Aspirasi PP', dept: 'PP' },
  { date: '2026-12-26', name: 'Pleno Akhir', dept: 'PAO' },
]

const MONTHS = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agt','Sep','Okt','Nov','Des']

let currentYear  = 2026
let currentMonth = new Date().getMonth() // default bulan sekarang
let selectedDate = null

// Clamp ke 2026
if (currentMonth < 0) currentMonth = 0
if (currentMonth > 11) currentMonth = 11

function getEventsForDate(dateStr) {
  return EVENTS.filter(e => e.date === dateStr)
}

function getEventsForMonth(year, month) {
  const prefix = `${year}-${String(month+1).padStart(2,'0')}`
  return EVENTS.filter(e => e.date.startsWith(prefix))
}

function getUpcomingEvents() {
  const today = new Date().toISOString().split('T')[0]
  return EVENTS.filter(e => e.date >= today).sort((a,b) => a.date.localeCompare(b.date))
}

function renderCalendar() {
  const label = document.getElementById('calMonthLabel')
  const grid  = document.getElementById('calDates')
  if (!label || !grid) return

  label.textContent = `${MONTHS[currentMonth]} ${currentYear}`

  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const prevDays = new Date(currentYear, currentMonth, 0).getDate()
  const today = new Date()
  const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`

  let html = ''

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    html += `<div class="cal-date other-month">${prevDays - i}</div>`
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`
    const evts = getEventsForDate(dateStr)
    const isToday    = dateStr === todayStr
    const isSelected = dateStr === selectedDate
    const hasEvent   = evts.length > 0

    const classes = [
      'cal-date',
      isToday    ? 'today'       : '',
      isSelected ? 'selected'    : '',
      hasEvent   ? 'has-event'   : '',
    ].filter(Boolean).join(' ')

    const dots = evts.slice(0, 3).map(e =>
      `<div class="cal-dot" style="background:${DEPT_COLORS[e.dept] || '#7F77DD'}"></div>`
    ).join('')

    html += `
      <div class="${classes}" onclick="calSelectDate('${dateStr}')">
        ${d}
        ${hasEvent ? `<div class="cal-dots">${dots}</div>` : ''}
      </div>
    `
  }

  // Next month days
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7
  const nextDays = totalCells - firstDay - daysInMonth
  for (let d = 1; d <= nextDays; d++) {
    html += `<div class="cal-date other-month">${d}</div>`
  }

  grid.innerHTML = html
  renderLegend()
}

function renderLegend() {
  const legend = document.getElementById('calLegend')
  if (!legend) return

  const depts = [...new Set(
    getEventsForMonth(currentYear, currentMonth).map(e => e.dept)
  )]

  if (!depts.length) { legend.innerHTML = ''; return }

  legend.innerHTML = depts.map(d => `
    <div class="cal-legend-item">
      <div class="cal-legend-dot" style="background:${DEPT_COLORS[d] || '#7F77DD'}"></div>
      ${d}
    </div>
  `).join('')
}

function renderEventList(events, titleText, subText) {
  const list  = document.getElementById('calEventsList')
  const title = document.getElementById('calEventsTitle')
  const sub   = document.getElementById('calEventsSub')
  if (!list) return

  title.textContent = titleText
  sub.textContent   = subText

  if (!events.length) {
    list.innerHTML = `<div class="cal-empty">Tidak ada kegiatan di periode ini.</div>`
    return
  }

  list.innerHTML = events.map(e => {
    const d     = new Date(e.date + 'T00:00:00')
    const day   = d.getDate()
    const mon   = MONTHS_SHORT[d.getMonth()]
    const color = DEPT_COLORS[e.dept] || '#7F77DD'
    return `
      <div class="cal-event-item">
        <div class="cal-event-date-box">
          <div class="cal-event-date-day">${day}</div>
          <div class="cal-event-date-mon">${mon}</div>
        </div>
        <div class="cal-event-body">
          <div class="cal-event-name">${e.name}</div>
          <span class="cal-event-badge" style="color:${color};background:${color}18;">
            <span class="dot"></span>${e.dept}
          </span>
        </div>
      </div>
    `
  }).join('')
}

window.calSelectDate = function(dateStr) {
  if (selectedDate === dateStr) {
    // Deselect — tampilkan upcoming
    selectedDate = null
    renderCalendar()
    const upcoming = getUpcomingEvents()
    renderEventList(upcoming, 'Semua Event Mendatang', 'Klik tanggal untuk filter')
    return
  }

  selectedDate = dateStr
  renderCalendar()

  const evts = getEventsForDate(dateStr)
  const d    = new Date(dateStr + 'T00:00:00')
  const label = `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
  renderEventList(evts, label, `${evts.length} kegiatan`)
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('calPrev')?.addEventListener('click', () => {
    currentMonth--
    if (currentMonth < 0) { currentMonth = 11; currentYear-- }
    selectedDate = null
    renderCalendar()
    renderEventList(getUpcomingEvents(), 'Semua Event Mendatang', 'Klik tanggal untuk filter')
  })

  document.getElementById('calNext')?.addEventListener('click', () => {
    currentMonth++
    if (currentMonth > 11) { currentMonth = 0; currentYear++ }
    selectedDate = null
    renderCalendar()
    renderEventList(getUpcomingEvents(), 'Semua Event Mendatang', 'Klik tanggal untuk filter')
  })

  renderCalendar()
  renderEventList(getUpcomingEvents(), 'Semua Event Mendatang', 'Klik tanggal untuk filter')
})