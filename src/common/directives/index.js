/*
 * @Author: rk
 * @Description: 自定义指令
 * @Date: 2022-06-06 16:48:53
 * @LastEditors: rk
 * @LastEditTime: 2023-12-29 14:47:45
 */

import input from "./inputLimit.js"; // 输入框限制指令
import dialogDrag from "./dialogDrag.js"; // 弹窗拖拽
import loadMore from "./lazyLoad.js"; // 下拉框懒加载
import numberInput from "./floatNumberLimit.js"; // 输入框可输入负数
import hasPermi from "./permission.js"; // 按钮权限

export default {
  input,
  dialogDrag,
  loadMore,
  numberInput,
  hasPermi,
};
