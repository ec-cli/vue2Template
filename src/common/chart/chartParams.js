/*
 * @Author: rk
 * @Description: 图表样式初始化方法
 * @Date: 2023-06-20 12:08:26
 * @LastEditors: rk
 * @LastEditTime: 2023-07-11 10:24:19
 */
import chartStyle from "./chartStyle";

/**
 * 柱状图、折线图参数初始化方法 
 * @param {*} data 图表配置参数 
                {   
                    legend: ["图例1","图例2"], // 必传项｜图例数据
                    xData: [], // 必传项｜x轴参数
                    legendType: false, // 非必传｜是否显示legend分页
                    legendTop: 0, // 非必传｜图例距离上边框的距离， 默认0
                    legendSelected: { 图例1: true, 图例2: false }, // 非必传｜默认选中项，与图例legend一一对应 
                    legendWidth: "670px", // 非必传｜图例盒子宽度，默认100%
                    boundaryGap: false, // 非必传｜坐标系左右两侧是否留白，默认false不留白
                    dataZoomType: "inside", // 非必传｜图表缩放类型，默认inside
                    dataZoomShow: false, // 非必传｜图表缩放滚动条，默认false
                    yName1: "电量: MWh", // 非必传｜左侧y轴名称
                    yName2: "电价: 元/MWh", // 非必传｜右侧y轴名称（传了即认为存在2条y轴）
                    yName3: "费用: 元", // 非必传｜右侧y轴名称（传了即认为存在3条y轴）
                    top: 40, // 非必传｜坐标系距离上边框的距离，默认40
                    bottom: 40, // 非必传｜坐标系距离下侧边框的距离，默认40
                    left: 40, // 非必传｜坐标系距离左侧边框的距离，默认40
                    right: 40, // 非必传｜坐标系距离右侧边框的距离，默认40
                    dataZoomStartValue: 0, // 非必传｜图表缩放开始位置，默认0
                    dataZoomEndValue: 100, // 非必传｜图表缩放结束位置，默认100
                }
 * @param {*} dark 是否为深色主题
 * @returns Object
 */
