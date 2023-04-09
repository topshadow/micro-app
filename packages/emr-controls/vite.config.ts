import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {



    sourcemap: true,
    // lib: {

    //   entry: path.resolve(__dirname, "./src/main.tsx"),
    //   fileName: 'index-9e93f684',
    //   name: 'index-9e93f684',
    //   formats: ['umd']
    // }
  }

})
