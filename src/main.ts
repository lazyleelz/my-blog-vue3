/*
 * @Author: your name
 * @Date: 2021-06-22 15:46:22
 * @LastEditTime: 2021-06-24 14:22:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lazy-blog/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'

createApp(App)
.use(router)
.use(store)
.use(ElementPlus)
.mount('#app')
