import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    root: './',
    lib: {
      // entry: resolve(__dirname, 'src/main.ts'),
      entry: resolve(__dirname, 'index.html'),
      formats: ['umd'],
      name: 'yoshinaniFrontendValidator',
      fileName: 'yoshinaniFrontendValidator',
    },
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
})