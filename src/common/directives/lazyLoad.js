/*
 * @Author: rk
 * @Description: 下拉框懒加载
 * @Date: 2023-05-29 15:23:54
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-07-14 16:13:48
 */

export default {
  bind(el, binding) {
    const selectWrapDom = el.querySelector(
      ".el-select-dropdown .el-select-dropdown__wrap"
    );
    selectWrapDom.addEventListener("scroll", function () {
      const condition =
        this.scrollHeight - this.scrollTop.toFixed(0) <= this.clientHeight + 1;
      if (condition) {
        binding.value();
      }
    });
  },
};
