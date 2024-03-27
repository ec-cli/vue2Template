<!--
 * @Author: rk
 * @Description: 重定向页面
 * @Date: 2023-03-17 17:48:40
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 20:02:11
-->

<script>
export default {
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$router.replace({ path: "/" + path, query });
  },
  render: function (h) {
    return h(); // avoid warning message
  },
};
</script>
