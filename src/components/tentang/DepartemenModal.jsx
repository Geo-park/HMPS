import { STATUS_COLOR } from '../../data/departemen'

export default function DepartemenModal({ modalProker, setModalProker }) {
  if (!modalProker) return null

  const { dept, proker } = modalProker
  const statusColor = STATUS_COLOR[proker.status] || dept.color

  return (
    <div 
      className="modal-overlay" 
      id="modalOverlay"
      onClick={(e) => { if (e.target.id === 'modalOverlay') setModalProker(null) }}
    >
      <article className="card modal">
        <button className="icon-btn modal-close" aria-label="Tutup" onClick={() => setModalProker(null)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        
        <div>
          <span className="proker-badge" style={{ color: statusColor, background: `${statusColor}1a` }}>
            <span className="dot" style={{ background: statusColor }}></span>
            {proker.status}
          </span>
          <h3 className="modal-title">{proker.nama}</h3>
          <p className="modal-desc">{proker.desc}</p>
          <div className="modal-meta">
            <div><span className="modal-meta-label">Departemen</span><b>{dept.fullName || dept.namaLengkap}</b></div>
            <div><span className="modal-meta-label">Tanggal</span><b>{proker.tanggal}</b></div>
            <div><span className="modal-meta-label">Lokasi</span><b>{proker.lokasi}</b></div>
            <div><span className="modal-meta-label">Penanggung Jawab</span><b>{proker.pj}</b></div>
          </div>
        </div>
      </article>
    </div>
  )
}
