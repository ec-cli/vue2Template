/*
 * @Author: rk
 * @Description: echarts公共样式配置
 * @Date: 2023-02-27 16:42:22
 * @LastEditors: rk
 * @LastEditTime: 2023-07-11 10:24:54
 */

// 图表公共样式
export default {
  backgroundColor: "transparent", // 背景色
  titleColor: "#999", // 标题色
  dayColor: ["#5b84f5"],
  monthColor: ["#53ba70"],
  yearColor: ["#eeb971"],
  nameColor: "rgba(255,255,255,.6)", // 坐标轴名称的文字颜色
  labelColor: "rgba(255,255,255,.6)", // 坐标轴标签颜色
  markLinecolor: "#9a9a9a", // 平均值线颜色
  axisLinecolor: "#0F3D6F", // 坐标轴线的颜色
  legendColor: "rgba(255,255,255,.6)", // 图例颜色
  tooltipColor: "#515a6e", // 提示框字体颜色
  tooltipBackground: "rgba(255,255,255,0.9)",
  splitLineColor: "#eee", // 分割线颜色
  axisPointerColor: {
    textColor: "#556677", // 指示标签文字颜色
    colorStops: "#1495eb", // 指示标签下方颜色
  },
  legendFontSize: 11, // 图例字体大小
  axisFontSize: 11, // x、y轴文字大小
  nameFontSize: 11, // x、y轴单位的大小
  toolFontSize: 12, // 鼠标滑过弹窗文字大小

  darkColors: {
    titleColor: "#eee", // 标题色
    nameColor: "rgba(255,255,255,.6)", // 坐标轴名称的文字颜色
    labelColor: "rgba(255,255,255,.6)", // 坐标轴标签颜色
    markLineColor: "#9a9a9a", // 平均值线颜色
    axisLineColor: "#0F3D6F", // x、y轴线条颜色
    legendColor: "rgba(255,255,255,1)", // 图例颜色
    splitLineColor: "#0F3D6F", // 分割线颜色
    tooltipColor: "#666", // 提示框字体颜色
    background: "rgba(28,34,58,.8)", // 弹框背景颜色
    borderColor: "rgba(46,58,102,0.6)", // 弹框边框颜色
    toolFontColor: "#fff", // 弹框文字颜色
    fillerColor: "rgba(28,34,58,.4)", // dataZoom滑块选中区域填充颜色
  },
  lightColors: {
    titleColor: "#555", // 标题色
    nameColor: "#777", // 坐标轴名称的文字颜色
    labelColor: "#888", // 坐标轴标签颜色
    markLineColor: "#dcdcdc", // 平均值线颜色
    axisLineColor: "#dcdcdc", // 坐标轴线的颜色
    legendColor: "#666", // 图例颜色
    splitLineColor: "#ccc", // 分割线颜色

    tooltipColor: "#515a6e", // 提示框字体颜色
    background: "rgba(255,255,255,.8)", // 弹框背景颜色
    borderColor: "#fff", // 弹框边框颜色
    toolFontColor: "#666", // 弹框文字颜色
    fillerColor: "rgba(220,220,220,.4)", // dataZoom滑块选中区域填充颜色
  },
  // 颜色列表
  chartColorList: [
    "#5b84f5",
    "#87d18a",
    "#f18c2a",
    "#9062e0",
    "#0D87A8",
    "#e46f7d",
    "#00B9DB",
    "#DC1912",
    "#DBB406",
    "#c85179",
    "#00C2DB",
    "#6218FF",
    "#85B34F",
    "#4E82FF",
    "#2669AD",
    "#18487F",
    "#488032",
    "#44CECA",
    "#21905B",
    "#6D5DEA",
  ],
};
