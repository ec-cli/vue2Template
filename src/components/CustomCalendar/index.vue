<!--
 * @Author: rk
 * @Description: 日历组件
 * @Date: 2023-10-30 16:09:04
 * @LastEditors: rk
 * @LastEditTime: 2024-01-02 16:48:34
-->
<template>
  <el-table
    size="mini"
    class="date-table"
    border
    :data="calendarData.tableData"
    :highlight-current-row="false"
    :header-cell-class-name="headerCellClassName"
    @header-click="handleDateClick"
  >
    <el-table-column
      prop="status"
      align="center"
      fixed
      :label="calendarData.title"
    >
    </el-table-column>
    <el-table-column
      align="center"
      min-width="32px"
      v-for="item in cols"
      :key="item"
      :prop="String(item)"
      :label="String(item)"
      :resizable="false"
    >
      <template slot-scope="scope">
        <base-svg-icon
          v-if="scope.row[item] === 0"
          icon-class="danger-icon"
          class="danger"
        />
        <base-svg-icon
          v-if="scope.row[item] === 1"
          icon-class="success-icon"
          class="success"
        />
        <base-svg-icon
          v-if="scope.row[item] === 2"
          icon-class="warning-icon"
          class="warning"
        />
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { getMonthDays } from "js-fastcode";
export default {
  name: "",
  data() {
    return {
      // 日期下标
      colActive: 1,
    };
  },
  props: {
    // 日历表相关数据
    calendarData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    // 日历表列项【当月天数】
    cols() {
      let cols = getMonthDays(
        Number(this.calendarData.month.substr(0, 4)),
        Number(this.calendarData.month.substr(5, 6))
      );
      return cols;
    },
  },
  watch: {
    // 选择月份发生变化时更新日历列
    "calendarData.month": {
      handler(newVal, oldVal) {
        this.colActive = 1;
        this.formatDate(1);
      },
      deep: true,
    },
    // 日历状态数据发生变化时更新表格数据
    "calendarData.tableData": {
      handler(newVal, oldVal) {
        this.calendarData.tableData = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    if (this.calendarData.date) {
      this.colActive = new Date(this.calendarData.date).getDate();
    } else {
      // 初始化时间为今天
      this.colActive = new Date().getDate();
    }
    this.formatDate(1);
  },
  methods: {
    // 表头自定义类名
    headerCellClassName({ row, column, rowIndex, columnIndex }) {
      if (this.colActive === columnIndex) {
        return "active";
      }
      return "";
    },
    // 选择日期切换
    handleDateClick(column, event) {
      if (!column.fixed) {
        this.colActive = Number(column.property);
        this.formatDate(2);
      }
    },
    // 设置表头选中状态
    setColActive(val) {
      this.colActive = val;
    },
    /**
     * 格式化时间
     * type是1，则父组件页面需要调用获取月份状态接口
     * type是2，则父组件只需要调用获取当天列表状态接口
     */
    formatDate(type) {
      let date =
        this.calendarData.month +
        "-" +
        (this.colActive > 9 ? this.colActive : "0" + this.colActive);
      this.$emit("get-calendar-date", { date, type });
    },
  },
};
</script>
<style lang="scss" scoped>
// 日历样式
.date-table {
  margin-bottom: 10px;
  .svg-icon {
    transition: 0.2s;
    &.success {
      width: 16px;
      height: 16px;
      color: $color-success;
    }
    &.warning {
      color: $color-warning;
      width: 20px;
      height: 20px;
    }
    &.danger {
      color: $color-danger;
      width: 14px;
      height: 14px;
    }
  }
  ::v-deep.el-table__header .el-table__cell:not(:nth-child(1)) {
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      background: $color-primary !important;
      color: #fff;
    }
    &:hover {
      background: $color-primary !important;
      color: #fff;
    }
  }
  .cell {
    transform: scale(0.9);
  }
}
</style>
