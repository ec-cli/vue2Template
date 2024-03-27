/*
 * @Author: rk
 * @Description: 监听屏幕尺寸变化
 * @Date: 2022-09-26 18:48:44
 * @LastEditors: rk
 * @LastEditTime: 2024-03-27 15:59:18
 */

import store from "@/store";

const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if (this.device === "mobile" && +this.sideOpen === 1) {
        store.dispatch("settings/closeSideBar", { withoutAnimation: false });
      }
    },
  },
  beforeMount() {
    window.addEventListener("resize", this.handleScreenResize);
  },
  mounted() {
    const isMobile = this.getIsMobile();
    if (isMobile) {
      store.dispatch("settings/toggleDevice", "mobile");
      store.dispatch("settings/closeSideBar", { withoutAnimation: true });
    }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    getIsMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    handleScreenResize() {
      if (!document.hidden) {
        const isMobile = this.getIsMobile();
        store.dispatch(
          "settings/toggleDevice",
          isMobile ? "mobile" : "desktop"
        );
        if (isMobile) {
          store.dispatch("settings/closeSideBar", { withoutAnimation: true });
        }
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleScreenResize);
  },
};
