<!--
 * @Author: rk
 * @Description: 面包屑导航
 * @Date: 2022-03-21 12:30:17
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-07-03 18:25:27
-->

<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
      <span
        class="no-link"
        v-if="item.redirect === 'noRedirect' || index === breadList.length - 1"
        >{{ item.meta.title }}</span
      >
      <a v-else @click.prevent="handleRouteJump(item)" class="is-link">{{
        item.meta.title
      }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "crumbsPage",
  data() {
    return {
      breadList: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      if (Object.keys(this.$route.matched[0].meta).length > 0) {
        this.breadList = this.$route.matched;
      } else {
        this.breadList = [];
      }
    },
    handleRouteJump(item) {
      this.$router.push(item.path);
    },
  },
};
</script>
<style lang="scss">
.breadcrumb {
  .el-breadcrumb__separator {
    font-weight: normal !important;
  }

  .is-link {
    color: #fff !important;
    font-weight: normal !important;

    &:hover {
      color: $color-primary !important;
      opacity: 0.85;
    }
  }

  .no-link {
    color: #f5f5f5 !important;
    opacity: 0.85;
  }
}
</style>
