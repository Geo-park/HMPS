import { useState } from 'react'
import Reveal from '../common/Reveal'
import TeamCard from '../TeamCard'
import { bph, departemenList } from '../../data/organisasi'

export default function StrukturOrganisasi() {
  const [strukturTab, setStrukturTab] = useState(departemenList[0].slug)
  const activeStruktur = departemenList.find(d => d.slug === strukturTab)

  return (
    <section className="section-tight" id="struktur" style={{ background: 'var(--color-bg-2)' }}>
      <div className="container">
        <Reveal style={{ marginBottom: '32px' }}>
          <span className="eyebrow">Kepengurusan 2026/2027</span>
          <h2 className="section-title">Struktur Organisasi</h2>
          <p className="section-sub">Mengenal para penggerak HMPS INF periode 2026/2027.</p>
        </Reveal>

        {/* Badan Pengurus Harian — tree */}
        <Reveal className="bph-tree" style={{ marginBottom: '56px' }}>
          <div className="bph-tree-top">
            <TeamCard {...bph.ketua} jabatan="Ketua Umum" />
          </div>
          <div className="bph-connector"></div>
          <div className="bph-tree-bottom">
            <TeamCard {...bph.sekretaris} jabatan="Sekretaris Umum" />
            <TeamCard {...bph.bendahara} jabatan="Bendahara Umum" />
          </div>
        </Reveal>

        {/* Tab per departemen */}
        <Reveal style={{ marginBottom: '20px' }}>
          <span className="eyebrow">Per Departemen</span>
          <h2 className="section-title">Struktur Departemen</h2>
        </Reveal>

        <Reveal className="dept-tabs">
          {departemenList.map(d => (
            <button
              key={d.slug}
              className={`dept-tab ${strukturTab === d.slug ? 'active' : ''}`}
              onClick={() => setStrukturTab(d.slug)}
            >
              {d.nama}
            </button>
          ))}
        </Reveal>

        <Reveal as="p" style={{ fontSize: '13px', color: 'var(--color-text-3)', marginBottom: '32px' }}>
          {activeStruktur.namaLengkap}
        </Reveal>

        <Reveal className="dept-heads">
          <TeamCard {...activeStruktur.ketua} jabatan="Kepala Departemen" />
          <TeamCard {...activeStruktur.sekretaris} jabatan="Sekretaris Departemen" />
        </Reveal>

        <Reveal className="dept-anggota-label">Anggota</Reveal>
        <Reveal className="dept-anggota-grid">
          {activeStruktur.anggota.map(a => (
            <TeamCard key={a.nim} {...a} size="sm" />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
