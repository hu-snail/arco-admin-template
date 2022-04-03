// layout/index.jsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.less";
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Message,
  Avatar,
  Dropdown,
} from "@arco-design/web-react";
import {
  IconHome,
  IconCalendar,
  IconCaretRight,
  IconCaretLeft,
  IconUser,
  IconExport,
} from "@arco-design/web-react/icon";
import { useNavigate } from "react-router-dom";
import { logout } from "@/store/actions/user";
import store from "@/store";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function PublicLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [routerList, setRouterList] = useState([]);
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
  return (
    <Layout className="layout-container">
      <Header className="layout-header">
        <Button shape="round" className="trigger" onClick={handleCollapsed}>
          {collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        </Button>
        <div className="layout-header-right">
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
          trigger={null}
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
                return (
                  <SubMenu
                    key={item.path}
                    title={
                      <span>
                        {item.meta.icon}
                        {item.meta.title}
                      </span>
                    }
                  >
                    {item.children.map((option) => {
                      return (
                        <MenuItem key={`${item.path}/${option.path}`}>
                          {option.meta.title}
                        </MenuItem>
                      );
                    })}
                  </SubMenu>
                );
              } else {
                return (
                  <MenuItem key={item.path}>
                    {item.meta.icon}
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
              <Outlet />
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
