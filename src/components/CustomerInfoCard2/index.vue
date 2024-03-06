<!--
 * @Author: rk
 * @Description: 卡片动画3
 * @Date: 2023-12-15 14:30:12
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 10:38:15
-->
<template>
  <div class="card-box">
    <el-card class="base-right-item" v-for="(item, i) in cardData" :key="i">
      <div class="item-content">
        <div class="left">
          <base-svg-icon
            :icon-class="item.icon"
            :style="'color:' + item.color"
          />
          <p>{{ item.name }}</p>
        </div>
        <div class="right">
          <span class="value" :style="'color:' + item.color">{{
            item.value
          }}</span>
          <span class="unit">{{ item.unit }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    cardData: {
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
.card-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.base-right-item {
  margin: 0 7.5px;
  flex: 1;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: translateY(-5px);
    .svg-icon {
      transform: scale(1.1);
    }
  }
  .item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 80px;
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
    .right {
      flex: 1;
      font-size: 13px;
      span {
        &.unit {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
