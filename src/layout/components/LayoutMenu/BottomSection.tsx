import { Avatar, Card, Space, Typography } from "antd";
import React from "react";
import { useAppDispatch } from "../../../app/store";
import { useNavigate } from "react-router-dom";
import api from "../../../app/api/api";
import { clearAuth } from "../../../app/slice/authSlice";
import CommonButton from "../../../common/Antd/Button/CommonButton";

const BottomSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      bordered={false}
      style={{ margin: "12px" }}
      styles={{
        body: { padding: 0, border: 0 },
        header: { padding: "0 12px", border: 0, fontWeight: 400 },
      }}
      title={
        <Space align="center">
          <Avatar
            shape="circle"
            src="https://i.pinimg.com/564x/22/bb/b4/22bbb4a05f032051d24f372b6c48bf0f.jpg"
            alt="DP"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Typography.Text
              style={{
                lineHeight: "1rem",
                wordWrap: "break-word",
                whiteSpace: "normal",
              }}
            >
              Mehedi Hasan
            </Typography.Text>
            <Typography.Text
              style={{
                lineHeight: "1rem",
                wordWrap: "break-word",
                whiteSpace: "normal",
                fontSize: "11px",
              }}
              type="secondary"
            >
              mehedihasan@gmail.com
            </Typography.Text>
          </div>
        </Space>
      }
      extra={
        <CommonButton
          title="Logout"
          onClick={() => {
            dispatch(clearAuth());
            dispatch(api.util.resetApiState());
            navigate("/auth/login");
          }}
          icon="ant-design:logout-outlined"
          type="text"
          danger
        />
      }
    />
  );
};

export default BottomSection;
