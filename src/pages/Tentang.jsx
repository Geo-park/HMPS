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
import { FAQ_DATA } from '../data/tentang'

export default function Tentang() {
  const location = useLocation()
  const faqItems = FAQ_DATA.flatMap(category => category.items).map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  }))

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
    <main className="page-fade">
      <Helmet>
        <title>Tentang HMPS Informatika UIN Banten | Sejarah, Visi Misi &amp; Struktur Kepengurusan</title>
        <meta name="description" content="Kenali HMPS Informatika UIN Sultan Maulana Hasanuddin Banten — sejarah berdirinya, visi misi organisasi, tujuh departemen, struktur kepengurusan 2026/2027, dan FAQ mahasiswa Informatika UIN Banten." />
        <meta name="keywords" content="tentang hmps informatika uin banten, sejarah hmps informatika, visi misi hmps informatika, struktur kepengurusan hmps informatika uin smh banten, departemen hmps informatika" />
        <link rel="canonical" href="https://hmps-inf.fsainsuinbanten.my.id/tentang" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://hmps-inf.fsainsuinbanten.my.id/' },
                  { '@type': 'ListItem', position: 2, name: 'Tentang Kami', item: 'https://hmps-inf.fsainsuinbanten.my.id/tentang' },
                ]
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqItems,
              }
            ]
          })}
        </script>
      </Helmet>

      <AboutHeader />
      <Sejarah />
      <VisiMisi />
      <NilaiOrganisasi />
      <StrukturOrganisasi />
      <Departemen />
      <FAQ />
    </main>
  )
}
