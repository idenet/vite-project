import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from 'autoprefixer'

const variablePath = normalizePath(path.resolve('./src/styles/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['last 2 versions', '>1%', 'ios 7']
        })
      ]
    }
  }
})
