<!--
 * @Author: rk
 * @Description: 卡片动画3
 * @Date: 2023-12-15 14:30:12
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 14:59:12
-->
<template>
  <div class="detail-info-left">
    <el-card class="left-item" v-for="(item, i) in cardDataList" :key="i">
      <div class="item-top" :style="'color:' + item.color">
        <base-svg-icon :icon-class="item.icon"></base-svg-icon>
        <p>{{ item.name }}</p>
      </div>
      <div class="item-list">
        <p v-for="(child, k) in item.list" :key="k">
          <span class="label">{{ child.label }}</span>
          <span class="value" :style="'color:' + item.color">{{
            child.value
          }}</span>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    cardDataList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.detail-info-left {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .left-item {
    flex: 1;
    transition: all 0.5s;
    &:hover {
      transform: translateY(-5px);
      .svg-icon {
        transform: rotateY(180deg);
      }
    }

    .item-top {
      text-align: center;
      .svg-icon {
        font-size: 30px;
        transition: all 0.5s;
      }
      p {
        font-size: $fs12;
        margin-top: 6px;
      }
    }
    .item-list {
      font-size: $fs12;
      margin-top: 15px;
      p {
        line-height: 30px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        color: $font-secondary;
      }
    }
  }
}
</style>
