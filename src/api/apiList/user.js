/*
 * @Author: rk
 * @Descripton: 用户模块api接口
 * @Date: 2022-08-16
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 09:47:29
 */

import request from "../index.js";

// 登录
export const login = (params) => {
  return request.post("/system/login", params);
};

// 登出
export const logout = (params) => {
  return request.post("/system/logout", params);
};

// 查询用户列表
export const queryUserPage = (params) => {
  return request.post("/system/user/queryPage", params);
};

// 获取用户信息
export const getUserInfo = (params) => {
  return request.post("/system/user/queryInfo", params);
};

// 获取路由列表
export const getRoutes = (params) => {
  return request.post("/system/user/queryRoutes", params);
};

// 添加用户
export const addUser = (params) => {
  return request.post("/system/user/add", params);
};

// 删除用户
export const deleteUser = (params) => {
  return request.get("/system/user/delete", params);
};

// 修改用户
export const updateUser = (params) => {
  return request.post("/system/user/update", params);
};

// 修改用户状态（启用、停用）
export const updateStatus = (params) => {
  return request.post("/system/user/updateStatus", params);
};

// 修改密码
export const updatePwd = (params) => {
  return request.post("/system/user/updatePwd", params);
};

// 重置密码
export const resetPwd = (params) => {
  return request.get("/system/user/resetPwd", params);
};

// 查询所有角色列表
export const getRoleList = (params) => {
  return request.get("/system/role/queryAll", params);
};
