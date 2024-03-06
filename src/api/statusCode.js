/*
 * @Author: rk
 * @Description: 根据状态码 处理接口返回
 * @Date: 2022-09-26 15:45:39
 * @LastEditors: rk
 * @LastEditTime: 2023-07-13 12:07:56
 */

import store from "@/store";
import { message } from "@utils/singeMessage.js";
const statusCode = {
  // 后端自定义状态码
  status(data) {
    if (data.errorCode === 0) {
      if (data.data && JSON.stringify(data.data) !== "{}") {
        return data.data;
      } else {
        return true;
      }
    } else {
      switch (data.errorCode) {
        case 401: // token过期
          message({
            type: "error",
            message: "登录超时，请重新登录！",
            center: true,
          });
          store.dispatch("FedLogOut").then(() => {
            location.href = "/";
          });
          break;
        default:
          message({
            duration: 5000,
            type: "error",
            message: data.message || "请求出错！",
            center: true,
          });
          break;
      }
      return false;
    }
  },
};
export default statusCode;
