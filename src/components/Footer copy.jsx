import { Link } from "react-router-dom";
import { ExternalLink, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-hmps py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo_hmps.png"
              alt="Logo HMPS"
              className="h-15 w-15 object-contain"
            />
            <span className="font-display font-extrabold text-lg text-white">HMPS INFORMATIKA</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-[var(--text-faint)]">
            Himpunan Mahasiswa Informatika Universitas Islam Negeri Sultan Maulana Hasanuddin Banten.
            Wadah inspiratif untuk berinovasi dan berkolaborasi dalam dunia teknologi.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[InstagramIcon, LinkedinIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 grid place-items-center hover:bg-[var(--brand)] hover:border-[var(--brand)] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-wider text-[var(--text-faint)] mb-4">NAVIGASI</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/aktivitas" className="hover:text-white transition-colors">Aktivitas</Link></li>
            <li><Link to="/struktur-organisasi" className="hover:text-white transition-colors">Struktur Organisasi</Link></li>
            <li><Link to="#kontak" className="hover:text-white transition-colors">Kontak Kami</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-wider text-[var(--text-faint)] mb-4">TENTANG KAMI</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Profil Organisasi</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Visi & Misi</Link></li>
            <li><Link to="/sejarah" className="hover:text-white transition-colors">Sejarah HMPS INF</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-wider text-[var(--text-faint)] mb-4">UNIVERSITAS</h4>
          <a
            href="https://informatika.fsainsuinbanten.my.id/"
            target="_blank"
            rel="noreferrer"
            className="block bg-slate-800/60 rounded-xl p-4 hover:bg-slate-800 transition-colors"
          >
            <span className="flex items-center gap-1 text-blue-400 text-xs font-semibold">
              INFORMATIKA OFFICIAL <ExternalLink size={12} />
            </span>
            <span className="block text-sm text-white mt-1">INFORMATIKA UINSMHB</span>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-hmps flex flex-col gap-3 py-5 text-xs text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">KABINET LAZARUS</span>. All Rights Reserved.
          </p>
          <address className="flex max-w-xl gap-2 not-italic leading-relaxed text-[var(--text-faint)] md:justify-end md:text-right">
            <MapPin size={16} className="mt-0.5 shrink-0 text-blue-400" />
            <span>
              Jl. Syeh Nawawi Al Bantani No. 01, Gedung B FSAINS UIN SMHB,
              Curug, Kota Serang — Banten.
            </span>
          </address>
        </div>
      </div>
    </footer>
  );
}