export const chartParamsInit = (data, dark) => {
  let option = {
    backgroundColor: "transparent",
    legend: {
      type: data.legendType ? "plain" : "scroll", // 图例类型
      data: data.legend, // 图例数据
      top: data.legendTop || 0, // 图例距离盒子上边框的距离
      selected: data.legendSelected || null, // 图例选中状态
      width: data.legendWidth || "100%", // 图例区域的宽度
      itemWidth: 20, // 图标的宽度
      itemHeight: 12, // 图标的高度
      itemGap: 8, // 图标的间距
      textStyle: {
        color: dark
          ? chartStyle.darkColors.legendColor
          : chartStyle.lightColors.legendColor,
        fontSize: chartStyle.legendFontSize,
      },
      pageIconSize: 13,
      pageIconColor: dark ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.6)",
      pageIconInactiveColor: dark ? "rgba(255,255,255,.3)" : "rgba(0,0,0,.3)",
      pageTextStyle: {
        color: dark
          ? chartStyle.darkColors.legendColor
          : chartStyle.lightColors.legendColor,
      },
    },
    tooltip: {
      trigger: "axis",
      triggerOn: "mousemove|click",
      confine: true,
      axisPointer: {
        type: "cross",
        axis: "x",
        label: {
          show: true,
          color: dark
            ? chartStyle.darkColors.labelColor
            : chartStyle.lightColors.labelColor,
          borderColor: "rgba(0,0,0,0)",
          shadowColor: "rgba(0,0,0,0)",
        },
        crossStyle: {
          type: "dashed",
          width: 0.8,
          color: dark
            ? chartStyle.darkColors.axisLineColor
            : chartStyle.lightColors.axisLineColor,
        },
      },
      borderColor: dark
        ? chartStyle.darkColors.borderColor
        : chartStyle.lightColors.borderColor,
      backgroundColor: dark
        ? chartStyle.darkColors.background
        : chartStyle.lightColors.background,
      textStyle: {
        color: dark
          ? chartStyle.darkColors.toolFontColor
          : chartStyle.lightColors.toolFontColor,
        fontSize: chartStyle.toolFontSize,
      },
      padding: [10, 15],
      extraCssText: dark
        ? "box-shadow: 1px 0 5px 0 rgba(46,58,102,0.6)"
        : "box-shadow: 1px 0 5px 0 rgba(163,163,163,0.5)",
    },
    axisPointer: {
      type: "line",
      triggerOn: "mousemove|click",
      triggerTooltip: true,
      label: {
        show: true,
        color: dark
          ? chartStyle.darkColors.labelColor
          : chartStyle.lightColors.labelColor,
        borderColor: "rgba(0,0,0,0)",
        shadowColor: "rgba(0,0,0,0)",
      },
      crossStyle: {
        type: "dashed",
        width: 0.8,
        color: dark
          ? chartStyle.darkColors.axisLineColor
          : chartStyle.lightColors.axisLineColor,
      },
    },
    grid: {
      top: data.top || 40,
      bottom: data.bottom || 40,
      right: data.right || 40,
      left: data.left || 40,
    },
    dataZoom: [
      {
        type: "inside", // 默认支持鼠标滚轮缩放
        show: true,
        start: data.dataZoomStartValue || 0,
        end: data.dataZoomEndValue || null,
        zoomLock: data.zoomLock,
      },
      {
        type: data.dataZoomType || "inside", // 扩展支持滑块缩放，如果不传dataZoomType: "slider" 默认鼠标滚轮缩放
        show: data.dataZoomShow,
        start: data.dataZoomStartValue || 0,
        end: data.dataZoomEndValue || null,
        zoomLock: data.zoomLock,
        height: 14,
        bottom: 5,
        brushSelect: false,
        borderColor: dark
          ? chartStyle.darkColors.axisLineColor
          : chartStyle.lightColors.axisLineColor,
        fillerColor: dark ? "rgba(16,61,111,.4)" : "rgba(220,220,220,.4)",
        textStyle: {
          color: dark
            ? chartStyle.darkColors.legendColor
            : chartStyle.lightColors.legendColor,
        },
      },
    ],
    xAxis: [
      {
        type: "category",
        boundaryGap: data.boundaryGap || true, // 坐标系两侧是否留白
        data: data.xData, // x轴参数
        axisLine: {
          lineStyle: {
            color: dark
              ? chartStyle.darkColors.axisLineColor
              : chartStyle.lightColors.axisLineColor,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          interval: function (index, value) {
            return RegExp(/24:00/).test(value) && index < data.xData.length - 1;
          },
          show: false,
          lineStyle: {
            width: 0.8,
            type: "dashed",
            color: dark
              ? chartStyle.darkColors.axisLineColor
              : chartStyle.lightColors.axisLineColor,
          },
        },
        axisLabel: {
          interval: data.xInterval || null,
          textStyle: {
            color: dark
              ? chartStyle.darkColors.labelColor
              : chartStyle.lightColors.labelColor,
            fontSize: data.fontSize || chartStyle.axisFontSize,
          },
          margin: 10,
          showMaxLabel: null,
          rotate: data.xRotate || null,
        },
        axisPointer: {
          type: "line",
          lineStyle: {
            type: "dashed",
            width: 0.8,
            color: dark
              ? chartStyle.darkColors.axisLineColor
              : chartStyle.lightColors.axisLineColor,
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: data.yName1, // y轴单位
        nameGap: 10,
        nameTextStyle: {
          color: dark
            ? chartStyle.darkColors.nameColor
            : chartStyle.lightColors.nameColor,
          fontSize: data.fontSize || chartStyle.nameFontSize,
        },
        splitNumber: 5,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: dark
              ? chartStyle.darkColors.axisLineColor
              : chartStyle.lightColors.axisLineColor,
          },
        },
        axisLabel: {
          textStyle: {
            color: dark
              ? chartStyle.darkColors.labelColor
              : chartStyle.lightColors.labelColor,
            fontSize: data.fontSize || chartStyle.axisFontSize,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 0.5,
            type: "dashed",
            color: dark
              ? chartStyle.darkColors.splitLineColor
              : chartStyle.lightColors.splitLineColor,
          },
        },
      },
    ],
    series: [],
  };
  // 如果存在xName2,则认为有两条x轴
  if (data.xName2) {
    option.xAxis[1] = {
      type: "category",
      show: false,
      boundaryGap: data.boundaryGap || false, // 坐标系两侧是否留白
      data: data.xData, // x轴参数
      axisLine: {
        lineStyle: {
          color: dark
            ? chartStyle.darkColors.axisLineColor
            : chartStyle.lightColors.axisLineColor,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        interval: function (index, value) {
          return RegExp(/24:00/).test(value) && index < data.xData.length - 1;
        },
        show: false,
        lineStyle: {
          width: 0.8,
          type: "dashed",
          color: dark
            ? chartStyle.darkColors.axisLineColor
            : chartStyle.lightColors.axisLineColor,
        },
      },
      axisLabel: {
        interval: data.xInterval || null,
        textStyle: {
          color: dark
            ? chartStyle.darkColors.labelColor
            : chartStyle.lightColors.labelColor,
          fontSize: chartStyle.axisFontSize,
        },
        margin: 10,
        showMaxLabel: null,
        rotate: data.xRotate || null,
      },
      axisPointer: {
        type: "line",
        show: false,
        lineStyle: {
          type: "dashed",
          width: 0.8,
          color: dark
            ? chartStyle.darkColors.axisLineColor
            : chartStyle.lightColors.axisLineColor,
        },
      },
    };
  }
  // 如果存在yName2，则认为有两条y轴
  if (data.yName2) {
    option.yAxis[1] = {
      type: "value",
      name: data.yName2, // y轴单位
      nameGap: 10,
      nameTextStyle: {
        align: "center",
        color: dark
          ? chartStyle.darkColors.nameColor
          : chartStyle.lightColors.nameColor,
        fontSize: data.fontSize || chartStyle.nameFontSize,
      },
      splitNumber: 5,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: dark
            ? chartStyle.darkColors.axisLineColor
            : chartStyle.lightColors.axisLineColor,
        },
      },
      axisLabel: {
        textStyle: {
          color: dark
            ? chartStyle.darkColors.labelColor
            : chartStyle.lightColors.labelColor,
          fontSize: data.fontSize || chartStyle.axisFontSize,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 0.5,
          type: "dashed",
          color: dark
            ? chartStyle.darkColors.splitLineColor
            : chartStyle.lightColors.splitLineColor,
        },
      },
    };
  }
  // 如果存在yName3，则认为有3条y轴
  if (data.yName3) {
    option.yAxis[2] = {
      type: "value",
      name: data.yName3, // y轴单位
      offset: 65,
      nameGap: 10,
      nameTextStyle: {
        align: "left",
        color: dark
          ? chartStyle.darkColors.nameColor
          : chartStyle.lightColors.nameColor,
        fontSize: data.fontSize || chartStyle.nameFontSize,
      },
      splitNumber: 5,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: dark
            ? chartStyle.darkColors.axisLineColor
            : chartStyle.lightColors.axisLineColor,
        },
      },
      axisLabel: {
        textStyle: {
          color: dark
            ? chartStyle.darkColors.labelColor
            : chartStyle.lightColors.labelColor,
          fontSize: data.fontSize || chartStyle.axisFontSize,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 0.5,
          type: "dashed",
          color: dark
            ? chartStyle.darkColors.splitLineColor
            : chartStyle.lightColors.splitLineColor,
        },
      },
    };
  }
  return option;
};

