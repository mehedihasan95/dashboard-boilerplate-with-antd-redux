import { Button, type ButtonProps } from "antd";
import React from "react";
import Iconify from "../../../config/IconifyConfig";

const DeleteButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Button
      {...rest}
      key="delete"
      type="link"
      size="small"
      icon={<Iconify icon="mage:trash" />}
      danger
    >
      Delete Record
    </Button>
  );
};

export default DeleteButton;
