<!--
 * @Author: rk
 * @Description: 用户详情页面
 * @Date: 2023-03-17 17:48:40
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 19:58:03
-->

<template>
  <div class="app-container">
    以下是 js-fastcode 使用方式
    <p>两数相加plus，在生命周期使用相加函数：{{ store }}</p>
    <p>两数相加plus，在模板中使用相加函数：{{ plus(0.1, 0.2) }}</p>
    <p>判断对象是否为空：{{ isObjEmpty }}</p>
    <p>获取数组下标：{{ index }}</p>
  </div>
</template>

<script>
import { plus, isObjEmpty, getValIndex, judgeListComplete } from "js-fastcode"; // 引入自定义js库
export default {
  name: "VueTemplateIndex",
  data() {
    return {
      store: "",
      isObjEmpty: false,
      index: "",
      list: [
        { name: "rr", age: 20 },
        { name: "xx", age: "" },
      ],
    };
  },
  mounted() {
    this.dataParamsInit();
  },
  methods: {
    // 页面参数初始化
    dataParamsInit() {
      let obj = {};
      let arr = ["xx", "xy", "xz"];
      this.store = plus(0.1, 0.2);
      this.isObjEmpty = isObjEmpty(obj);
      this.index = getValIndex(arr, "xy");
      this.handleListSubmit();
    },
    // 判断数组对象不为空
    handleListSubmit() {
      // 判断数组对象不为空，一般是对数组对象表单提交时不为空进行判断
      if (judgeListComplete(this.list)) {
        console.log("数组对象每一个字段不为空");
      } else {
        console.log("数组对象有一个字段为空");
      }
    },
    // 在模板中使用相加函数
    plus,
  },
};
</script>

<style lang="scss" scoped></style>
