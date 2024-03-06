<!--
 * @Author: rk
 * @Description: icon组件
 * @Date: 2024-02-04 10:54:57
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 12:18:39
-->
<template>
  <div>
    <el-card>
      <template slot="header">电力</template>
      <div class="container">
        <div class="icon-box" v-for="(item, i) in elecDataList" :key="i">
          <p @click="handleCopyIcon(i, $event)">
            <base-svg-icon :icon-class="item.icon"></base-svg-icon>
          </p>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      elecDataList: [],
      copyText: "",
    };
  },
  created() {
    this.getIconData();
  },
  methods: {
    getIconData() {
      this.elecDataList = [
        { icon: "alarm", name: "alarm" },
        { icon: "artificial_load", name: "artificial_load" },
        { icon: "battery", name: "battery" },
        { icon: "box", name: "box" },
        { icon: "chaifa", name: "chaifa" },
        { icon: "chaifa1", name: "chaifa1" },
        { icon: "charging_elec", name: "charging_elec" },
        { icon: "charging_pile", name: "charging_pile" },
        { icon: "charging_time", name: "charging_time" },
        { icon: "charge", name: "charge" },
        { icon: "chuneng_elec", name: "chuneng_elec" },
        { icon: "daiji", name: "daiji" },
        { icon: "dianchi", name: "dianchi" },
        { icon: "dianchicu", name: "dianchicu" },
        { icon: "dianliu", name: "dianliu" },
        { icon: "dianxian", name: "dianxian" },
        { icon: "dianya", name: "dianya" },
        { icon: "down_elec", name: "down_elec" },
        { icon: "elec_num", name: "elec_num" },
        { icon: "elec_num1", name: "elec_num1" },
        { icon: "elec_num2", name: "elec_num2" },
        { icon: "elec_num3", name: "elec_num3" },
        { icon: "fangdian", name: "fangdian" },
        { icon: "fengsu", name: "fengsu" },
        { icon: "gonglv1", name: "gonglv1" },
        { icon: "gonglv2", name: "gonglv2" },
        { icon: "gonglv3", name: "gonglv3" },
        { icon: "gonglv4", name: "gonglv4" },
        { icon: "guanji", name: "guanji" },
        { icon: "guangzhao", name: "guangzhao" },
        { icon: "guzhang", name: "guzhang" },
        { icon: "guzhang1", name: "guzhang1" },
        { icon: "init", name: "init" },
        { icon: "jianxiu", name: "jianxiu" },
        { icon: "load_status", name: "load_status" },
        { icon: "monifuhe", name: "monifuhe" },
        { icon: "photovoltaic", name: "photovoltaic" },
        { icon: "pinlv", name: "pinlv" },
        { icon: "power", name: "power" },
        { icon: "rongliang", name: "rongliang" },
        { icon: "rongliang1", name: "rongliang1" },
        { icon: "running", name: "running" },
        { icon: "status", name: "status" },
        { icon: "shebei", name: "shebei" },
        { icon: "shidu", name: "shidu" },
        { icon: "shouyi", name: "shouyi" },
        { icon: "stored_energy", name: "stored_energy" },
        { icon: "system_status", name: "system_status" },
        { icon: "tz-icon", name: "tz-icon" },
        { icon: "up_elec", name: "up_elec" },
        { icon: "up_elec", name: "up_elec" },
        { icon: "wendu", name: "wendu" },
        { icon: "wind", name: "wind" },
        { icon: "wugong", name: "wugong" },
        { icon: "yougong", name: "yougong" },
        { icon: "zhuansu", name: "zhuansu" },
        { icon: "zidingyi", name: "zidingyi" },
        { icon: "zijin", name: "zijin" },
        { icon: "ziyuan", name: "ziyuan" },
      ];
    },
    handleCopyIcon(index, event) {
      let shareLink =
        `<base-svg-icon icon-class="${this.elecDataList[index].name}"></base-svg-icon>` ||
        ""; // 直接构建input
      let input = document.createElement("input"); // 直接构建input
      input.value = shareLink; // 设置内容
      document.body.appendChild(input); // 添加临时实例
      input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      this.$message({
        message: "复制成功",
        type: "success",
      });
      document.body.removeChild(input); // 删除临时实例
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px 30px;
  .icon-box {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      padding: 5px;
      border: 1px solid $border-color-base;
      border-radius: 4px;
      .svg-icon {
        font-size: 25px;
        color: #32cd20;
      }
    }
    &:hover {
      transform: translateY(-5px);
      .svg-icon {
        transform: scale(1.1);
      }
    }

    span {
      margin-top: 10px;
    }
  }
}
</style>
