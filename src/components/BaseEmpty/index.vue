<!--
 * @Author: tuoyouxin@fpwis.com
 * @Description: 空状态组件
 * @Date: 2023-10-13 09:08:20
 * @LastEditors: rk
 * @LastEditTime: 2024-01-02 16:44:27
-->
<template>
  <div class="empty-container">
    <div class="img"></div>
    <p class="txt">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "暂无数据",
    },
  },
};
</script>
<style lang="scss" scoped>
.empty-container {
  height: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img {
    width: 300px;
    height: 300px;
    background: url(../../assets/images/empty.png) no-repeat center / 100%;
  }
  .txt {
    font-size: $fs14;
    color: $font-placeholder;
  }
}
</style>
