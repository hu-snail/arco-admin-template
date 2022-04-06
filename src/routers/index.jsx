import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import LayoutPage from "@/layout";
import EmptyLayout from "@/layout/emptyLayout";
import CompLayout from "@/views/comp/layout";
import MultiLayout from "@/views/multi/layout";
import MultiTwoLayout from "@/views/multi/two/layout";
import LoadingComponent from "@/compontents/Loading";

const load = (children) => {
  return <Suspense fallback={<LoadingComponent />}>{children}</Suspense>;
};

import {
  IconHome,
  IconCode,
  IconFile,
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
const routeList = [
  {
    path: "/",
    element: (
      <RequireAuth>
        <EmptyLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        key: "login",
        element: load(<Login />),
      },
    ],
  },
  {
    path: "/page",
    element: (
      <RequireAuth>
        <LayoutPage />
      </RequireAuth>
    ),
    children: [
      {
        path: "home",
        key: "home",
        element: load(<Home />),
        meta: {
          icon: <IconHome />,
          title: "首页",
        },
      },
      {
        path: "comp",
        key: "comp",
        element: load(<CompLayout />),
        meta: {
          icon: <IconCode />,
          title: "组件",
        },
        children: [
          {
            path: "btn",
            key: "comp/btn",
            element: load(<Btn />),
            meta: {
              title: "按钮",
            },
          },
          {
            path: "form",
            key: "comp/form",
            element: load(<Form />),
            meta: {
              title: "表单",
            },
          },
        ],
      },
      {
        path: "docs",
        key: "docs",
        element: load(<Docs />),
        meta: {
          title: "文档",
          icon: <IconFile />,
        },
      },
      {
        path: "multi",
        key: "multi",
        element: load(<MultiLayout />),
        meta: {
          title: "多级菜单",
          icon: <IconMenu />,
        },
        children: [
          {
            path: "one",
            key: "multi/one",
            element: load(<One />),
            meta: {
              title: "一级菜单",
            },
          },
          {
            path: "two",
            key: "multi/two",
            element: load(<MultiTwoLayout />),
            meta: {
              title: "二级菜单",
            },
            children: [
              {
                path: "page-one",
                key: "multi/two/page-one",
                element: load(<PageOne />),
                meta: {
                  title: "2-1菜单",
                },
              },
              {
                path: "page-two",
                key: "multi/two/page-two",
                element: load(<PageTwo />),
                meta: {
                  title: "2-2菜单",
                },
              },
            ],
          },
        ],
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

export const routers = routeList;
export default RenderRouter;
