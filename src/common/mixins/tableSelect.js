/*
 * @Author: rk
 * @Description: 表格多选
 * @Date: 2022-06-25 10:36:21
 * @LastEditors: rk
 * @LastEditTime: 2024-03-27 15:51:56
 */

export default {
  data() {
    return {
      // 选中数组
      selectList: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
    };
  },
  methods: {
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.selectList = selection;
      this.single = selection.length !== 1;
      this.multiple = !selection.length;
    },
    // 如果表格没有数据，表头的多选框不能点击
    selectAll() {
      this.tableData.length <= 0 && this.$refs.dataTable.clearSelection();
    },
  },
};
