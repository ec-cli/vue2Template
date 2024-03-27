<!--
 * @Author: rk
 * @Description: form示例
 * @Date: 2023-07-14 09:19:06
 * @LastEditors: rk
 * @LastEditTime: 2023-07-17 15:05:05
-->
<template>
  <div>
    <el-card>
      <div class="template-tips">
        <h2>说明：</h2>
        <p class="mt10">
          1、系统中所用form表单主要分为以下几种类型，参考下面示例根据实际情况灵活配置使用；
        </p>
        <p class="mt10">
          2、查询/搜索表单大小size采用small，el-form-item标签是否显示label根据实际情况来定，显示label时一般不需要指定label-width；
        </p>
        <p class="mt10">
          3、数据表单大小size采用mini，el-form-item标签显示label，根据实际情况来确定是否需要指定label-width，label-width统一采用左对齐；
        </p>
        <p class="mt10">
          4、数据表单必要时需要添加rule校验规则，如果需要多列布局建议采用el-row栅格布局。
        </p>
      </div>
    </el-card>

    <el-card class="mt15">
      <el-divider content-position="left">查询/搜索表单</el-divider>
      <el-form :model="queryParams" :inline="true" size="small">
        <!-- 时间周期类型 -->
        <el-form-item>
          <el-radio-group v-model="queryParams.periodType">
            <el-radio-button
              :label="item.value"
              v-for="(item, i) in periodTypeList"
              :key="i"
              >{{ item.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
        <!-- 年份选择 -->
        <el-form-item
          v-if="queryParams.periodType === 1 || queryParams.periodType === 2"
        >
          <el-date-picker
            v-model="queryParams.year"
            style="width: 110px"
            align="center"
            type="year"
            format="yyyy年"
            value-format="yyyy"
            placeholder="年份"
            :editable="false"
            :clearable="false"
          >
          </el-date-picker>
        </el-form-item>
        <!-- 季度选择 -->
        <el-form-item v-if="queryParams.periodType === 2">
          <el-select
            v-model="queryParams.quarter"
            placeholder="季度"
            style="width: 110px"
          >
            <el-option
              v-for="item in quarterList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 月份选择 -->
        <el-form-item
          v-if="queryParams.periodType === 3 || queryParams.periodType === 8"
        >
          <el-date-picker
            v-model="queryParams.month"
            type="month"
            value-format="yyyy-MM"
            style="width: 130px"
            placeholder="请选择月份"
            :clearable="false"
            :editable="false"
          ></el-date-picker>
        </el-form-item>
        <!-- 旬选择 -->
        <el-form-item v-if="queryParams.periodType === 8">
          <el-select
            v-model="queryParams.tenDay"
            placeholder="旬"
            style="width: 80px"
          >
            <el-option
              v-for="item in tendayList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 日期 -->
        <el-form-item v-if="queryParams.periodType === 7">
          <el-date-picker
            v-model="queryParams.date"
            type="date"
            placeholder="请选择日期"
            value-format="yyyy-MM-dd"
            style="width: 140px"
            :editable="false"
            :clearable="false"
            :popper-append-to-body="false"
          >
          </el-date-picker>
        </el-form-item>
        <!-- 统计方式 -->
        <el-form-item>
          <el-radio-group v-model="queryParams.countType">
            <el-radio-button
              :label="item.value"
              v-for="item in countTypeList"
              :key="item.value"
              >{{ item.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="名称">
          <el-input
            v-model.trim="queryParams.name"
            placeholder="请输入名称"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="数据类型">
          <el-select v-model="queryParams.type" placeholder="请选择类型">
            <el-option
              v-for="item in typeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 操作按钮 -->
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-refresh">重置</el-button>
        </el-form-item>
        <!-- 图表缩放开关 -->
        <el-form-item>
          <el-tooltip
            effect="dark"
            :content="zoomLock ? '点击打开图表缩放' : '点击关闭图表缩放'"
            placement="top-start"
          >
            <el-button class="lock-btn" plain @click="zoomLock = !zoomLock">
              <base-svg-icon v-if="zoomLock" icon-class="lock" class="hover" />
              <base-svg-icon v-else icon-class="nolock" class="hover" />
            </el-button>
          </el-tooltip>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="mt15">
      <el-divider content-position="left">数据表单1</el-divider>
      <el-form
        ref="addForm"
        :model="dataParams"
        size="mini"
        label-width="100px"
        label-position="left"
        style="width: 400px"
        :rules="rules"
      >
        <el-form-item label="数据名称" prop="name">
          <el-input
            v-model.trim="dataParams.name"
            placeholder="请输入名称"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="时间类型" prop="periodType">
          <el-select
            v-model="dataParams.periodType"
            placeholder="请选择时间类型"
            style="width: 100%"
          >
            <el-option
              v-for="item in periodTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电量" prop="elec">
          <el-input
            v-model.trim="dataParams.elec"
            placeholder="请输入电量"
            clearable
          >
            <template slot="append">MWh</template>
          </el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input
            v-model.trim="dataParams.price"
            placeholder="请输入价格"
            clearable
          >
            <template slot="append">元/MWh</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmitClick">提交</el-button>
          <el-button @click="handleResetClick">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="mt15">
      <el-divider content-position="left">数据表单2</el-divider>
      <el-form
        :model="dataParams"
        size="mini"
        label-width="100px"
        label-position="left"
        style="width: 800px"
        :rules="rules"
      >
        <el-row :gutter="15">
          <el-col :span="12">
            <el-form-item label="数据名称" prop="name">
              <el-input
                v-model.trim="dataParams.name"
                placeholder="请输入名称"
                clearable
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="时间类型" prop="periodType">
              <el-select
                v-model="dataParams.periodType"
                placeholder="请选择时间类型"
                style="width: 100%"
              >
                <el-option
                  v-for="item in periodTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电量" prop="elec">
              <el-input
                v-model.trim="dataParams.elec"
                placeholder="请输入电量"
                clearable
              >
                <template slot="append">MWh</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="价格" prop="price">
              <el-input
                v-model.trim="dataParams.price"
                placeholder="请输入价格"
                clearable
              >
                <template slot="append">元/MWh</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" class="text-r">
            <el-form-item>
              <el-button type="primary">提交</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 字典常量
import { PERIOD_TYPE_LIST, QUARTER_LIST, TENDAY_LIST } from "@const/index.js";
export default {
  components: {},
  data() {
    return {
      // 时间类型字典
      periodTypeList: PERIOD_TYPE_LIST,
      // 季度字典
      quarterList: QUARTER_LIST,
      // 旬字典
      tendayList: TENDAY_LIST,
      // 统计方式字典
      countTypeList: [
        { label: "按月统计", value: 3 },
        { label: "按天统计", value: 4 },
        { label: "按96点统计", value: 1 },
        { label: "按24点统计", value: 2 },
      ],
      // 类型字典
      typeList: [
        { label: "类型1", value: 1 },
        { label: "类型2", value: 2 },
        { label: "类型3", value: 3 },
      ],
      // 价格来源字典
      priceTypeList: [
        { label: "系统预测价格", value: 1 },
        { label: "人工预测价格", value: 2 },
      ],
      // 查询参数
      queryParams: {
        periodType: 7, // 时间周期类型
        year: "", // 年份
        quarter: "", // 季度
        month: "", // 月份
        tenday: "", // 旬
        date: "", // 日期
        name: "", // 名称
        type: "", // 类型
        countType: 2, // 统计方式
      },
      // 图表缩放开关
      zoomLock: false,
      // 数据表单
      dataParams: {
        name: "", // 数据名称
        periodType: "", // 时间周期类型
        elec: "", // 电量
        price: "", // 价格
      },
      // 表单rules
      rules: {
        name: [{ required: true, message: "请输入数据名称", trigger: "blur" }],
        periodType: [
          { required: true, message: "请选择时间类型", trigger: "change" },
        ],
        elec: [{ required: true, message: "请输入电量", trigger: "blur" }],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 表单提交
    handleSubmitClick() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          //
        }
      });
    },
    // 表单重置
    handleResetClick() {
      this.$refs.addForm.resetFields();
    },
  },
};
</script>
<style lang="scss" scoped></style>
