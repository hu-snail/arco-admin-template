// layout/index.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "@arco-design/web-react";

function PublicLayout() {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default React.memo(PublicLayout);
