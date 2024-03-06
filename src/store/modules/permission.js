/*
 * @Author: rk
 * @Description: 路由信息存储
 * @Date: 2022-03-21 11:47:39
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-06-29 18:31:23
 */

import { constantRoutes } from "@/router";
import Layout from "@/layout/index";
import BaseParentView from "@/components/BaseParentView";
// api
// import { getRoutes } from "@api/user";
// 临时定义的动态路由，调用接口后可删除
import { routerList } from "@/constants/router";

const permission = {
  state: {
    routes: [], // 全部路由列表
    addRoutes: [], // 添加的路由列表
    defaultRoutes: [], // 默认路由列表
    topbarRouters: [], // 头部导航栏路由列表
    sidebarRouters: [], // 侧边导航栏路由列表
  },
  mutations: {
    // 设置全部路由列表
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
    },
    // 设置默认路由列表
    SET_DEFAULT_ROUTES: (state, routes) => {
      state.defaultRoutes = constantRoutes.concat(routes);
    },
    // 设置头部导航栏路由列表
    SET_TOPBAR_ROUTES: (state, routes) => {
      state.topbarRouters = routes;
    },
    // 设置侧边导航栏路由列表
    SET_SIDEBAR_ROUTERS: (state, routes) => {
      state.sidebarRouters = routes;
    },
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise((resolve) => {
        // 向后端请求路由数据
        // getRoutes().then((res) => {
        // 模拟后台返回的路由列表
        let list = JSON.parse(JSON.stringify(routerList));
        const res = JSON.parse(JSON.stringify(list));
        const sdata = JSON.parse(JSON.stringify(res));
        const rdata = JSON.parse(JSON.stringify(res));
        const sidebarRoutes = filterAsyncRouter(sdata);
        const rewriteRoutes = filterAsyncRouter(rdata, false, true);
        rewriteRoutes.push({ path: "*", redirect: "/404", hidden: true });
        commit("SET_ROUTES", rewriteRoutes);
        commit("SET_SIDEBAR_ROUTERS", constantRoutes.concat(sidebarRoutes));
        commit("SET_DEFAULT_ROUTES", sidebarRoutes);
        commit("SET_TOPBAR_ROUTES", sidebarRoutes);
        resolve(rewriteRoutes);
        // });
      });
    },
  },
};

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
  return asyncRouterMap.filter((route) => {
    if (type && route.children) {
      route.children = filterChildren(route.children);
    }
    if (route.component) {
      // Layout BaseParentView 组件特殊处理
      if (route.component === "Layout") {
        route.component = Layout;
      } else if (route.component === "BaseParentView") {
        route.component = BaseParentView;
      } else {
        route.component = loadView(route.component);
      }
    }
    if (route.children !== null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, type);
    } else {
      delete route["children"];
      delete route["redirect"];
    }
    return true;
  });
}

function filterChildren(childrenMap, lastRouter = false) {
  let children = [];
  childrenMap.forEach((el, index) => {
    if (el.children && el.children.length) {
      if (el.component === "BaseParentView" && !lastRouter) {
        el.children.forEach((c) => {
          c.path = el.path + "/" + c.path;
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c));
            return;
          }
          children.push(c);
        });
        return;
      }
    }
    if (lastRouter) {
      el.path = lastRouter.path + "/" + el.path;
    }
    children = children.concat(el);
  });
  return children;
}

export const loadView = (view) => {
  if (process.env.NODE_ENV === "development") {
    return (resolve) => require([`@/views/${view}`], resolve);
  } else {
    // 使用 import 实现生产环境的路由懒加载
    return () => import(`@/views/${view}`);
  }
};

export default permission;
