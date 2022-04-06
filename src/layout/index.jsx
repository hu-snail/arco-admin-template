// layout/index.jsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.less";
import {
  Space,
  Layout,
  Menu,
  Input,
  Breadcrumb,
  Button,
  Message,
  Avatar,
  Dropdown,
  Tooltip,
} from "@arco-design/web-react";
import {
  IconFullscreen,
  IconFullscreenExit,
  IconLanguage,
  IconMoonFill,
  IconDragDot,
  IconSun,
  IconNotification,
  IconRefresh,
  IconMenuFold,
  IconMenuUnfold,
  IconUser,
  IconExport,
  IconSkin,
  IconSearch,
} from "@arco-design/web-react/icon";
import { SubMenuCompontent } from "./compontents/SubMenu";
import LogoCompontent from "./compontents/Logo";
import { useNavigate } from "react-router-dom";
import { logout } from "@/store/actions/user";
import store from "@/store";

import screenfull from "screenfull";

const MenuItem = Menu.Item;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function PublicLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [routerList, setRouterList] = useState([]);
  const [isScreenfull, setScreenfull] = useState(false);
  const [isRefresh, setRefresh] = useState(true);
  const [mode, setMode] = useState("light");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const { routers } = store.getState().routerReducer;
    setRouterList(routers);
  }, []);

  const iconStyle = {
    marginRight: 8,
    fontSize: 16,
    transform: "translateY(1px)",
  };

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleClickMenuItem = (key, keyPath) => {
    if (key === "logout") dispatch(logout());
  };

  const handleChangeScreen = () => {
    if (!screenfull.isEnabled) {
      Message.warning("进入全屏失败");
      return false;
    }
    setScreenfull(!isScreenfull);
    screenfull.toggle();
  };

  useEffect(() => {
    setRefresh(true);
  }, [isRefresh]);

  const handlerChangeRefresh = () => {
    setRefresh(false);
  };

  const handleChangeMode = () => {
    const modeType = mode === "light" ? "dark" : "light";
    setMode(modeType);
    if (modeType === "dark") document.body.setAttribute("arco-theme", "dark");
    else document.body.removeAttribute("arco-theme");
  };

  return (
    <Layout className="layout-container">
      <Header className="layout-header">
        <LogoCompontent />
        <div className="layout-header-right">
          <div className="layout-header-edit">
            <Space size="medium">
              <Input
                style={{ width: 200 }}
                prefix={<IconSearch />}
                placeholder="请输入内容查询"
              />
              <Tooltip
                position="bottom"
                trigger="hover"
                content={`点击${isScreenfull ? "退出" : "切换"}全屏模式`}
              >
                <Button
                  shape="circle"
                  icon={
                    isScreenfull ? <IconFullscreenExit /> : <IconFullscreen />
                  }
                  onClick={handleChangeScreen}
                />
              </Tooltip>
              <Dropdown
                position="br"
                droplist={
                  <Menu onClickMenuItem={handleClickMenuItem}>
                    <Menu.Item key="admin">简体中文</Menu.Item>
                    <Menu.Item key="logout">English</Menu.Item>
                  </Menu>
                }
              >
                <Button shape="circle" icon={<IconLanguage />} />
              </Dropdown>
              <Tooltip position="bottom" trigger="hover" content="点击切换皮肤">
                <Button shape="circle" icon={<IconSkin />} />
              </Tooltip>
              <Button shape="circle" icon={<IconNotification />} />
              <Tooltip
                position="bottom"
                trigger="hover"
                content={`点击切换为${mode === "light" ? "暗黑" : "亮色"}模式`}
              >
                <Button
                  shape="circle"
                  icon={mode === "light" ? <IconMoonFill /> : <IconSun />}
                  onClick={handleChangeMode}
                />
              </Tooltip>
              <Tooltip position="bottom" trigger="hover" content="刷新">
                <Button
                  shape="circle"
                  icon={<IconRefresh />}
                  onClick={handlerChangeRefresh}
                />
              </Tooltip>
            </Space>
          </div>
          <Dropdown
            position="br"
            droplist={
              <Menu onClickMenuItem={handleClickMenuItem}>
                <Menu.Item key="admin">
                  <IconUser style={iconStyle} />
                  个人信息
                </Menu.Item>
                <Menu.Item key="logout">
                  <IconExport style={iconStyle} />
                  退出登录
                </Menu.Item>
              </Menu>
            }
          >
            <Avatar style={{ backgroundColor: "#165DFF" }}>H</Avatar>
          </Dropdown>
        </div>
      </Header>

      <Layout className="layout-main-wrap">
        <Sider
          width="240"
          collapsed={collapsed}
          collapsible
          onCollapse={handleCollapsed}
          trigger={collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
          breakpoint="xl"
        >
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
        </Sider>

        <Content className="layout-content">
          <div className="layout-content-breadcrumb">
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="layout-main-content">
              {isRefresh ? <Outlet /> : ""}
            </div>
          </div>
          <Footer className="layout-footer">
            © hu-snail-2022 arco-admin-template
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}

export default React.memo(PublicLayout);
