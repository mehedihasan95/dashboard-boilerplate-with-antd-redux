import { Button, ButtonProps, Form } from "antd";
import React from "react";
import Iconify from "../../../config/IconifyConfig";

interface Props extends ButtonProps {
  name: string;
}

const FormSubmit: React.FC<Props> = ({ name, ...rest }) => {
  return (
    <Form.Item>
      <Button
        {...rest}
        type="primary"
        htmlType="submit"
        icon={<Iconify icon="iconamoon:send-fill" />}
      >
        {name}
      </Button>
    </Form.Item>
  );
};

export default FormSubmit;
