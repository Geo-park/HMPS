/* ============================================
   HMPS INF — App Root (Router + Layout)
   ============================================ */
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingContact from './components/layout/FloatingContact'

import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Galeri from './pages/Galeri'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <FloatingContact />
    </>
  )
}
