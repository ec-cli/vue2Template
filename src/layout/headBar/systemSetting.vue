<!--
 * @Author: rk
 * @Description: 系统设置右弹窗组件
 * @Date: 2022-03-21 15:49:29
 * @LastEditors: rk
 * @LastEditTime: 2024-01-02 09:42:45
-->

<template>
  <div class="system-setting">
    <el-drawer
      :visible.sync="systemDialog.visible"
      :modal-append-to-body="false"
      title="系统设置"
      direction="rtl"
      size="300px"
    >
      <div class="content-box">
        <el-divider content-position="left">常规设置</el-divider>
        <div class="system-box">
          <div class="system-list">
            <span>全屏显示</span>
            <el-switch
              v-model="isFull"
              active-color="#13ce66"
              @change="handleFullscreenChange"
            ></el-switch>
          </div>
          <!-- <div class="system-list">
            <span>显示天气</span>
            <el-switch
              v-model="weather"
              active-color="#13ce66"
              @change="handleWeatherChange(weather)"
            ></el-switch>
          </div> -->
          <div class="system-list">
            <span>显示Tag-views标签</span>
            <el-switch
              v-model="tagShow"
              active-color="#13ce66"
              @change="handleTagShowChange(tagShow)"
            ></el-switch>
          </div>
        </div>
        <el-divider content-position="left">其他设置</el-divider>
        <div class="system-box">
          <div class="system-list">
            <span>暂无</span>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import screenfull from "screenfull"; // 全屏组件
export default {
  name: "systemSetting",
  props: {
    systemDialog: {
      // 系统设置弹窗信息
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      dark: false, // 暗黑模式
      isFull: false, // 全屏显示
      tagShow: "", // 是否显示tag标签
      headerShow: "", // 是否显示头部信息
    };
  },
  computed: {
    // 是否展示tags标签 1:展示
    tagShows() {
      return this.$store.state.settings.tagShow;
    },
    // 是否展示header信息
    headerShows() {
      return this.$store.state.settings.headerShow;
    },
  },
  created() {
    this.settingsInit(); // 初始化设置信息
  },
  mounted() {
    window.addEventListener("fullscreenchange", (e) => {
      this.isFull = screenfull.isFullscreen;
    });
  },
  methods: {
    // 初始化设置信息
    settingsInit() {
      this.tagShow = +this.tagShows === 1 ? true : false;
      this.headerShow = +this.headerShows === 1 ? true : false;
    },
    // 全屏模式
    handleFullscreenChange() {
      screenfull.toggle();
      this.isFull = !screenfull.isFullscreen;
    },
    // 切换面包屑显示
    handleTagShowChange(state) {
      this.tagShow = state;
      let num = this.tagShow ? 1 : 0;
      this.$store.commit("settings/SET_TAG_SHOW", num);
    },
    // 切换头部显示
    headerShowChange(state) {
      this.headerShow = state;
      let num = this.headerShow ? 1 : 0;
      this.$store.commit("settings/SET_HEADER_SHOW", num);
    },
  },
};
</script>

<style lang="scss" scoped>
.system-setting {
  .content-box {
    color: $font-primary;
    .system-list {
      padding-left: 20px;
      display: flex;
      align-items: center;
      .el-switch {
        margin-left: 15px;
      }
    }
  }
}
</style>
