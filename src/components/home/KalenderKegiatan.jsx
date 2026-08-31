import { useState, useMemo } from 'react'
import { EVENTS, DEPT_COLORS, MONTHS, MONTHS_SHORT } from '../../data/events'

const DAY_LABELS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

function getTodayStr() {
  const t = new Date()
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`
}

function getEventsForDate(dateStr) {
  return EVENTS.filter(e => e.date === dateStr)
}

function getEventsForMonth(year, month) {
  const prefix = `${year}-${String(month + 1).padStart(2, '0')}`
  return EVENTS.filter(e => e.date.startsWith(prefix))
}

function getUpcomingEvents() {
  const today = getTodayStr()
  return EVENTS.filter(e => e.date >= today).sort((a, b) => a.date.localeCompare(b.date))
}

export default function KalenderKegiatan() {
  const now = new Date()
  const [year, setYear] = useState(2026)
  const [month, setMonth] = useState(Math.min(Math.max(now.getMonth(), 0), 11))
  const [selectedDate, setSelectedDate] = useState(null)

  const todayStr = getTodayStr()

  // Build calendar cells
  const cells = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const prevDays = new Date(year, month, 0).getDate()
    const result = []

    // Prev month filler
    for (let i = firstDay - 1; i >= 0; i--) {
      result.push({ day: prevDays - i, type: 'other' })
    }
    // Current month
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      result.push({ day: d, dateStr, type: 'current', events: getEventsForDate(dateStr) })
    }
    // Next month filler
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7
    const nextDays = totalCells - firstDay - daysInMonth
    for (let d = 1; d <= nextDays; d++) {
      result.push({ day: d, type: 'other' })
    }
    return result
  }, [year, month])

  // Legend — unique depts in current month
  const legend = useMemo(() => {
    const depts = [...new Set(getEventsForMonth(year, month).map(e => e.dept))]
    return depts
  }, [year, month])

  // Displayed events (right panel)
  const { listTitle, listSub, listEvents } = useMemo(() => {
    if (selectedDate) {
      const evts = getEventsForDate(selectedDate)
      const d = new Date(selectedDate + 'T00:00:00')
      return {
        listTitle: `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`,
        listSub: `${evts.length} kegiatan`,
        listEvents: evts,
      }
    }
    const upcoming = getUpcomingEvents()
    return {
      listTitle: 'Semua Event Mendatang',
      listSub: 'Klik tanggal untuk filter',
      listEvents: upcoming,
    }
  }, [selectedDate])

  function prevMonth() {
    setSelectedDate(null)
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }

  function nextMonth() {
    setSelectedDate(null)
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  function handleDateClick(cell) {
    if (cell.type !== 'current') return
    if (selectedDate === cell.dateStr) setSelectedDate(null)
    else setSelectedDate(cell.dateStr)
  }

  return (
    <div className="cal-section">
      {/* ── Left: Calendar ── */}
      <div className="cal-card">
        <div className="cal-header">
          <button className="cal-nav-btn" onClick={prevMonth} aria-label="Bulan sebelumnya">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="cal-month-label">{MONTHS[month]} {year}</span>
          <button className="cal-nav-btn" onClick={nextMonth} aria-label="Bulan berikutnya">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="cal-grid">
          <div className="cal-days-header">
            {DAY_LABELS.map(l => <div key={l} className="cal-day-label">{l}</div>)}
          </div>
          <div className="cal-dates">
            {cells.map((cell, i) => {
              if (cell.type === 'other') {
                return <div key={i} className="cal-date other-month">{cell.day}</div>
              }
              const isToday = cell.dateStr === todayStr
              const isSelected = cell.dateStr === selectedDate
              const hasEvent = cell.events?.length > 0
              const cls = ['cal-date', isToday && 'today', isSelected && 'selected', hasEvent && 'has-event']
                .filter(Boolean).join(' ')

              return (
                <div key={i} className={cls} onClick={() => handleDateClick(cell)}>
                  {cell.day}
                  {hasEvent && (
                    <div className="cal-dots">
                      {cell.events.slice(0, 3).map((e, j) => (
                        <div key={j} className="cal-dot" style={{ background: DEPT_COLORS[e.dept] || '#7F77DD' }} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {legend.length > 0 && (
          <div className="cal-legend">
            {legend.map(dept => (
              <div key={dept} className="cal-legend-item">
                <div className="cal-legend-dot" style={{ background: DEPT_COLORS[dept] || '#7F77DD' }} />
                {dept}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Right: Event List ── */}
      <div className="cal-events-card">
        <div className="cal-events-header">
          <div>
            <div className="cal-events-title">{listTitle}</div>
            <div className="cal-events-sub">{listSub}</div>
          </div>
          {selectedDate && (
            <button className="cal-clear-btn" onClick={() => setSelectedDate(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        <div className="cal-events-list">
          {listEvents.length === 0 ? (
            <div className="cal-empty">Tidak ada kegiatan di periode ini.</div>
          ) : listEvents.map((e, i) => {
            const d = new Date(e.date + 'T00:00:00')
            const color = DEPT_COLORS[e.dept] || '#7F77DD'
            return (
              <div key={i} className="cal-event-item">
                <div className="cal-event-date-box">
                  <div className="cal-event-date-day">{d.getDate()}</div>
                  <div className="cal-event-date-mon">{MONTHS_SHORT[d.getMonth()]}</div>
                </div>
                <div className="cal-event-body">
                  <div className="cal-event-name">{e.name}</div>
                  <span className="cal-event-badge" style={{ color, background: color + '20' }}>
                    <span className="dot" style={{ background: color }} />
                    {e.dept}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
