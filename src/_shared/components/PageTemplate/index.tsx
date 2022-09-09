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
    <Layout style={{ overflowX: "scroll" }}>
      <Header style={{ minWidth: 720 }}>
        <Row>
          <Col span={6}>
            <Button ghost style={linkStyle} onClick={() => nav("/song-picker")}>
              Song Picker
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
      <Content style={{ height: "100vh", padding: 10 }}>
        {children}
      </Content>
    </Layout>
  )
};

export default PageTemplate;