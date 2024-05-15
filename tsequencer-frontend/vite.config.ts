import path from "path"
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5179',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/components/ui/"),
    },
  },
})
