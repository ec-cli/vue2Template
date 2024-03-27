<!--
 * @Author: rk
 * @Description: 复制组件
 * @Date: 2022-03-14 14:46:19
 * @LastEditors: rk
 * @LastEditTime: 2023-07-03 19:08:00
-->

<template>
  <span class="copy">
    <slot></slot>
    <span class="copy-img" @click="handleCopyClick"></span>
  </span>
</template>
<script>
export default {
  name: "copy",
  methods: {
    // 复制处理函数
    handleCopyClick() {
      let shareLink = this.$slots.default[0].elm.data || ""; // 直接构建input
      let input = document.createElement("input"); // 直接构建input
      input.value = shareLink; // 设置内容
      document.body.appendChild(input); // 添加临时实例
      input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      this.$message({
        message: "复制成功",
        type: "success",
      });
      document.body.removeChild(input); // 删除临时实例
    },
  },
};
</script>
<style lang="scss" scoped>
.copy {
  display: inline-flex;
  align-items: center;
  .copy-img {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("../../assets/images/copy1.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      background: url("../../assets/images/copy2.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
