import axios from "axios";
import { Message, Modal } from "@arco-design/web-react";
import config from "@/config/net.config";
import store from "@/store";
import { setting } from "@/config/setting";
const { tokenName } = setting;
let tokenLose = true;

const { baseURL, successCode, invalidCode, requestTimeout, contentType } =
  config;

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    "Content-Type": contentType,
  },
});

// request interceptor
instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // if (store.getState().userReducer) {
    //   const { accessToken } = store.getState().userReducer;
    //   // 设置token
    //   if (accessToken) {
    //     // let each request carry token]
    //     config.headers[tokenName] = accessToken;
    //   }
    // }

    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
instance.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */
  (response) => {
    const res = response.data;
    // 请求出错处理
    // -1 超时、token过期或者没有获得授权
    if (res.code === invalidCode && tokenLose) {
      tokenLose = false;
      Modal.confirm({
        title: "重新登录",
        content: "您已掉线，或者访问权限出错，请重新登录！",
        okText: "确定",
        cancelText: "取消",
        onOk: () => {
          // 重新登录
          tokenLose = true;
          location.reload();
        },
        onCancel: () => {
          tokenLose = true;
        },
      });
    }

    if (successCode.indexOf(res.code) === -1) {
      Message.error(res.msg);
      return Promise.reject(res);
    }
    return res;
  },
  (error) => {
    Message.error("请求出错啦！");
    return Promise.reject(error);
  }
);

export default instance;
