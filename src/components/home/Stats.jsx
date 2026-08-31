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

          {/* Departemen */}
          <article className="card bento-event reveal">
            <div className="bento-event-top">
              <div className="bento-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                </svg>
              </div>
              <span className="bento-chip">
                <span className="dot"></span>
                7 Departemen
              </span>
            </div>
            <h3 style={{marginTop: 'auto', marginBottom: '8px'}}>Struktur Organisasi</h3>
            <p className="muted-row">
              Setiap departemen memiliki fokus dan program kerja masing-masing untuk membangun HMPS INF.
            </p>
            <Link to="/tentang#departemen" className="link-btn" style={{marginTop: '16px'}}>
              Lihat Departemen
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
