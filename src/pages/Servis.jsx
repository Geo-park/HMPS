import { useEffect } from 'react'
import Reveal from '../components/common/Reveal'

const SERVICES = [
  { id: 'hp', title: 'Servis HP', desc: 'Perbaikan hardware dan software smartphone. Ganti baterai, mati total, bootloop, dll.', icon: 'smartphone' },
  { id: 'laptop', title: 'Servis Laptop', desc: 'Solusi untuk laptop lemot, mati total, upgrade RAM/SSD, dan perbaikan motherboard.', icon: 'laptop' },
  { id: 'pasta', title: 'Ganti Pasta', desc: 'Pembersihan debu dan penggantian thermal paste agar suhu perangkat kembali normal.', icon: 'thermometer' },
  { id: 'lcd', title: 'Ganti LCD HP', desc: 'Penggantian layar LCD retak, bergaris, atau blank hitam dengan pengerjaan rapi.', icon: 'monitor' },
  { id: 'windows', title: 'Instal Ulang Windows', desc: 'Instalasi bersih sistem operasi Windows untuk mengatasi virus atau sistem yang lambat.', icon: 'server' },
  { id: 'microsoft', title: 'Instal Semua Microsoft', desc: 'Instalasi paket Microsoft Office (Word, Excel, PowerPoint) dan software esensial lainnya.', icon: 'grid' },
]

export default function Servis() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Servis Elektronik | HMPS INF'
  }, [])

  const whatsappNumber = "6283192893467"
  const whatsappMessage = encodeURIComponent("Halo, saya ingin bertanya tentang layanan Servis Elektronik HMPS INF.")

  return (
    <main className="page-servis">
      {/* Hero Section */}
      <section className="servis-hero">
        <div className="servis-hero-bg">
          <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Electronics Repair" />
          <div className="servis-hero-overlay"></div>
        </div>
        <div className="container relative z-10 servis-hero-inner">
          <Reveal className="servis-hero-content">
            <span className="eyebrow servis-accent">MITRA TERPERCAYA ANDA</span>
            <h1 className="servis-hero-title">
              Layanan Servis <br />
              <span className="servis-accent">Elektronik & Komputer</span>
            </h1>
            <p className="servis-hero-desc">
              Jangan biarkan gadget rusak menghambat aktivitasmu! Dapatkan servis profesional yang cepat, garansi aman, dan harga bersahabat. Perbaiki sekarang dan nikmati performa seperti baru lagi.
            </p>
            <div className="servis-hero-actions">
              <a href="#services" className="btn-cyan">Lihat Jasa &rarr;</a>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="btn-white">Konsultasi &rarr;</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="servis-features">
        <div className="container">
          <div className="features-grid">
            <Reveal className="feature-card" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h3>Layanan Servis Terbaik</h3>
              <p>Perbaikan menyeluruh untuk masalah ringan hingga berat pada perangkat Anda.</p>
            </Reveal>
            <Reveal className="feature-card feature-card-active" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3>Dikerjakan Oleh Ahli</h3>
              <p>Tim teknisi kami sudah berpengalaman menangani berbagai kerusakan elektronik.</p>
            </Reveal>
            <Reveal className="feature-card" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Jaminan Keamanan 100%</h3>
              <p>Privasi data perangkat Anda tetap terjaga selama proses perbaikan berlangsung.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="servis-about">
        <div className="container">
          <div className="about-split">
            <Reveal className="about-img">
              <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Repair Team" />
            </Reveal>
            <Reveal className="about-content">
              <span className="eyebrow servis-accent">TENTANG KAMI</span>
              <h2 className="servis-section-title">Kami Menyediakan Layanan Servis <br /><span className="servis-accent">Berkualitas</span></h2>
              <p className="servis-section-desc">
                Gadget Anda bermasalah? Jangan biarkan produktivitas Anda terhambat. Kami hadir memberikan layanan reparasi terbaik dengan standar kualitas tinggi untuk mahasiswa dan umum.
              </p>
              <ul className="about-list">
                <li>
                  <div className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg></div>
                  <div>
                    <strong>Harga Terjangkau</strong>
                    <p>Biaya perbaikan disesuaikan dengan kondisi, ramah untuk kantong mahasiswa.</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                  <div>
                    <strong>Layanan Terpercaya</strong>
                    <p>Bisa dikonsultasikan lebih dahulu sebelum diputuskan penanganan lebih lanjut.</p>
                  </div>
                </li>
              </ul>
              <div className="about-actions">
                <a href="#services" className="btn-cyan">Temukan Lebih Lanjut &rarr;</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="servis-list-section">
        <div className="container">
          <Reveal className="servis-list-header">
            <span className="eyebrow servis-accent">LAYANAN</span>
            <h2 className="section-title">Pilihan Layanan Servis <br />Terbaik <span className="servis-accent">di Kota Ini</span></h2>
            <p className="section-sub">
              Solusi komprehensif untuk berbagai kerusakan fisik, pemeliharaan software, dan instalasi aplikasi pada gadget Anda.
            </p>
          </Reveal>
          
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="service-icon">
                  <div className="service-icon-inner">
                    {s.icon === 'smartphone' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>}
                    {s.icon === 'laptop' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>}
                    {s.icon === 'thermometer' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>}
                    {s.icon === 'monitor' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}
                    {s.icon === 'server' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>}
                    {s.icon === 'grid' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>}
                  </div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-link-wrapper">
                  <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang layanan ${s.title}.`)}`} target="_blank" rel="noreferrer" className="service-link">
                    &rarr;
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="servis-cta">
        <div className="container">
          <Reveal className="cta-box">
            <div className="cta-content">
              <h2>Siap Memperbaiki Perangkat Anda?</h2>
              <p>Bisa langsung datang ke lokasi kami atau hubungi via WhatsApp untuk konsultasi dan penanganan cepat.</p>
              <div className="cta-contact-info">
                <div className="contact-item">
                  <span className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span>+62 831-9289-3467 (Rudi)</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span>Lokasi via Sharelock (TBA)</span>
                </div>
              </div>
            </div>
            <div className="cta-actions">
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="btn-cyan btn-cta">
                Chat via WhatsApp &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
