<!--
 * @Author: rk
 * @Description: 新增、修改
 * @Date: 2023-03-17 17:48:40
 * @LastEditors: rk
 * @LastEditTime: 2023-08-17 14:48:04
-->

<template>
  <el-dialog
    :visible.sync="showEditDialog.visible"
    v-dialogDrag
    width="620px"
    :title="showEditDialog.title"
    :close-on-click-modal="false"
    :append-to-body="true"
    @close="handleDialogClose"
  >
    <el-form
      ref="form"
      size="mini"
      label-width="200px"
      :model="queryForm"
      :rules="rules"
      class="pr20"
    >
      <!-- 校验只能输入正整数 -->
      <el-form-item label="校验只能输入正整数" prop="power">
        <el-input
          style="width: 300px"
          placeholder="请输入"
          v-model.trim="queryForm.power"
          v-input.intp
        >
          <template slot="prepend">></template>
          <template slot="append">个</template>
        </el-input>
      </el-form-item>
      <!-- 校验支持正整数和负整数 -->
      <el-form-item label="校验支持正整数和负整数" prop="price">
        <el-input
          style="width: 300px"
          placeholder="请输入"
          v-model.trim="queryForm.price"
          v-input:true.intp
        ></el-input>
      </el-form-item>
      <!-- 校验只能输入正浮点数 -->
      <el-form-item label="校验只能输入正浮点数" prop="number">
        <el-input
          style="width: 300px"
          placeholder="请输入"
          v-model.trim="queryForm.number"
          v-input.float
        ></el-input>
      </el-form-item>
      <!-- 校验支持输入正浮点数和负浮点数 -->
      <el-form-item label="校验支持输入正负浮点数" prop="money">
        <el-input
          style="width: 300px"
          v-model.trim="queryForm.money"
          v-input:true.float="4"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <!-- 校验正浮点数小数位数 -->
      <el-form-item label="校验正浮点数小数位数(4位)" prop="weight">
        <el-input
          style="width: 300px"
          placeholder="请输入"
          v-model.trim="queryForm.weight"
          v-input:true.float="4"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="handleDialogClose">取 消</el-button>
      <el-button size="small" type="primary" @click="handleDialogSave">
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    showEditDialog: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loading: false,
      // 新增/修改参数
      queryForm: {
        power: "",
        price: "",
        number: "",
        money: "",
        weight: "",
      },
      // 表单校验规则
      rules: {
        power: [{ required: true, message: "请输入power", trigger: "blur" }],
        price: [{ required: true, message: "请输入price", trigger: "blur" }],
        number: [{ required: true, message: "请输入number", trigger: "blur" }],
        money: [{ required: true, message: "请输入money", trigger: "blur" }],
        weight: [{ required: true, message: "请输入weight", trigger: "blur" }],
      },
    };
  },
  created() {},
  methods: {
    // 关闭窗口
    handleDialogClose() {
      this.showEditDialog.visible = false;
    },
    // 窗口确认
    handleDialogSave() {
      console.log(this.queryForm);
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .el-form-item.parent {
  margin-bottom: 0 !important;
}
</style>
