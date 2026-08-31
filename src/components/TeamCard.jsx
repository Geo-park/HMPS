function initials(nama) {
  return nama
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * size: "lg" (kepala departemen / ketua umum) | "sm" (anggota)
 */
export default function TeamCard({ nama, nim, jabatan, foto, size = "lg" }) {
  const isSmall = size === "sm";

  return (
    <div className={`team-card ${isSmall ? "size-sm" : ""}`}>
      <div className="team-card-photo">
        <svg className="rings" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <circle cx="50" cy="42" r="42" fill="none" stroke="#ffffff" strokeWidth="1.2" />
          <circle cx="50" cy="42" r="30" fill="none" stroke="#ffffff" strokeWidth="1.2" />
          <circle cx="50" cy="42" r="18" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        </svg>

        {foto ? (
          <img src={foto} alt={nama} />
        ) : (
          <div className="team-card-initials">
            <span>{initials(nama)}</span>
          </div>
        )}
      </div>

      <div className="team-card-body">
        <p className="team-card-name">{nama}</p>
        {jabatan && <p className="team-card-jabatan">{jabatan}</p>}
        <p className="team-card-nim">NIM · {nim}</p>
      </div>
    </div>
  );
}
