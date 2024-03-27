/*
 * @Author: rk
 * @Description: 过滤器
 * @Date: 2022-03-21 09:35:29
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 11:39:37
 */

const filter = {
  // 实现数字千分位格式
  numberToCurrencyNo(value) {
    if (!value && value !== 0) return "-";
    let intPart = "";
    let intPartFormat = "";
    if (value < 0) {
      // 获取整数部分
      intPart = Math.trunc(Math.abs(value));
      // 整数部分处理，增加,
      intPartFormat =
        "-" + intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
    } else {
      // 获取整数部分
      intPart = Math.trunc(value);
      // 整数部分处理，增加,
      intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
    }
    // 预定义小数部分
    let floatPart = "";
    // 将数值截取为小数部分和整数部分
    const valueArray = value.toString().split(".");
    if (valueArray.length === 2) {
      // 有小数部分
      floatPart = valueArray[1].toString(); // 取得小数部分
      return intPartFormat + "." + floatPart;
    }
    return intPartFormat + floatPart;
  },
};
export default filter;
