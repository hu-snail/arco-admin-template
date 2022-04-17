import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import LayoutPage from "@/layout";
import EmptyLayout from "@/layout/emptyLayout";
import MultiTwoLayout from "@/views/multi/two/layout";
import LoadingComponent from "@/compontents/Loading";

const load = (children) => {
  return <Suspense fallback={<LoadingComponent />}>{children}</Suspense>;
};

import {
  IconDashboard,
  IconCodeSquare,
  IconBug,
  IconMenu,
} from "@arco-design/web-react/icon";
import RequireAuth from "@/compontents/Auth";

const Login = lazy(() => import("@/views/login"));
const Home = lazy(() => import("@/views/home"));
const Form = lazy(() => import("@/views/comp/form"));
const Btn = lazy(() => import("@/views/comp/btn"));
const Docs = lazy(() => import("@/views/docs"));
const One = lazy(() => import("@/views/multi/one"));
const PageOne = lazy(() => import("@/views/multi/two/page-one"));
const PageTwo = lazy(() => import("@/views/multi/two/page-two"));
const Workplace = lazy(() => import("@/views/dashboard/workplace"));
const Resource = lazy(() => import("@/views/dashboard/resource"));
const Error404 = lazy(() => import("@/views/error/404"));
const Error500 = lazy(() => import("@/views/error/500"));
const requirePublicLayout = () => {
  return (
    <RequireAuth>
      <LayoutPage />
    </RequireAuth>
  );
};

const requireEmptyLayout = () => {
  return (
    <RequireAuth>
      <EmptyLayout />
    </RequireAuth>
  );
};

const routeList = [
  {
    path: "/",
    element: requireEmptyLayout(),
    children: [
      {
        index: true,
        key: "login",
        element: load(<Login />),
        meta: {
          title: "登录",
        },
      },
    ],
  },
  {
    path: "/dashboard",
    key: "/dashboard",
    element: requirePublicLayout(),
    meta: {
      title: "仪表盘",
      icon: <IconDashboard />,
    },
    children: [
      {
        path: "workplace",
        key: "/dashboard/workplace",
        element: load(<Workplace />),
        meta: {
          title: "工作台",
        },
      },
      {
        path: "resource",
        key: "/dashboard/resource",
        element: load(<Resource />),
        meta: {
          title: "资源中心",
        },
      },
    ],
  },
  {
    path: "/comp",
    key: "/comp",
    element: requirePublicLayout(),
    meta: {
      title: "组件库",
      icon: <IconCodeSquare />,
    },
    children: [
      {
        path: "btn",
        key: "/comp/btn",
        element: load(<Btn />),
        meta: {
          title: "按钮",
        },
      },
      {
        path: "form",
        key: "/comp/form",
        element: load(<Form />),
        meta: {
          title: "表单",
        },
      },
    ],
  },
  {
    path: "/multi",
    key: "/multi",
    element: requirePublicLayout(),
    meta: {
      title: "多级菜单",
      icon: <IconMenu />,
    },
    children: [
      {
        path: "one",
        key: "/multi/one",
        element: load(<One />),
        meta: {
          title: "一级菜单",
        },
      },
      {
        path: "two",
        key: "/multi/two",
        element: load(<MultiTwoLayout />),
        meta: {
          title: "二级菜单",
        },
        children: [
          {
            path: "page-one",
            key: "/multi/two/page-one",
            element: load(<PageOne />),
            meta: {
              title: "2-1菜单",
            },
          },
          {
            path: "page-two",
            key: "/multi/two/page-two",
            element: load(<PageTwo />),
            meta: {
              title: "2-2菜单",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/error",
    key: "/error",
    element: requirePublicLayout(),
    meta: {
      title: "错误页面",
      icon: <IconBug />,
    },
    children: [
      {
        path: "404",
        key: "/error/404",
        element: load(<Error404 />),
        meta: {
          title: "404页面",
        },
      },
      {
        path: "500",
        key: "/error/500",
        element: load(<Error500 />),
        meta: {
          title: "500页面",
        },
      },
    ],
  },
  {
    path: "*",
    element: <PageTwo />,
  },
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export const localRouters = routeList;
export default RenderRouter;
