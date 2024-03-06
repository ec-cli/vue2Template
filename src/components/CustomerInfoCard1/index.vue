<!--
 * @Author: rk
 * @Description: 卡片动画2
 * @Date: 2023-12-15 14:30:12
 * @LastEditors: rk
 * @LastEditTime: 2023-12-15 14:37:54
-->
<template>
  <div class="info">
    <div class="info-item" v-for="(item, index) in cardList" :key="index">
      <div class="info-item-left">
        <div class="info-icon" :style="{ background: item.color }">
          <base-svg-icon
            :icon-class="item.icon"
            :class="item.iconStyle"
          ></base-svg-icon>
          <div class="unit">{{ item.unit }}</div>
        </div>
      </div>
      <div class="info-text">
        <div class="info-top" v-if="item.title">
          {{ item.title }}
          <span :style="{ color: item.color }">{{
            item.value | numberToCurrencyNo
          }}</span>
        </div>
        <div class="info-bottom">
          <div v-for="(v, i) in item.list" :key="i">
            <p>{{ v.text }}</p>
            <p :style="{ color: item.color }">
              {{ v.value | numberToCurrencyNo
              }}<span
                v-if="v.value !== null && v.value !== 'null' && v.value !== ''"
                class="unit"
                >{{ index === 2 ? item.unit : "" }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    cardList: {
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
@import "@/assets/css/mixin.scss";

.info {
  width: 100%;
  min-width: 1100px;
  @include flex-between;

  .info-item {
    margin: 0 10px;
    height: 100px;
    background: $background-color-lighter;
    border-radius: 2px;
    @include flex-center;
    transition: all 0.5s;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    &:first-child {
      margin-left: 0;
      width: 33%;
    }

    &:nth-child(2) {
      width: 33%;
    }
    &:last-child {
      width: 33%;
      margin-right: 0;
    }

    .info-item-left {
      width: 100px;
      @include flex-center;
      flex-direction: column;
      .info-icon {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        line-height: 65px;
        text-align: center;
        position: relative;
        overflow: hidden;
        .unit {
          position: absolute;
          height: 30px;
          line-height: 30px;
          left: 0;
          bottom: 0;
          right: 0;
          text-align: center;
          font-size: $fs12;
          font-weight: 400;
          color: #fff;
          transform: scale(0.85);
          transition: all 0.5s;
        }
        .svg-icon {
          display: inline-block !important;
          vertical-align: middle;
          transition: all 0.5s;
          margin-bottom: 10px;
          &.fIcon {
            color: #e3eaff;
            width: 25px;
            height: 25px;
          }

          &.dIcon {
            color: #dffaf5;
            width: 31px;
            height: 31px;
          }

          &.pIcon {
            color: #f6ede0;
            width: 25px;
            height: 25px;
          }

          &.cIcon {
            color: #e3f9e3;
            width: 33px;
            height: 33px;
          }
        }
      }
    }

    .info-text {
      flex: 1;
      @include flex-center;
      flex-direction: column;
      color: $font-regular;

      .info-top {
        height: 40px;
        line-height: 40px;
        width: 100%;
        text-align: center;

        span {
          font-size: $fs18;
          &.unit {
            font-size: $fs12;
            margin-left: 5px;
          }
        }
      }

      .info-bottom {
        flex: 1;
        @include flex-between;
        font-size: $fs14;
        text-align: center;
        padding: 0 12px;
        width: 100%;

        div {
          width: 100%;

          &:nth-child(2) {
            margin: 0 10px;
          }
        }
      }

      .info-height {
        line-height: 2em;
      }
      .unit {
        font-size: $fs12;
        margin-left: 5px;
      }
      &.column {
        align-items: flex-start;
      }
    }
  }
}
</style>
