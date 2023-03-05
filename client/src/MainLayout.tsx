import React, { memo } from "react";
import { Layout } from "antd";
import "antd/dist/reset.css";
const { Footer } = Layout;

const MainLayout = memo(({ children }: any) => {
  return (
    <>
      <Layout style={{ minHeight: "calc(100vh - 128px)" }}>
        <Layout style={{ height: "100%" }}>{children}</Layout>
        <Footer style={{ textAlign: "center" }}>SPH</Footer>
      </Layout>
    </>
  );
});

Layout.displayName = "MainLayout";
export default MainLayout;
