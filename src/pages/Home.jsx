/* ============================================
   HMPS INF — Home Page
   ============================================ */
import { Helmet } from 'react-helmet-async'
import { useReveal } from '../hooks/useReveal'
import Hero from '../components/home/Hero'
import Sponsorship from '../components/home/Sponsorship'
import Stats from '../components/home/Stats'
import KalenderKegiatan from '../components/home/KalenderKegiatan'
import Reveal from '../components/common/Reveal'
import KetumGreeting from '../components/home/KetumGreeting'
import EventCard from '../components/events/EventCard'
import { PENGUMUMAN_DATA } from '../data/pengumuman'
import { EVENT_PAGE_DATA } from '../data/eventPages'

export default function Home() {
  useReveal()

  return (
    <main id="main">
      <Helmet>
        <title>HMPS Informatika UIN SMH Banten | Himpunan Mahasiswa Program Studi</title>
        <meta name="description" content="Website resmi HMPS Informatika UIN Sultan Maulana Hasanuddin Banten. Temukan informasi terbaru seputar Informatika UIN, kepengurusan, program kerja, dan agenda HMPS Informatika." />
        <link rel="canonical" href="https://hmps-inf.fsainsuinbanten.my.id/" />
      </Helmet>

      <Hero />
      <Sponsorship />
      <Stats />

      {/* ═══ TERBARU ═══ */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-2)' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Info Terkini</span>
            <h2 className="section-title">Pengumuman & Event Terbaru</h2>
          </Reveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', marginTop: '40px' }}>
            
            {/* Pengumuman Terbaru */}
            <div className="home-latest-col">
              <h3 style={{ fontSize: '20px', marginBottom: '24px', borderBottom: '2px solid var(--color-border)', paddingBottom: '12px', fontWeight: '700' }}>
                📢 Pengumuman Terbaru
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {PENGUMUMAN_DATA.slice(0, 3).map(p => (
                  <a href={p.href} target="_blank" rel="noreferrer" key={p.id} className="home-pengumuman-card" style={{ padding: '20px', background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'all 0.3s ease', boxShadow: 'var(--shadow-sm)' }}>
                    <h4 style={{ fontSize: '16px', marginBottom: '8px', color: 'var(--color-primary)', lineHeight: '1.4' }}>{p.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-2)', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.summary}</p>
                    <div style={{ marginTop: '12px', fontSize: '13px', fontWeight: '600', color: 'var(--color-text)' }}>Baca selengkapnya &rarr;</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Event Terbaru */}
            <div className="home-latest-col">
              <h3 style={{ fontSize: '20px', marginBottom: '24px', borderBottom: '2px solid var(--color-border)', paddingBottom: '12px', fontWeight: '700' }}>
                🗓️ Event Terdekat
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '360px' }}>
                {EVENT_PAGE_DATA.slice(0, 1).map(e => (
                  <div key={e.id} style={{ display: 'block', transform: 'scale(0.95)', transformOrigin: 'top left' }}>
                    <EventCard event={e} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ KALENDER KEGIATAN ═══ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Agenda 2026</span>
            <h2 className="section-title">Kalender Kegiatan</h2>
            <p className="section-sub">Program kerja HMPS INF sepanjang periode 2026/2027.</p>
          </Reveal>
          <KalenderKegiatan />
        </div>
      </section>

      {/* ═══ KETUM WIDGET ═══ */}
      <KetumGreeting />
    </main>
  )
}
