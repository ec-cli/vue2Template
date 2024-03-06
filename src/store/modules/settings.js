/*
 * @Author: rk
 * @Description: 系统设置数据存储
 * @Date: 2022-03-21 15:15:23
 * @LastEditors: rk
 * @LastEditTime: 2024-01-02 09:43:08
 */

export default {
  namespaced: true,
  state: {
    title: "",
    device: "desktop", // 媒体类型 desktop, mobile  默认“desktop”（桌面）
    theme: localStorage.getItem("theme") || "light", // 系统主题 dark:深色 light:浅色
    tagShow: localStorage.getItem("tagShow") || 1, // 是否展示tags标签
    headerShow: localStorage.getItem("headerShow") || 1, // 是否展示header信息
    // 菜单栏状态
    sidebar: {
      opened: localStorage.getItem("sidebarStatus")
        ? !!+localStorage.getItem("sidebarStatus")
        : true,
      withoutAnimation: false,
      hide: false,
    },
  },
  mutations: {
    // 设置网页标题
    SET_TITLE(state, title) {
      state.title = title;
    },
    // 切换媒体类型
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    // 设置主题
    SET_THEME(state, options) {
      state.theme = options;
      localStorage.setItem("theme", options);
    },
    // 设置tags-view
    SET_TAG_SHOW(state, options) {
      state.tagShow = options;
      localStorage.setItem("tagShow", options);
    },
    // 设置是否展示header信息
    SET_HEADER_SHOW(state, options) {
      state.headerShow = options;
      localStorage.setItem("headerShow", options);
    },
    // 设置菜单栏状态
    TOGGLE_SIDEBAR: (state) => {
      if (state.sidebar.hide) {
        return false;
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
      if (state.sidebar.opened) {
        localStorage.setItem("sidebarStatus", 1);
      } else {
        localStorage.setItem("sidebarStatus", 0);
      }
    },
    // 设置手机模式下菜单栏状态
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      localStorage.setItem("sidebarStatus", 0);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
  },
  actions: {
    // 切换媒体类型
    toggleDevice({ commit }, device) {
      commit("TOGGLE_DEVICE", device);
    },
    // 切换菜单栏状态
    toggleSideBar({ commit }) {
      commit("TOGGLE_SIDEBAR");
    },
    // 设置手机模式下菜单栏状态
    closeSideBar({ commit }, { withoutAnimation }) {
      commit("CLOSE_SIDEBAR", withoutAnimation);
    },
  },
};
