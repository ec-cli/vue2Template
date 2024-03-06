<!--
 * @Author: tuoyouxin@fpwis.com
 * @Description: 组件模板
 * @Date: 2023-07-06 16:17:12
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 12:24:41
-->
<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane
        v-for="item in templateList"
        :key="item.value"
        :label="item.label"
        :name="item.value"
      ></el-tab-pane>
    </el-tabs>
    <button-box v-if="activeName === '1'"></button-box>
    <form-box v-if="activeName === '2'"></form-box>
    <table-box v-if="activeName === '4'"></table-box>
    <card-box v-if="activeName === '5'"></card-box>
    <icon-box v-if="activeName === '6'"></icon-box>
  </div>
</template>

<script>
import ButtonBox from "./component/button"; // 按钮
import FormBox from "./component/form"; // 表单
import TableBox from "./component/table"; // 表格
import CardBox from "./component/card"; // 卡片
import IconBox from "./component/icon"; // icon
export default {
  components: { ButtonBox, FormBox, TableBox, CardBox, IconBox },
  data() {
    return {
      activeName: "1",
      templateList: [
        { label: "按钮", value: "1" },
        { label: "表单", value: "2" },
        { label: "弹窗", value: "3" },
        { label: "表格", value: "4" },
        { label: "卡片", value: "5" },
        { label: "icon", value: "6" },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.template-tips {
  h2 {
    font-weight: bold;
  }
  p {
    font-size: $fs12;
    color: $font-secondary;
    text-indent: 2rem;
  }
}
</style>
