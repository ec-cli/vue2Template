<!--
 * @Author: tuoyouxin@fpwis.com
 * @Description: 折线图实例
 * @Date: 2023-05-23 15:09:44
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-06-29 19:20:44
-->
<template>
  <div style="width: 100%; height: 100%" :id="chartId"></div>
</template>
<script>
import chartStyle from "@chart/chartStyle"; // echarts公共样式配置
import { chartParamsInit } from "@chart/chartParams"; // echarts参数初始化配置
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
      // 颜色列表
      const colorList = chartStyle.chartColorList;
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
      let option = chartParamsInit(chartData, dark);
      let yData = chartData.yData;
      for (let i in yData) {
        option.series.push({
          name: chartData.legend[i],
          type: "line",
          data: yData[i],
          yAxisIndex: 0,
          symbol: "circle",
          symbolSize: 0,
          showSymbol: false,
          smooth: chartData.smooth || false,
          itemStyle: {
            normal: {
              color: colorList[i],
              borderColor: colorList[i],
            },
          },
          lineStyle: {
            width: 1.8,
            color: colorList[i],
          },
        });
      }
      that.myChart.setOption(option, true);
    },
  },
};
</script>
