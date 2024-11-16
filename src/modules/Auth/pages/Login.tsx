import { Alert, Form, FormProps, Input, Typography } from "antd";
import React from "react";
import { AuthError, LoginTypes } from "../types/AuthTypes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import { useLoginMutation } from "../api/authEndpoint";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { AuthState, setMessage } from "../../../app/slice/authSlice";
import Iconify from "../../../config/IconifyConfig";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";

const Login: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();
  const { message } = useAppSelector(AuthState);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const { state } = useLocation();
  const navigate = useNavigate();
  const from: string = state?.from?.pathname || "/";

  const onFinish: FormProps<LoginTypes>["onFinish"] = async (values) => {
    try {
      const { success } = await login(values).unwrap();
      if (success) return navigate(from);
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
        title="Welcome back!"
        description="Enter your email and password to login"
      />
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item<LoginTypes>
          label="Enter Email Address"
          name="email"
          rules={[{ required: true }]}
        >
          <Input
            prefix={<Iconify icon="ant-design:user-outlined" />}
            placeholder="e.g: some@example.com"
          />
        </Form.Item>

        <Form.Item<LoginTypes>
          label="Enter Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password
            prefix={<Iconify icon="ant-design:lock-outlined" />}
            placeholder="e.g: ********"
          />
        </Form.Item>

        <FormSubmit name="Login" loading={isLoading} />
      </Form>

      {message && (
        <Typography.Paragraph>
          <Alert type="error" message={message} banner />
        </Typography.Paragraph>
      )}
      <Link to="/auth/send-otp">
        <Typography.Link>Forgot password!</Typography.Link>
      </Link>
    </React.Fragment>
  );
};

export default Login;
