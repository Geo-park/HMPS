import { Link } from 'react-router-dom'

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
}

function ClockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
}

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function EventMeta({ icon: Icon, children }) {
  return (
    <div className="event-card__meta">
      <Icon />
      <span>{children}</span>
    </div>
  )
}

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-card__image">
        {event.image ? <img src={event.image} alt={`Dokumentasi ${event.title}`} /> : <span>Gambar event</span>}
        <span className={`event-card__status event-card__status--${event.statusTone}`}>{event.status}</span>
      </div>

      <div className="event-card__content">
        <div className="event-card__meta-list">
          <EventMeta icon={CalendarIcon}>{event.dateLabel}</EventMeta>
          <EventMeta icon={ClockIcon}>{event.time}</EventMeta>
          <EventMeta icon={PinIcon}>{event.place}</EventMeta>
        </div>
        <h2 className="event-card__title">{event.title}</h2>
        <p className="event-card__summary">{event.summary}</p>
        <Link className="event-card__link" to={`/event/${event.slug}`}>
          Selengkapnya
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
        </Link>
      </div>
    </article>
  )
}
