import { useState, useEffect } from "react";
import { Breadcrumb } from "@arco-design/web-react";
import { useLocation } from "react-router-dom";
import { localList } from "@/utils/router";

export default function BreadcrumbCompontent() {
  const [breadcrumb, setBreadCrumb] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    // const routers = localList();
    // filterRouter(routers);
  }, [pathname]);
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
}
