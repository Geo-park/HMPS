import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const misi = [
  "Meningkatkan kualitas akademik dan keilmuan mahasiswa Informatika.",
  "mewujudkan Himpunan Mahasiswa Informatika yang aktif, solid, dan transparan.",
  "membangun kolaborasi yang baik antara mahasiswa Informatika dan sivitas akademik.",
];

export default function VisiMisi() {
  return (
    <section className="container-hmps py-24 md:py-28">
      <Reveal>
        <Eyebrow>VISI & MISI</Eyebrow>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-[var(--text-primary)]">
          Arah & <span className="text-[var(--brand-text)]">Tujuan</span> Kami
        </h2>
        <p className="text-[var(--text-secondary)] max-w-xl mb-12">
          Fondasi gerak LAZARUS — setiap langkah berakar dari visi yang jelas
          dan misi yang terukur.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        <Reveal delay={0.1}>
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-10 h-full flex flex-col justify-between min-h-[340px] relative overflow-hidden">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-300 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300" /> VISI
              </span>
              <p className="text-xl md:text-2xl font-medium leading-snug">
                Menjadikan Himpunan Mahasiswa Informatika UIN Banten sebagai wadah pengembangan akademik, keterampilan teknologi, serta pembentukan karakter mahasiswa yang aktif dan berdaya saing.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[var(--text-faint)] text-xs mt-10 pt-6 border-t border-white/10">
              <span className="w-6 h-px bg-slate-500" /> LAZARUS 2025
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-[var(--surface)] border border-[var(--border-subtle)] shadow-sm rounded-3xl p-10 h-full">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[var(--brand-text)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" /> MISI
            </span>
            <ol className="space-y-6">
              {misi.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--brand)] text-white text-xs font-bold grid place-items-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
