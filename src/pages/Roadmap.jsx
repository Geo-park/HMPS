import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import Reveal from '../components/common/Reveal'
import { roadmapMatkul, kategoriMatkul } from '../data/roadmap'
import '../css/roadmap.css'

export default function Roadmap() {
  const [activeSem, setActiveSem] = useState(1)

  // Calculate cumulative SKS up to selected semester
  const { currentSKS, cumulativeSKS } = useMemo(() => {
    let cum = 0
    let curr = 0
    roadmapMatkul.forEach(sem => {
      const semSks = sem.matkul.reduce((acc, mk) => acc + mk.sks, 0)
      if (sem.semester <= activeSem) {
        cum += semSks
      }
      if (sem.semester === activeSem) {
        curr = semSks
      }
    })
    return { currentSKS: curr, cumulativeSKS: cum }
  }, [activeSem])

  const activeData = roadmapMatkul.find(s => s.semester === activeSem)

  return (
    <>
      <Helmet>
        <title>Roadmap Mata Kuliah - HMPS Informatika UIN Banten</title>
      </Helmet>

      <main className="page-wrapper roadmap-page">
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--purple)', padding: '6px 14px', borderRadius: '99px', fontSize: '12px', fontWeight: '700' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }}></div>
              PERJALANAN AKADEMIK
            </span>
            <h1 className="section-title" style={{ marginTop: '20px', fontSize: '48px' }}>Roadmap <span style={{ color: 'var(--purple)' }}>Mata Kuliah</span></h1>
            <p className="section-sub" style={{ maxWidth: '600px', textAlign: 'left', margin: '0' }}>
              Gambaran jalur perkuliahan Program Studi Informatika dari semester 1 sampai 8 — total <strong>145 SKS</strong> sampai lulus.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-3)', maxWidth: '700px', marginTop: '16px' }}>
              Susunan matkul di halaman ini adalah referensi umum, bisa berbeda dengan kurikulum resmi yang berlaku — cek buku panduan akademik prodi untuk detail final.
            </p>
          </Reveal>

          <Reveal delay={100} style={{ marginTop: '50px' }}>
            <div className="roadmap-timeline">
              <div className="timeline-line"></div>
              {roadmapMatkul.map(sem => (
                <div 
                  key={sem.semester} 
                  className={`timeline-node ${activeSem === sem.semester ? 'active' : ''}`}
                  onClick={() => setActiveSem(sem.semester)}
                >
                  <div className="node-circle">{sem.semester}</div>
                  <span className="node-label">SMT {sem.semester}</span>
                </div>
              ))}
            </div>

            <div className="semester-detail-container">
              <div className="semester-detail-header">
                <div className="header-left">
                  <div className="header-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </div>
                  <div className="header-title-wrap">
                    <h2>Semester {activeSem}</h2>
                    <p>{activeData?.fokus}</p>
                  </div>
                </div>
                <div className="header-right">
                  <div className="sks-badge">
                    <span>SKS SEMESTER</span>
                    <strong>{currentSKS}</strong>
                  </div>
                  <div className="sks-badge blue">
                    <span>KUMULATIF</span>
                    <strong>{cumulativeSKS}</strong>
                  </div>
                </div>
              </div>

              <div className="matkul-grid-2">
                {activeData?.matkul.map((mk, i) => {
                  const cat = kategoriMatkul[mk.kategori]
                  return (
                    <div key={i} className="matkul-card">
                      <div className="matkul-card-left">
                        <div className="matkul-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                        </div>
                        <div className="matkul-info">
                          <h3>{mk.nama}</h3>
                          <span style={{ color: cat.className.includes('slate') ? '#64748b' : cat.className.includes('purple') ? '#9333ea' : cat.className.includes('amber') ? '#d97706' : cat.className.includes('emerald') ? '#059669' : 'var(--purple)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {cat.label}
                          </span>
                        </div>
                      </div>
                      <div className="matkul-card-right">
                        <div className="sks-circle">{mk.sks}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div style={{ marginTop: '64px' }} className="graduation-requirements">
              <div style={{ marginBottom: '64px' }}>
                <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px', color: 'var(--color-text)', textAlign: 'center' }}>Alur Skripsi & Kelulusan</h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-2)', marginBottom: '40px', textAlign: 'center' }}>Tahapan yang harus dilalui menuju gelar Sarjana Komputer.</p>
                
                <div className="alur-timeline-container">
                  <div className="alur-timeline-line"></div>
                  {[
                    { title: "Tahap 1", subtitle: "Mencapai 90 SKS" },
                    { title: "Tahap 2", subtitle: "Magang / PKL" },
                    { title: "Tahap 3", subtitle: "Kukerta / KKN" },
                    { title: "Tahap 4", subtitle: "Sidang Proposal" },
                    { title: "Tahap 5", subtitle: "Sidang Komprehensif" },
                    { title: "Tahap 6", subtitle: "Seminar Hasil" },
                    { title: "Tahap Akhir", subtitle: "Skripsi / Jurnal SINTA 2" }
                  ].map((item, i) => (
                    <div key={i} className={`alur-node ${i % 2 === 0 ? 'node-top' : 'node-bottom'}`}>
                      <div className="alur-dot"></div>
                      <div className="alur-card">
                        <div className="alur-card-inner">
                          <h4>{item.title}</h4>
                          <div className="alur-divider"></div>
                          <p>{item.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
                {/* Syarat Wisuda */}
                <div style={{ background: 'var(--color-surface)', padding: '32px', borderRadius: '24px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px', color: 'var(--color-text)' }}>Syarat Ekstra Wisuda</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-2)', marginBottom: '24px' }}>Sertifikasi dan pencapaian wajib sebelum mendaftar wisuda.</p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      { icon: "📖", text: "Hafalan 30 Juz" },
                      { icon: "🇺🇸", text: "Sertifikat TOEFL" },
                      { icon: "🇸🇦", text: "Sertifikat TOAFL" },
                      { icon: "🎓", text: "Sertifikat Seminar (2x Nasional atau 1x Internasional)" },
                      { icon: "💻", text: "Sertifikasi ICT & Keahlian" }
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'var(--color-bg)', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '20px' }}>{item.icon}</span>
                        <span style={{ fontSize: '15px', color: 'var(--color-text)', fontWeight: '600' }}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  )
}
