import Reveal from '../common/Reveal'

export default function VisiMisi() {
  return (
    <section className="section-tight" id="visi-misi" style={{ background: 'var(--color-bg-2)' }}>
      <div className="container">
        <Reveal style={{ marginBottom: '32px' }}>
          <span className="eyebrow">Arah Gerak</span>
          <h2 className="section-title">Visi & Misi</h2>
        </Reveal>
        <div className="vm-grid">
          <Reveal as="article" className="card vm-card">
            <div className="vm-icon" style={{ background: 'var(--purple-soft)', color: 'var(--purple)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <h3>Visi</h3>
            <p>Menjadikan Himpunan Mahasiswa Informatika UIN Banten sebagai wadah pengembangan akademik, keterampilan teknologi, serta pembentukan karakter mahasiswa yang aktif dan berdaya saing.</p>
          </Reveal>
          <Reveal as="article" className="card vm-card">
            <div className="vm-icon" style={{ background: 'var(--purple-soft)', color: 'var(--purple)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3>Misi</h3>
            <ul className="vm-list">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Meningkatkan kualitas akademik mahasiswa Informatika</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Mewujudkan himpunan yang aktif, solid, dan transparan</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Membangun kolaborasi dengan sivitas akademik dan masyarakat</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
