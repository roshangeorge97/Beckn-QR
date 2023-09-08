import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    crossOriginIsolation()],
  server: {
    open: true,
    origin: 'https://beckn-qr-141g.vercel.app',
  },
})
