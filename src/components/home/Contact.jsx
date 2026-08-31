import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { ArrowUpRight } from "lucide-react";

const platforms = [
  {
    icon: "https://img.icons8.com/3d-fluency/94/instagram-new.png",
    alt: "instagram-new",
    label: "INSTAGRAM",
    value: "@hmpsinformatika",
    href: "https://www.instagram.com/hmpsinf/?hl=id",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/tiktok.png",
    alt: "tiktok",
    label: "TIKTOK",
    value: "@hmpsinformatika",
    href: "https://www.tiktok.com/@hmpsinformatika",
  },
  {
    icon: "https://img.icons8.com/fluency/48/youtube-play.png",
    alt: "youtube-play",
    label: "YOUTUBE",
    value: "@hmpsinformatika",
    href: "https://www.youtube.com/@hmpsinformatika",
  },
  {
    icon: "https://img.icons8.com/fluency/48/secured-letter.png",
    alt: "secured-letter",
    label: "GMAIL",
    value: "lazarus@uin.ac.id",
    href: "mailto:lazarus@uin.ac.id",
  },
];

export default function Contact() {
  return (
    <section id="kontak" className="container-hmps py-24 md:py-28">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <Reveal>
          <Eyebrow>KONTAK KAMI</Eyebrow>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl mt-5 mb-6 leading-[1.05] text-[var(--text-primary)]">
            Ayo,{" "}
            <span className="text-[var(--brand-text)] block">Terhubung</span>
            dengan Kami.
          </h2>
          <p className="text-[var(--text-secondary)] max-w-md mb-8">
            Terbuka untuk kolaborasi, pertanyaan, dan masukan. Temukan kami di
            berbagai platform berikut.
          </p>
          <div className="flex items-center gap-2 text-[var(--text-faint)] text-xs">
            <span className="w-6 h-px bg-[var(--border)]" /> 4 PLATFORM TERSEDIA
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {platforms.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block bg-[var(--surface)] border border-[var(--border-subtle)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="w-12 h-12 rounded-xl bg-[var(--surface-alt)] ring-1 ring-[var(--border-subtle)] grid place-items-center">
                    <img
                      src={p.icon}
                      alt={p.alt}
                      className="h-9 w-9 object-contain"
                    />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--text-faint)] group-hover:text-[var(--brand-text)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <p className="text-[11px] font-semibold tracking-wider text-[var(--text-faint)] mb-1">
                  {p.label}
                </p>
                <p className="text-sm font-medium text-[var(--text-primary)]">{p.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
