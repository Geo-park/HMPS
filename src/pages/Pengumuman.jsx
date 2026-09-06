import { Helmet } from 'react-helmet-async'
import Reveal from '../components/common/Reveal'
import { PENGUMUMAN_DATA } from '../data/pengumuman'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export default function Pengumuman() {
  return (
    <main className="announcement-page">
      <Helmet>
        <title>Pengumuman | HMPS Informatika UIN SMH Banten</title>
        <meta name="description" content="Pengumuman terbaru untuk mahasiswa Informatika UIN SMH Banten." />
      </Helmet>

      <section className="announcement-page__hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Informasi terbaru</span>
            <h1 className="announcement-page__title">Pengumuman</h1>
            <p className="announcement-page__intro">Temukan informasi penting dan pembaruan terbaru untuk mahasiswa Informatika.</p>
          </Reveal>
        </div>
      </section>

      <section className="announcement-page__list section-tight">
        <div className="container">
          <div className="announcement-grid">
            {PENGUMUMAN_DATA.map((announcement, index) => (
              <Reveal key={announcement.id} delay={index * 80}>
                <article className="announcement-card">
                  <div className="announcement-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 11v2a2 2 0 0 0 2 2h2l7 4V5l-7 4H5a2 2 0 0 0-2 2z" />
                      <path d="M18 9a4 4 0 0 1 0 6" />
                    </svg>
                  </div>
                  <div className="announcement-card__content">
                    <span className="announcement-card__label">Pengumuman akademik</span>
                    <h2>{announcement.title}</h2>
                    <p>{announcement.summary}</p>
                    <a className="btn btn-primary announcement-card__link" href={announcement.href} target="_blank" rel="noreferrer">
                      {announcement.label}
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}