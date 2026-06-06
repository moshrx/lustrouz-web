import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
    // Inline small assets as base64 to save requests
    assetsInlineLimit: 4096,
    // Emit sourcemaps only in dev
    sourcemap: false,
    // Target modern browsers for smaller output
    target: 'es2020',
  },
})
