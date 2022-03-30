import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

import LayoutPage from "@/layout";

const Home = lazy(() => import("@/views/home"));
const Form = lazy(() => import("@/views/form"));

const routeList = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
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
