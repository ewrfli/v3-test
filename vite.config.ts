import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3001,
    open: true,
    https: false,
    proxy: {}
  },
  build:{
    terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
    }
  },
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
