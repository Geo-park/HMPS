import Reveal from '../common/Reveal'

export default function Sejarah() {
  return (
    <section className="section-tight">
      <div className="container about-grid">
        <Reveal>
          <img
            src="/asset/background.png"
            alt="Foto pengurus HMPS INF"
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'center top', borderRadius: 'var(--radius-card)' }}
          />
        </Reveal>
        <Reveal className="about-copy">
          <h2>Rumah bagi mahasiswa Informatika.</h2>
          <p>HMPS INF berdiri sebagai wadah aspirasi, pengembangan diri, dan kebersamaan seluruh mahasiswa Program Studi Informatika. Kami percaya bahwa kolaborasi dan kekeluargaan adalah fondasi untuk tumbuh bersama.</p>
          <p>Melalui tujuh departemen yang saling bersinergi, himpunan hadir untuk mendukung kebutuhan akademik, minat bakat, hingga pengembangan karier setiap anggotanya.</p>
          <p style={{ color: 'var(--color-text-3)', fontSize: '13.5px' }}>* Konten sejarah lengkap akan diperbarui oleh pengurus.</p>
          <a href="#departemen" className="btn btn-primary" style={{ marginTop: '16px' }}>
            Jelajahi Departemen
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
