const data = [
  {
    path: "/page",
    title: "",
    children: [
      {
        path: "home",
        title: "首页",
      },
      {
        path: "comp",
        title: "组件",
        children: [
          {
            path: "btn",
            title: "按钮",
          },
          {
            path: "form",
            title: "表单",
          },
          {
            path: "echarts",
            title: "图表",
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
            title: "404",
          },
          {
            path: "500",
            title: "500",
          },
        ],
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
