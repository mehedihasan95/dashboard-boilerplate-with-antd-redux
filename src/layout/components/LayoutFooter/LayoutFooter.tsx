import { Col, Flex, Layout, Row, Typography } from "antd";
import React from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";

const LayoutFooter: React.FC = () => {
  const year: number = new Date().getFullYear();
  const { xs } = useBreakpoint();

  return (
    <Layout.Footer>
      <Row gutter={[10, 10]}>
        <Col span={24} lg={12}>
          <Flex justify={xs ? "center" : "flex-start"}>
            <Typography.Text>
              Copyright © {year} <strong>M360ICT.</strong> All rights reserved.
            </Typography.Text>
          </Flex>
        </Col>
        <Col span={24} lg={12}>
          <Flex
            justify={xs ? "center" : "flex-end"}
            gap={xs ? "middle" : "large"}
          >
            <Typography.Link type="secondary">Help</Typography.Link>
            <Typography.Link type="secondary">About</Typography.Link>
          </Flex>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default LayoutFooter;
