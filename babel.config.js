/*
 * @Author: rk
 * @Description: Babel 配置
 * @Date: 2022-03-22 15:06:55
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-06-30 16:32:41
 */

const plugins = [
  "@babel/plugin-proposal-optional-chaining", // 可选链 ?.
  "@babel/plugin-proposal-nullish-coalescing-operator", // 空值合并 ??
  [
    "component",
    {
      libraryName: "umy-ui",
      styleLibraryName: "theme-chalk",
    },
  ],
];
module.exports = {
  presets: [["@vue/app", { useBuiltIns: "entry" }]],
  plugins: plugins,
};
