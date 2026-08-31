import { useState } from 'react'
import Reveal from '../common/Reveal'
import DepartemenModal from './DepartemenModal'
import { DEPTS, DEPT_ANIMATIONS, STATUS_COLOR } from '../../data/departemen'

function initials(name) {
  if (name.startsWith('—')) return '?'
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

export default function Departemen() {
  const [activeDept, setActiveDept] = useState('internal')
  const [modalProker, setModalProker] = useState(null)

  const currentDept = DEPTS.find(d => d.id === activeDept)
  const anim = DEPT_ANIMATIONS[activeDept]

  return (
    <section className="section-tight" id="departemen">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Departemen</span>
          <h2 className="section-title">Tujuh departemen, <span style={{ color: 'var(--purple)' }}>satu tujuan.</span></h2>
          <p className="section-sub">Pilih departemen untuk melihat visi, struktur pengurus, dan program kerjanya.</p>
        </Reveal>

        <Reveal className="dep-tabs" id="depTabs">
          {DEPTS.map(d => (
            <button
              key={d.id}
              className={`dep-tab ${activeDept === d.id ? 'active' : ''}`}
              style={{ '--accent': d.color }}
              onClick={() => setActiveDept(d.id)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" dangerouslySetInnerHTML={{ __html: d.icon }} />
              {d.name}
            </button>
          ))}
        </Reveal>

        <div
          key={activeDept}
          id="depContent"
          style={{
            '--accent': currentDept.color,
            animation: `${anim.name} ${anim.duration} ${anim.easing} forwards`
          }}
        >
          <article className="card dep-hero" style={{ borderColor: `${currentDept.color}33` }}>
            <div className="dep-hero-icon" style={{ background: currentDept.color, color: '#fff' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" dangerouslySetInnerHTML={{ __html: currentDept.icon }} />
            </div>
            <div>
              <div className="dep-hero-tag" style={{ color: currentDept.color }}>{currentDept.name}</div>
              <h2>{currentDept.fullName}</h2>
              <p>{currentDept.desc}</p>
            </div>
          </article>

          <div className="dep-vm">
            <article className="card dep-vm-card" style={{ borderTop: `3px solid ${currentDept.color}` }}>
              <div className="vm-icon" style={{ background: `${currentDept.color}18`, color: currentDept.color, width: '46px', height: '46px', borderRadius: '11px', display: 'grid', placeItems: 'center', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <h3>Visi</h3>
              <p>{currentDept.visi}</p>
            </article>
            <article className="card dep-vm-card" style={{ borderTop: `3px solid ${currentDept.color}` }}>
              <div className="vm-icon" style={{ background: `${currentDept.color}18`, color: currentDept.color, width: '46px', height: '46px', borderRadius: '11px', display: 'grid', placeItems: 'center', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Misi</h3>
              <ul className="vm-list">
                {currentDept.misi.map((m, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={currentDept.color} strokeWidth="2" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {m}
                  </li>
                ))}
              </ul>
            </article>
          </div>


          <div className="dep-sec-title">
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${currentDept.color}18`, color: currentDept.color, display: 'grid', placeItems: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
            </div>
            Program Kerja
          </div>
          <div className="proker-grid">
            {currentDept.proker.map((p, i) => (
              <article
                key={i}
                className="card proker-card"
                onClick={() => setModalProker({ dept: currentDept, proker: p })}
                style={{ '--accent': currentDept.color, animation: `fadeScale .5s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s both` }}
              >
                <span className="proker-badge" style={{ color: STATUS_COLOR[p.status] || currentDept.color, background: `${STATUS_COLOR[p.status] || currentDept.color}1a` }}>
                  <span className="dot" style={{ background: STATUS_COLOR[p.status] || currentDept.color }}></span>
                  {p.status}
                </span>
                <h4>{p.nama}</h4>
                <p>{p.desc}</p>
                <span className="proker-more" style={{ color: currentDept.color }}>
                  Detail
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
      <DepartemenModal modalProker={modalProker} setModalProker={setModalProker} />
    </section>
  )
}
