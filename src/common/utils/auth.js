/*
 * @Author: yangchenguang
 * @Description: Token 操作封装
 * @Date: 2022-05-18 12:01:24
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-12-27 11:44:52
 */

const TokenKey = "Template-Token";

// 获取token
export function getToken() {
  return localStorage.getItem(TokenKey);
}

// 设置token
export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

// 删除token
export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
