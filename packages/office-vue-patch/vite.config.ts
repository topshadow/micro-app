import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
