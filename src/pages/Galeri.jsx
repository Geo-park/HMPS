import Reveal from '../components/common/Reveal'
import GaleriGrid from '../components/galeri/GaleriGrid'

export default function Galeri() {
  return (
    <main className="page-fade" style={{ paddingTop: '10px' }}>
      <section className="section-tight">
        <div className="container">
          <Reveal style={{ textAlign: 'left', marginBottom: '32px' }}>
            <span
              className="eyebrow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--purple-soft, #EEF2FF)',
                color: 'var(--purple)',
                padding: '4px 12px',
                borderRadius: '99px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.05em'
              }}
            >
              <span style={{ fontSize: '14px' }}>&bull;</span> DOKUMENTASI
            </span>
            <h1 className="page-title" style={{ marginTop: '16px', marginBottom: '12px' }}>
              Galeri <span style={{ color: 'var(--purple)' }}>Kegiatan</span>
            </h1>
            <p className="page-lead" style={{ margin: '0' }}>
              Momen-momen terbaik dari berbagai kegiatan yang telah HMPS INF selenggarakan.
            </p>
          </Reveal>

          <GaleriGrid />
        </div>
      </section>
    </main>
  )
}
