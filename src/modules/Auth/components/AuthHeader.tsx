import { Space, Typography } from "antd";
import React from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";

interface Props {
  title: string;
  description: string;
}

const AuthHeader: React.FC<Props> = ({ title, description }) => {
  const { lg } = useBreakpoint();

  return (
    <React.Fragment>
      <Space
        direction="vertical"
        align="center"
        style={{ width: "100%", marginBottom: "3rem" }}
      >
        <Typography.Text
          strong
          style={{
            fontSize: lg ? "1.5rem" : "1rem",
            textTransform: "uppercase",
            display: "block",
          }}
        >
          {title}
        </Typography.Text>
        <Typography.Text
          type="secondary"
          style={{ textAlign: "center", display: "block" }}
        >
          {description}
        </Typography.Text>
      </Space>
    </React.Fragment>
  );
};

export default AuthHeader;
