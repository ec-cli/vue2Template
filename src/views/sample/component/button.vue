<!--
 * @Author: tuoyouxin@fpwis.com
 * @Description: button示例
 * @Date: 2023-07-13 19:24:15
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-07-14 09:21:54
-->
<template>
  <div>
    <el-card>
      <div class="template-tips">
        <h2>说明：</h2>
        <p class="mt10">
          1、系统中所用按钮默认采用以下三种类型的按钮，按钮圆角统一为2px；
        </p>
        <p class="mt10">
          2、一级按钮大小size采用small，带图标；二级按钮大小size采用mini，不带图标；三级按钮（文字按钮）默认为mini，不用设置size属性，带图标。
        </p>
      </div>
    </el-card>
    <el-card class="mt15">
      <div>
        <el-divider content-position="left">一级按钮</el-divider>
        <el-button type="primary" size="small" icon="el-icon-search"
          >查询</el-button
        >
        <el-button size="small" icon="el-icon-refresh">重置</el-button>
        <el-button type="warning" plain size="small" icon="el-icon-upload2"
          >上传</el-button
        >
        <el-button type="warning" plain size="small" icon="el-icon-upload2"
          >导入</el-button
        >
        <el-button type="success" plain size="small" icon="el-icon-download"
          >下载</el-button
        >
        <el-button type="success" plain size="small" icon="el-icon-download"
          >导出</el-button
        >
        <el-button type="danger" plain size="small" icon="el-icon-delete"
          >删除</el-button
        >
        <el-button plain size="small" icon="el-icon-arrow-down">展开</el-button>
        <el-button plain size="small" icon="el-icon-arrow-up">收起</el-button>
      </div>
      <div>
        <el-divider content-position="left">二级按钮</el-divider>
        <el-button type="primary" size="mini">确认</el-button>
        <el-button type="primary" size="mini">提交</el-button>
        <el-button type="primary" size="mini">保存</el-button>
        <el-button type="success" size="mini">修改</el-button>
        <el-button type="success" size="mini">编辑</el-button>
        <el-button size="mini">取消</el-button>
        <el-button size="mini">关闭</el-button>
      </div>
      <div>
        <el-divider content-position="left">三级按钮</el-divider>
        <el-button type="text" class="primary" icon="el-icon-view"
          >详情</el-button
        >
        <el-button type="text" class="primary" icon="el-icon-view"
          >查看</el-button
        >
        <el-button type="text" class="success" icon="el-icon-edit"
          >修改</el-button
        >
        <el-button type="text" class="success" icon="el-icon-edit"
          >编辑</el-button
        >
        <el-button type="text" class="success" icon="el-icon-s-operation"
          >调整</el-button
        >
        <el-button type="text" class="danger" icon="el-icon-delete"
          >删除</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
