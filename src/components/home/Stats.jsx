import { Link } from 'react-router-dom'
import { useCounter } from '../../hooks/useCounter'

export default function Stats() {
  const memberCountRef = useCounter(45)
  const programCountRef = useCounter(8)

  return (
    <section className="section">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Sekilas HMPS INF</span>
          <h2 className="section-title">Satu wadah, banyak gerak.</h2>
        </div>

        <div className="bento">
          {/* Card besar: Tentang */}
          <article className="card bento-lg reveal">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>Tentang Himpunan</h3>
            <p>HMPS INF adalah rumah bagi seluruh mahasiswa Program Studi Informatika UIN SMH Banten — wadah untuk berkembang, berkarya, dan bertumbuh bersama dalam semangat kekeluargaan dan profesionalitas.</p>
            <Link to="/tentang" className="link-btn">
              Selengkapnya
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </article>

          {/* Stat: Anggota */}
          <article className="card bento-stat reveal">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="stat-num" ref={memberCountRef}>0</div>
            <div className="stat-label">Total Anggota</div>
          </article>

          {/* Stat: Program */}
          <article className="card bento-stat reveal">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
            </div>
            <div className="stat-num" ref={programCountRef}>0</div>
            <div className="stat-label">program kerja</div>
          </article>

          {/* Event terdekat */}
          <article className="card bento-event reveal">
            <div className="bento-event-top">
              <div className="bento-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <span className="bento-chip">
                <span className="dot"></span>
                Event Terdekat
              </span>
            </div>
            <div className="bento-event-date">
              <b>22</b>
              <span>Agustus<br/>2026</span>
            </div>
            <h3>PBAK</h3>
            <p className="muted-row">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Lokasi: UIN SMH Banten
            </p>
            <Link to="/tentang" className="link-btn" style={{marginTop: '16px'}}>
              Lihat semua event
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </article>

        </div>
      </div>
    </section>
  )
}
