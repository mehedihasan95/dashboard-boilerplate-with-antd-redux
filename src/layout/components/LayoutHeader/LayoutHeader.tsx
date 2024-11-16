import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flex,
  Layout,
  MenuProps,
  Space,
  Typography,
} from "antd";
import React from "react";
import Iconify from "../../../config/IconifyConfig";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/system-config/profile">Profile</Link>,
    icon: <Iconify icon="mingcute:user-5-fill" />,
  },
  {
    key: "2",
    label: <Link to="/system-config/settings">Settings</Link>,
    icon: <Iconify icon="ic:round-settings" />,
  },
];

interface Props {
  xs: boolean | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutHeader: React.FC<Props> = ({ xs, setOpen }) => {
  return (
    <Layout.Header
      style={{
        padding: "0 1rem",
        lineHeight: 0,
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 3,
      }}
    >
      <Flex align="center" justify="space-between" style={{ width: "100%" }}>
        <Space>
          {xs && (
            <Button
              onClick={() => setOpen(true)}
              type="text"
              icon={<Iconify icon="pepicons-pop:menu" />}
            />
          )}
          <div>
            <Typography.Text
              style={{
                display: "block",
                lineHeight: 1,
                fontSize: xs ? "11px" : "14px",
              }}
            >
              Welcome,
            </Typography.Text>
            <Typography.Text
              style={{
                display: "block",
                lineHeight: 1,
                fontWeight: 600,
                fontSize: xs ? "12px" : "16px",
              }}
            >
              Mehedi Hasan
            </Typography.Text>
          </div>
        </Space>

        <Flex align="center" gap={20}>
          <Badge count={100}>
            <Button
              shape="circle"
              type="default"
              icon={
                <Iconify icon="material-symbols-light:notifications-unread-outline-rounded" />
              }
            />
          </Badge>

          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              shape="circle"
              style={{ cursor: "pointer" }}
              src="https://i.pinimg.com/564x/70/f2/f6/70f2f613ee6b58351388385e0c657ed7.jpg"
            />
          </Dropdown>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};

export default LayoutHeader;