/**
 * 饼状图参数初始化方法
 * @param {*} data 图表配置参数
 *            {   
                    legend: ["图例1","图例2"], // 必传项｜图例数据
                    legendShow: false, // 非必传｜是否展示图例
                    legendOrient: "vertical", // 非必传｜图例方向 可选：horizontal｜vertical
                    legendTop: 0, // 非必传｜图例距离上边框的距离， 默认0
                    legendGap: 16, // 非必传｜图例间距， 默认16
                    legendSelected: { 图例1: true, 图例2: false }, // 非必传｜默认选中项，与图例legend一一对应 
                    legendWidth: "670px", // 非必传｜图例盒子宽度，默认100%
                }
 * @param {*} dark  是否为深色主题
 * @returns 
 */
export const pieChartParamsInit = (data, dark) => {
  const colorList = data.colorList || chartStyle.chartColorList;
  let option = {
    backgroundColor: "transparent",
    color: colorList,
    legend: {
      type: "scroll",
      data: data.legend,
      selected: data.legendSelected || null, // 图例选中状态
      orient: data.legendOrient || "vertical",
      show: data.legendShow,
      right:
        data.legendOrient === "vertical"
          ? data.legendRight || 0
          : data.legendRight || "center", // 纵向展示默认靠右，横向展示默认居中
      top: data.legendOrient === "vertical" ? "center" : data.legendTop || 0, // 纵向展示默认居中，横向显示默认距离上边框0
      itemWidth: 11,
      itemHeight: 11,
      itemGap: data.legendGap || 16,
      pageIconSize: 10,
      pageIconColor: dark ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.6)",
      pageIconInactiveColor: dark ? "rgba(255,255,255,.3)" : "rgba(0,0,0,.3)",
      pageTextStyle: {
        color: dark
          ? chartStyle.darkColors.legendColor
          : chartStyle.lightColors.legendColor,
      },
      textStyle: {
        color: dark
          ? chartStyle.darkColors.legendColor
          : chartStyle.lightColors.legendColor,
        fontSize: 11,
        rich: {
          labelName: {
            width: data.legendNameWidth || 40,
            align: "left",
            fontSize: 11,
          },
          elec: {
            width: 50,
            align: "right",
            fontSize: 11,
            padding: [0, 6],
          },
          ratio: {
            width: 30,
            align: "right",
            fontSize: 11,
          },
        },
      },
    },
    tooltip: {
      trigger: "item",
      confine: true,
      triggerOn: "mousemove|click",
      axisPointer: {
        type: "cross",
        axis: "x",
        label: {
          show: true,
          color: dark
            ? chartStyle.darkColors.labelColor
            : chartStyle.lightColors.labelColor,
          borderColor: "rgba(0,0,0,0)",
          shadowColor: "rgba(0,0,0,0)",
        },
        crossStyle: {
          type: "dashed",
          width: 0.8,
          color: dark
            ? chartStyle.darkColors.axisLineColor
            : chartStyle.lightColors.axisLineColor,
        },
      },
      borderColor: dark
        ? chartStyle.darkColors.borderColor
        : chartStyle.lightColors.borderColor,
      backgroundColor: dark
        ? chartStyle.darkColors.background
        : chartStyle.lightColors.background,
      textStyle: {
        color: dark
          ? chartStyle.darkColors.toolFontColor
          : chartStyle.lightColors.toolFontColor,
        fontSize: chartStyle.toolFontSize,
      },
      padding: [10, 15],
      extraCssText: dark
        ? "box-shadow: 1px 0 5px 0 rgba(46,58,102,0.6)"
        : "box-shadow: 1px 0 5px 0 rgba(163,163,163,0.5)",
    },
    series: [],
  };
  return option;
};
