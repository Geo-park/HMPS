import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'

// Import all styles
import './css/tokens.css'
import './css/base.css'
import './css/navbar.css'
import './css/footer.css'
import './css/floating-btn.css'
import './css/tentang.css'
import './css/departemen.css'
import './css/struktur.css'
import './css/galeri.css'
import './css/kalender.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
