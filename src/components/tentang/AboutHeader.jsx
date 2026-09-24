import { useState, useEffect } from 'react'
import Reveal from '../common/Reveal'

const HERO_IMAGES = [
  '/asset/lazarus.png',
  '/asset/mahasiswa.webp',
  '/asset/sekolah.webp'
]

export default function AboutHeader() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="tentang-hero" id="tentang">
      {/* Background Images Slider */}
      {HERO_IMAGES.map((src, idx) => (
        <div
          key={idx}
          className={`tentang-hero__bg ${idx === currentSlide ? 'active' : ''}`}
        >
          <img src={src} alt={`Tentang HMPS ${idx + 1}`} />
          <div className="tentang-hero__overlay"></div>
        </div>
      ))}

      <div className="tentang-hero__content">
        <Reveal as="h1" className="tentang-hero__title">
          Tentang Kami
        </Reveal>
        <Reveal as="p" className="tentang-hero__subtitle" delay={100}>
          Himpunan Mahasiswa Program Studi Informatika <br className="hidden-mobile" />
          UIN Sultan Maulana Hasanuddin Banten
        </Reveal>
      </div>

      {/* Controls */}
      <button className="tentang-hero__control prev" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>
      <button className="tentang-hero__control next" onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>

      {/* Dots */}
      <div className="tentang-hero__dots">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            className={`tentang-hero__dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
