import { useState } from 'react'
import Reveal from '../common/Reveal'
import { FAQ_DATA } from '../../data/tentang'

export default function FAQ() {
  const [activeFaqCat, setActiveFaqCat] = useState('Umum')
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="section-tight" id="faq">
      <div className="container">
        <Reveal style={{ marginBottom: '32px' }}>
          <span className="eyebrow">Pertanyaan Umum</span>
          <h2 className="section-title">Yang sering ditanyakan.</h2>
          <p className="section-sub">Jawaban cepat seputar himpunan dan keanggotaan.</p>
        </Reveal>

        <Reveal className="chip-group">
          {FAQ_DATA.map(g => (
            <button 
              key={g.cat} 
              className={`chip ${g.cat === activeFaqCat ? 'active' : ''}`}
              onClick={() => {
                setActiveFaqCat(g.cat)
                setOpenFaq(null)
              }}
            >
              {g.cat}
            </button>
          ))}
        </Reveal>

        <Reveal className="faq-list">
          {FAQ_DATA.find(g => g.cat === activeFaqCat).items.map((item, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{item.q}</span>
                <svg className="faq-chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq-a-wrap">
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
