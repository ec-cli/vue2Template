<!--
 * @Author: rk
 * @Description: 卡片动画4
 * @Date: 2023-12-15 14:30:12
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 14:58:46
-->
<template>
  <div class="detail-info">
    <div class="card-panel" v-for="(item, i) in cardDataList1" :key="i">
      <div class="card-panel-icon-wrapper" :class="item.iconClass">
        <base-svg-icon :icon-class="item.icon" class-name="card-panel-icon" />
      </div>
      <div class="card-panel-description">
        <div class="card-panel-text">{{ item.name }}</div>
        <span>{{ item.num }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    cardDataList1: {
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
.detail-info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .card-panel {
    flex: 1;
    height: 68px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: #666;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-blue {
        background: #36a3f7;
      }

      .icon-green {
        background: #34bfa3;
      }

      .icon-red {
        background: #f56c6c;
      }

      .icon-orange {
        background: #e6a23c;
      }
    }

    .icon-blue {
      color: #36a3f7;
    }

    .icon-green {
      color: #34bfa3;
    }

    .icon-red {
      color: #f56c6c;
    }

    .icon-orange {
      color: #e6a23c;
    }

    .card-panel-icon-wrapper {
      margin: 10px;
      padding: 10px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      font-size: 30px;
    }

    .card-panel-description {
      margin: 15px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 14px;
        font-size: $fs12;
        margin-bottom: 12px;
        text-align: right;
      }

      .card-panel-num {
        font-size: 18px;
      }
    }
  }
}
</style>
