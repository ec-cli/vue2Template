/*
 * @Author: rk
 * @Description: 排序
 * @Date: 2022-06-25 12:01:05
 * @LastEditors: rk
 * @LastEditTime: 2023-10-09 14:23:48
 */

export default {
  data() {
    return {
      // 排序参数
      sortParam: {
        order: "ASC",
        orderColumn: "createTime",
      },
    };
  },
  methods: {
    /** 排序改变 */
    sortChange(column) {
      this.pagination.pageNum = 1;
      // 0-正序-ASC、1-逆序-DESC  ascending——上升 descending——下降
      if (column.prop === null || column.order === null) {
        this.sortParam.orderColumn = "createTime";
        this.sortParam.order = "ASC";
      } else {
        this.sortParam.orderColumn = column.prop;
        if (column.order === "ascending") {
          this.sortParam.order = "ASC";
        } else if (column.order === "descending") {
          this.sortParam.order = "DESC";
        }
      }
      this.search();
    },
  },
};
