<!--
 * @Author: rk
 * @Description: 菜单管理
 * @Date: 2023-03-17 17:48:40
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-07-03 19:46:28
-->

<template>
  <div class="app-container">
    <el-form
      :inline="true"
      size="mini"
      label-position="left"
      :model="searchForm"
    >
      <el-form-item label="年度电量">
        <el-input
          v-model.trim="searchForm.yearElectroEstimate"
          placeholder="请输入年度电量预估"
          clearable
          @blur="handleDataBlur($event, 'yearElectroEstimate')"
        >
        </el-input>
      </el-form-item>
    </el-form>
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
        <el-button type="danger" icon="el-icon-delete" size="mini" plain>
          删除
        </el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" size="mini" class="mt15">
      <el-table-column label="名称" prop="name" align="center" min-width="220">
        <!-- Copy一般用于表格中的列信息，可复制之后直接在搜索框粘贴使用 -->
        <template slot-scope="scope">
          <base-copy>{{ scope.row.name }}</base-copy>
        </template>
      </el-table-column>
      <el-table-column label="金额" prop="price" align="center" min-width="220">
        <!-- 金额千分位使用 -->
        <template slot-scope="scope">
          {{ scope.row.price | numberToCurrencyNo }}
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <base-pagination
      v-if="tableData.length > 0"
      :pagination="pagination"
      :pagination-change="paginationChange"
    ></base-pagination>
    <edit-info
      v-if="showEditDialog.visible"
      :show-edit-dialog="showEditDialog"
    ></edit-info>
  </div>
</template>

<script>
// mixin
import paginationMixins from "@mixins/pagination.js"; // 分页混入
import tableSelectMixins from "@mixins/tableSelect.js"; // 表格多选混入
import sortableMixins from "@mixins/sortable.js"; // 排序混入

// 组件
import EditInfo from "./component/edit.vue";
export default {
  name: "VueTemplateIndex",
  mixins: [paginationMixins, tableSelectMixins, sortableMixins],
  components: { EditInfo },
  data() {
    return {
      // 查询数据
      searchForm: {
        create_time: "", // 创建时间
        yearElectroEstimate: "", // 年电预估
      },
      // 表格数据
      tableData: [
        { id: 1, name: "xxx1", price: "12345678.90" },
        { id: 2, name: "xxx2", price: "12345678.90" },
      ],
      // 编辑窗口参数
      showEditDialog: { visible: false, title: "新增" },
    };
  },
  mounted() {},
  methods: {
    // 数据变化 数据校验
    handleDataBlur(e, name) {
      this.searchForm[name] = e.target.value;
    },
    // 新增数据
    handleDataAdd() {
      this.showEditDialog = {
        visible: true,
        title: "新增",
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
