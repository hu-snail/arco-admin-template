import React, { useState, useEffect } from "react";
import { Menu } from "@arco-design/web-react";
import { SubMenuCompontent } from "../SubMenu";
import { useNavigate, useLocation } from "react-router-dom";
import store from "@/store";
const MenuItem = Menu.Item;

export default function MenuCompontent() {
  const [routerList, setRouterList] = useState([]);
  const [selectRouter, setSelectRouter] = useState("home");
  const [opneKeys, setOpenKeys] = useState(["comp", "multi"]);
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    const { routers } = store.getState().routerReducer;
    setRouterList(routers);
  }, []);

  useEffect(() => {
    const currentPath = pathname.replace(/\/page\//g, "");
    setSelectRouter(currentPath);
  }, [pathname]);

  return (
    <Menu
      selectedKeys={[selectRouter]}
      openKeys={opneKeys}
      levelIndent={30}
      onClickMenuItem={(key) => navigate(key)}
      onClickSubMenu={(_, openKeys) => {
        setOpenKeys(openKeys);
      }}
      style={{ width: "100%" }}
    >
      {routerList.map((item) => {
        if (item.children) {
          return SubMenuCompontent(item);
        } else {
          return (
            <MenuItem key={item.key}>
              {item.meta.icon ? item.meta.icon : ""}
              {item.meta.title}
            </MenuItem>
          );
        }
      })}
    </Menu>
  );
}
