import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'favicon-cropped.png') {
            return 'favicon-cropped.png';
          }
          return '[name]-[hash][extname]';
        },
      },
    },
  },
})
