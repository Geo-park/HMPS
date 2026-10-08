/* ============================================
   HMPS INF — App Root (Router + Layout)
   ============================================ */
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import KetumGreeting from './components/home/KetumGreeting'

import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Galeri from './pages/Galeri'
import Event from './pages/Event'
import EventDetail from './pages/EventDetail'
import Pengumuman from './pages/Pengumuman'
import Arsip from './pages/Arsip'
import Servis from './pages/Servis'
import KontakDosen from './pages/KontakDosen'
import Roadmap from './pages/Roadmap'
import Marketplace from './pages/Marketplace'

function getGreetingMessage(pathname) {
  if (pathname.startsWith('/tentang')) return "Halo! Kenali kepengurusan HMPS Informatika lebih dekat di sini!"
  if (pathname.startsWith('/pengumuman')) return "Halo! Jangan lupa cek pengumuman terbaru kita!"
  if (pathname.startsWith('/event')) return "Yuk cek event terbaru kita, jangan sampai kelewatan!"
  if (pathname.startsWith('/galeri')) return "Intip keseruan kegiatan-kegiatan kita di Galeri!"
  if (pathname.startsWith('/arsip')) return "Cari dokumen, LPJ, atau bank materi? Semuanya ada di Arsip!"
  if (pathname.startsWith('/servis')) return "Butuh bantuan atau ingin sewa perlengkapan? Hubungi servis kami!"
  if (pathname.startsWith('/kontak-dosen')) return "Berikut informasi kontak dosen yang bisa kamu hubungi."
  if (pathname.startsWith('/roadmap')) return "Ini panduan kurikulum buat kamu biar nggak nyasar pas KRS-an!"
  if (pathname.startsWith('/marketplace')) return "Ayo dukung usaha teman-teman kita! Kalau ada yang mau jualan juga, silakan lapor ya."
  return "Halo! Welcome di Website HMPS Informatika!"
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:slug" element={<EventDetail />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="/arsip" element={<Arsip />} />
          <Route path="/servis" element={<Servis />} />
          <Route path="/kontak-dosen" element={<KontakDosen />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
      <KetumGreeting key={location.pathname} message={getGreetingMessage(location.pathname)} />
      <Footer />
    </>
  )
}
