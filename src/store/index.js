/*
 * @Author: rk
 * @Description: vuex 入口
 * @Date: 2022-03-21 15:15:23
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 18:34:58
 */

import Vue from "vue";
import Vuex from "vuex";
import settings from "./modules/settings"; // 系统设置变量
import user from "./modules/user.js"; // 用户信息
import tagsView from "./modules/tagsView.js"; // tag标签信息
import permission from "./modules/permission"; // 路由信息
import getters from "./getters"; // getters

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
    user,
    tagsView,
    permission,
  },
  getters,
});
