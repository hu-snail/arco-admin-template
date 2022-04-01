import axios from "axios";
import { Message, Modal } from "@arco-design/web-react";
import config from "@/config/net.config";

const SUCCESS_CODE = 200;
let tokenLose = true;

const MODE = import.meta.env.MODE; // 环境变量
let baseURL = config[MODE].apiBaseUrl;

const instance = axios.create({
  baseURL,
  timeout: 10 * 1000, // 超时时间
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

let apiUrl = "";
// request interceptor
instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // 设置token
    //   if (store.getters.token) {
    //     // let each request carry token
    //     // config.headers['Authorization'] = getToken()
    //   }
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
    if (res.resultCode === -1 && tokenLose) {
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
    if (res.resultCode !== SUCCESS_CODE) {
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
