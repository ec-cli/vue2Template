/*
 * @Author: rk
 * @Description: 分页
 * @Date: 2022-05-18 12:01:24
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 11:40:19
 */

export default {
  data() {
    return {
      // 分页参数
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  methods: {
    paginationChange(val) {
      this.pagination = val;
      this.search();
    },
  },
};
