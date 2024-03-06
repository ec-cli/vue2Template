/*
 * @Author: yangchenguang
 * @Description: 注册svg
 * @Date: 2023-06-25 09:41:05
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 10:40:05
 */

const req = require.context("./svg", false, /\.svg$/);
const power = require.context("./svg/power", false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
requireAll(power);
