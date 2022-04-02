import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

import LayoutPage from "@/layout";
import EmptyLayout from "@/layout/emptyLayout";
import CompLayout from "@/views/comp/layout";
import { IconHome, IconCode, IconFile } from "@arco-design/web-react/icon";
import RequireAuth from "@/compontents/Auth";

const Login = lazy(() => import("@/views/login"));
const Home = lazy(() => import("@/views/home"));
const Form = lazy(() => import("@/views/comp/form"));
const Btn = lazy(() => import("@/views/comp/btn"));
const Docs = lazy(() => import("@/views/docs"));

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
        element: <Login />,
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
        element: <Home />,
        meta: {
          icon: <IconHome />,
          title: "首页",
        },
      },
      {
        path: "comp",
        element: <CompLayout />,
        meta: {
          icon: <IconCode />,
          title: "组件",
        },
        children: [
          {
            path: "btn",
            element: <Btn />,
            meta: {
              title: "按钮",
            },
          },
          {
            path: "form",
            element: <Form />,
            meta: {
              title: "表单",
            },
          },
        ],
      },
      {
        path: "docs",
        element: <Docs />,
        meta: {
          title: "文档",
          icon: <IconFile />,
        },
      },
    ],
  },
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export const routers = routeList;
export default RenderRouter;
