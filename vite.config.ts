/*
 * @Author: your name
 * @Date: 2021-06-22 15:46:22
 * @LastEditTime: 2021-06-22 16:13:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lazy-blog/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置’@‘指向‘src’目录
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动的端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 设置是否允许跨域
    proxy: {
    }
  }
})
