/*
 * @Author: your name
 * @Date: 2021-06-22 17:47:46
 * @LastEditTime: 2021-06-28 10:39:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lazy-blog/src/utils/axios.ts
 */
import Axios from "axios"
import {
  setToken,
  setRefreshToken,
  getToken,
  getTokenKey,
  getRefreshToken,
  getRefreshTokenKey,
  removeToken,
 } from "../plugins/cookie"
import { ElMessage } from "element-plus"

const baseURL = ''

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时
})

// 前置拦截器（请求拦截，发起请求之前进行拦截）
axios.interceptors.request.use(
  (config) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    if (getToken()) {
      config.headers[getTokenKey()] = getToken()
      config.headers[getRefreshTokenKey()] = getRefreshToken();
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（响应拦截，获取响应之后的拦截）
axios.interceptors.response.use(
  (response) => {
    // 响应之后统一进行处理
    const res = response.data
    if (!response.status.toString().startsWith("2") || res.code === -1) {
      ElMessage.error("系统错误，请检查API是否正常!")
      return
    }
    if (res.code !== 0) {
      if (res.code === -3) {
        ElMessage.error("登录已过期，请重新登录！")
        removeToken()
      } else {
        ElMessage.error(res.message)
      }
      return Promise.resolve(res)
    } else {
      const headers = response.headers
      const token = headers.token
      const refresh_token = headers["refresh-token"]
      if (token && refresh_token) {
        setToken(token)
        setRefreshToken(refresh_token)
      }
      return res
    }
  },
  (error) => {
    if (error.message === "Request failed with status code 500") {
      console.error('系统错误，请检查API是否正常！')
      return
    }
    if (error && error.response && error.response.data) {
      const code = error.response.status
      if (code === 401 || code === -3) {
        removeToken()
        ElMessage.error('登录已过期，请重新登录！')
      } else {
        const msg = error.response.data.message
        ElMessage.error(`Code: ${code}, Message: ${msg}`)
        console.error(`[Axios Error]`, error.response)
      }
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)
export default axios
