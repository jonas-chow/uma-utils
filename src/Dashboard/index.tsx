import React from "react";
import { Layout } from "antd";
import styles from "./styles.scss";

const { Header, Content } =  Layout;

const Dashboard = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        header
      </Header>
      <Content>
        hello world!
      </Content>
    </Layout>
  );
};

export default Dashboard;