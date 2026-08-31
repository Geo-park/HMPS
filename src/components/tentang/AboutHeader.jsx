import Reveal from '../common/Reveal'

export default function AboutHeader() {
  return (
    <section className="section-tight" id="tentang">
      <div className="container">
        <Reveal className="eyebrow" as="span">Tentang Kami</Reveal>
        <Reveal as="h1" className="page-title" delay={100}>
          Mengenal HMPS INF <span style={{ color: 'var(--purple)' }}>lebih dekat.</span>
        </Reveal>
        <Reveal as="p" className="page-lead" delay={200}>
          Himpunan Mahasiswa Program Studi Informatika UIN Sultan Maulana Hasanuddin Banten —
          bergerak dalam semangat <b>Kita Satu, Kita Informatika.</b>
        </Reveal>
      </div>
    </section>
  )
}
