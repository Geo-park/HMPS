export default function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[var(--brand-text)] bg-[var(--brand-soft)] border border-[var(--brand-ring)] rounded-full px-3 py-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
      {children}
    </span>
  );
}
