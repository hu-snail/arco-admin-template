const prefix =
  "https://raw.githubusercontent.com/hu-snail/arco-admin-template/master/src/assets/logo/";

const list = [
  {
    title: "React文档",
    desc: "构建用户界面的 JavaScript 库",
    url: "https://react.docschina.org/",
    logo: "logo.svg",
  },
  {
    title: "Arco Desgin",
    desc: "字节跳动出品的企业级设计系统",
    url: "https://arco.design/react/docs/start",
    logo: "arco-logo.svg",
  },
  {
    title: "Ant Design",
    desc: "为 Web 应用提供了丰富的基础 UI 组件",
    url: "https://ant.design/docs/react/introduce-cn",
    logo: "antd-logo.svg",
  },
  {
    title: "Semi Desgin",
    desc: " 由字节跳动抖音前端与 UED 团队设计、开发并维护",
    url: "https://semi.design/zh-CN/",
    logo: "semi-logo.png",
  },
  {
    title: "Element React",
    desc: "饿了么出品的 React 组件库",
    url: "https://elemefe.github.io/element-react/#/zh-CN/quick-start",
    logo: "element-logo.svg",
  },
  {
    title: "Vite 中文文档",
    desc: "下一代前端开发与构建工具",
    url: "https://vitejs.cn/",
    logo: "vite-logo.svg",
  },
  {
    title: "Create React App",
    desc: "让你仅通过一行命令，即可构建现代化的 Web 应用",
    url: "https://create-react-app.bootcss.com/",
    logo: "create-app-logo.svg",
  },
  {
    title: "Next.js",
    desc: "Next.js 为您提供生产所需的所有功能的最佳开发人员体验",
    url: "https://github.com/vercel/next.js",
    logo: "next-logo.png",
  },
  {
    title: "Gatsby.js",
    desc: "使用 React 构建快速、现代的应用程序和网站",
    url: "https://github.com/gatsbyjs/gatsby",
    logo: "gatsby-logo.svg",
  },
  {
    title: "Remix",
    desc: " 建立更好的网站。使用 Web 基础创建现代、有弹性的用户体验",
    url: "https://github.com/remix-run/remix",
    logo: "remix-logo.png",
  },
  {
    title: "Redux",
    desc: "A Predictable State Container for JS Apps",
    url: "https://vueuse.org/",
    logo: "redux-logo.svg",
  },
  {
    title: "Mobx",
    desc: "简单、可扩展的状态管理",
    url: "https://github.com/mobxjs/mobx",
    logo: "mobx-logo.png",
  },
  {
    title: "React Query",
    desc: "在您的 React 和 React Native 应用程序中获取、缓存和更新数据，而无需触及任何“全局状态”",
    url: "https://github.com/pmndrs/zustand",
    logo: "react-query-logo.svg",
  },
  {
    title: "React Router V6",
    desc: "React 的声明式路由",
    url: "https://github.com/remix-run/react-router",
    logo: "router-logo.svg",
  },
];

export default [
  {
    url: "/api/getResouceList",
    type: "get",
    response() {
      return {
        code: 200,
        msg: "success",
        data: { list, prefix },
      };
    },
  },
];
