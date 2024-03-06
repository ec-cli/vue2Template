<!--
 * @Author: rk
 * @Description: 首页
 * @Date: 2023-03-17 17:48:40
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-07-11 19:32:44
-->

<template>
  <div class="app-container">
    <h2>{{ tilte }}，欢迎登录</h2>
    <div class="overview">
      该系统旨在为前端开发者提供一套适合本公司实际情况、开箱即用的管理系统框架，减少开发者基础开发工作。
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      tilte: "", // 问候语
    };
  },
  computed: {
    // sidebarRoutes() {
    //   return this.$store.state.common.sidebarRoutes;
    // },
  },
  created() {
    this.welcomeMessageinit();
  },
  methods: {
    welcomeMessageinit() {
      let date = new Date();
      let h = date.getHours();
      if (h < 12) {
        this.tilte = "上午好";
      } else if (h >= 12 && h < 13) {
        this.tilte = "中午好";
      } else if (h >= 13 && h < 19) {
        this.tilte = "下午好";
      } else {
        this.tilte = "晚上好";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: $fs16;
}
.overview {
  line-height: 30px;
  color: $color-success;
  
}
</style>
