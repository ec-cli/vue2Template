<!--
 * @Author: rk
 * @Description: 分页组件
 * @Date: 2022-03-03 11:21:34
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-06-30 18:29:34
-->

<template>
  <div class="pagination">
    <div class="pagination-box text-r mt15">
      <el-pagination
        :page-sizes="pageSizes"
        :total="pagination.total"
        :page-size="pagination.page_size"
        :current-page="pagination.current_page"
        :layout="
          getDevice === 'mobile'
            ? 'total, sizes, prev, pager, next'
            : 'total, sizes, prev, pager, next, jumper'
        "
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "pagination",
  props: {
    pagination: {
      type: Object,
      default() {
        return { currentPage: 1, pageSize: 10, total: 0 };
      },
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 15, 20, 30, 50, 100];
      },
    },
    paginationChange: {
      type: Function,
      default: null,
    },
  },
  computed: {
    // 获取设备类型
    getDevice() {
      return this.$store.state.settings.device;
    },
  },
  methods: {
    // pageSize 改变时触发
    handleSizeChange(val) {
      let pagination = { ...this.pagination };
      pagination.currentPage = 1;
      pagination.pageSize = val;
      this.handlechange(pagination);
    },
    // 页码 改变时触发
    handleCurrentChange(val) {
      let pagination = { ...this.pagination };
      pagination.currentPage = val;
      this.handlechange(pagination);
    },
    // 分页改变处理函数
    handlechange(pagination) {
      if (this.paginationChange) {
        this.paginationChange(pagination);
      }
    },
  },
};
</script>
