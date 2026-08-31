import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import AboutHeader from '../components/tentang/AboutHeader'
import Sejarah from '../components/tentang/Sejarah'
import Departemen from '../components/tentang/Departemen'
import VisiMisi from '../components/tentang/VisiMisi'
import NilaiOrganisasi from '../components/tentang/NilaiOrganisasi'
import StrukturOrganisasi from '../components/tentang/StrukturOrganisasi'
import FAQ from '../components/tentang/FAQ'

export default function Tentang() {
  const location = useLocation()

  // Scroll to hash
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1))
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <main className="page-fade" style={{ paddingTop: '80px' }}>
      <Helmet>
        <title>Tentang Kami | HMPS Informatika UIN SMH Banten</title>
        <meta name="description" content="Kenali lebih dekat HMPS Informatika UIN Sultan Maulana Hasanuddin Banten — sejarah, visi misi, struktur kepengurusan, dan tujuh departemen yang bergerak untuk mahasiswa Informatika." />
        <link rel="canonical" href="https://hmps-two.vercel.app/tentang" />
      </Helmet>

      <AboutHeader />
      <Sejarah />
      <StrukturOrganisasi />
      <Departemen />
      <VisiMisi />
      <NilaiOrganisasi />
      <FAQ />
    </main>
  )
}
