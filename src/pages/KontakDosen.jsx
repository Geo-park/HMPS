import { Helmet } from 'react-helmet-async'
import Reveal from '../components/common/Reveal'

const DOSEN_LIST = [
  { nama: "Ibnu Mas'ud, S.Kom, M.Kom", no: "+62 821-2275-6641" },
  { nama: "Abdul Qodir, M.Pd.I", no: "+62 852-9428-1485" },
  { nama: "Wawan Setiawan, S.Kom, M.Kom", no: "+62 815-8486-1516" },
  { nama: "Eri Sulistiati, M.Biotek", no: "+62 896-6031-7633" },
  { nama: "Roza Puspita, M.Sc", no: "+62 856-4916-4373" },
  { nama: "Dr. Isak Iskandar, M.Pd", no: "+62 812-1803-1399" },
  { nama: "Reza Syafrizal, M.Kom", no: "+62 812-9102-0152" },
  { nama: "Dr. Lilis A Rachman, M.M", no: "+62 813-8558-2249" },
  { nama: "Dr. Aan Ansori, M.Kom", no: "+62 898-8887-964" },
  { nama: "Ade Irmadiki Agipa, M.Sc.", no: "+62 857-2929-3807" },
  { nama: "Ahmad Tabrani, M.T.I", no: "+62 811-1269-989" },
  { nama: "Prof. Dr. H. Qurtubi, M.A", no: "+62 857-7359-6842" },
  { nama: "Prof Siti Fatimah Yusuf", no: "+62 813-2198-2008" },
  { nama: "Wiwik Tri Hardianti, S.Si., M.Mat.", no: "+62 812-1188-8957" },
  { nama: "Reza Fandana, M.Pd", no: "+62 823-7702-5552" },
  { nama: "Birru Muqdamien, M.Kom", no: "+62 818-738-932" },
  { nama: "Dr. Asep Saefurohman", no: "+62 813-8077-5639" },
  { nama: "Muhamad Fajar Muarif, M.Sc", no: "+62 812-7145-8484" },
]

export default function KontakDosen() {
  return (
    <>
      <Helmet>
        <title>Kontak Dosen - HMPS Informatika UIN Banten</title>
      </Helmet>

      <main className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div className="container">
          <Reveal>
            <h1 className="section-title">Kontak Dosen</h1>
            <p className="section-sub">Informasi kontak dosen-dosen Program Studi Informatika UIN Sultan Maulana Hasanuddin Banten.</p>
          </Reveal>

          <Reveal delay={100} style={{ marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {DOSEN_LIST.map((dosen, i) => (
                <div key={i} style={{ 
                  background: 'var(--color-surface)', 
                  padding: '24px', 
                  borderRadius: '16px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: 'var(--color-text)' }}>{dosen.nama}</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--color-text-2)' }}>
                    {dosen.email && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        {dosen.email}
                      </div>
                    )}
                    {dosen.no && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <a 
                          href={`https://wa.me/${dosen.no.replace(/\D/g, '').replace(/^0/, '62').replace(/^8/, '628')}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          style={{ color: 'var(--color-text-2)', textDecoration: 'none' }}
                        >
                          {dosen.no}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </main>
    </>
  )
}
