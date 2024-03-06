/*
 * @Author: rk
 * @Description: 入口文件
 * @Date: 2022-09-26 15:45:39
 * @LastEditors: rk
 * @LastEditTime: 2024-01-02 16:56:11
 */

import Vue from "vue";
import "@babel/polyfill";
import App from "./App.vue";
import store from "./store"; // 数据仓库
import router from "./router"; // 路由

// elementUI
import { message } from "@utils/singeMessage.js";
import ElementUI from "element-ui";
Vue.use(ElementUI);
Vue.prototype.$message = message;

// 公共样式
import "animate.css";
import "@assets/css/index.scss";
import "@assets/css/fp.scss";

// 主题颜色
import "../theme/index.css";
import "@assets/theme/dark/index.css"; // element-ui样式 深色模式
import "@assets/theme/light/index.css"; // element-ui样式 浅色模式

// icon
import "@assets/icons";

// permission
import "./permission";

// 指令、插件、过滤器
import "./common/index.js";

// plugins
import plugins from "./plugins";
Vue.use(plugins);

// vue-meta
import Meta from "vue-meta";
Vue.use(Meta);

import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 全局组件
import GlobalComponent from "@/components/index.js";
Vue.use(GlobalComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
