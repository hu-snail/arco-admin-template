const data = [
  {
    path: "home",
    title: "首页",
  },
  {
    path: "comp",
    title: "组件库",
    children: [
      {
        path: "btn",
        title: "按钮组件",
      },
      {
        path: "form",
        title: "表单组件",
      },
      {
        path: "echarts",
        title: "图表组件",
      },
    ],
  },
  {
    path: "docs",
    title: "文档",
  },
  {
    path: "error",
    title: "错误页面",
    children: [
      {
        path: "404",
        title: "404页面",
      },
      {
        path: "500",
        title: "500页面",
      },
    ],
  },
];
export default [
  {
    url: "/api/menu/navigate",
    type: "post",
    response() {
      return { code: 200, msg: "success", data: data };
    },
  },
];
