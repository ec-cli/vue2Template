/*
 * @Author: rk
 * @Description: 全局工具函数
 * @Date: 2022-03-21 09:35:23
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 11:44:17
 */

const utils = {
  /**
   * 匹配字典的方法
   * @param {*} index
   * @param {*} dictionary
   * @returns
   */
  $dictionaryMatch(index, dictionary) {
    let label = "";
    let value = "";
    dictionary.forEach((item) => {
      // ?? 如果左侧是null或者undefined才会继续，如果是0，则取值为0
      value = item.value ?? item.id ?? item.type;
      if (value === index) {
        label = item.label || item.name;
      }
    });
    return label;
  },
  /**
   * 改变颜色透明度
   * @param {*} thisColor
   * @param {*} thisOpacity
   * @returns
   */
  $getOpacityColor(thisColor, thisOpacity) {
    let theColor = thisColor.toLowerCase();
    // 十六进制颜色值的正则表达式
    let r = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是16进制颜色
    if (theColor && r.test(theColor)) {
      if (theColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += theColor
            .slice(i, i + 1)
            .concat(theColor.slice(i, i + 1));
        }
        theColor = sColorNew;
      }
      // 处理六位的颜色值
      let sColorChange = [];
      for (let j = 1; j < 7; j += 2) {
        sColorChange.push(parseInt("0x" + theColor.slice(j, j + 2)));
      }
      return "rgba(" + sColorChange.join(",") + "," + thisOpacity + ")";
    }
    return theColor;
  },
  /**
   * 表单重置
   * @param {*} refName
   */
  $resetForm(refName) {
    if (this.$refs[refName]) {
      this.$refs[refName].resetFields();
    }
  },
};
export default utils;
