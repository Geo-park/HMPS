import { Helmet } from 'react-helmet-async'
import Reveal from '../components/common/Reveal'

const PRODUCTS = [
  { nama: "Dimsum", penjual: "Fahmi", no: "+62 895-3535-87649", img: "/images/marketplace/dimsum.jpg" },
  { nama: "Risol", penjual: "Cika", no: "+62 882-0174-96099", img: "/images/marketplace/risol.jpg" },
  { nama: "Perlengkapan PBAK", penjual: "Nia", no: "+62 857-1946-3402", img: "/images/marketplace/pbak.jpg" }
]

export default function Marketplace() {
  return (
    <>
      <Helmet>
        <title>Marketplace - HMPS Informatika UIN Banten</title>
      </Helmet>

      <main className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--purple)' }}>Jual Beli Mahasiswa</span>
            <h1 className="section-title">Marketplace</h1>
            <p className="section-sub">Dukung usaha teman-teman mahasiswa Informatika. Pilih jajanan atau perlengkapan yang kamu butuhkan!</p>
          </Reveal>

          <Reveal delay={100} style={{ marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {PRODUCTS.map((prod, i) => (
                <div key={i} style={{ 
                  background: 'var(--color-surface)', 
                  borderRadius: '20px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}>
                  <div style={{ 
                    height: '200px', 
                    background: 'var(--color-bg)',
                    borderBottom: '1px solid var(--color-border)',
                    overflow: 'hidden'
                  }}>
                    <img src={prod.img} alt={prod.nama} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '20px', color: 'var(--color-text)' }}>{prod.nama}</h3>
                    <p style={{ margin: '0 0 20px 0', color: 'var(--color-text-2)', fontSize: '14px' }}>Oleh: <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>{prod.penjual}</span></p>
                    
                    <a 
                      href={`https://wa.me/${prod.no.replace(/\D/g, '').replace(/^0/, '62').replace(/^8/, '628')}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ 
                        marginTop: 'auto',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: '8px',
                        background: '#25D366',
                        color: 'white',
                        padding: '12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '15px'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      Pesan Sekarang
                    </a>
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
