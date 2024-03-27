<!--
 * @Author: rk
 * @Description: 左侧菜单栏公共组件
 * @Date: 2022-03-21 12:25:16
 * @LastEditors: rk
 * @LastEditTime: 2023-12-27 14:31:22
-->

<template>
  <el-scrollbar class="side-container">
    <el-menu
      :default-active="activeMenu"
      :collapse="!sidebar.opened"
      :unique-opened="true"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item
        v-for="(route, index) in sidebarRoutes"
        :key="route.path + index"
        :item="route"
        :base-path="route.path"
      ></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from "./sidebarItem"; // 侧边栏项
export default {
  name: "pageSide",
  components: { SidebarItem },
  data() {
    return {};
  },
  computed: {
    // 菜单栏状态信息
    sidebar() {
      return this.$store.state.settings.sidebar;
    },
    // 侧边导航栏路由列表
    sidebarRoutes() {
      return this.$store.state.permission.sidebarRouters;
    },
    // 当前路由路径
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.side-container {
  width: 100%;
  height: calc(100vh - 60px);
  user-select: none;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.el-menu--collapse {
  .el-submenu {
    & > .el-submenu__title {
      & > span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }
}

.el-menu--collapse .el-menu .el-submenu {
  min-width: 64px !important;
}

.el-menu--collapse
  > div
  > .el-submenu
  > .el-submenu__title
  .el-submenu__icon-arrow {
  display: none;
}

.el-menu {
  background-color: $asideBgColor !important;
  border-right: none !important;

  .svg-icon {
    margin-right: 10px;
  }
}

.el-submenu__title {
  color: #fff !important;
  height: 52px !important;
  line-height: 52px !important;
}

.el-submenu__title:hover {
  opacity: 0.8;
  background: transparent !important;
}

.el-menu-item {
  color: #fff !important;
  height: 52px !important;
  line-height: 52px !important;
  &.is-active {
    background: $color-primary;
  }
}

.el-menu-item:hover {
  opacity: 0.8;
  background: transparent !important;
}

.el-menu-item:focus {
  opacity: 1;
}

.el-menu-item.is-active {
  color: #fff !important;
  background: $color-primary !important;
}

.el-menu--vertical {
  & > .el-menu {
    .svg-icon {
      margin-right: 10px;
    }
  }
}
</style>
