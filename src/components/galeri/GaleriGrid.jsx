import { GALERI_FOLDERS } from '../../data/galeri'
import { DEPTS } from '../../data/departemen'

export default function GaleriGrid() {
  return (
    <div className="galeri-grid">
      {GALERI_FOLDERS.map((folder) => {
        // Cari ikon dari data departemen jika folder.dept diisi
        const dept = DEPTS.find(d => d.id === folder.dept)
        const iconPath = dept ? dept.icon : null
        const color = dept ? dept.color : folder.color

        return (
          <a
            key={folder.id}
            href={folder.drive}
            target="_blank"
            rel="noopener noreferrer"
            className="galeri-folder"
            style={{ '--folder-color': color }}
          >
            {/* Folder shape - taller to match card size */}
            <div className="galeri-folder-icon">
              <svg className="folder-svg" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 22C0 16.477 4.477 12 10 12H42L50 22H110C115.523 22 120 26.477 120 32V150C120 155.523 115.523 160 110 160H10C4.477 160 0 155.523 0 150V22Z" fill={color} />
                <path d="M0 22C0 16.477 4.477 12 10 12H42L50 22H110C115.523 22 120 26.477 120 32V150C120 155.523 115.523 160 110 160H10C4.477 160 0 155.523 0 150V22Z" fill="white" fillOpacity="0.1" />
                {iconPath && (
                  <svg x="44" y="64" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2">
                    <g dangerouslySetInnerHTML={{ __html: iconPath }} />
                  </svg>
                )}
              </svg>
            </div>

            <div className="galeri-folder-info">
              <span className="galeri-folder-name">{folder.nama}</span>
              <span className="galeri-folder-sub">{folder.subtitle}</span>
            </div>

            <div className="galeri-folder-badge">
              <svg width="12" height="12" viewBox="0 0 87.3 78" fill="currentColor">
                <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H.01c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA" />
                <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.35A9 9 0 0 0 0 52.85h27.5z" fill="#00AC47" />
                <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.65z" fill="#EA4335" />
                <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.85 0H34.45c-1.65 0-3.2.45-4.55 1.2z" fill="#00832D" />
                <path d="M59.8 52.85H27.5L13.75 76.65c1.35.8 2.9 1.2 4.55 1.2h50.7c1.65 0 3.2-.4 4.55-1.2z" fill="#2684FC" />
                <path d="M73.4 26.45l-12.8-22.2c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.15 27.85H87.3c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00" />
              </svg>
              Drive
            </div>
          </a>
        )
      })}
    </div>
  )
}
