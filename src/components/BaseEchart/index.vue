<!--
 * @Author: tuoyouxin@fpwis.com
 * @Description: echart图表（支持折线图、柱状图、饼状图）
 * @Date: 2023-11-16 16:27:39
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-11-17 09:25:16
-->
<template>
  <div :id="id" class="chart"></div>
</template>
<script>
// 图表初始化方法
import { paramsInit, pieChartParamsInit } from "@/common/chart/chartParams";
export default {
  components: {},
  props: {
    // 图表参数
    chartParams: {
      type: Object,
      default: () => ({
        option: null, // Object | 图表配置参数 | 必传
        pie: false, // Boolean | 是否为饼状图 | 非必传
        screenfull: false, // Boolean | 是否全屏 ｜ 非必传
        split: 0, // Number | 按多少点分割，必须能被x轴数组长度整除 ｜ 非必传 折线图或柱状图可用
        group: "", // String | 多图表联动唯一标识 ｜ 非必传 折线图或柱状图可用
      }),
    },
  },
  data() {
    return {
      // 图表id
      id: this.$createNonceStr(),
      // 图表实例
      myChart: null,
    };
  },
  computed: {
    // 侧边栏状态
    asideShow() {
      return this.$store.state.settings.sideShow;
    },
    // 系统主题
    theme() {
      return this.$store.state.settings.theme;
    },
    // 图表锁定状态
    chartLock() {
      return this.$store.state.settings.chartLock;
    },
    // 以下参数发生变化需要重新绘制图表
    listenChange() {
      const { theme, chartLock, chartParams } = this;
      return { theme, chartLock, chartParams };
    },
    // 以下参数发生变化需要重新调整图表大小
    listenChange2() {
      const { asideShow } = this;
      return { asideShow };
    },
  },
  watch: {
    listenChange: {
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          this.handleChartRender();
            this.handleChartResize();
        });
      },
      deep: true,
      immediate: true
    },
    listenChange2: {
      handler(newVal, oldVal) {
        setTimeout(() => {
          this.handleChartResize();
        }, 300);
      },
      deep: true,
    },
  },
  destroyed() {
    this.myChart?.dispose();
  },
  methods: {
    // 图表绘制
    handleChartRender() {
      const that = this;
      let dom = document.getElementById(that.id);
      // 初始化图表实例
      if(dom) {
        that.myChart = that.$echarts.init(dom, null, { devicePixelRatio: 2 });
      }
      window.addEventListener(
        "resize",
        that.$debounce(this.handleChartResize, 100)
      );
      // 是否是深色主题
      const isDark = that.theme === "dark";
      // 图表参数
      const chartParams = that.$deepClone(that.chartParams);
      let option = null;
      if (chartParams.pie) {
        // 饼状图
        option = pieChartParamsInit(chartParams.option, isDark);
        // TODO 待完善
      } else {
        // 柱状图
        option = paramsInit(chartParams.option, isDark);
        // TODO 考虑到paramsInit方法已经被广泛使用，因此在这里series需要手动赋一下值
        option.series = chartParams.option.series;
        // 如果传入split，表示需要竖向分割线
        if (chartParams.split && chartParams.option.xData?.length) {
          // 每隔一个自然日设置一条分割线
          let markLine = [];
          chartParams.option.xData.forEach((item, index) => {
            if (index % chartParams.split === 0 && index !== 0) {
              markLine.push({
                name: `中间线${index}`,
                xAxis: item,
              });
            }
          });
          option.series.push({
            name: "",
            type: "line",
            markLine: {
              label: {
                show: false,
              },
              lineStyle: {
                color: "rgba(91,132,245,0.5)",
              },
              symbol: "none", // 带不带箭头
              data: markLine,
            },
          });
        }
      }
      // 渲染图表实例
      that.myChart.setOption(option, true);
      // 监听图例select事件
      that.myChart.on("legendselectchanged", (params) => {
        that.$emit("legend-select-changed", params.selected);
      });
      // 监听图表缩放事件，饼状图不需要
      if (!chartParams.pie) {
        that.myChart.on("datazoom", (res) => {
          // res里可以获取到滚动条当前起始位置start,end,二者皆为百分比
          if (res?.batch) {
            that.$emit("chart-data-zoom", res.batch[0]);
          }
        });
      }
      // 如果图表需要联动，需要设置group
      if (chartParams.group) {
        // 图表全屏状态下取消联动
        if (chartParams.screenfull) {
          that.myChart.group = "";
        } else {
          that.myChart.group = chartParams.group;
        }
      }
    },
    // 图表大小调整
    handleChartResize() {
      this.myChart?.resize();
    },
  },
};
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
