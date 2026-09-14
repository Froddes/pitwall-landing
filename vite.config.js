import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacidad: resolve(__dirname, 'politica-privacidad.html'),
        aviso: resolve(__dirname, 'aviso-legal.html'),
        cookies: resolve(__dirname, 'politica-cookies.html'),
      }
    }
  }
})