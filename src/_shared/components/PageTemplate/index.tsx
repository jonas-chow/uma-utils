import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Layout, Row, Button } from "antd";

const { Header, Content } =  Layout;

type Props = {
  children: JSX.Element;
};

const linkStyle = {
  color: "white",
  width: "100%"
};

const PageTemplate = ({ children }: Props) => {
  const nav = useNavigate();
  
  return (
    <Layout>
      <Header>
        <Row>
          <Col span={6}>
            <Button ghost style={linkStyle} onClick={() => nav("/")}>
              Home
            </Button>
          </Col>
          <Col span={6}>
            <Button ghost style={linkStyle} onClick={() => nav("/node-quality")}>
              Node Quality
            </Button>
          </Col>
          <Col span={6}>
            <Button ghost style={linkStyle} onClick={() => nav("/stamina")}>
              Stamina
            </Button>
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