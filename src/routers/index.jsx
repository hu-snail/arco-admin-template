import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

import LayoutPage from "@/layout";
import EmptyLayout from "@/layout/emptyLayout";

const Login = lazy(() => import("@/views/login"));
const Home = lazy(() => import("@/views/home"));
const Form = lazy(() => import("@/views/form"));

const routeList = [
  {
    path: "/",
    element: <EmptyLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/page",
    element: <LayoutPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "form",
        element: <Form />,
      },
    ],
  },
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
