// tailwind.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split stable, rarely-changing vendor libs into their own chunk so returning
        // visitors only re-download app code after a deploy, not React/GSAP/i18next again.
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-i18n': ['i18next', 'react-i18next'],
        },
      },
    },
  },
})