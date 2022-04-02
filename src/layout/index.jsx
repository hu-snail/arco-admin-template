// layout/index.jsx
import React, { useState } from "react";
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
import { logout } from "@/store/actions/user";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function PublicLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
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
      <Sider
        width="240"
        collapsed={collapsed}
        collapsible
        trigger={null}
        breakpoint="xl"
      >
        <div className="logo"></div>
        <Menu
          defaultOpenKeys={["1"]}
          defaultSelectedKeys={["0_1"]}
          onClickMenuItem={(key) =>
            Message.info({ content: `You select ${key}`, showIcon: true })
          }
          style={{ width: "100%" }}
        >
          <MenuItem key="0_1">
            <IconHome />
            首页
          </MenuItem>
          <MenuItem key="0_2">
            <IconCalendar />
            表单
          </MenuItem>
          <MenuItem key="0_3">
            <IconCalendar />
            组件
          </MenuItem>
          <SubMenu
            key="1"
            title={
              <span>
                <IconCalendar />
                多级菜单
              </span>
            }
          >
            <MenuItem key="1_1">菜单 1</MenuItem>
            <MenuItem key="1_2">菜单 2</MenuItem>
            <SubMenu key="2" title="Navigation 2">
              <MenuItem key="2_1">Menu 1</MenuItem>
              <MenuItem key="2_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="3" title="Navigation 3">
              <MenuItem key="3_1">Menu 1</MenuItem>
              <MenuItem key="3_2">Menu 2</MenuItem>
              <MenuItem key="3_3">Menu 3</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="4"
            title={
              <span>
                <IconCalendar />
                多级菜单 2
              </span>
            }
          >
            <MenuItem key="4_1">Menu 1</MenuItem>
            <MenuItem key="4_2">Menu 2</MenuItem>
            <MenuItem key="4_3">Menu 3</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
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
        <Layout className="layout-main">
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="layout-content">
            <Outlet />
          </Content>
          <Footer className="layout-footer">
            © hu-snail-2022 arco-admin-template
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default React.memo(PublicLayout);
