import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    base: '/', // Indispensable pour ton domaine www.bs-technologie.fr
    plugins: [react()],
    resolve: {
      alias: {
        // Comme tes fichiers sont à la racine, @ pointe ici
        '@': path.resolve(__dirname, '.')
      }
    },
    build: {
      outDir: 'dist',
      // On s'assure que Vite ne cherche pas un dossier src inexistant
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
    }
  }
})