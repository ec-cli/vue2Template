/*
 * @Author: rk
 * @Description: 封装axios
 * @Date: 2022-02-28 16:40:36
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-07-11 17:45:06
 */

import axios from "axios";
import Q from "qs";
import { getToken } from "@utils/auth";
import statusCode from "./statusCode";

let baseUrl = "";
switch (process.env.VUE_APP_TITLE) {
  case "prod":
    // 生产环境 - 后端代理 - 接口数据加密
    baseUrl = "/";
    break;
  case "test":
    // 内网测试环境 - 后端代理 - 接口数据不加密
    baseUrl = "/";
    break;
  default:
    // 开发环境 - 接口数据不加密
    baseUrl = "http://192.168.100.197:9021/";
    break;
}

const service = axios.create({
  timeout: 6000000,
  responseType: "json",
  baseURL: baseUrl,
});

service.interceptors.request.use(
  (config) => {
    let accessToken = getToken();
    if (accessToken && accessToken !== null && accessToken !== "null") {
      config.headers["Authorization"] = accessToken;
    }

    if (config.method === "get") {
      const [url, self_params] = config.url.split("?");
      config.url = url;
      if (self_params) {
        let obj = Object.fromEntries(new URLSearchParams(self_params));
        if (obj.blob) {
          config.responseType = "blob";
        }
        if (obj.urlencoded) {
          config.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
      }
    } else if (config.method === "post") {
      if (config.isQs) {
        config.data = Q.stringify(config.data);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    let data = response.data;
    // 如果是文件流（文件下载） 直接返回
    if (data instanceof Blob) {
      // 如果数据类型是application/json，说明下载文件报错了
      if (data.type === "application/json") {
        // 读取blob对象中的json信息
        const fileReader = new FileReader();
        fileReader.onload = function () {
          // 根据状态码进行统一处理
          return statusCode.status(JSON.parse(fileReader.result));
        }
        fileReader.readAsText(data);
      } else {
        // 从response.headers中获取文件名
        if (response.headers["content-disposition"]) {
          let str = response.headers["content-disposition"];
          str = str.substring(str.indexOf("=") + 1, str.length);
          let fileName = decodeURI(str);
          data.fileName = fileName;
        }
        return data;
      }
    } else {
      // 根据状态码进行统一处理
      return statusCode.status(data);
    }
  },
  (error) => {
    let { message } = error;
    if (message === "Network Error") {
      message = "服务器连接异常！";
    } else if (message.includes("timeout")) {
      message = "请求超时！";
    } else if (message.includes("Request failed with status code")) {
      message = "接口" + message.substr(message.length - 3) + "异常！";
    }
    statusCode.status({
      errorCode: 999999,
      message,
    });
    Promise.reject(error);
  }
);

const request = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url, params, headerConfig) {
    return new Promise((resolve, reject) => {
      service
        .post(url, params, headerConfig)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default request;
