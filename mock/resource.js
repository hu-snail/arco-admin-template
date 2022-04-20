const prefix = 'https://raw.githubusercontent.com/hu-snail/arco-admin-template/master/src/assets/logo/';

const list = [
  {
    title: 'React文档',
    desc: '构建用户界面的 JavaScript 库',
    url: 'https://react.docschina.org/',
    logo: 'logo.svg'
  },
  {
    title: 'Arco Desgin',
    desc: '字节跳动出品的企业级设计系统',
    url: 'https://arco.design/react/docs/start',
    logo: 'arco-logo.svg'
  },
  {
    title: 'Ant Design',
    desc: '为 Web 应用提供了丰富的基础 UI 组件',
    url: 'https://ant.design/docs/react/introduce-cn',
    logo: 'antd-logo.svg'
  },
  {
    title: 'Semi Desgin',
    desc: ' 由字节跳动抖音前端与 UED 团队设计、开发并维护',
    url: 'https://semi.design/zh-CN/',
    logo: 'semi-logo.png'
  },
  {
    title: 'Element UI',
    desc: '饿了么出品的 React 组件库',
    url: 'https://elemefe.github.io/element-react/#/zh-CN/quick-start',
    logo: 'element-logo.svg'
  },
  {
    title: 'Vite 中文文档',
    desc: '下一代前端开发与构建工具',
    url: 'https://vitejs.cn/',
    logo: 'vite-logo.svg'
  },
  {
    title: 'Create App',
    desc: '让你仅通过一行命令，即可构建现代化的 Web 应用',
    url: 'https://create-react-app.bootcss.com/',
    logo: 'create-app-logo.svg'
  },
  {
    title: 'Next.js',
    desc: 'Next.js 为您提供生产所需的所有功能的最佳开发人员体验',
    url: 'https://github.com/vercel/next.js',
    logo: 'next-logo.png'
  },
  {
    title: 'Gatsby.js',
    desc: '使用 React 构建快速、现代的应用程序和网站',
    url: 'https://github.com/gatsbyjs/gatsby',
    logo: 'gatsby-logo.svg'
  },
  {
    title: 'Remix',
    desc: ' 建立更好的网站。使用 Web 基础创建现代、有弹性的用户体验',
    url: 'https://github.com/remix-run/remix',
    logo: 'remix-logo.png'
  },
  {
    title: 'Redux',
    desc: 'A Predictable State Container for JS Apps',
    url: 'https://vueuse.org/',
    logo: 'redux-logo.svg'
  },
  {
    title: 'Mobx',
    desc: '简单、可扩展的状态管理',
    url: 'https://github.com/mobxjs/mobx',
    logo: 'mobx-logo.png'
  },
  {
    title: 'React Query',
    desc: '在您的 React 和 React Native 应用程序中获取、缓存和更新数据，而无需触及任何“全局状态”',
    url: 'https://github.com/pmndrs/zustand',
    logo: 'react-query-logo.svg'
  },
  {
    title: 'React Router',
    desc: 'React 的声明式路由',
    url: 'https://github.com/remix-run/react-router',
    logo: 'router-logo.png'
  }
];

const communityList = [
  {
    title: '掘金',
    desc: '一个帮助开发者成长的社区',
    url: 'https://juejin.cn/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/juejin.png'
  },
  {
    title: 'SF思否',
    desc: '思否是中国领先的开发者技术社区',
    url: 'https://segmentfault.com/',
    logo: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_87feae864e274579824d7398a588e042.png'
  },
  {
    title: 'CSDN',
    desc: '中文最大的技术社区',
    url: 'https://www.csdn.net/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/csdn.png'
  },
  {
    title: '开源中国',
    desc: '目前国内最大的开源技术社区',
    url: 'https://www.oschina.net/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/oschina.ico'
  },
  {
    title: 'StackOverflow',
    desc: '全球最大的技术问答社区',
    url: 'https://stackoverflow.com/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/stackoverflow.svg'
  },
  {
    title: '菜鸟教程',
    desc: '学的不仅是技术，更是梦想',
    url: 'https://www.runoob.com/',
    logo: 'https://static.runoob.com/images/favicon.ico'
  }
];

const teamList = [
  {
    title: '阿里技术团队',
    desc: '来源：CSDN',
    url: 'https://blog.csdn.net/Taobaojishu',
    logo: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b2f6357dbd094a31a9f48531d0dbfdcc.png'
  },
  {
    title: '字节跳动团队',
    desc: '来源：CSDN',
    url: 'https://blog.csdn.net/ByteDanceTech',
    logo: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_45125bd292ef430fbb9e4cdafd76b1f3.png'
  },
  {
    title: '腾讯技术工程',
    desc: '来源：CSDN',
    url: 'https://blog.csdn.net/Tencent_TEG',
    logo: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5fb68f6c152f4559885015420a822a51.png'
  },
  {
    title: '美团技术团队',
    desc: '来源：meituan',
    url: 'https://tech.meituan.com/',
    logo: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_63395250de7a43c8a42223e723b45c25.png'
  },
  {
    title: '饿了么前端',
    desc: '来源：知乎',
    url: 'https://zhuanlan.zhihu.com/ElemeFE',
    logo: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d2c05dac268c46e989de3d62399886b7.png'
  },
  {
    title: 'Facebook',
    desc: '来源：Facebook',
    url: 'https://engineering.fb.com/',
    logo: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a5f72c028f114584b302954b036c40d9.png'
  }
];

const studyList = [
  {
    title: 'GitHub',
    desc: '世界最大的开源代码共享社区',
    url: 'https://github.com/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/github.svg'
  },
  {
    title: 'Gitchat',
    desc: 'IT知识分享平台',
    url: 'https://gitbook.cn/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/gitchat.png'
  },
  {
    title: 'Gitee',
    desc: '中国最大的开源代码共享社区',
    url: 'https://gitee.com/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/gitee.png'
  },
  {
    title: '慕课网',
    desc: '程序员的梦工厂',
    url: 'https://www.imooc.com/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/imooc.png'
  },
  {
    title: '掘金',
    desc: '一个帮助开发者成长的社区',
    url: 'https://juejin.cn/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/juejin.png'
  },
  {
    title: 'CSDN',
    desc: '中文最大的技术社区',
    url: 'https://www.csdn.net/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/csdn.png'
  }
];

export default [
  {
    url: '/api/getResouceList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: {
          list, prefix, communityList, teamList, studyList
        }
      };
    }
  }
];
