/*
 * @Author: tuoyouxin@fpwis.com
 * @Description: 全局常量字典 非全局常量字典在具体模块下定义
 * @Date: 2022-06-08 09:53:19
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-12-27 11:42:57
 */

// 时间周期类型
export const PERIOD_TYPE_LIST = [
  { label: "日", value: 7 },
  { label: "旬", value: 8 },
  { label: "月", value: 3 },
  { label: "季", value: 2 },
  { label: "年", value: 1 },
];
// 季度字典
export const QUARTER_LIST = [
  { label: "一季度", value: 9 },
  { label: "二季度", value: 10 },
  { label: "三季度", value: 11 },
  { label: "四季度", value: 12 },
];

// 旬字典
export const TENDAY_LIST = [
  { value: 4, label: "上旬" },
  { value: 5, label: "中旬" },
  { value: 6, label: "下旬" },
];

// 数据状态字典
export const STATUS_LIST = [
  { id: "1", label: "正常" },
  { id: "0", label: "停用" },
];

// 显示状态字典
export const VISIBLE_LIST = [
  { id: "0", label: "显示" },
  { id: "1", label: "隐藏" },
];

// 性别字典
export const SEX_LIST = [
  { id: "0", label: "男" },
  { id: "1", label: "女" },
  { id: "2", label: "未知" },
];
