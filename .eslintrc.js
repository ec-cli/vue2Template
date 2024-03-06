/*
 * @Author: rk
 * @Description: ESLint配置
 * @Date: 2022-03-22 15:06:55
 * @LastEditors: rk
 * @LastEditTime: 2023-11-16 14:49:36
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    // "@vue/standard"
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["warn", { max: 1 }], // 不允许多个空行

    // 禁止变量名出现下划线
    "no-underscore-dangle": "off",
    // 使用双引号
    quotes: ["warn", "double"],
    // @fixable 禁止出现多余的分号
    "no-extra-semi": "warn",
    // 禁止在函数参数中出现重复名称的参数
    "no-dupe-args": "error",
    // 禁止在对象字面量中出现重复名称的键名
    "no-dupe-keys": "error",
    // 禁止使用保留字作为变量名
    "no-shadow-restricted-names": "error",
    // 禁止重复定义变量
    "no-redeclare": "error",
    // 禁止使用未定义的变量
    "no-undef": [
      "error",
      {
        typeof: false,
      },
    ],
    // 定义过的变量必须使用
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
        caughtErrors: "none",
        ignoreRestSiblings: true,
      },
    ],
    // 变量必须先定义后使用
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    // 禁止对使用 const 定义的常量重新赋值
    "no-const-assign": "warn",
    // 禁止重复定义类
    "no-dupe-class-members": "error",
    // 禁止重复 import 模块
    "no-duplicate-imports": "error",
    // 禁止对定义过的 class 重新赋值
    "no-class-assign": "error",
    // @fixable 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true,
      },
    ],
    // 禁止连续赋值，比如 a = b = c = 5
    "no-multi-assign": "warn",
    // 禁止使用 console
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // @fixable 禁止使用 debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    eqeqeq: 2 /** 要求使用 === 和 !== */,
    "no-magic-numbers": 0 /** 禁止使用魔术数字 */,
    "no-multi-spaces": 0 /** 禁止使用多个空格 */,
    "spaced-comment": 1, // 注释加空格
  },
};
