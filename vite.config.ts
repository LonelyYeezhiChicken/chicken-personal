import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdownRawPlugin from 'vite-raw-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/chicken-personal/', 
  plugins: [react(), markdownRawPlugin({ fileRegex: /\.md$/ })],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf('node_modules') !== -1) {

            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
