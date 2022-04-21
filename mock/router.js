const data = [
  {
    path: '/dashboard',
    key: 'dashboard',
    children: [
      {
        path: 'workplace',
        key: 'workplace'
      },
      {
        path: 'resource',
        key: 'resource'
      }
    ]
  },
  {
    path: '/comp',
    title: '组件库',
    children: [
      {
        path: 'btn',
        title: '按钮组件'
      },
      {
        path: 'form',
        title: '表单组件'
      },
      {
        path: 'locale',
        title: '国际化'
      },
      {
        path: 'echarts',
        title: '图表组件'
      }
    ]
  },
  {
    path: '/multi',
    title: '多级菜单',
    children: [
      {
        path: 'one',
        title: '一级菜单'
      },
      {
        path: 'two',
        title: '二级菜单',
        children: [
          {
            path: 'page-one',
            title: '2-1菜单'
          },
          {
            path: 'page-two',
            title: '2-2菜单'
          }
        ]
      }
    ]
  },
  {
    path: '/error',
    title: '错误页面',
    children: [
      {
        path: '404',
        title: '404页面'
      },
      {
        path: '500',
        title: '500页面'
      }
    ]
  }
];
export default [
  {
    url: '/api/menu/navigate',
    type: 'post',
    response() {
      return {
        code: 200, msg: 'success', data: data
      };
    }
  }
];
