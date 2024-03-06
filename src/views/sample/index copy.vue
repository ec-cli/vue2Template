<!--
 * @Author: rk
 * @Description: 组件模板
 * @Date: 2023-03-03 17:10:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-07-03 19:31:55
-->

<template>
  <div class="sample-container">
    <!-- 弹框相关 -->
    <el-divider content-position="left">弹框</el-divider>
    <el-row>
      <el-col :lg="24" class="mb10">
        <el-button
          type="primary"
          class="animate__animated animate__pulse"
          size="small"
          @click="dialogVisible = true"
          >Dialog</el-button
        >
        <el-popconfirm title="这是一段内容确定删除吗？" class="ml10 mr10">
          <el-button type="success" size="small" slot="reference"
            >Popconfirm</el-button
          >
        </el-popconfirm>
      </el-col>
      <el-col :lg="24">
        <el-button type="warning" size="small" @click="handleInfoMessageOpen">
          MessageBox1
        </el-button>
        <el-button type="danger" size="small" @click="handleWarningMessageOpen">
          MessageBox2
        </el-button>
        <el-button type="primary" size="small" @click="drawer = true">
          Drawer
        </el-button>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="详情窗口" width="60%">
      <div style="height: 200px">这是dialog弹框,详细用法见element-ui</div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="dialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
    <el-drawer :visible.sync="drawer" title="标题" size="300px" direction="rtl">
      <span>这是drawer弹框,详细用法见element-ui</span>
    </el-drawer>
    <!-- 图表相关 -->
    <el-divider content-position="left">图表</el-divider>
    <el-row :gutter="15">
      <el-col :lg="8">
        <el-card class="mb15">
          <div slot="header">
            <span class="title">柱状图</span>
          </div>
          <div style="height: 200px">
            <bar-chart :chart-data="barChartData"></bar-chart>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8">
        <el-card class="mb15">
          <div slot="header">
            <span class="title">折线图</span>
          </div>
          <div style="height: 200px">
            <line-chart :chart-data="lineChartData"></line-chart>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8">
        <el-card class="mb15">
          <div slot="header">
            <span class="title">柱状+折线图</span>
          </div>
          <div style="height: 200px">
            <line-bar-chart :chart-data="barLineChartData"></line-bar-chart>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8">
        <el-card class="mb15">
          <div slot="header">
            <span class="title">饼状图</span>
          </div>
          <div style="height: 200px">
            <pie-chart :chart-data="pieChartData"></pie-chart>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// 组件
import LineChart from "./chart/lineChart"; // 折线图
import BarChart from "./chart/barChart"; // 柱状图
import LineBarChart from "./chart/lineBarChart"; // 折线+柱状图
import PieChart from "./chart/pieChart"; // 饼状图
export default {
  name: "Sample",
  components: {
    LineChart,
    BarChart,
    LineBarChart,
    PieChart,
  },
  data() {
    return {
      // 柱状图数据
      barChartData: {
        smooth: true, // 是否平滑曲线，非必传，默认false
        boundaryGap: true, // 坐标系左右两侧是否留白，默认false不留白
        tooltipFormatter: true, // 是否自定义图标弹框（分两列展示）
        dataZoom: "slider", // 图表缩放类型 slider、inside
        dataZoomShow: false, // 是否展示滚动条
        legend: ["数据1", "数据2"], // 图例数据
        yName1: "家", // y轴单位
        xData: [
          "北京",
          "上海",
          "广州",
          "深圳",
          "南京",
          "武汉",
          "成都",
          "西安",
          "郑州",
        ], // x轴数据
        yData: [
          [96, 93, 90, 88, 85, 83, 82, 80, 79],
          [66, 64, 62, 60, 56, 53, 50, 49, 47],
        ], // y轴数据，子数组与legend一一对应
      },
      // 折线图数据
      lineChartData: {
        smooth: true, // 是否平滑曲线，非必传，默认false
        boundaryGap: true, // 坐标系左右两侧是否留白，默认false不留白
        dataZoom: "slider", // 图表缩放类型 slider、inside
        dataZoomShow: false, // 是否展示滚动条
        legend: ["数据1", "数据2"], // 图例数据
        yName1: "个", // y轴单位
        xData: [
          "北京",
          "上海",
          "广州",
          "深圳",
          "南京",
          "武汉",
          "成都",
          "西安",
          "郑州",
        ], // x轴数据
        yData: [
          [34, 38, 40, 48, 52, 53, 82, 80, 79],
          [66, 64, 62, 60, 56, 53, 50, 49, 47],
        ], // y轴数据，子数组与legend一一对应
      },
      // 柱状图+折线图数据
      barLineChartData: {
        smooth: true, // 是否平滑曲线，非必传，默认false
        // color: ["#07f9d9", "#616de7"], //线条颜色 非必传
        legend: ["数据1", "数据2", "数据3", "数据4"], // 图例数据
        yName1: "电量：MWh", // y轴单位
        yName2: "电价：元/MWh",
        xData: [
          "北京",
          "上海",
          "广州",
          "深圳",
          "南京",
          "武汉",
          "成都",
          "西安",
          "郑州",
        ], // x轴数据
        yData: [
          [34, 38, 40, 48, 52, 53, 82, 80, 79],
          [66, 64, 62, 60, 56, 53, 50, 49, 47],
          [11, 21, 32, 43, 54, 63, 73, 82, 94],
          [66, 64, 62, 60, 56, 53, 50, 49, 47],
        ], // y轴数据，子数组与legend一一对应
      },
      // 饼状图数据
      pieChartData: {
        legend: [],
        legendNameWidth: 45,
        legendGap: 13,
        seriesData: [
          { name: "北京", value: 96 },
          { name: "上海", value: 93 },
          { name: "广州", value: 60 },
          { name: "深圳", value: 38 },
          { name: "南京", value: 15 },
        ],
      },
      dialogVisible: false, // dialog弹框开关
      drawer: false, // drawer弹框开关
    };
  },
  computed: {
    // 是否展示tags标签
    tagShows() {
      return this.$store.state.settings.tagShow;
    },
  },
  watch: {
    // 监听是否显示tags标签
    tagShows: {
      handler(newVal, oldVal) {
        this.containerHeightInit();
      },
      deep: true,
    },
  },
  mounted() {},
  methods: {
    // 初始化主体区域高度
    containerHeightInit() {
      let num = 0;
      if (Number(this.tagShows) === 1) {
        num = 180;
      } else {
        num = 140;
      }
      let _height =
        document.documentElement.clientHeight || document.body.clientHeight;
      this.containerHeight = _height - num;
      window.addEventListener(
        "resize",
        () => {
          let _height =
            document.documentElement.clientHeight || document.body.clientHeight;
          this.containerHeight = _height - num;
        },
        false
      );
    },
    // 打开Info确认弹窗
    handleInfoMessageOpen() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    // 打开Warning确认弹窗
    handleWarningMessageOpen() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.clear();
    }
  },
};
</script>
<style lang="scss" scoped>
.chart-card {
  height: 260px;
  overflow: hidden;
  background: $background-color-base;
  border-radius: 4px;
  margin-bottom: 15px;
  border: 1px solid $border-color-light;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  .chart-card-header {
    padding: 0 15px;
    height: 30px;
    line-height: 40px;

    .title {
      font-weight: bold;
    }
  }

  .chart-card-content {
    height: 220px;
  }
}
.chart-box {
  width: 100%;
  height: 100%;
}
</style>
