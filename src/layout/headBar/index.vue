<!--
 * @Author: rk
 * @Description: 头部信息
 * @Date: 2022-03-21 12:30:17
 * @LastEditors: rk
 * @LastEditTime: 2024-03-27 15:56:38
-->

<template>
  <div class="head-container">
    <div class="header-logo" :class="{ mini: !sidebar.opened }">
      xxxx公司模板系统
    </div>
    <!-- 面包屑导航 -->
    <div class="header-crumbs">
      <div
        class="crumbs-btn"
        :class="{ open: sidebar.opened, light: theme === 'light' }"
        @click="toggleSideBar"
      ></div>
      <div v-if="device === 'desktop'" class="crumbs-nav">
        <crumbs-nav></crumbs-nav>
      </div>
    </div>
    <div class="header-info">
      <!-- 当前时间 -->
      <div v-if="device === 'desktop'" class="date_content">{{ nowTime }}</div>
      <!-- 主题控制开关 -->
      <el-switch
        v-model="dark"
        active-color="#1c213a"
        class="ml10 mr10"
        :class="{ dark: dark }"
        @change="handleThemeChange"
      ></el-switch>
      <!-- 用户信息 -->
      <div class="user-content">
        <el-dropdown @command="handleCommand" trigger="hover">
          <div class="user-info-box">
            <i class="el-icon-s-custom"></i>
            <span v-if="userInfo">admin</span>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="systemSetting">
              <i class="el-icon-setting el-icon--left"></i>系统设置
            </el-dropdown-item>
            <el-dropdown-item command="updatePassword">
              <i class="el-icon-edit-outline el-icon--left"></i>修改密码
            </el-dropdown-item>
            <el-dropdown-item command="loginOut">
              <i class="el-icon-switch-button el-icon--left"></i>退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
          <!-- <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userCenter">
              <i class="el-icon-user-solid el-icon--left"></i>个人中心
            </el-dropdown-item>

            <el-dropdown-item command="systemSetting">
              <i class="el-icon-setting el-icon--left"></i>系统设置
            </el-dropdown-item>
            <el-dropdown-item command="loginOut" divided>
              <i class="el-icon-switch-button el-icon--left"></i>退出登录
            </el-dropdown-item>
          </el-dropdown-menu> -->
        </el-dropdown>
      </div>
      <i
        v-if="device === 'desktop'"
        class="el-icon-more hover"
        @click="systemDialog.visible = true"
      ></i>
    </div>
    <!-- 修改密码 -->
    <update-password
      :update-password-dialog="updatePasswordDialog"
    ></update-password>
    <!-- 系统设置 -->
    <system-setting :system-dialog="systemDialog"></system-setting>
  </div>
</template>

