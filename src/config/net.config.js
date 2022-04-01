export default {
  development: {
    apiBaseUrl: "/api", // 开发环境接口请求，后用于 proxy 代理配置
  },
  beta: {
    apiBaseUrl: "//www.beta.xxx.com/v1", // 测试环境接口地址
  },
  release: {
    apiBaseUrl: "//www.xxx.com/v1", // 正式环境接口地址
  },
};
