// Data struktur organisasi HMPS Informatika UINSMHB — Masa Khidmat 2026
// Sumber: SK Dekan Fakultas Sains dan Teknologi No. 1407/Un.17/F.VI/PP.00.01/06/2026
//
// Field "foto" diisi path gambar (contoh: "/team/alief-rasyidin.png").
// Kosongkan ("") kalau fotonya belum ada — nanti otomatis tampil placeholder
// berupa lingkaran berisi inisial nama.

export const bph = {
  ketua: { nama: "Muhammad Alief Rasyidin", nim: "241730010", foto: "/assets/pengurus/alief.png" },
  sekretaris: { nama: "Muhamad Arief Rachmatullah", nim: "241730035", foto: "/assets/pengurus/arief.png" },
  bendahara: { nama: "Parhan Maulana", nim: "241730080", foto: "/assets/pengurus/parhan.PNG" },
};

// Urutan tab sesuai urutan di SK
export const departemenList = [
  {
    slug: "pao",
    nama: "PAO",
    namaLengkap: "Pengembangan Aparatur Organisasi",
    ketua: { nama: "Ahmad Fahmirifa Fahrurozi", nim: "241730025", foto: "/assets/pengurus/fahmi.PNG" },
    sekretaris: { nama: "Khotibul Umami", nim: "251603086", foto: "/assets/pengurus/umam.PNG" },
    anggota: [
      { nama: "Bahrul Ulumudin", nim: "241730090", foto: "/assets/pengurus/Ulumudin.png" },
      { nama: "Nujma Fatima Ghauri Varadis", nim: "251603102", foto: "/assets/pengurus/nujma.PNG" },
      { nama: "Farhan Tirta Firdaus", nim: "251603055", foto: "/assets/pengurus/Farhan Tirta.png" },
      { nama: "Dwi Rianti", nim: "251603018", foto: "/assets/pengurus/dwi.PNG" },
    ],
    programKerja: [
      { nama: 'Upgrading & Rapat Kerja "Lazarus"', status: 'Selesai', tanggal: '21 Jun 2026', lokasi: 'TBA', pj: 'Dept. PAO', desc: 'Rapat kerja perdana dan upgrading pengurus HMPS INF periode 2026/2027.' },
      { nama: 'Rapat Evaluasi', status: 'Berjalan', tanggal: '2026', lokasi: 'Sekretariat', pj: 'Dept. PAO', desc: 'Evaluasi berkala kinerja seluruh departemen.' },
      { nama: 'Pleno Tengah', status: 'Upcoming', tanggal: '3 Okt 2026', lokasi: 'TBA', pj: 'Dept. PAO', desc: 'Sidang pleno pertanggungjawaban tengah periode.' },
      { nama: 'Pleno Akhir', status: 'Upcoming', tanggal: '26 Des 2026', lokasi: 'TBA', pj: 'Dept. PAO', desc: 'Sidang pleno akhir dan laporan pertanggungjawaban.' },
      { nama: 'Best of The Month', status: 'Berjalan', tanggal: '2026', lokasi: 'Online/Offline', pj: 'Dept. PAO', desc: 'Apresiasi bulanan untuk pengurus/anggota terbaik.' },
    ]
  },
  {
    slug: "internal",
    nama: "Internal",
    namaLengkap: "Departemen Internal",
    ketua: { nama: "Naufal Afaf Ekayana", nim: "241730032", foto: "/assets/pengurus/Afaf.png" },
    sekretaris: { nama: "Fierren Al-hilal Saepul Bahri", nim: "241730015", foto: "/assets/pengurus/Fieren.png" },
    anggota: [
      { nama: "Muhfiz Zauzi", nim: "241730018", foto: "/assets/pengurus/Muhfiz.png" },
      { nama: "Nazwa Althafah Athalia", nim: "241730017", foto: "/assets/pengurus/Nazwa.png" },
      { nama: "Bahrurozi", nim: "251603015", foto: "/assets/pengurus/Arul.png" },
      { nama: "Ahmad Baihaqi", nim: "251603033", foto: "/assets/pengurus/Abai.png" },
      { nama: "Mufarrihah Az-Zahra", nim: "251603059", foto: "/assets/pengurus/Mufa.png" },
      { nama: "Nabilah Barliana Putri Dewi", nim: "251603076", foto: "/assets/pengurus/Liana.png" },
    ],
    programKerja: [
      { nama: 'IT Camp', status: 'Upcoming', tanggal: '13–14 Sep 2026', lokasi: 'TBA', pj: 'Dept. Internal', desc: 'Kegiatan kemah dan pelatihan kepemimpinan untuk anggota HMPS INF.' },
      { nama: 'Informatika Care', status: 'Berjalan', tanggal: '2026', lokasi: 'TBA', pj: 'Dept. Internal', desc: 'Kegiatan sosial dan kepedulian antar anggota himpunan.' },
    ]
  },
  {
    slug: "eksternal",
    nama: "Eksternal",
    namaLengkap: "Departemen Eksternal",
    ketua: { nama: "Muhammad Rifki Hidayatulloh", nim: "241730008", foto: "/assets/pengurus/Rifky.png" },
    sekretaris: { nama: "Athalla Rizqy Erlangga", nim: "241730077", foto: "/assets/pengurus/Carlos.png" },
    anggota: [
      { nama: "Anjani Meysun Nine Dzalail", nim: "251603027", foto: "/assets/pengurus/Anjani.png" },
      { nama: "Adila Muqtashida", nim: "241730001", foto: "/assets/pengurus/Adila.png" },
      { nama: "Rizky Dani Wibowo", nim: "251603007", foto: "/assets/pengurus/Dani.png" },
      { nama: "Alfiana", nim: "251603004", foto: "/assets/pengurus/Alfiana.png" },
      { nama: "Rosita", nim: "251603075", foto: "/assets/pengurus/Rosita.png" },
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
    ketua: { nama: "Muhammad Sulthan Fajri Rabbani", nim: "241730091", foto: "/assets/pengurus/Sulthan.png" },
    sekretaris: { nama: "Aab Abdulah", nim: "241730092", foto: "/assets/pengurus/Aab.png" },
    anggota: [
      { nama: "Abiyansyah", nim: "241730095", foto: "/assets/pengurus/Abiansyah.png" },
      { nama: "Mohammad Irham Fastabie", nim: "241730012", foto: "/assets/pengurus/Irham.png" },
      { nama: "Alvin Juliana", nim: "251603016", foto: "/assets/pengurus/Alvin.png" },
      { nama: "Nilam Cahya Lestari", nim: "251603099", foto: "/assets/pengurus/Nilam.png" },
      { nama: "Rayshard Fadlan Maulani", nim: "251603051", foto: "/assets/pengurus/Ray.png" },
    ],
    programKerja: [
      { nama: 'Informatika Update', status: 'Berjalan', tanggal: '2026', lokasi: 'Online', pj: 'Muhammad Sulthan Fajri Rabbani', desc: 'Konten rutin update informasi akademik dan organisasi di media sosial.' },
      { nama: 'Informatika Moment', status: 'Berjalan', tanggal: '2026', lokasi: 'Online', pj: 'Dept. Kominfo', desc: 'Dokumentasi momen penting kegiatan HMPS INF.' },
      { nama: 'Beasiswa Corner', status: 'Berjalan', tanggal: '2026', lokasi: 'Online/Offline', pj: 'Muhammad Sulthan Fajri Rabbani', desc: 'Menyebarkan informasi beasiswa aktif kepada mahasiswa Informatika.' },
    ]
  },
  {
    slug: "mikat",
    nama: "Mikat",
    namaLengkap: "Minat dan Bakat",
    ketua: { nama: "Revan Sabilillah", nim: "241730023", foto: "/assets/pengurus/Revan.png" },
    sekretaris: { nama: "Mochamad Nurul Ayatullah", nim: "241730079", foto: "/assets/pengurus/Ayat.png" },
    anggota: [
      { nama: "Randy Zahran", nim: "241730105", foto: "/assets/pengurus/Zahran.png" },
      { nama: "Muhamad Zacky", nim: "251603009", foto: "/assets/pengurus/Zacky.png" },
      { nama: "Sahrani Romadona", nim: "251603077", foto: "/assets/pengurus/Rania.png" },
      { nama: "Yanti Apriliyanti", nim: "251603001", foto: "/assets/pengurus/Yanti.png" },
      { nama: "Sahansyah Abdillah", nim: "251603023", foto: "/assets/pengurus/Sahansyah.png" },
    ],
    programKerja: [
      { nama: 'INFORMATIKA SKILL-UP', status: 'Upcoming', tanggal: '20 Sep – 12 Des 2026', lokasi: 'TBA', pj: 'Dept. Mikat', desc: 'Program pelatihan skill intensif dengan 5 track: Coding, Desain Digital, Database, Jaringan, dan Project Dev.' },
    ]
  },
  {
    slug: "pemberdayaan-perempuan",
    nama: "P. Perempuan",
    namaLengkap: "Pemberdayaan Perempuan",
    ketua: { nama: "Riska Nurnajmah", nim: "241730028", foto: "/assets/pengurus/Riska.png" },
    sekretaris: { nama: "Lucy Amanda", nim: "241730014", foto: "/assets/pengurus/Lucy.png" },
    anggota: [
      { nama: "Annisa Wening Galih", nim: "241730098", foto: "/assets/pengurus/Anisa.png" },
      { nama: "Halida Hamzah", nim: "251603044", foto: "/assets/pengurus/Khalida.png" },
      { nama: "Tria Nadirotun Yumna", nim: "251603038", foto: "/assets/pengurus/Tria.png" },
    ],
    programKerja: [
      { nama: 'Informabeauty', status: 'Upcoming', tanggal: '10 Nov 2026', lokasi: 'TBA', pj: 'Dept. PP', desc: 'Kegiatan perawatan diri, pengembangan karakter, dan pemberdayaan perempuan.' },
      { nama: 'RAPI (Ruang Aspirasi)', status: 'Berjalan', tanggal: '2026', lokasi: 'Online', pj: 'Dept. PP', desc: 'Layanan aspirasi khusus melalui form anonim untuk mahasiswi Informatika.' },
      { nama: 'Kajian Kesetaraan Gender', status: 'Upcoming', tanggal: '14 Nov 2026', lokasi: 'TBA', pj: 'Dept. PP', desc: 'Diskusi dan kajian mengenai kesetaraan gender dalam dunia teknologi.' },
    ]
  },
  {
    slug: "ekraf",
    nama: "Ekraf",
    namaLengkap: "Ekonomi Kreatif",
    ketua: { nama: "Rudi Ramdhan Fadhillah", nim: "241730078", foto: "/assets/pengurus/Rudi.png" },
    sekretaris: { nama: "Ahmad Jibril Abdul Qudus", nim: "241730097", foto: "/assets/pengurus/Jibril.png" },
    anggota: [
      { nama: "Muhammad Ari Fudholi", nim: "241730086", foto: "/assets/pengurus/Ari.png" },
      { nama: "Amar Subagja Firdaus", nim: "241730021", foto: "/assets/pengurus/Amar.png" },
      { nama: "Ima Imaniyah Hasanah", nim: "251603042", foto: "/assets/pengurus/Ima.png" },
      { nama: "Maulida Rahmania", nim: "251603092", foto: "/assets/pengurus/Nia.png" },
    ],
    programKerja: [
      { nama: 'Pembuatan Website Himpunan', status: 'Berjalan', tanggal: '2026', lokasi: 'Online', pj: 'Dept. EKRAF', desc: 'Pembangunan website resmi HMPS INF sebagai wajah digital organisasi.' },
      { nama: 'Workshop Kreatif', status: 'Berjalan', tanggal: '2026', lokasi: 'TBA', pj: 'Dept. EKRAF', desc: 'Workshop desain, konten kreatif, dan kewirausahaan digital.' },
    ]
  },
];
