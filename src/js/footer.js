/* ============================================
   HMPS INF — Footer Module
   Dipecah dari main.js agar bisa dipakai
   di semua halaman (departemen, tentang, dsb.)
   ============================================ */

export function initFooter() {
  const footer = document.getElementById('footer')
  if (!footer) return

  footer.innerHTML = `
    <div class="footer__inner">
      <div class="footer__grid">

        <div>
          <div class="footer__brand-name">HMPS INF</div>
          <div class="footer__brand-tagline">Kita Satu, Kita Informatika.</div>
          <p class="footer__brand-desc">
            Himpunan Mahasiswa Program Studi Informatika<br>
            UIN Sultan Maulana Hasanuddin Banten<br>
            Periode 2026/2027
          </p>
          <div class="footer__socials">
            <a href="https://instagram.com/hmpsinformatikaa" target="_blank" rel="noopener"
               class="footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://tiktok.com/@hmps.informatika" target="_blank" rel="noopener"
               class="footer__social-link" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
            </a>
            <a href="mailto:hmpsinformatikauinbanten@gmail.com"
               class="footer__social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div class="footer__col-title">Organisasi</div>
          <div class="footer__links">
            <a href="/tentang.html" class="footer__link">Tentang Kami</a>
            <a href="/tentang.html#struktur" class="footer__link">Struktur Org</a>
            <a href="/departemen.html" class="footer__link">Departemen</a>
          </div>
        </div>

        <div>
          <div class="footer__col-title">Akademik</div>
          <div class="footer__links">
            <a href="/roadmap.html" class="footer__link">Roadmap Kuliah</a>
            <a href="/roadmap.html#skillup" class="footer__link">Skill-UP Hub</a>
            <a href="/roadmap.html#beasiswa" class="footer__link">Beasiswa Corner</a>
            <a href="/events.html" class="footer__link">Events &amp; Arsip</a>
          </div>
        </div>

        <div>
          <div class="footer__col-title">Layanan</div>
          <div class="footer__links">
            <a href="/aspirasi.html" class="footer__link">Form Aspirasi</a>
            <a href="/aspirasi.html#ukt" class="footer__link">Pengaduan UKT</a>
            <a href="/aspirasi.html#rapi" class="footer__link">RAPI</a>
          </div>
        </div>

      </div>

      <div class="footer__bottom">
        <div class="footer__copyright">
          © 2026 HMPS INF UIN SMH Banten. All rights reserved.
        </div>
        <div class="footer__address">
          Jl. Syeh Nawawi Al Bantani No. 01, Gedung B FSAINS<br>
          UIN SMHB, Curug, Kota Serang — Banten
        </div>
      </div>
    </div>
  `
}
