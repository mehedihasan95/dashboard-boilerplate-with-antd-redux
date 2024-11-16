import React from "react";
import AuthHeader from "./AuthHeader";
import { Form, Input, type FormProps } from "antd";
import { ForgotPassword } from "../types/AuthTypes";
import { useSendOTPMutation } from "../api/authEndpoint";
import Iconify from "../../../config/IconifyConfig";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";

const SendOTP: React.FC = () => {
  const [sendOTP, { isLoading }] = useSendOTPMutation();

  const [form] = Form.useForm();

  const onFinish: FormProps<ForgotPassword>["onFinish"] = async (values) => {
    await sendOTP(values);
  };

  return (
    <React.Fragment>
      <AuthHeader
        title="Forgot Password"
        description="Don't worry! It happens. Please enter the email address associated with your account."
      />
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item<ForgotPassword>
          label="Enter Email Address"
          name="email"
          rules={[{ required: true }]}
        >
          <Input
            prefix={<Iconify icon="ant-design:user-outlined" />}
            placeholder="e.g: some@example.com"
          />
        </Form.Item>
        <FormSubmit name="Send OTP" loading={isLoading} />
      </Form>
    </React.Fragment>
  );
};

export default SendOTP;
