/*
 * @Author: rk
 * @Description: 路由权限文件
 * @Date: 2022-09-26 15:45:39
 * @LastEditors: rk
 * @LastEditTime: 2024-03-27 16:04:26
 */
import router from "./router";
import store from "./store";
import { getToken } from "@utils/auth";
// 路由白名单
const whiteList = ["/login", "/auth-redirect", "/forget_pwd", "/404"];
router.beforeEach((to, from, next) => {
  if (getToken()) {
    to.meta.title && store.commit("settings/SET_TITLE", to.meta.title);
    /** token存在 */
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      // 判断如果没有角色信息，则需要重新获取用户信息
      if (store.state.user.roles.length === 0) {
        // 判断当前用户是否已拉取完用户信息
        store
          .dispatch("GetInfo")
          .then(() => {
            // 拉取路由信息
            store.dispatch("GenerateRoutes").then((accessRoutes) => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(accessRoutes); // 动态添加可访问路由表
              next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
            });
          })
          .catch((err) => {
            store.dispatch("FedLogOut").then(() => {
              next({ path: "/login" });
            });
          });
      } else {
        next();
      }
    }
  } else {
    /** token不存在 */
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next("/login"); // 否则全部重定向到登录页
    }
  }
});
