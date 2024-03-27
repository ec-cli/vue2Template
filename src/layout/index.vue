<!--
 * @Author: rk
 * @Description: 页面入口
 * @Date: 2022-06-08 09:53:19
 * @LastEditors: rk
 * @LastEditTime: 2024-03-27 16:00:09
-->
<template>
  <div :class="classObj" class="layout-container">
    <!-- header -->
    <head-bar class="page-header"></head-bar>
    <!-- 手机模式下打开侧边栏添加蒙层 -->
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleOutsideClick"
    ></div>
    <div class="page-main">
      <!-- 侧边栏 -->
      <side-bar
        v-if="!sidebar.hide"
        class="page-side"
        :class="{ sideShow: sidebar.opened }"
      ></side-bar>
      <!-- 页面主体 -->
      <div class="page-container" :class="{ sideShow: sidebar.opened }">
        <tag-bar v-show="tagShow" class="page-tag"></tag-bar>
        <div class="main-container">
          <transition name="component-fade" mode="out-in">
            <keep-alive :include="cachedViews">
              <router-view :key="key"></router-view>
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBar from "./headBar/index.vue"; // header
import SideBar from "./sideBar/index.vue"; // side
import TagBar from "./tagBar/index.vue"; // tags

import switchTheme from "@utils/setStyle.js"; // 主题切换方法

import ResizeMixin from "./mixin/resize"; // 监听屏幕尺寸变化
import { toggleClass } from "js-fastcode";
export default {
  name: "Layout",
  components: { HeadBar, SideBar, TagBar },
  mixins: [ResizeMixin],
  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$store.state.settings.theme;
    },
    device() {
      return this.$store.state.settings.device;
    },
    tagShow() {
      return this.$store.state.settings.tagShow;
    },
    headerShow() {
      return this.$store.state.settings.headerShow;
    },
    key() {
      return this.$route.path;
    },
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    sidebar() {
      return this.$store.state.settings.sidebar;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  created() {
    let dark = this.theme === "dark" ? true : false;
    switchTheme(dark);
    toggleClass(document.body, "custom-" + this.theme);
  },
  methods: {
    // 手机模式下点击蒙层
    handleOutsideClick() {
      this.$store.dispatch("settings/closeSideBar", {
        withoutAnimation: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/mixin.scss";

.component-fade-enter-active {
  transition: all 0.2s ease;
  transition-delay: 0.3s;
}

.component-fade-leave-active {
  transition: all 0.2s ease;
}

.component-fade-enter {
  opacity: 0;
  // transform: translateX(-30px);
}

.component-fade-leave-to {
  opacity: 0;
  // transform: translateX(30px);
}

.layout-container {
  @include clearfix;
  position: relative;
  height: 100vh;
  width: 100%;
  transition: opacity 0.2s;

  .page-header {
    background: $headerBgColor;
    box-shadow: 0px 1px 6px 0 rgba(0, 21, 41, 0.3);
    padding: 0;
    height: 54px !important;
    line-height: 54px !important;
    z-index: 100;
  }

  .page-main {
    width: 100%;
    height: calc(100vh - 54px);
    display: flex;

    .page-side {
      width: 64px;
      height: 100%;
      background: $headerBgColor;
      box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.3);
      transition: width 0.28s;
      z-index: 99;
      &.sideShow {
        width: 216px;
      }
    }

    .page-container {
      flex: 1;
      background: $background-color-base;
      padding: 0;
      display: flex;
      flex-direction: column;
      width: calc(100% - 64px);

      &.sideShow {
        width: calc(100% - 216px);
      }

      .page-tag {
        height: 34px;
        background-color: $background-color-base;
        border-bottom: 1px solid $border-color-light;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12);
        z-index: 98;
      }

      .main-container {
        flex: 1;
        overflow-y: auto;
      }
    }
  }

  .drawer-bg {
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    top: 54px;
    bottom: 0;
    position: absolute;
    z-index: 998;
  }

  &.mobile {
    .page-main {
      display: block;

      .page-side {
        width: 216px;
        position: fixed;
        font-size: 0px;
        top: 54px;
        bottom: 0;
        left: 0;
        z-index: 999;
        transition: transform 0.28s;
      }

      .page-container {
        width: 100%;
        height: 100%;
      }
    }

    &.hideSidebar {
      .page-side {
        pointer-events: none;
        transition-duration: 0.3s;
        transform: translate3d(-216px, 0, 0);
      }
    }
  }
}
</style>
