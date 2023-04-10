import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {

      output: {
        entryFileNames: `index-9e93f684.js`,
        chunkFileNames: `index-9e93f684.js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
