import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    fs: {
      allow: ['..']  // Allow access to parent directory for Sigma/Yara files
    }
  },
  build: {
    outDir: 'dist'
  }
})