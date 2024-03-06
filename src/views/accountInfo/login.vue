<!--
 * @Author: rk
 * @Description: 登录
 * @Date: 2022-03-21 12:30:17
 * @LastEditors: 李坤夏 likunxia@fpwis.com
 * @LastEditTime: 2024-02-02 15:19:51
-->

<template>
  <div class="login-container">
    <div class="header-box">
      <h1>公 共 模 板 开 发</h1>
    </div>
    <div class="content-box">
      <div class="content-box-left">
        <div class="img"></div>
      </div>
      <div class="content-box-right">
        <div class="login-box">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="form"
            label-position="left"
          >
            <h3 class="loginTitle">欢迎登录</h3>
            <base-svg-icon
              :icon-class="activeName ? 'password' : 'phone'"
              @click.native.prevent="handleActiveClick"
            ></base-svg-icon>
            <template v-if="activeName">
              <el-form-item prop="account">
                <el-input
                  v-model.trim="loginForm.account"
                  prefix-icon="el-icon-user-solid"
                  ref="account"
                  size="normal"
                  placeholder="账号"
                  name="account"
                  type="text"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  prefix-icon="el-icon-lock"
                  ref="password"
                  v-model.trim="loginForm.password"
                  show-password
                  placeholder="密码"
                  name="password"
                  size="normal"
                  @keyup.enter.native="handleUserLogin"
                ></el-input>
              </el-form-item>
            </template>
            <template v-else>
              <el-form-item prop="telphone">
                <el-input
                  v-model.trim="loginForm.telphone"
                  prefix-icon="el-icon-mobile-phone"
                  ref="telphone"
                  size="normal"
                  placeholder="手机号"
                  name="telphone"
                  type="text"
                  :rules="loginRules.telphone"
                ></el-input>
              </el-form-item>
              <el-form-item prop="verify">
                <el-input
                  v-model.trim="loginForm.verify"
                  prefix-icon="el-icon-umbrella"
                  ref="verify"
                  size="normal"
                  placeholder="验证码"
                  name="verify"
                  type="text"
                  style="width: 230px"
                  class="mr20"
                >
                </el-input>
                <el-button
                  class="verify-btn"
                  style="width: 130px"
                  :disabled="isClickVerify"
                  @click="getVerifyCode"
                  >{{ btnTxt }}</el-button
                >
              </el-form-item>
            </template>

            <div style="display: flex; justify-content: space-between">
              <el-checkbox v-model="loginForm.rememberMe">记住账号</el-checkbox>
            </div>

            <el-form-item class="mt20">
              <el-button
                :loading="loading"
                size="normal"
                class="verify-btn"
                style="width: 100%; margin-bottom: 30px"
                @click.native.prevent="handleUserLogin"
                >登录</el-button
              >
            </el-form-item>
            <!-- <p class="tips">
          <a href="/register" type="primary">还没有帐号？立即注册</a>
        </p> -->
          </el-form>
        </div>
      </div>
    </div>
    <div class="footer-box">
      <h1>Copyright ©2023 公共模板 All Rights Reserved.</h1>
    </div>
  </div>
</template>

