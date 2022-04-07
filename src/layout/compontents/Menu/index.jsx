import React, { useState, useEffect } from "react";
import { Menu } from "@arco-design/web-react";
import { SubMenuCompontent } from "../SubMenu";
import { useNavigate } from "react-router-dom";
import store from "@/store";

const MenuItem = Menu.Item;

export default function MenuCompontent() {
  const [routerList, setRouterList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const { routers } = store.getState().routerReducer;
    setRouterList(routers);
  }, []);

  return (
    <Menu
      defaultOpenKeys={["comp"]}
      defaultSelectedKeys={["home"]}
      levelIndent={30}
      onClickMenuItem={(key) => navigate(key)}
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
