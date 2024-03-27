/*
 * @Author: rk
 * @Description: 插件注册
 * @Date: 2023-06-25 09:41:05
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 17:09:43
 */

import tab from "./tab";

export default {
  install(Vue) {
    // 页签操作
    Vue.prototype.$tab = tab;
  },
};
