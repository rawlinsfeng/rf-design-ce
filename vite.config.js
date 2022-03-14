import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: './src/main.js',
      name: 'rf-design-ce',
      fileName: 'index',
      formats: ['es']
    }
  },
  plugins: [
    vue(),
  ]
})