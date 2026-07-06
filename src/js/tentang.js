import { initTheme } from './theme.js'
import { initNavbar } from './navbar.js'
import { initFloatingBtn } from './floating-btn.js'
import { initPageTransitions } from './page-transition.js'
import { initFooter } from './footer.js'
import { initReveal } from './reveal.js'


const FAQ_DATA = [
  {

    cat: 'Umum',
    items: [
      { q: 'Apa itu HMPS INF?', a: 'HMPS INF adalah Himpunan Mahasiswa Program Studi Informatika UIN Sultan Maulana Hasanuddin Banten. Kami adalah organisasi resmi yang mewadahi seluruh mahasiswa Program Studi Informatika.' },
      { q: 'Apa arti tagline "Kita Satu, Kita Informatika"?', a: 'Tagline ini menggambarkan semangat persatuan dan kekeluargaan seluruh mahasiswa Informatika tanpa membedakan angkatan.' },
      { q: 'Bagaimana cara menghubungi HMPS INF?', a: 'Kamu bisa menghubungi kami via WhatsApp di 083866273495, Instagram @hmpsinformatikaa, atau email hmpsinformatikauinbanten@gmail.com.' },
      { q: 'Di mana sekretariat HMPS INF?', a: 'Sekretariat HMPS INF berada di Jl. Syeh Nawawi Al Bantani No. 01, Gedung B FSAINS UIN SMHB, Curug, Kota Serang, Banten.' },
    ]
  },
  {
    cat: 'Keanggotaan',
    items: [
      { q: 'Siapa saja yang menjadi anggota HMPS INF?', a: 'Seluruh mahasiswa aktif Program Studi Informatika UIN SMH Banten otomatis menjadi anggota himpunan.' },
      { q: 'Bagaimana cara menjadi pengurus?', a: 'Rekrutmen pengurus dibuka setiap awal periode kepengurusan melalui open recruitment yang diumumkan di media sosial himpunan.' },
    ]
  },
  {
    cat: 'Program Kerja',
    items: [
      { q: 'Apa saja program kerja unggulan?', a: 'Beberapa program unggulan meliputi IT Camp, INFORMATIKA SKILL-UP, PIJAR DESA, Informabeauty, dan berbagai workshop pengembangan skill.' },
      { q: 'Apakah kegiatan terbuka untuk umum?', a: 'Sebagian kegiatan seperti seminar dan workshop terbuka untuk umum, sementara kegiatan internal dikhususkan bagi anggota.' },
      { q: 'Bagaimana cara mendaftar event HMPS INF?', a: 'Informasi pendaftaran setiap event diumumkan melalui Instagram @hmpsinformatikaa dan website ini di halaman Events.' },
    ]
  },
  {
    cat: 'Aspirasi',
    items: [
      { q: 'Bagaimana cara menyampaikan aspirasi?', a: 'Aspirasi dapat disampaikan melalui halaman Aspirasi pada website ini — pesanmu akan diteruskan langsung ke WhatsApp pengurus.' },
      { q: 'Apakah pengaduan UKT akan dirahasiakan?', a: 'Ya, seluruh data pengaduan UKT bersifat rahasia dan hanya ditangani oleh pengurus yang berwenang.' },
      { q: 'Apa itu RAPI?', a: 'RAPI (Ruang Aspirasi) adalah layanan aspirasi anonim dari Departemen PP khusus untuk mahasiswi Informatika. Diakses melalui tab RAPI di halaman Aspirasi.' },
    ]
  },
  {
    cat: 'Akademik',
    items: [
      { q: 'Apa itu Roadmap Kuliah?', a: 'Roadmap Kuliah adalah panduan visual alur studi mahasiswa Informatika dari semester 1 hingga 8, termasuk penjurusan di semester 5. Catatan: ini adalah kurikulum umum, bukan kurikulum resmi UIN SMH Banten.' },
      { q: 'Apa itu Skill-UP Hub?', a: 'Skill-UP Hub adalah program kelompok belajar dari Departemen Mikat dengan 5 track: Coding, Desain Digital, Database, Jaringan, dan Project Dev.' },
      { q: 'Bagaimana cara mendapatkan info beasiswa?', a: 'Informasi beasiswa aktif rutin dibagikan oleh Departemen Kominfo melalui Instagram @hmpsinformatikaa dan section Beasiswa Corner di website ini.' },
    ]
  },
]

let activecat = 'Umum'

function renderChips() {
  document.getElementById('faqChips').innerHTML = FAQ_DATA.map(g => `
    <button class="chip ${g.cat === activecat ? 'active' : ''}" onclick="setFaqCat('${g.cat}')">${g.cat}</button>
  `).join('')
}

function renderList() {
  const group = FAQ_DATA.find(g => g.cat === activecat)
  document.getElementById('faqList').innerHTML = group.items.map((item, i) => `
    <div class="faq-item" id="tfaq-${i}">
      <button class="faq-q" onclick="toggleFaq('tfaq-${i}')">
        <span>${item.q}</span>
        <svg class="faq-chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div class="faq-a-wrap">
        <div class="faq-a">
          <p>${item.a}</p>
        </div>
      </div>
    </div>
  `).join('')
}

window.setFaqCat = function(cat) {
  activecat = cat
  renderChips()
  renderList()
}

window.toggleFaq = function(id) {
  const item = document.getElementById(id)
  const isOpen = item.classList.contains('open')
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'))
  if (!isOpen) item.classList.add('open')
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar()
  initTheme()
  initFooter()
  initFloatingBtn()
  initPageTransitions()
  initReveal()

  renderChips()
  renderList()
})
