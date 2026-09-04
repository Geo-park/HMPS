import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getEventBySlug } from '../data/eventPages'

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
}

function ClockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
}

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
}

export default function EventDetail() {
  const { slug } = useParams()
  const event = getEventBySlug(slug)

  if (!event) return <Navigate to="/event" replace />

  return (
    <main className="event-detail-page">
      <Helmet>
        <title>{event.title} | HMPS Informatika</title>
        <meta name="description" content={event.summary} />
      </Helmet>

      <section className="event-detail__hero">
        <div className="container">
          <Link to="/event" className="event-detail__back">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Semua Agenda &amp; Kegiatan
          </Link>
          <span className={`event-card__status event-card__status--${event.statusTone}`}>{event.status}</span>
          <h1>{event.title}</h1>
        </div>
      </section>

      <section className="section-tight">
        <div className="container event-detail__layout">
          <div className="event-detail__image">
            {event.image ? <img src={event.image} alt={`Dokumentasi ${event.title}`} /> : <span>Gambar event</span>}
          </div>

          <div className="event-detail__body">
            <h2>Tentang event</h2>
            <p>{event.description}</p>

            <div className="event-detail__meta-list">
              <div><CalendarIcon /><span>{event.dateLabel}</span></div>
              <div><ClockIcon /><span>{event.time}</span></div>
              <div><PinIcon /><span>{event.place}</span></div>
            </div>

            <div className={`event-detail__registration event-detail__registration--${event.registration}`}>
              <div>
                <span className="event-detail__photos-label">Pendaftaran</span>
                <strong>{event.registrationLabel}</strong>
              </div>
              {event.registration === 'open' && event.registrationLink ? (
                <a href={event.registrationLink} target="_blank" rel="noreferrer" className="event-detail__register-link">
                  Daftar Sekarang
                  <ExternalIcon />
                </a>
              ) : event.registration === 'open' ? (
                <span className="event-detail__register-pending">Link pendaftaran segera ditambahkan</span>
              ) : null}
            </div>

            <div className="event-detail__contact">
              <div>
                <span className="event-detail__photos-label">Informasi pendaftaran</span>
                <strong>{event.registrationContactName || 'Kontak panitia'}</strong>
              </div>
              {event.registrationContact ? (
                <a href={`tel:${event.registrationContact}`} className="event-detail__contact-link">
                  {event.registrationContact}
                </a>
              ) : (
                <span className="event-detail__photos-pending">Kontak belum ditambahkan</span>
              )}
            </div>

            <div className="event-detail__photos">
              <div>
                <span className="event-detail__photos-label">Dokumentasi</span>
                <strong>Folder foto event</strong>
              </div>
              {event.photoFolder ? (
                <a href={event.photoFolder} target="_blank" rel="noreferrer" className="event-detail__photos-link">
                  Buka folder foto
                  <ExternalIcon />
                </a>
              ) : (
                <span className="event-detail__photos-pending">Link segera ditambahkan</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
