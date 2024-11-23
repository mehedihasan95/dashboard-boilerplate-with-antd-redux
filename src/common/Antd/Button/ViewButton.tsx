import { Button, type ButtonProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Iconify from "../../../config/IconifyConfig";

interface Props extends ButtonProps {
  pathname: string;
}

const ViewButton: React.FC<Props> = ({ pathname, ...rest }) => {
  return (
    <Link state={location.pathname} to={pathname}>
      <Button
        {...rest}
        key="view"
        type="link"
        size="small"
        icon={<Iconify icon="lucide:view" />}
      >
        View Details
      </Button>
    </Link>
  );
};

export default ViewButton;
