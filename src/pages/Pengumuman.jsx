import { Helmet } from 'react-helmet-async'
import Reveal from '../components/common/Reveal'
import { PENGUMUMAN_DATA } from '../data/pengumuman'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export default function Pengumuman() {
  return (
    <main className="mading-page">
      <Helmet>
        <title>Pengumuman Terbaru HMPS Informatika UIN Banten | Info Mahasiswa Informatika</title>
        <meta name="description" content="Pengumuman dan informasi terbaru dari HMPS Informatika UIN Sultan Maulana Hasanuddin Banten. Cek mading digital untuk update beasiswa, lowongan, lomba, dan informasi penting seputar mahasiswa Informatika." />
        <meta name="keywords" content="pengumuman hmps informatika, info mahasiswa informatika uin banten, berita informatika uin smh banten, mading informatika" />
        <link rel="canonical" href="https://hmps-inf.fsainsuinbanten.my.id/pengumuman" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://hmps-inf.fsainsuinbanten.my.id/' },
            { '@type': 'ListItem', position: 2, name: 'Pengumuman', item: 'https://hmps-inf.fsainsuinbanten.my.id/pengumuman' },
          ]
        })}</script>
      </Helmet>

      <div className="mading-board">
        <header className="mading-header">
          <h1 className="mading-title">
            <span className="letter letter-1">M</span>
            <span className="letter letter-2">A</span>
            <span className="letter letter-3">D</span>
            <span className="letter letter-4">I</span>
            <span className="letter letter-5">N</span>
            <span className="letter letter-6">G</span>
          </h1>
          <div className="mading-subtitle-container">
            <span className="mading-subtitle">PENGUMUMAN INFORMATIKA</span>
          </div>
        </header>

        <section className="mading-content">
          <div className="mading-masonry">
            {PENGUMUMAN_DATA.map((announcement, index) => {
              // Assign a random-looking rotation and color based on index
              const rotation = (index % 2 === 0 ? 1 : -1) * ((index % 3) + 1);
              const colorClass = `paper-color-${(index % 4) + 1}`;
              
              return (
                <Reveal key={announcement.id} delay={index * 80}>
                  <article className={`mading-paper ${colorClass}`} style={{ '--rotate': `${rotation}deg` }}>
                    <div className="paper-pin"></div>
                    <header className="paper-header">
                      <span className="paper-category">Info {index + 1}</span>
                      <h2 className="paper-title">{announcement.title}</h2>
                    </header>
                    {announcement.image && (
                      <div className="paper-image-container">
                        <img src={announcement.image} alt={announcement.title} className="paper-image" onError={(e) => e.target.style.display = 'none'} />
                      </div>
                    )}
                    <div className="paper-body">
                      <p className="paper-text">{announcement.summary}</p>
                      <a className="paper-link" href={announcement.href} target="_blank" rel="noreferrer">
                        BACA SELENGKAPNYA <ArrowIcon />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  )
}