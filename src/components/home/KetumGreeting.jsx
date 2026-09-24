import { useState, useEffect } from 'react'
import '../../css/ketum-greeting.css'

export default function KetumGreeting() {
  const [isVisible, setIsVisible] = useState(true)
  const [showPhoto, setShowPhoto] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  const fullTypewriter = "Halo! Welcome di Website HMPS Informatika!"

  useEffect(() => {
    // 0.5 detik -> Foto ketum slide-up
    const photoTimer = setTimeout(() => setShowPhoto(true), 500)

    // 1 detik -> Bubble pop-up
    const bubbleTimer = setTimeout(() => setShowBubble(true), 1000)

    // 1.2 detik -> Typewriter mulai
    const typeTimer = setTimeout(() => {
      let i = 0
      const typeInterval = setInterval(() => {
        if (i < fullTypewriter.length) {
          setTypewriterText(fullTypewriter.slice(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
        }
      }, 40) // speed of typing
    }, 1200)

    return () => {
      clearTimeout(photoTimer)
      clearTimeout(bubbleTimer)
      clearTimeout(typeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className={`ketum-widget ${showPhoto ? 'show-photo' : ''} ${showBubble ? 'show-bubble' : ''} ${isHovered ? 'show-full-text' : ''}`}>

      {/* Bubble Chat */}
      <div 
        className="ketum-bubble"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        <button className="ketum-close" onClick={() => setIsVisible(false)} aria-label="Tutup">
          ✕
        </button>
        <div className="ketum-bubble-title">
          {typewriterText}
          <span className="typewriter-cursor">|</span>
        </div>

        <div className="ketum-bubble-content">
          <p>Lagi nyari sesuatu? Siapa tahu kita bisa bantu!</p>
          <p>Di sini ada berbagai info seputar Informatika, kegiatan HMPS, program kerja, dan lainnya.</p>
          <p>Buat mahasiswa ataupun umum, semuanya boleh mampir!</p>
          <p>Yuk, cek-cek dulu. Siapa tahu ada yang kamu butuhin! 🚀</p>
        </div>
      </div>

      {/* Foto Ketum */}
      <div className="ketum-photo-container">
        <img src="/asset/ketum.png" alt="Ketua Umum HMPS" className="ketum-photo" />
      </div>

    </div>
  )
}
