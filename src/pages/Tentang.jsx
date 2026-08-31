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
