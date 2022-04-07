import { useState, useEffect } from "react";
import { Breadcrumb } from "@arco-design/web-react";
import { useLocation } from "react-router-dom";
import { getCurrentRouter } from "@/utils/router";

export default function BreadcrumbCompontent() {
  const [breadcrumbs, setBreadCrumbs] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const currentPaths = pathname.replace(/\/page\//g, "").split("/");
    let list = [];
    for (let i = 0; i < currentPaths.length; i++) {
      const currentKey = currentPaths.slice(0, i * 1 + 1).join("/");
      list.push(getCurrentRouter(currentKey));
    }
    setBreadCrumbs(list);
  }, [pathname]);
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {breadcrumbs.map((item, index) => {
        return (
          <Breadcrumb.Item key={index}>
            {!index ? item.icon : ""}
            {item.title}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
