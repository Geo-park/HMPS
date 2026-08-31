import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-glow"></div>

      <div className="container hero-inner">
        <h1 className="hero-title reveal" style={{ transitionDelay: '100ms' }}>
          Himpunan Mahasiswa Program Studi Informatika<br/>
          <span className="grad">UIN SMH Banten</span>
        </h1>
        <p className="hero-sub reveal" style={{ transitionDelay: '200ms' }}>Kita Satu, Kita Informatika.</p>
        <div className="hero-cta reveal" style={{ transitionDelay: '300ms' }}>
          <Link to="/tentang" className="btn btn-primary">
            Kenali Kami
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link to="/tentang#departemen" className="btn btn-outline">Lihat Departemen</Link>
        </div>
      </div>

      <button className="scroll-ind" onClick={() => window.scrollTo({top: window.innerHeight * 0.82, behavior: 'smooth'})}>
        <span>Scroll</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </button>
    </section>
  )
}
