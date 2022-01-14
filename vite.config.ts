import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/main.scss";'
      }
    }
  }  
})
