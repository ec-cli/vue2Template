<!--
 * @Author: rk
 * @Description: 卡片组件
 * @Date: 2023-12-15 14:25:16
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 14:47:14
-->
<template>
  <div>
    <el-card>
      <div slot="header">卡片动画1</div>
      <customer-info-card :data-list="dataList"></customer-info-card>
    </el-card>

    <el-card class="mt15">
      <div slot="header">卡片动画2</div>
      <customer-info-card1 :card-list="cardList"></customer-info-card1>
    </el-card>

    <el-card class="mt15">
      <div slot="header">卡片动画3</div>
      <customer-info-card2 :card-data="cardData"></customer-info-card2>
    </el-card>

    <el-card class="mt15">
      <div slot="header">卡片动画4</div>
      <customer-info-card3 :card-data-list="cardDataList"></customer-info-card3>
    </el-card>

    <el-card class="mt15">
      <div slot="header">卡片动画5</div>
      <customer-info-card4
        :card-data-list1="cardDataList1"
      ></customer-info-card4>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      dataList: [],
      cardList: [],
      cardData: [],
      cardDataList: [],
      cardDataList1: [],
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.dataList = [
        {
          name: "火电电量",
          value: 1234.8,
          unit: "kWh",
        },
        {
          name: "水电电量",
          value: 1234.8,
          unit: "kWh",
        },
        {
          name: "风电电量",
          value: 1234.8,
          unit: "kWh",
        },
        {
          name: "光伏电量",
          value: 1234.8,
          unit: "kWh",
        },
      ];
      this.cardList = [
        {
          color: "#5b84f5",
          title: "合约总电量",
          value: 111,
          icon: "battery",
          iconStyle: "fIcon",
          unit: "MWh",
          list: [
            {
              text: "实际总电量",
              value: 222,
            },
            {
              text: "预测总电量",
              value: 333,
            },
          ],
        },
        {
          color: "#dead6a",
          title: "合约均价",
          value: 444,
          icon: "sy",
          iconStyle: "pIcon",
          unit: "元/MWh",
          list: [
            {
              text: "日前出清均价",
              value: 555,
            },
            {
              text: "预测均价",
              value: 666,
            },
          ],
        },
        {
          color: "#60cab8",
          icon: "sets",
          iconStyle: "dIcon",
          unit: "%",
          list: [
            {
              text: "实际持仓率均值 ",
              value: 777,
            },
            {
              text: "预测持仓率均值 ",
              value: 888,
            },
          ],
        },
      ];
      this.cardData = [
        {
          name: "额定功率",
          icon: "gonglv3",
          value: "1.436",
          unit: "kW",
          color: "#9860df",
        },
        {
          name: "额定容量",
          icon: "rongliang",
          value: "1.436",
          unit: "kWh",
          color: "#19be6b",
        },
        {
          name: "工作模式",
          icon: "shebei",
          value: "-",
          unit: "P/Q",
          color: "#e6a23c",
        },
        {
          name: "月输入电量",
          icon: "down_elec",
          value: "230",
          unit: "kWh",
          color: "#f56c6c",
        },
        {
          name: "月输出电量",
          icon: "power",
          value: "200",
          unit: "kWh",
          color: "#9860df",
        },
      ];
      this.cardDataList = [
        {
          name: "电流（A）",
          icon: "dianliu",
          color: "#32cd20",
          list: [
            { label: "A相", value: "5" },
            { label: "B相", value: "5.5" },
            { label: "C相", value: "6.2" },
          ],
        },
        {
          name: "电压（V）",
          icon: "dianya",
          color: "#57d9c0",
          list: [
            { label: "A相", value: "5" },
            { label: "B相", value: "5.5" },
            { label: "C相", value: "6.2" },
          ],
        },
        {
          name: "频率（HZ）",
          icon: "pinlv",
          color: "#d27314",
          list: [{ label: "频率", value: "5" }],
        },

        {
          name: "有功功率（kW）",
          icon: "yougong",
          color: "#7914fb",
          list: [
            { label: "总值", value: "5.2" },
            { label: "A相", value: "5" },
            { label: "B相", value: "5.5" },
            { label: "C相", value: "6.2" },
          ],
        },
        {
          name: "无功功率（kVar）",
          icon: "wugong",
          color: "#ef4105",
          list: [
            { label: "总值", value: "5.2" },
            { label: "A相", value: "5" },
            { label: "B相", value: "5.5" },
            { label: "C相", value: "6.2" },
          ],
        },
        {
          name: "电池剩余容量（%）",
          icon: "rongliang1",
          color: "#e0b707",
          list: [{ label: "容量", value: "50" }],
        },
      ];
      this.cardDataList1 = [
        { name: "电流", num: 235, icon: "dianliu", iconClass: "icon-blue" },
        { name: "电压", num: 325, icon: "dianya", iconClass: "icon-green" },
        { name: "频率", num: 5, icon: "pinlv", iconClass: "icon-red" },
        {
          name: "有功功率",
          num: 5.326,
          icon: "yougong",
          iconClass: "icon-orange",
        },
        { name: "无功功率", num: 2.26, icon: "wugong", iconClass: "icon-blue" },
        {
          name: "电池剩余容量",
          num: 30,
          icon: "rongliang1",
          iconClass: "icon-green",
        },
      ];
    },
  },
};
</script>

<style scoped lang="scss"></style>
