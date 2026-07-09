import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tentang: resolve(__dirname, 'tentang.html'),
        departemen: resolve(__dirname, 'departemen.html'),
        events: resolve(__dirname, 'events.html'),
        galeri: resolve(__dirname, 'galeri.html'),
        roadmap: resolve(__dirname, 'roadmap.html'),
      }
    }
  }
})
