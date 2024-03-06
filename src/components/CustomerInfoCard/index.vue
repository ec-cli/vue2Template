<!--
 * @Author: rk
 * @Description: 指标数据卡片 单个值
 * @Date: 2023-12-15 10:21:48
 * @LastEditors: rk
 * @LastEditTime: 2023-12-15 14:29:29
-->
<template>
  <div class="info-box">
    <div class="info-item" v-for="(item, k) in dataList" :key="k">
      <h2
        :style="'color:' + colorList[item.index !== undefined ? item.index : k]"
      >
        <el-popover v-if="item.tip" placement="bottom" trigger="hover">
          <el-table :data="item.tableData" size="mini" border>
            <el-table-column
              v-for="(column, i) in item.tableHeader"
              align="center"
              :key="i"
              :property="column.prop"
              :label="column.label"
              :min-width="column.width || 120"
            ></el-table-column>
          </el-table>
          <i class="el-icon-info hover" slot="reference"> {{ item.name }}</i>
        </el-popover>

        <span v-else>{{ item.name }}</span>
      </h2>
      <p
        class="mt10"
        :style="'color:' + colorList[item.index !== undefined ? item.index : k]"
      >
        {{ item.value | numberToCurrencyNo }}
        <span
          class="unit"
          v-if="
            item.value !== null && item.value !== '' && item.value !== undefined
          "
          >{{ item.unit }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import chartStyle from "@/common/chart/chartStyle";
export default {
  name: "",
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // 颜色列表
      colorList: chartStyle.chartColorList,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.info-box {
  display: flex;
  justify-content: space-between;
  .info-item {
    flex: 1;
    margin: 0 10px;
    background: $background-color-lighter;
    border: 1px solid $border-color-light;
    border-radius: 2px;
    padding: 10px;
    transition: all 0.28s;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0 0 6px 2px $box-shadow-color;
    }
    h2 {
      font-size: $fs14;
    }
    p {
      font-size: 13px;
      .unit {
        font-size: 12px;
      }
    }
  }
}
</style>
