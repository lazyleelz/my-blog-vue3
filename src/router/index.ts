/*
 * @Author: your name
 * @Date: 2021-06-22 16:19:22
 * @LastEditTime: 2021-06-22 17:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lazy-blog/src/router/router.ts
 */
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
import Home from '@/views/Home/index.vue'
import Vuex from '@/views/Vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/Axios',
    name: 'Axios',
    component: () => import('@/views/Axios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
