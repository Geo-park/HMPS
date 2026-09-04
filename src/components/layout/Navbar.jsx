/* ============================================
   HMPS INF — Navbar Component
   ============================================ */
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_STRUCTURE, LINK_ICON_PATHS } from '../../data/nav'
export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMega, setOpenMega] = useState(null)
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null)
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMega(null)
  }, [location.pathname])

  const isActive = (href) => {
    if (!href) return false
    const path = href.split('#')[0]
    const current = location.pathname === '/' ? '/' : location.pathname
    return path === current
  }

  return (
    <header id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src="/asset/logo_hmps.png" alt="Logo HMPS" loading="lazy" className="navbar__logo-mark" />
          <span className="navbar__logo-text"><b>HMPS</b> INF</span>
        </Link>

        <nav className="navbar__nav" aria-label="Navigasi utama">
          {NAV_STRUCTURE.map((item, idx) => {
            if (!item.mega) {
              if (item.disabled) {
                return (
                  <div key={idx} className="nav-item">
                    <span className="nav-link nav-link--disabled">{item.label}<span className="nav-badge">Ongoing</span></span>
                  </div>
                )
              }
              return (
                <div key={idx} className={`nav-item ${item.accent ? `nav-item--${item.accent}` : ''}`}>
                  {item.href.startsWith('http') ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={`nav-link ${item.accent ? `nav-link--${item.accent}` : ''}`}>{item.label}</a>
                  ) : (
                    <Link to={item.href} className={`nav-link ${item.accent ? `nav-link--${item.accent}` : ''} ${isActive(item.href) ? 'active' : ''}`}>{item.label}</Link>
                  )}
                </div>
              )
            }

            return (
              <div 
                key={idx} 
                className={`nav-item ${item.accent ? `nav-item--${item.accent}` : ''} ${openMega === idx ? 'open' : ''}`} 
                data-mega
                onMouseEnter={() => setOpenMega(idx)}
                onMouseLeave={() => setOpenMega(null)}
              >
                <button 
                  className={`nav-link ${item.accent ? `nav-link--${item.accent}` : ''} ${item.cols.some(c => c.links.some(l => isActive(l.href))) ? 'active' : ''}`} 
                  aria-haspopup="true" 
                  aria-expanded={openMega === idx}
                >
                  {item.label}
                  <svg className="nav-link__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`mega-menu ${item.compact ? 'mega-menu--compact' : ''} ${item.accent ? `mega-menu--${item.accent}` : ''}`}>
                  <div className="mega-menu__grid">
                    {item.cols.map((col, cIdx) => (
                      <div key={cIdx}>
                        <div className="mega-menu__col-title">{col.title}</div>
                        <div className="mega-menu__links">
                          {col.links.map((link, lIdx) => (
                            link.href.startsWith('http') ? (
                              <a key={lIdx} href={link.href} target="_blank" rel="noopener noreferrer" className="mega-menu__link">
                                <svg className="mega-menu__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  {LINK_ICON_PATHS[link.icon] && <g dangerouslySetInnerHTML={{ __html: LINK_ICON_PATHS[link.icon] }} />}
                                </svg>
                                {link.label}
                              </a>
                            ) : (
                              <Link 
                                key={lIdx} 
                                to={link.href} 
                                className={`mega-menu__link ${isActive(link.href) ? 'active' : ''}`}
                              >
                                <svg className="mega-menu__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  {LINK_ICON_PATHS[link.icon] && <g dangerouslySetInnerHTML={{ __html: LINK_ICON_PATHS[link.icon] }} />}
                                </svg>
                                {link.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        <div className="navbar__actions">
          <button 
            className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`} 
            aria-label="Buka menu" 
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${mobileOpen ? 'open' : ''}`} id="mobileMenu">
        {NAV_STRUCTURE.map((item, idx) => {
          if (!item.mega) {
            if (item.disabled) {
              return <span key={idx} className="mobile-nav-link mobile-nav-link--disabled">{item.label}<span className="nav-badge">Ongoing</span></span>
            }
            return item.href.startsWith('http') ? 
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="mobile-nav-link">{item.label}</a> :
              <Link key={idx} to={item.href} className="mobile-nav-link">{item.label}</Link>
          }

          const allLinks = item.cols.flatMap(c => c.links)
          return (
            <div key={idx}>
              <button 
                className={`mobile-accordion__trigger ${item.accent ? `mobile-accordion__trigger--${item.accent}` : ''} ${openMobileAccordion === idx ? 'open' : ''}`}
                onClick={() => setOpenMobileAccordion(openMobileAccordion === idx ? null : idx)}
              >
                {item.label}
                <svg className="nav-link__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className={`mobile-accordion__content ${openMobileAccordion === idx ? 'open' : ''}`}>
                {allLinks.map((l, lIdx) => (
                  l.href.startsWith('http') ?
                    <a key={lIdx} href={l.href} target="_blank" rel="noopener noreferrer" className="mobile-accordion__link">{l.label}</a> :
                    <Link key={lIdx} to={l.href} className="mobile-accordion__link">{l.label}</Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </header>
  )
}
