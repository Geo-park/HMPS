import { Helmet } from "react-helmet-async"
import { ARSIP_DATA } from "../data/arsip"
import Reveal from "../components/common/Reveal"
import "../css/arsip.css"

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  )
}

export default function Arsip() {
  return (
    <main className="arsip-page">
      <Helmet>
        <title>Arsip Digital | HMPS Informatika UIN SMH Banten</title>
        <meta name="description" content="Pusat arsip dan dokumen digital HMPS Informatika UIN SMH Banten." />
      </Helmet>

      <section className="arsip-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Digital Library</span>
            <h1 className="arsip-hero__title">Arsip Digital</h1>
            <p className="arsip-hero__intro">Telusuri dan unduh dokumen, laporan, serta berkas penting seputar kegiatan HMPS Informatika.</p>
          </Reveal>
        </div>
      </section>

      <section className="arsip-content section-tight">
        <div className="container">
          <div className="arsip-grid">
            {ARSIP_DATA.map((file, index) => (
              <Reveal key={file.id} delay={index * 50}>
                <div className="arsip-card">
                  <div className="arsip-card__icon">
                    <FileIcon />
                  </div>
                  <div className="arsip-card__info">
                    <span className="arsip-card__category">{file.category}</span>
                    <h3 className="arsip-card__title">{file.title}</h3>
                    <div className="arsip-card__meta">
                      <span>{file.date}</span>
                      <span className="separator">â€¢</span>
                      <span>{file.size}</span>
                    </div>
                  </div>
                  <a href={file.link} className="arsip-card__action" aria-label={`Unduh ${file.title}`}>
                    <DownloadIcon />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
