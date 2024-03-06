/*
 * @Author: rk
 * @Description: 请求示例接口
 * @Date: 2022-03-22 15:06:55
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-06-29 09:46:37
 */

import request from "../index.js";

/**
 * get传参示例,特殊处理参数放在url后
 * blob=true,表示是请求文件流接口
 * urlcode=true，表示要设置请求头部为application/x-www-form-urlencoded
 */
export const updateStatus = (params) => {
  return request.get(
    "/sale/contractInfo/updateStatus?blob=true&urlcode=true",
    params
  );
};

/**
 * post传参示例，
 * isQs:true,表示请求头部是application/x-www-form-urlencoded，数据需要序列化
 */
export const login = (params) => {
  return request.post("/system/authority/login", params, { isQs: true });
};
