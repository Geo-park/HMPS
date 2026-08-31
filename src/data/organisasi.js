// Data struktur organisasi HMPS Informatika UINSMHB — Masa Khidmat 2026
// Sumber: SK Dekan Fakultas Sains dan Teknologi No. 1407/Un.17/F.VI/PP.00.01/06/2026
//
// Field "foto" diisi path gambar (contoh: "/team/alief-rasyidin.png").
// Kosongkan ("") kalau fotonya belum ada — nanti otomatis tampil placeholder
// berupa lingkaran berisi inisial nama.

export const bph = {
  ketua: { nama: "Muhammad Alief Rasyidin", nim: "241730010", foto: "/assets/pengurus/alief.png" },
  sekretaris: { nama: "Muhamad Arief Rachmatullah", nim: "241730035", foto: "/assets/pengurus/arief.png" },
  bendahara: { nama: "Parhan Maulana", nim: "241730080", foto: "/assets/pengurus/parhan.png" },
};

// Urutan tab sesuai urutan di SK
export const departemenList = [
  {
    slug: "pao",
    nama: "PAO",
    namaLengkap: "Pengembangan Aparatur Organisasi",
    ketua: { nama: "Ahmad Fahmirifa Fahrurozi", nim: "241730025", foto: "" },
    sekretaris: { nama: "Khotibul Umami", nim: "251603086", foto: "" },
    anggota: [
      { nama: "Bahrul Ulumudin", nim: "241730090", foto: "" },
      { nama: "Nujma Fatima Ghauri Varadis", nim: "251603102", foto: "" },
      { nama: "Farhan Tirta Firdaus", nim: "251603055", foto: "" },
      { nama: "Dwi Rianti", nim: "251603018", foto: "" },
    ],
    programKerja: [
      { nama: 'Upgrading & Rapat Kerja "Lazarus"', status: 'Selesai', tanggal: '21 Jun 2026', lokasi: 'TBA', pj: 'Dept. PAO', desc: 'Rapat kerja perdana dan upgrading pengurus HMPS INF periode 2026/2027.' },
      { nama: 'Rapat Evaluasi', status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Sekretariat', pj: 'Dept. PAO', desc: 'Evaluasi berkala kinerja seluruh departemen.' },
      { nama: 'Pleno Tengah', status: 'Upcoming', tanggal: '3 Okt 2026', lokasi: 'TBA', pj: 'Dept. PAO', desc: 'Sidang pleno pertanggungjawaban tengah periode.' },
      { nama: 'Pleno Akhir', status: 'Upcoming', tanggal: '26 Des 2026', lokasi: 'TBA', pj: 'Dept. PAO', desc: 'Sidang pleno akhir dan laporan pertanggungjawaban.' },
      { nama: 'Best of The Month', status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Online/Offline', pj: 'Dept. PAO', desc: 'Apresiasi bulanan untuk pengurus/anggota terbaik.' },
    ]
  },
  {
    slug: "internal",
    nama: "Internal",
    namaLengkap: "Departemen Internal",
    ketua: { nama: "Naufal Afaf Ekayana", nim: "241730032", foto: "/team/naufalafaf.png" },
    sekretaris: { nama: "Fierren Al-hilal Saepul Bahri", nim: "241730015", foto: "" },
    anggota: [
      { nama: "Muhfiz Zauzi", nim: "241730018", foto: "" },
      { nama: "Nazwa Althafah Athalia", nim: "241730017", foto: "" },
      { nama: "Bahrurozi", nim: "251603015", foto: "" },
      { nama: "Ahmad Baihaqi", nim: "251603033", foto: "" },
      { nama: "Mufarrihah Az-Zahra", nim: "251603059", foto: "" },
      { nama: "Nabilah Barliana Putri Dewi", nim: "251603076", foto: "" },
    ],
    programKerja: [
      { nama: 'IT Camp', status: 'Upcoming', tanggal: '13–14 Sep 2026', lokasi: 'TBA', pj: 'Dept. Internal', desc: 'Kegiatan kemah dan pelatihan kepemimpinan untuk anggota HMPS INF.' },
      { nama: 'Informatika Care', status: 'Upcoming', tanggal: 'TBA 2026', lokasi: 'TBA', pj: 'Dept. Internal', desc: 'Kegiatan sosial dan kepedulian antar anggota himpunan.' },
    ]
  },
  {
    slug: "eksternal",
    nama: "Eksternal",
    namaLengkap: "Departemen Eksternal",
    ketua: { nama: "Muhammad Rifki Hidayatulloh", nim: "241730008", foto: "" },
    sekretaris: { nama: "Athalla Rizqy Erlangga", nim: "241730077", foto: "" },
    anggota: [
      { nama: "Adila Muqtashida", nim: "241730001", foto: "" },
      { nama: "Rizky Dani Wibowo", nim: "251603007", foto: "" },
      { nama: "Anjani Meysun Nine Dzalail", nim: "251603027", foto: "" },
      { nama: "Alfiana", nim: "251603004", foto: "" },
      { nama: "Rosita", nim: "251603075", foto: "" },
    ],
    programKerja: [
      { nama: 'PIJAR DESA', status: 'Upcoming', tanggal: 'Agt 2026', lokasi: 'TBA', pj: 'Dept. Eksternal', desc: 'Program pengabdian masyarakat berbasis teknologi informasi untuk desa di sekitar UIN SMH Banten.' },
      { nama: 'LENTERA DIGITAL', status: 'Upcoming', tanggal: 'Sep 2026', lokasi: 'TBA', pj: 'Dept. Eksternal', desc: 'Kegiatan literasi digital untuk masyarakat umum.' },
      { nama: 'ANALOGI', status: 'Upcoming', tanggal: 'Okt 2026', lokasi: 'TBA', pj: 'Dept. Eksternal', desc: 'Seminar dan diskusi kolaborasi antar himpunan mahasiswa informatika.' },
    ]
  },
  {
    slug: "kominfo",
    nama: "Kominfo",
    namaLengkap: "Komunikasi dan Informasi",
    ketua: { nama: "Muhammad Sulthan Fajri Rabbani", nim: "241730091", foto: "" },
    sekretaris: { nama: "Aab Abdulah", nim: "241730092", foto: "" },
    anggota: [
      { nama: "Abiyansyah", nim: "241730095", foto: "" },
      { nama: "Mohammad Irham Fastabie", nim: "241730012", foto: "" },
      { nama: "Alvin Juliana", nim: "251603016", foto: "" },
      { nama: "Kayla Putri Nabilqis", nim: "251603097", foto: "" },
      { nama: "Nilam Cahya Lestari", nim: "251603099", foto: "" },
      { nama: "Rayshard Fadlan Maulani", nim: "251603051", foto: "" },
    ],
    programKerja: [
      { nama: 'Informatika Update', status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Online', pj: 'Muhammad Sulthan Fajri Rabbani', desc: 'Konten rutin update informasi akademik dan organisasi di media sosial.' },
      { nama: 'Informatika Moment', status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Online', pj: 'Dept. Kominfo', desc: 'Dokumentasi momen penting kegiatan HMPS INF.' },
      { nama: 'Beasiswa Corner', status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Online/Offline', pj: 'Muhammad Sulthan Fajri Rabbani', desc: 'Menyebarkan informasi beasiswa aktif kepada mahasiswa Informatika.' },
    ]
  },
  {
    slug: "mikat",
    nama: "Mikat",
    namaLengkap: "Minat dan Bakat",
    ketua: { nama: "Revan Sabilillah", nim: "241730023", foto: "" },
    sekretaris: { nama: "Mochamad Nurul Ayatullah", nim: "241730079", foto: "" },
    anggota: [
      { nama: "Randy Zahran", nim: "241730105", foto: "" },
      { nama: "Muhamad Zacky", nim: "251603009", foto: "" },
      { nama: "Sahrani Romadona", nim: "251603077", foto: "" },
      { nama: "Yanti Apriliyanti", nim: "251603001", foto: "" },
      { nama: "Sahansyah Abdillah", nim: "251603023", foto: "" },
    ],
    programKerja: [
      { nama: 'INFORMATIKA SKILL-UP', status: 'Upcoming', tanggal: '20 Sep – 12 Des 2026', lokasi: 'TBA', pj: 'Dept. Mikat', desc: 'Program pelatihan skill intensif dengan 5 track: Coding, Desain Digital, Database, Jaringan, dan Project Dev.' },
    ]
  },
  {
    slug: "pemberdayaan-perempuan",
    nama: "P. Perempuan",
    namaLengkap: "Pemberdayaan Perempuan",
    ketua: { nama: "Riska Nurnajmah", nim: "241730028", foto: "" },
    sekretaris: { nama: "Lucy Amanda", nim: "241730014", foto: "" },
    anggota: [
      { nama: "Annisa Wening Galih", nim: "241730098", foto: "" },
      { nama: "Halida Hamzah", nim: "251603044", foto: "" },
      { nama: "Tria Nadirotun Yumna", nim: "251603038", foto: "" },
    ],
    programKerja: [
      { nama: 'Informabeauty', status: 'Upcoming', tanggal: '10 Nov 2026', lokasi: 'TBA', pj: 'Dept. PP', desc: 'Kegiatan perawatan diri, pengembangan karakter, dan pemberdayaan perempuan.' },
      { nama: 'RAPI (Ruang Aspirasi)', status: 'Rutin', tanggal: 'Rutin 2026', lokasi: 'Online', pj: 'Dept. PP', desc: 'Layanan aspirasi khusus melalui form anonim untuk mahasiswi Informatika.' },
      { nama: 'Kajian Kesetaraan Gender', status: 'Upcoming', tanggal: '14 Nov 2026', lokasi: 'TBA', pj: 'Dept. PP', desc: 'Diskusi dan kajian mengenai kesetaraan gender dalam dunia teknologi.' },
    ]
  },
  {
    slug: "ekraf",
    nama: "Ekraf",
    namaLengkap: "Ekonomi Kreatif",
    ketua: { nama: "Rudi Ramdhan Fadhillah", nim: "241730078", foto: "" },
    sekretaris: { nama: "Ahmad Jibril Abdul Qudus", nim: "241730097", foto: "" },
    anggota: [
      { nama: "Muhammad Ari Fudholi", nim: "241730086", foto: "" },
      { nama: "Amar Subagja Firdaus", nim: "241730021", foto: "" },
      { nama: "Ima Imaniyah Hasanah", nim: "251603042", foto: "" },
      { nama: "Maulida Rahmania", nim: "251603092", foto: "" },
    ],
    programKerja: [
      { nama: 'Pembuatan Website Himpunan', status: 'Berjalan', tanggal: '2026', lokasi: 'Online', pj: 'Dept. EKRAF', desc: 'Pembangunan website resmi HMPS INF sebagai wajah digital organisasi.' },
      { nama: 'Workshop Kreatif', status: 'Upcoming', tanggal: 'TBA 2026', lokasi: 'TBA', pj: 'Dept. EKRAF', desc: 'Workshop desain, konten kreatif, dan kewirausahaan digital.' },
    ]
  },
];
