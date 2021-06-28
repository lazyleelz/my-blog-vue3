/*
 * @Author: your name
 * @Date: 2021-06-24 14:23:47
 * @LastEditTime: 2021-06-24 14:30:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lazy-blog/src/plugins/cookie.ts
 */
import Cookies from "js-cookie"

const TokenKey = 'token'
const RefreshTokenKey = 'refresh-token'

// 获取Token
export function getToken() {
  return Cookies.get(TokenKey)
}
// 设置Token
export function setToken(Token: any) {
  return Cookies.set(TokenKey, Token)
}
// 获取TokenKey
export function getTokenKey() {
  return TokenKey
}
// 获取RefreshToken
export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey)
}
// 设置RefreshToken
export function setRefreshToken(RefreshToken: any) {
  return Cookies.set(RefreshTokenKey, RefreshToken)
}
// 获取RefreshTokenKey
export function getRefreshTokenKey() {
  return RefreshTokenKey
}
// 移除Token
export function removeToken() {
  Cookies.remove(TokenKey)
  Cookies.remove(RefreshTokenKey)
}