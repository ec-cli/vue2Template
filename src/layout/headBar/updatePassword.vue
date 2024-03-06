<!--
 * @Author: rk
 * @Description: 修改密码页面
 * @Date: 2022-03-21 15:49:29
 * @LastEditors: rk
 * @LastEditTime: 2023-12-28 11:41:19
-->

<template>
  <el-dialog
    title="修改密码"
    width="600px"
    :visible.sync="updatePasswordDialog.visible"
    :modal-append-to-body="false"
    :before-close="handleDialogCancel"
  >
    <el-form
      ref="pwdForm"
      label-position="left"
      label-width="80px"
      size="small"
      :model="passwordParams"
      :rules="rules"
    >
      <el-form-item label="原始密码" prop="originPw">
        <el-input
          v-model.trim="passwordParams.originPw"
          placeholder="请输入您的原始密码"
          maxlength="20"
          type="password"
          show-password
          clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPw">
        <el-input
          v-model.trim="passwordParams.newPw"
          type="password"
          placeholder="请输入新密码"
          maxlength="20"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="pwAgain">
        <el-input
          v-model.trim="passwordParams.pwAgain"
          type="password"
          placeholder="请输入确认密码"
          maxlength="20"
          show-password
          clearable
        >
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button size="mini" plain @click="handleDialogCancel">取 消</el-button>
      <el-button
        type="primary"
        size="mini"
        :loading="loading"
        @click="handleFormSubmit"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
// api
// import { updatePassword } from "@api/system/user";
export default {
  name: "VueTemplateUpdatepassword",
  props: {
    updatePasswordDialog: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    let validatePass2 = (rule, value, callback) => {
      if (value !== this.passwordParams.newPw) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      // 密码参数
      passwordParams: {
        newPw: "",
        originPw: "",
        pwAgain: "",
      },
      // 表单校验规则
      rules: {
        originPw: [
          {
            type: "string",
            required: true,
            message: "请输入原密码",
            trigger: "blur",
          },
        ],
        newPw: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          {
            min: 8,
            max: 20,
            message: "密码长度为8-20位",
            trigger: "blur",
          },
          {
            pattern:
              /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_!@#$%^&*`~.,;?"':()+=\-]+$)(?![a-z0-9]+$)(?![a-z\\W_!@#$%^&*`~.,;?"':()+=\-]+$)(?![0-9\\W_!@#$%^&*`~.,;?"':()+=\-]+$)[a-zA-Z0-9\\W_!@#$%^&*`~.,;?"':()+=\-]{8,20}$/,
            message:
              "密码长度为8-20位，至少包含大写字母、小写字母、数字和特殊字符其中三种",
            trigger: "blur",
          },
        ],
        pwAgain: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { type: "string", validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 提交
    handleFormSubmit() {
      this.$refs["pwdForm"].validate((valid) => {
        if (valid) {
          // let obj = {
          //   oldPassword: this.$encrypt(this.passwordParams.originPw),
          //   newPassword: this.$encrypt(this.passwordParams.newPw),
          // };
          // this.loading = true;
          // updatePassword(obj).then((res) => {
          //   this.loading = false;
          //   if (res) {
          //     this.$message.success("密码修改成功，请使用新密码登录");
          //     this.$store.dispatch("LogOut").then(() => {
          //       location.href = this.$route.path || "/";
          //     });
          //     this.updatePasswordDialog.visible = false;
          //   }
          // });
        }
      });
    },
    // 关闭窗口
    handleDialogCancel() {
      this.passwordParams = {
        newPw: "",
        originPw: "",
        pwAgain: "",
      };
      this.$refs["pwdForm"].clearValidate();
      this.updatePasswordDialog.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
