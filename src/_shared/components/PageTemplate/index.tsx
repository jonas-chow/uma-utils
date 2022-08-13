import React from "react";
import { Link } from "react-router-dom";
import { Col, Layout, Row } from "antd";

const { Header, Content } =  Layout;

type Props = {
  children: JSX.Element;
};

const linkStyle = {
  color: "white",
};

const PageTemplate = ({ children }: Props) => {
  return (
    <Layout>
      <Header>
        <Row>
          <Col span={6}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/node-quality" style={linkStyle}>
              Node Quality
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/stamina" style={linkStyle}>
              Stamina
            </Link>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: "100vh" }}>
        {children}
      </Content>
    </Layout>
  )
};

export default PageTemplate;