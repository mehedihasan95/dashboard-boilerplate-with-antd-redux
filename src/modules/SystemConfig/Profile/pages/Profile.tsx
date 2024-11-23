import React from "react";
import useBreakpoint from "../../../../hooks/useBreakpoint";
import { Col, Row } from "antd";

const Profile: React.FC = () => {
  const { xl } = useBreakpoint();

  return (
    <React.Fragment>
      <Row>
        <Col
          span={24}
          lg={8}
          xl={6}
          style={{
            borderRight: xl ? "1px dashed #cccccc" : "none",
            borderBottom: xl ? "none" : "1px dashed #cccccc",
            padding: "1rem",
          }}
        >
          <div
            style={{
              width: xl ? "8rem" : "5rem",
              height: xl ? "8rem" : "5rem",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src="https://i.pinimg.com/736x/5f/c5/bf/5fc5bf29a31f72cd1214e4a0f0719da0.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h1>Mehedi Hasan</h1>
          <p>mehedihasan.m360ict@gmail.com</p>
        </Col>
        <Col span={24} lg={16} xl={18} style={{ padding: "1rem" }}>
          <div
            style={{
              minHeight: "20vh",
              borderRadius: "1rem",
              overflow: "hidden",
              backgroundImage: `url("https://images.unsplash.com/photo-1582533401893-cf3acb4680e8?q=80&w=2142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Profile;