<script>
import { toggleClass } from "js-fastcode"; // 自定义js库
export default {
  name: "Login",
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("手机号不能为空"));
      }
      // 使用正则表达式进行验证手机号码
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机号格式不正确"));
      }
      // 自定义校验规则 需要调用callback()函数！
      callback();
    };
    return {
      // 登录信息
      loginForm: {
        account: "", // 用户名
        password: "", // 密码
        rememberMe: false, // 是否记住账号密码
        telphone: "",
        verify: "",
      },
      // 表单验证
      loginRules: {
        account: [
          {
            required: true,
            trigger: "blur",
            message: "请输入账号",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          // {
          //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
          //   message: "密码必须同时包含数字与字母,且长度为 8-20位",
          // },
        ],
        telphone: [
          { required: true, validator: validatePhone, trigger: "blur" },
        ],
        verify: [
          { required: true, message: "验证码不能为空哦！", trigger: "blur" },
        ],
      },
      loading: false,
      redirect: undefined,
      activeName: true,
      isClickVerify: false,
      btnTxt: "获取验证码",
      timer: null,
    };
  },
  computed: {
    // 媒体类型 desktop: PC, mobile: 移动
    device() {
      return this.$store.state.settings.device;
    },
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {
    this.getUserInfo();
  },
  mounted() {
    toggleClass(document.body, "custom-light"); // 切换主题
  },
  methods: {
    // 账号密码和手机号登录切换
    handleActiveClick() {
      this.activeName = !this.activeName;
      if (!this.activeName) {
        this.btnTxt = "获取验证码";
        clearInterval(this.timer);
        this.isClickVerify = false;
      }
    },
    // 获取手机验证码
    getVerifyCode() {
      this.$refs["loginForm"].validateField("telphone", (valid) => {
        if (!valid) {
          // TODO调用手机获取验证码接口

          this.isClickVerify = true;
          let time = 60;
          this.timer = setInterval(() => {
            time--;
            this.btnTxt = time + "s后重发";
            if (time === 0) {
              time = 60;
              this.btnTxt = "重新发送";
              this.isClickVerify = false;
              clearInterval(this.timer);
            }
          }, 1000);
        }
      });
    },
    // 获取用户信息
    getUserInfo() {
      const account = localStorage.getItem("account");
      const rememberMe = localStorage.getItem("rememberMe");
      this.loginForm = {
        account: account === undefined ? this.loginForm.account : account,
        password: "",
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
      };
    },
    // 登录处理函数
    handleUserLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          if (this.loginForm.rememberMe) {
            localStorage.setItem("account", this.loginForm.account);
            localStorage.setItem("rememberMe", this.loginForm.rememberMe);
          } else {
            localStorage.removeItem("account");
            localStorage.removeItem("rememberMe");
          }
          let params = {
            account: this.loginForm.account,
            password: this.loginForm.password,
          };
          this.$store
            .dispatch("Login", params)
            .then((res) => {
              this.loading = false;
              if (res) {
                location.href = this.redirect || "/";
              }
            })
            .catch(() => {
              this.loading = false;
            });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url("../../assets/images/bg.png") no-repeat center / cover;
  .header-box {
    width: 100%;
    height: 100px;
    background: url("../../assets/images/top-fill.png") no-repeat center/100%;

    h1 {
      width: 100%;
      text-align: center;
      margin-top: 20px;
      font-weight: bolder;
      color: #fff;
      font-size: 22px;
    }
  }

  .content-box {
    width: 100%;
    height: calc(100vh - 180px);
    display: flex;
    justify-content: center;
    align-items: center;
    .content-box-left {
      width: 45%;
      height: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      .img {
        width: 700px;
        height: 100%;
        background: url("../../assets/images/content.png") no-repeat center/100%;
      }
    }
    .content-box-right {
      width: 45%;
      display: flex;
      justify-content: center;
      .login-box {
        width: 480px;
        height: 500px;
        background: url("../../assets/images/form-bg.png") no-repeat center/100%;
        .el-form {
          padding: 100px 50px 40px;
          position: relative;
          h3 {
            margin: 0px auto 30px auto;
            text-align: center;
            color: #fff;
            font-size: 25px;
            letter-spacing: 2px;
            font-weight: bold;
          }
          .svg-icon {
            position: absolute;
            right: 35px;
            top: 55px;
            font-size: 20px;
            color: #fff;
          }
          .verify-btn {
            background: #3076a0 !important;
            border: 1px solid #4aabef;
            color: #fff !important;
          }
          // 修改input框颜色
          ::v-deep .el-input__inner {
            background: #3076a0 !important;
            border: 1px solid #4aabef;
            color: #fff !important;
          }
          // 修改多选框文案颜色
          ::v-deep .el-checkbox__label {
            color: #fff !important;
          }
          // 修改多选框颜色
          ::v-deep .el-checkbox__inner {
            background: #3076a0 !important;
            border: 1px solid #4aabef;
          }
          // 主要去除浏览器记住密码选择后的白色背景色
          ::v-deep input:-webkit-autofill {
            background-color: transparent !important;
            background-image: none;
            -webkit-text-fill-color: #fff !important; // 记住密码的字的颜色,我的项目中没用到这个
            transition: background-color 5000s ease-in-out 0s; // 延时渲染背景色来去除背景色
            caret-color: #fff; // 光标颜色
          }
        }
      }
    }
  }

  .footer-box {
    width: 100%;
    height: 80px;
    background: url("../../assets/images/bottom-fill.png") no-repeat center/100%;
    h1 {
      font-family: Arial;
      text-align: center;
      letter-spacing: 1px;
      margin-top: 35px;
      color: #fff;
      font-size: 12px;
    }
  }
}

input::-webkit-input-placeholder {
  color: #d3d7f7;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #d3d7f7;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #d3d7f7;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #d3d7f7;
}
</style>
