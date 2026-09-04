import { Helmet } from 'react-helmet-async'
import { useMemo, useState } from 'react'
import Reveal from '../components/common/Reveal'
import EventCard from '../components/events/EventCard'
import { EVENT_PAGE_DATA } from '../data/eventPages'

export default function Event() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return EVENT_PAGE_DATA.filter((event) => {
      const matchesQuery = !normalizedQuery || [event.title, event.summary, event.description]
        .some((value) => value.toLowerCase().includes(normalizedQuery))
      const matchesFilter = activeFilter === 'all'
        || (activeFilter === 'registration' ? event.registration === 'open' : event.statusTone === activeFilter)
      return matchesQuery && matchesFilter
    })
  }, [activeFilter, query])

  const filters = [
    { value: 'all', label: 'Semua Event' },
    { value: 'upcoming', label: 'Akan Datang' },
    { value: 'registration', label: 'Pendaftaran Buka' },
    { value: 'done', label: 'Selesai' },
  ]

  return (
    <main className="event-page">
      <Helmet>
        <title>Event | HMPS Informatika UIN SMH Banten</title>
        <meta name="description" content="Informasi event dan kegiatan untuk mahasiswa Informatika UIN SMH Banten." />
      </Helmet>

      <section className="event-page__hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Agenda mahasiswa</span>
            <h1 className="event-page__title">Event HMPS Informatika</h1>
            <p className="event-page__intro">Temukan informasi kegiatan, waktu pelaksanaan, dan cerita di balik event HMPS Informatika.</p>
          </Reveal>
        </div>
      </section>

      <section className="event-page__list section-tight">
        <div className="container">
          <div className="event-controls">
            <label className="event-search">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
              <span className="sr-only">Cari agenda kegiatan</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari agenda kegiatan..."
              />
            </label>

            <div className="event-filters" role="group" aria-label="Filter event">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={activeFilter === filter.value ? 'active' : ''}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="event-grid">
              {filteredEvents.map((event, index) => (
                <Reveal key={event.slug} delay={index * 80}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="event-empty">Belum ada event yang sesuai dengan pencarian ini.</div>
          )}
        </div>
      </section>
    </main>
  )
}
