import Reveal from '../common/Reveal'

export default function NilaiOrganisasi() {
  return (
    <section className="section-tight" id="nilai">
      <div className="container">
        <Reveal style={{ marginBottom: '32px' }}>
          <span className="eyebrow">Nilai Kami</span>
          <h2 className="section-title">Yang kami pegang teguh.</h2>
        </Reveal>
        <div className="values-grid">
          <Reveal as="article" className="card value-card">
            <div className="bento-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h4>Kekeluargaan</h4>
            <p>Membangun ikatan erat tanpa sekat angkatan, menjadikan himpunan sebagai rumah kedua.</p>
          </Reveal>
          <Reveal as="article" className="card value-card">
            <div className="bento-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h4>Profesionalitas</h4>
            <p>Bekerja dengan integritas, terstruktur, dan berorientasi pada hasil yang berdampak.</p>
          </Reveal>
          <Reveal as="article" className="card value-card">
            <div className="bento-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h4>Inovasi</h4>
            <p>Mendorong ide-ide baru dan pemanfaatan teknologi dalam setiap kegiatan.</p>
          </Reveal>
          <Reveal as="article" className="card value-card">
            <div className="bento-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h4>Kepedulian</h4>
            <p>Hadir untuk sesama mahasiswa dan masyarakat melalui aksi nyata.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
