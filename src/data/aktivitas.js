export const aktivitasList = [
  {
    slug: "kaderisasi mahasiswa informatika 2026",
    kategori: "KADERISASI",
    status: "akan-datang", // "akan-datang" | "berlangsung" | "selesai"
    tipe: "offline",
    lokasi: "villa anyer beach resort",
    tanggalMulai: "2026-09-12",
    tanggalSelesai: "2026-09-13",
    durasi: "2 hari",
    judul: "IT CAMP 2026",
    ringkas:
      "event kaderasi jurusan untuk menyambut mahasiswa baru jurusan informatika, event ini akan memperkenalkan seputar jurusan & organisasi hmps informatika tersebut.",
    cover: "gradient-blue",
    detail: {
      judulBesar: "IT CAMP 2026",
      subjudul: "Satukan Mahasiswa Informatika, Bangun Generasi Digital",
      deskripsi:
        "event kaderasi jurusan untuk menyambut mahasiswa baru jurusan informatika, event ini akan memperkenalkan seputar jurusan & organisasi hmps informatika tersebut. biasanya di jalankan di luar kampus contoh nya di villa.",
      speakers: [
        { nama: "Ahmad Tabrani M.T", peran: "Kepala Program Studi Informatika" },
        { nama: "Naufal Afaf Ekayana", peran: "Kepala Departemen Internal" },
      ],
      jadwal: "Sabtu, 12 september 2026",
      waktu: "09.15 WIB – selesai",
      tempat: "villa anyer beach resort",
      benefit:
        "Sertifikat, akses materi, dan doorprize menarik.",
      target: "Terbuka untuk mahasiswa baru jurusan informatika UINSMHB.",
      kuota: "Kuota terbatas — siapa cepat dia dapat!",
      kontak: [
        { nama: "Irham Jomok", telepon: "0813-1048-1842" },
        { nama: "Fieren Kroco", telepon: "0857-3172-1430" },
      ],
      penyelenggara: "Kabinet Lazarus",
    },
  },
];

export const filterStatus = [
  { key: "semua", label: "Semua" },
  { key: "akan-datang", label: "Akan Datang" },
  { key: "berlangsung", label: "Sedang Berlangsung" },
  { key: "selesai", label: "Selesai" },
];
