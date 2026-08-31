/* ============================================
   HMPS INF — Home Page
   ============================================ */
import { useReveal } from '../hooks/useReveal'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import KalenderKegiatan from '../components/home/KalenderKegiatan'
import Reveal from '../components/common/Reveal'

export default function Home() {
  useReveal()

  return (
    <main id="main">
      <Hero />
      <Stats />

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
    </main>
  )
}
