/*
 * @Author: rk
 * @Description: 用户数据存储
 * @Date: 2022-03-21 15:15:23
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-06-29 18:25:28
 */

// import { login, logout, getUserInfo } from "@api/user";
import { getToken, setToken, removeToken } from "@utils/auth";
import { Loading } from "element-ui";
export default {
  // namespaced: true,
  state: {
    name: "", // 用户名
    token: getToken(), // token
    roles: [], // 角色列表
    permissions: [], // 权限列表
    userInfo: null, // 用户信息
  },
  mutations: {
    // 设置token
    SET_TOKEN(state, options) {
      state.token = options;
    },
    // 设置用户名
    SET_NAME: (state, name) => {
      state.name = name;
    },
    // 设置角色
    SET_ROLES(state, options) {
      state.roles = options;
    },
    // 设置权限
    SET_PERMISSIONS(state, options) {
      state.permissions = options;
    },
    // 设置用户信息
    SET_USER(state, options) {
      state.userInfo = options;
    },
  },
  actions: {
    // 登录
    Login({ commit }, params) {
      return new Promise((resolve, reject) => {
        // login(params)
        //   .then((res) => {
        // 临时模拟登录
        const res = {
          access_token:
            "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjViYjdkMTNiLTNiNzQtNGQ2Zi05YWI4LTcyMTE1ODgzOTU4MiJ9.ElHMAUeU4XEX6kWQ1uOCwrDdGeeTaLtMW2uoRGVtRPzIMKN1djX43wfoj8_TdX5gBlOD2RZEU7uO-PuGWt_uUA",
        };
        if (res) {
          setToken(res.access_token);
          commit("SET_TOKEN", res.access_token);
          resolve(res);
        } else {
          resolve(false);
        }

        // })
        // .catch((error) => {
        //     reject(error);
        // });
      });
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        const loading = Loading.service({
          lock: true,
          text: "正在加载...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.05)",
        });
        // getUserInfo()
        //     .then((res) => {
        loading.close();
        // 临时模拟用户信息
        const res = {
          permissions: ["*:*:*"],
          roles: ["admin"],
          user: {
            account: "admin",
            id: 1,
            userName: "管理员",
          },
        };
        if (res.roles && res.permissions) {
          commit("SET_ROLES", res.roles);
          commit("SET_PERMISSIONS", res.permissions);
        } else {
          commit("SET_ROLES", ["ROLE_DEFAULT"]);
          commit("SET_PERMISSIONS", ["*"]);
        }
        commit("SET_NAME", res.user.account);
        commit("SET_USER", res.user);
        resolve(res);

        // })
        // .catch((error) => {
        //     loading.close();
        //     reject(error);
        // });
      });
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // 调用退出登录接口
        // logout(state.token)
        //     .then(() => {
        commit("SET_TOKEN", null);
        commit("SET_ROLES", []);
        commit("SET_PERMISSIONS", []);
        removeToken();
        resolve();
        // })
        // .catch((error) => {
        //     reject(error);
        // });
      });
    },
    // 前端登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    },
  },
};
