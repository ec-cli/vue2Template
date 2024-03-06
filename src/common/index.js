/*
 * @Author: rk
 * @Description: 全局注册插件、过滤器、指令
 * @Date: 2022-02-26 09:18:07
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-06-29 11:49:04
 */

import Vue from "vue";
import utils from "./utils"; // 自定义插件
import filter from "./filters"; // 自定义过滤器
import directives from "./directives/index.js"; // 自定义指令

// 全局注册插件
let _utils = function (Vue) {
  for (let i in utils) {
    Vue.prototype[i] = utils[i];
  }
};

// 全局注册过滤器
let _filter = function (Vue) {
  for (let i in filter) {
    Vue.filter(i, filter[i]);
  }
};

// 全局注册指令
let _directive = function (Vue) {
  for (let i in directives) {
    Vue.directive(i, directives[i]);
  }
};

Vue.use(_utils);
Vue.use(_filter);
Vue.use(_directive);
