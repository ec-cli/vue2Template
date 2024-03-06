<!--
 * @Author: rk
 * @Description: 角色管理页面
 * @Date: 2023-03-17 17:48:40
 * @LastEditors: rk
 * @LastEditTime: 2023-07-13 12:05:01
-->

<template>
  <div class="app-container">角色管理页面</div>
</template>

<script>
import { getRoleList } from "@api/user.js";
export default {
  name: "VueTemplateIndex",
  data() {
    return {};
  },
  mounted() {
    this.getRoleList();
  },
  methods: {
    getRoleList() {
      getRoleList().then((res) => {
        //
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
