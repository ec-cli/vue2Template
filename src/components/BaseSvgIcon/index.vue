<!--
 * @Author: rk
 * @Description: 全局svg组件
 * @Date: 2022-02-26 14:09:22
 * @LastEditors: rk
 * @LastEditTime: 2023-07-03 09:13:14
-->

<template>
  <svg :class="getSvgClass" aria-hidden="true">
    <use :xlink:href="getIconName" />
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  computed: {
    // 获取Icon名称
    getIconName() {
      return `#icon-${this.iconClass}`;
    },
    // 获取svg类名
    getSvgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    },
  },
};
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
