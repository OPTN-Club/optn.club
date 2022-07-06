import vue from '@vitejs/plugin-vue'
import { build, defineConfig } from 'vite'

console.log(process.env.NODE_ENV);
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3333,
  },
  base: '/', // process.env.NODE_ENV === 'github' ? '/optn.club/' : '/',
  build: {
    outDir: 'docs',
  },
  plugins: [vue()],
})
