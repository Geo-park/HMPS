import Reveal from '../common/Reveal'
import { SPONSORS } from '../../data/sponsors'

function SponsorSet({ hidden = false }) {
  return (
    <div className="sponsorship__set" aria-hidden={hidden}>
      {SPONSORS.map((sponsor) => (
        <div className={`sponsor-logo sponsor-logo--${sponsor.style}`} key={sponsor.name}>
          <strong>{sponsor.name}</strong>
          {sponsor.caption && <small>{sponsor.caption}</small>}
        </div>
      ))}
    </div>
  )
}

export default function Sponsorship() {
  return (
    <section className="sponsorship section-tight" aria-labelledby="sponsorship-title">
      <div className="container">
        <Reveal className="sponsorship__intro">
          <span className="eyebrow">Kolaborasi</span>
          <h2 id="sponsorship-title" className="section-title">Sponsorship</h2>
          <p className="section-sub">Terima kasih kepada pihak yang telah bergabung dalam kegiatan yang diselenggarakan oleh himpunan mahasiswa informatika.</p>
        </Reveal>

        <div className="sponsorship__viewport" aria-label="Daftar sponsor">
          <div className="sponsorship__track">
            <SponsorSet />
            <SponsorSet hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
