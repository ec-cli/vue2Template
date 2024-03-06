<!--
 * @Author: rk
 * @Description: 跳转组件
 * @Date: 2022-02-26 12:04:50
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-06-29 16:21:17
-->

<template>
  <component :is="getRouteType" v-bind="getLinkProps(to)">
    <slot></slot>
  </component>
</template>

<script>
import { isExternal } from "js-fastcode"; // 自定义库

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 是否为外链
    isExternal() {
      return isExternal(this.to);
    },
    // 获取跳转路由类型
    getRouteType() {
      if (this.isExternal) {
        return "a";
      }
      return "router-link";
    },
  },
  methods: {
    // 跳转链接属性
    getLinkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: "_blank",
          rel: "noopener",
        };
      }
      return {
        to: to,
      };
    },
  },
};
</script>
