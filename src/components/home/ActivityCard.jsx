import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const statusStyle = {
  selesai: "bg-slate-900/70 text-white",
  "akan-datang": "bg-emerald-500 text-white",
  berlangsung: "bg-amber-500 text-white",
};

export default function ActivityCard({ item, index = 0 }) {
  return (
    <Link
      to={`/aktivitas/${item.slug}`}
      className="group block bg-[var(--surface)] rounded-3xl overflow-hidden border border-[var(--border-subtle)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/11] bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
        <span
          className={`absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${statusStyle[item.status]}`}
        >
          {item.status.replace("-", " ")}
        </span>
        <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white/90 text-xs font-bold tracking-widest uppercase">
          {item.kategori}
        </span>
        <span className="absolute top-4 right-4 text-white/80">
          {"</>"}
        </span>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="text-white font-display font-extrabold text-3xl md:text-4xl text-center leading-none drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
            {item.judul}
          </p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-text)] transition-colors">
          {item.judul}
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-4">
          {item.ringkas}
        </p>
        <div className="flex items-center gap-3 flex-wrap text-xs font-medium text-[var(--text-muted)]">
          <span className="inline-flex items-center gap-1.5 bg-[var(--surface-alt)] px-3 py-1.5 rounded-full">
            <Calendar size={13} />
            {new Date(item.tanggalMulai).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full">
            <MapPin size={13} />
            {item.tipe} · {item.lokasi}
          </span>
        </div>
      </div>
    </Link>
  );
}
