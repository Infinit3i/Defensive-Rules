import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/Defensive-Rules/' : '/',
  server: {
    fs: {
      allow: ['..']  // Allow access to parent directory for Sigma/Yara files
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Ensure proper asset handling for GitHub Pages
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },
  assetsInclude: ['**/*.yml']  // Include YAML files as assets
})