import React from "react";
import AuthHeader from "./AuthHeader";
import { Alert, Form, Input, Typography, type FormProps } from "antd";
import { AuthError, ForgotPassword } from "../types/AuthTypes";
import { useSendOTPMutation } from "../api/authEndpoint";
import Iconify from "../../../config/IconifyConfig";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";
import { emailValidator } from "../../../utilities/form.validation";
import { Link, useNavigate } from "react-router-dom";
import { sanitizeFormValue } from "react-form-sanitization";
import { AuthState, setMessage } from "../../../app/slice/authSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store";

const SendOTP: React.FC = () => {
  const [sendOTP, { isLoading }] = useSendOTPMutation();
  const { message } = useAppSelector(AuthState);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish: FormProps<ForgotPassword>["onFinish"] = async (values) => {
    const email = form.getFieldValue("email");
    const data = sanitizeFormValue({ ...values, otp_type: "reset_admin" });

    try {
      const { success } = await sendOTP(data).unwrap();

      if (success) {
        navigate({
          pathname: "/auth/match-otp",
          search: `?email=${email}`,
        });
      }
    } catch (error) {
      const { status, data } = error as AuthError;
      if (status === "FETCH_ERROR") {
        dispatch(
          setMessage(
            "Due to maintenance, our server is presently unavailable. Please try again later."
          )
        );
      } else {
        dispatch(setMessage(data.message));
      }
    }
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
          rules={[{ required: true }, { validator: emailValidator }]}
        >
          <Input
            prefix={<Iconify icon="ant-design:user-outlined" />}
            placeholder="e.g: some@example.com"
          />
        </Form.Item>
        <FormSubmit name="Send OTP" loading={isLoading} />
      </Form>
      {message && (
        <Typography.Paragraph>
          <Alert type="error" message={message} banner closable />
        </Typography.Paragraph>
      )}

      <Link to="/auth/login">Back to Login</Link>
    </React.Fragment>
  );
};

export default SendOTP;
