/* ============================================
   HMPS INF — Footer Component
   ============================================ */
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">HMPS INF</div>
            <div className="footer__brand-tagline">Kita Satu, Kita Informatika.</div>
            <p className="footer__brand-desc">
              Himpunan Mahasiswa Program Studi Informatika<br/>
              UIN Sultan Maulana Hasanuddin Banten<br/>
              Periode 2026/2027
            </p>
            <div className="footer__socials">
              <a href="https://instagram.com/hmpsinformatikaa" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@hmps.informatika" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
              <a href="mailto:hmpsinformatikauinbanten@gmail.com" className="footer__social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Jelajah</div>
            <div className="footer__links">
              <Link to="/" className="footer__link">Beranda</Link>
              <Link to="/tentang#tentang" className="footer__link">Tentang Kami</Link>
              <Link to="/galeri" className="footer__link">Galeri</Link>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Organisasi</div>
            <div className="footer__links">
              <Link to="/tentang#struktur" className="footer__link">Struktur Org</Link>
              <Link to="/tentang#departemen" className="footer__link">Departemen</Link>
              <Link to="/tentang#visi-misi" className="footer__link">Visi & Misi</Link>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Layanan</div>
            <div className="footer__links">
              <Link to="/tentang#faq" className="footer__link">Pertanyaan Umum</Link>
              <a href="https://ruangaspirasiperempuaninformatika.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer__link">Ruang Aspirasi Perempuan</a>
              <a href="https://neosiakad.uinbanten.ac.id/" target="_blank" rel="noopener noreferrer" className="footer__link">SIAKAD</a>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © 2026 HMPS INF UIN SMH Banten. All rights reserved.
          </div>
          <div className="footer__address">
            Jl. Syeh Nawawi Al Bantani No. 01, Gedung B FSAINS<br/>
            UIN SMHB, Curug, Kota Serang — Banten
          </div>
        </div>
      </div>
    </footer>
  )
}
