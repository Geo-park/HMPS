/* ============================================
   HMPS INF — Home Page
   ============================================ */
import { Helmet } from 'react-helmet-async'
import { useReveal } from '../hooks/useReveal'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import KalenderKegiatan from '../components/home/KalenderKegiatan'
import Reveal from '../components/common/Reveal'

export default function Home() {
  useReveal()

  return (
    <main id="main">
      <Helmet>
        <title>HMPS Informatika UIN SMH Banten | Himpunan Mahasiswa Program Studi</title>
        <meta name="description" content="Website resmi HMPS Informatika UIN Sultan Maulana Hasanuddin Banten. Temukan informasi terbaru seputar Informatika UIN, kepengurusan, program kerja, dan agenda HMPS Informatika." />
        <link rel="canonical" href="https://hmps-two.vercel.app/" />
      </Helmet>

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
