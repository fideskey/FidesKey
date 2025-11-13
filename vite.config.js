import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 3000
  },
  // ✅ ESTA LÍNEA NUEVA LE DICE A VITE DONDE ESTÁN TUS ARCHIVOS
  root: '.',
  publicDir: 'public',
  resolve: {
    alias: {
      // ✅ ESTO MAPEA IMPORTACIONES DESDE 'src/' A 'scripts/'
      '@': resolve(__dirname, 'scripts')
    }
  }
})
