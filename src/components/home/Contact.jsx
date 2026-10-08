import React from 'react'
import Reveal from '../common/Reveal'

export default function Contact() {
  return (
    <section className="section contact-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>

          {/* Left side */}
          <div style={{ flex: '1 1 400px' }}>
            <Reveal>
              <h2 className="section-title" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '1.1', marginBottom: '24px' }}>
                Ayo,<br />
                <span style={{ color: 'var(--purple)' }}>Terhubung</span><br />
                dengan Kami.
              </h2>
              <p style={{ fontSize: '18px', color: 'var(--color-text-2)', maxWidth: '420px', marginBottom: '40px', lineHeight: '1.6' }}>
                Terbuka untuk kolaborasi, pertanyaan, dan masukan. Temukan kami di berbagai platform berikut.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ height: '1px', background: 'var(--color-border-2)', flex: '0 0 40px' }}></div>
                <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--color-text-3)', textTransform: 'uppercase' }}>4 Platform Tersedia</span>
              </div>
            </Reveal>
          </div>

          {/* Right side - Grid */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <Reveal delay={100} style={{ height: '100%' }}>
                <ContactCard
                  icon="ig"
                  title="INSTAGRAM"
                  value="@hmpsinformatikaa"
                  link="https://instagram.com/hmpsinformatikaa"
                />
              </Reveal>
              <Reveal delay={200} style={{ height: '100%' }}>
                <ContactCard
                  icon="tiktok"
                  title="TIKTOK"
                  value="@hmps.informatika"
                  link="https://www.tiktok.com/@hmps.informatika"
                />
              </Reveal>
              <Reveal delay={300} style={{ height: '100%' }}>
                <ContactCard
                  icon="yt"
                  title="YOUTUBE"
                  value="@hmpsinformatika"
                  link="https://youtube.com/@hmpsinformatika"
                />
              </Reveal>
              <Reveal delay={400} style={{ height: '100%' }}>
                <ContactCard
                  icon="mail"
                  title="GMAIL"
                  value="hmpsinformatikauinbanten@gmail.com"
                  link="mailto:hmpsinformatikauinbanten@gmail.com"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, value, link }) {
  const getIcon = () => {
    switch (icon) {
      case 'ig':
        return (
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 12px rgba(220,39,67,0.2)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
        );
      case 'tiktok':
        return (
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
          </div>
        );
      case 'yt':
        return (
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 12px rgba(255,0,0,0.2)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff" /></svg>
          </div>
        );
      case 'mail':
        return (
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#4285F4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 12px rgba(66,133,244,0.2)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
        );
    }
  }

  return (
    <a href={link} target="_blank" rel="noreferrer" className="contact-card" style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      background: 'var(--color-surface)',
      borderRadius: '20px',
      border: '1px solid var(--color-border)',
      textDecoration: 'none',
      position: 'relative',
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s',
      height: '100%',
      boxSizing: 'border-box'
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)';
        e.currentTarget.style.borderColor = 'var(--purple)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--color-text-3)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
      {getIcon()}
      <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
        <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-text-3)', letterSpacing: '0.08em', marginBottom: '6px' }}>{title}</div>
        <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--color-text)', wordBreak: 'break-all' }}>{value}</div>
      </div>
    </a>
  );
}
