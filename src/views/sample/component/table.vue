<!--
 * @Author: rk
 * @Description: 表格
 * @Date: 2024-02-04 12:24:08
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 14:12:49
-->
<template>
  <div>
    <el-card class="mt15">
      <el-row>
        <el-col :span="24">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
            plain
            @click="handleDataAdd"
          >
            新增
          </el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            plain
            @click="handleDataDelete"
          >
            删除
          </el-button>
        </el-col>
      </el-row>
      <el-table size="mini" class="mt10" :data="tableData">
        <el-table-column
          type="selection"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column
          label="名称"
          prop="name"
          align="center"
          min-width="220"
        >
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column
          label="金额"
          prop="price"
          align="center"
          min-width="220"
        >
          <!-- 金额千分位使用 -->
          <template slot-scope="scope">
            {{ scope.row.price | numberToCurrencyNo }}
          </template>
        </el-table-column>
        <el-table-column>
          <template>
            <el-button
              type="text"
              size="mini"
              class="primary"
              icon="el-icon-view"
              >详情</el-button
            >
            <el-button
              type="text"
              size="mini"
              class="danger"
              icon="el-icon-delete"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <base-pagination
        v-if="tableData.length > 0"
        :pagination="pagination"
        :pagination-change="paginationChange"
      ></base-pagination>
    </el-card>
  </div>
</template>

<script>
// mixin
import paginationMixins from "@mixins/pagination.js"; // 分页混入
import tableSelectMixins from "@mixins/tableSelect.js"; // 表格多选混入
export default {
  name: "",
  mixins: [paginationMixins, tableSelectMixins],
  data() {
    return {
      tableData: [
        { id: 1, name: "xxx1", price: "12345678.90" },
        { id: 2, name: "xxx2", price: "12345678.90" },
      ],
    };
  },
  created() {},
  methods: {
    handleDataAdd() {},
    handleDataDelete() {},
  },
};
</script>

<style scoped lang="scss"></style>
