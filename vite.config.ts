
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Importez ceci

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Ajoutez ceci à la liste des plugins
  ],
})