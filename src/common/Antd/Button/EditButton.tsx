import { Button, type ButtonProps } from "antd";
import React from "react";
import Iconify from "../../../config/IconifyConfig";

const EditButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Button
      {...rest}
      key="edit"
      type="link"
      size="small"
      icon={<Iconify icon="ic:outline-edit" />}
    >
      Modify Details
    </Button>
  );
};

export default EditButton;
