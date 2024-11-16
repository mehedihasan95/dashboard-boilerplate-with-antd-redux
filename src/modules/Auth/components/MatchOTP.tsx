import { Form, Input, type FormProps } from "antd";
import React from "react";
import AuthHeader from "./AuthHeader";
import { useMatchOTPMutation } from "../api/authEndpoint";
import { ForgotPassword } from "../types/AuthTypes";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";

const MatchOTP: React.FC = () => {
  const [sendOTP, { isLoading }] = useMatchOTPMutation();

  const [form] = Form.useForm();

  const onFinish: FormProps<ForgotPassword>["onFinish"] = async (values) => {
    await sendOTP(values);
  };

  return (
    <React.Fragment>
      <>
        <AuthHeader title="Match OTP" description="sdsdsds" />
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item<ForgotPassword>
            label="Enter your OTP"
            name="otp"
            rules={[{ required: true }]}
          >
            <Input.OTP style={{ width: "100%" }} />
          </Form.Item>
          <FormSubmit name="Verify OTP" loading={isLoading} />
        </Form>
      </>
    </React.Fragment>
  );
};

export default MatchOTP;