<script>
import UpdatePassword from "./updatePassword"; // 修改密码
import SystemSetting from "./systemSetting"; // 系统设置侧边栏弹窗
import CrumbsNav from "../crumbs/index"; // 面包屑导航
import switchTheme from "@utils/setStyle.js"; // 主题切换方法
import { toggleClass, timeFormate } from "js-fastcode"; // 自定义js库
export default {
  name: "headBar",
  components: {
    UpdatePassword,
    SystemSetting,
    CrumbsNav,
  },
  data() {
    return {
      // 是否为深色主题
      dark: false,
      // 当前时间
      nowTime: "",
      // 用户信息
      userInfo: {
        name: "admin1", // 用户名称
      },
      // 修改密码窗口信息
      updatePasswordDialog: {
        visible: false,
      },
      // 系统设置窗口信息
      systemDialog: {
        visible: false, // 是否显示
      },
    };
  },
  computed: {
    // 系统主题
    theme() {
      return this.$store.state.settings.theme;
    },
    // 菜单栏状态
    sidebar() {
      return this.$store.state.settings.sidebar;
    },
    // 媒体类型 desktop: PC, mobile: 移动
    device() {
      return this.$store.state.settings.device;
    },
  },
  watch: {
    // 监听主题变换
    theme: {
      handler() {
        toggleClass(document.body, "custom-" + this.theme);
      },
    },
  },
  created() {
    this.dark = this.theme === "dark";
    this.getNowTimes();
  },
  methods: {
    // 左侧菜单栏展开与收起
    toggleSideBar() {
      this.$store.dispatch("settings/toggleSideBar");
    },
    // 获取当前时间
    getNowTimes() {
      setInterval(() => {
        this.nowTime = timeFormate(3);
      }, 1000);
    },
    // 主题切换
    handleThemeChange(state) {
      if (state) {
        this.$store.commit("settings/SET_THEME", "dark");
      } else {
        this.$store.commit("settings/SET_THEME", "light");
      }
      switchTheme(state);
    },
    // 菜单操作处理
    handleCommand(command) {
      if (command === "userCenter") {
        // 个人中心
        this.$router.push("/user/userCenter");
      } else if (command === "updatePassword") {
        // 修改密码
        this.updatePasswordDialog.visible = true;
      } else if (command === "systemSetting") {
        // 系统设置
        this.systemDialog.visible = true;
      } else if (command === "loginOut") {
        // 退出登录
        this.$confirm("确定退出当前登录吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          cancelButtonClass: "el-button--mini",
          confirmButtonClass: "el-button--mini",
          type: "warning",
        })
          .then(() => {
            this.handleUserLoginOut();
          })
          .catch(() => {});
      }
    },
    // 退出登录
    handleUserLoginOut() {
      setTimeout(() => {
        this.$store.dispatch("LogOut").then(() => {
          location.href = "/";
        });
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.head-container {
  height: 54px;
  line-height: 54px;
  color: #fff;
  display: flex;
  align-items: center;

  .header-logo {
    width: 216px;
    height: 100%;
    transition: all 0.28s;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1.5px;
    // background: url(../../assets/images/logo_light.png) no-repeat center / 170px;
    &.mini {
      width: 64px;
      // background: url(../../assets/images/logo_mini.png) no-repeat center / 40px;
    }
  }

  .header-crumbs {
    display: flex;
    align-items: center;

    .crumbs-btn {
      width: 40px;
      height: 40px;
      background: url(../../assets/images/side_tab_icon.png) no-repeat center /
        16px;
      cursor: pointer;
      transform: rotate(0deg);

      &.open {
        transform: rotate(180deg);
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .header-info {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    color: #fff;
    font-size: $fs14;

    > img {
      display: inline-block;
      width: 30px;
      height: 30px;
      vertical-align: middle;
      margin-left: 15px;
    }

    .weather_content {
      font-size: $fs14;
      padding: 0 10px;
      color: #fff;
    }

    .date_content {
      line-height: 54px;
      padding: 0 10px;
      text-align: center;
      color: #fff;
    }

    .user-content {
      position: relative;
      transition: 0.3s;
      cursor: pointer;
      opacity: 1;
      margin-left: 10px;
      color: #fff !important;
      .el-dropdown {
        color: #fff;
      }

      .user-info-box {
        span {
          cursor: pointer;
          display: inline-block;
          margin-left: 4px;
        }
        .el-icon-s-custom {
          font-size: $fs16;
        }
      }
    }

    .el-icon-more {
      transform: rotate(90deg);
      margin-left: 20px;
      cursor: pointer;
    }

    .svg-icon {
      cursor: pointer;
      font-size: $fs16;
    }

    .el-switch {
      &.is-checked {
        ::v-deep .el-switch__core {
          border-color: $background-color-light !important;
        }
      }

      &.dark {
        ::v-deep .el-switch__core:after {
          background: url("../../assets/images/moon.png") no-repeat center /
            12px !important;
        }
      }

      ::v-deep .el-switch__core:after {
        background: url("../../assets/images/sun.png") no-repeat center / 14px !important;
      }
    }
  }
}
</style>
