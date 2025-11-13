import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ CONFIGURACIÓN MÍNIMA Y SEGURA
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
