import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import {
  IconDashboard, IconCodeSquare, IconBug, IconMenu
} from '@arco-design/web-react/icon';

import LayoutPage from '@/layout';
import EmptyLayout from '@/layout/emptyLayout';
import MultiTwoLayout from '@/views/multi/two/layout';
import LoadingComponent from '@/compontents/Loading';

import RequireAuth from '@/compontents/Auth';

const load = (children) => <Suspense fallback={<LoadingComponent />}>{children}</Suspense>;

const Login = lazy(() => import('@/views/login'));
// const Home = lazy(() => import('@/views/home'));
const Form = lazy(() => import('@/views/comp/form'));
const Btn = lazy(() => import('@/views/comp/btn'));
const LocaleCompontent = lazy(() => import('@/views/comp/locale'));

// const Docs = lazy(() => import('@/views/docs'));
const One = lazy(() => import('@/views/multi/one'));
const PageOne = lazy(() => import('@/views/multi/two/page-one'));
const PageTwo = lazy(() => import('@/views/multi/two/page-two'));
const Workplace = lazy(() => import('@/views/dashboard/workplace'));
const Resource = lazy(() => import('@/views/dashboard/resource'));
const Error404 = lazy(() => import('@/views/error/404'));
const Error500 = lazy(() => import('@/views/error/500'));

const requirePublicLayout = () => (
  <RequireAuth>
    <LayoutPage />
  </RequireAuth>
);

const requireEmptyLayout = () => (
  <RequireAuth>
    <EmptyLayout />
  </RequireAuth>
);

const routeList = [
  {
    path: '/',
    element: requireEmptyLayout(),
    children: [
      {
        index: true,
        key: 'login',
        element: load(<Login />),
        meta: {
          title: '登录'
        }
      }
    ]
  },
  {
    path: '/dashboard',
    key: '/dashboard',
    element: requirePublicLayout(),
    meta: {
      name: 'menu.dashboard',
      title: '仪表盘',
      icon: <IconDashboard />
    },
    children: [
      {
        path: 'workplace',
        key: '/dashboard/workplace',
        element: load(<Workplace />),
        meta: {
          name: 'menu.dashboard.workplace',
          title: '工作台'
        }
      },
      {
        path: 'resource',
        key: '/dashboard/resource',
        element: load(<Resource />),
        meta: {
          name: 'menu.dashboard.resource',
          title: '资源中心'
        }
      }
    ]
  },
  {
    path: '/comp',
    key: '/comp',
    element: requirePublicLayout(),
    meta: {
      title: '组件库',
      name: 'menu.comp',
      icon: <IconCodeSquare />
    },
    children: [
      {
        path: 'btn',
        key: '/comp/btn',
        element: load(<Btn />),
        meta: {
          name: 'menu.comp.btn',
          title: '按钮'
        }
      },
      {
        path: 'form',
        key: '/comp/form',
        element: load(<Form />),
        meta: {
          name: 'menu.comp.form',
          title: '表单'
        }
      },
      {
        path: 'locale',
        key: '/comp/locale',
        element: load(<LocaleCompontent />),
        meta: {
          name: 'menu.comp.intl',
          title: '国际化'
        }
      }
    ]
  },
  {
    path: '/multi',
    key: '/multi',
    element: requirePublicLayout(),
    meta: {
      name: 'menu.multi',
      title: '多级菜单',
      icon: <IconMenu />
    },
    children: [
      {
        path: 'one',
        key: '/multi/one',
        element: load(<One />),
        meta: {
          name: 'menu.multi.one',
          title: '一级菜单'
        }
      },
      {
        path: 'two',
        key: '/multi/two',
        element: load(<MultiTwoLayout />),
        meta: {
          name: 'menu.multi.two',
          title: '二级菜单'
        },
        children: [
          {
            path: 'page-one',
            key: '/multi/two/page-one',
            element: load(<PageOne />),
            meta: {
              name: 'menu.multi.two.2-1',
              title: '2-1菜单'
            }
          },
          {
            path: 'page-two',
            key: '/multi/two/page-two',
            element: load(<PageTwo />),
            meta: {
              name: 'menu.multi.two.2-2',
              title: '2-2菜单'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/error',
    key: '/error',
    element: requirePublicLayout(),
    meta: {
      name: 'menu.error',
      title: '错误页面',
      icon: <IconBug />
    },
    children: [
      {
        path: '404',
        key: '/error/404',
        element: load(<Error404 />),
        meta: {
          name: 'menu.error.404',
          title: '404页面'
        }
      },
      {
        path: '500',
        key: '/error/500',
        element: load(<Error500 />),
        meta: {
          name: 'menu.error.500',
          title: '500页面'
        }
      }
    ]
  },
  {
    path: '*',
    element: load(<Error404 />)
  }
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export const localRouters = routeList;
export default RenderRouter;
