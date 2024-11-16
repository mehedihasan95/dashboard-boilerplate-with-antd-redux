import { Divider, Flex, Typography } from "antd";
import React from "react";
import Iconify from "../../../config/IconifyConfig";

const TopSection: React.FC = () => {
  return (
    <div
      style={{
        padding: "0.5rem 0.5rem 0 0.5rem",
      }}
    >
      <Flex align="center" justify="flex-start" gap={5}>
        <div
          style={{
            width: 50,
            height: 50,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Iconify icon="logos:google-cloud-run" width={35} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography.Text strong style={{ lineHeight: 1 }}>
            M360ICT Ltd.
          </Typography.Text>
          <Typography.Text
            type="secondary"
            style={{ fontSize: "10px", lineHeight: 1 }}
          >
            {new Date().toUTCString()}
          </Typography.Text>
        </div>
      </Flex>
      <Divider style={{ margin: "5px 0 0 0" }} />
    </div>
  );
};

export default TopSection;
