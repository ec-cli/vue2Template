<!--
 * @Author: tuoyouxin@fpwis.com
 * @Description: 饼状图实例
 * @Date: 2023-05-23 15:09:44
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-07-17 17:06:34
-->
<template>
  <div style="width: 100%; height: 100%" :id="chartId"></div>
</template>
<script>
import { pieChartParamsInit } from "@chart/chartParams.js"; // echarts参数初始化配置
import { createNonceStr } from "js-fastcode"; // 自定义js库
export default {
  props: {
    // 图表数据
    chartData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartId: createNonceStr(), // chartID 生成16位随机字符串
    };
  },
  computed: {
    // 系统主题 dark:深色 light:浅色
    theme() {
      return this.$store.state.settings.theme;
    },
    // 菜单栏状态
    sidebar() {
      return this.$store.state.settings.sidebar.opened;
    },
    // 主题和图标数据
    listenChange() {
      const { theme, chartData } = this;
      return { theme, chartData };
    },
  },
  watch: {
    // 监听菜单栏状态变化
    sidebar: {
      handler(newVal, oldVal) {
        setTimeout(() => {
          this.myChart?.resize();
        }, 300);
      },
      deep: true,
    },
    // 监听主题和图标数据变化
    listenChange: {
      handler(newVal, oldVal) {
        this.chartInit();
      },
      deep: true,
    },
  },
  mounted() {
    this.chartInit();
  },
  methods: {
    // 图表初始化
    chartInit() {
      let that = this;
      // 是否是深色主题
      const dark = that.theme === "dark" ? true : false;
      that.myChart = that.$echarts.init(
        document.getElementById(that.chartId),
        null,
        {
          render: "svg",
          devicePixelRatio: 2,
        }
      );
      window.addEventListener(
        "resize",
        () => {
          that.myChart.resize();
        },
        false
      );
      // 数据
      const chartData = that.chartData;
      let option = pieChartParamsInit(chartData, dark);
      that.myChart.setOption(option, true);
    },
  },
};
</script>
