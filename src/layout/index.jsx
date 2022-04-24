// layout/index.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './style.less';
import { Layout } from '@arco-design/web-react';
import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-react/icon';
import {
  LogoCompontent,
  MenuCompontent,
  BreadcrumbCompontent,
  NavBarItemCompontent,
  AvatarComponent
} from './compontents';
// import store from "@/store";

const { Sider } = Layout;
const { Header } = Layout;
const { Footer } = Layout;
const { Content } = Layout;

function PublicLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className="layout-container">
      <Header className="layout-header">
        <LogoCompontent />
        <div className="layout-header-right">
          <NavBarItemCompontent />
          <AvatarComponent />
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
          <MenuCompontent />
        </Sider>
        <Content className="layout-content">
          <div className="layout-content-breadcrumb">
            <BreadcrumbCompontent />
            <div className="layout-main-content">
              <Outlet />
            </div>
          </div>
          <Footer className="layout-footer">© hu-snail-2022 arco-admin-template</Footer>
        </Content>
      </Layout>
    </Layout>
  );
}

export default React.memo(PublicLayout);
