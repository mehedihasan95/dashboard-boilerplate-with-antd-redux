import {
  Alert,
  Checkbox,
  Flex,
  Form,
  FormProps,
  Input,
  Typography,
} from "antd";
import React from "react";
import { AuthError, LoginTypes } from "../types/AuthTypes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import { useLoginMutation } from "../api/authEndpoint";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { AuthState, setMessage } from "../../../app/slice/authSlice";
import Iconify from "../../../config/IconifyConfig";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";
import { sanitizeFormValue } from "react-form-sanitization";
import {
  emailValidator,
  passwordValidator,
} from "../../../utilities/form.validation";

const Login: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();
  const { message } = useAppSelector(AuthState);
  const { state } = useLocation();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const from: string = state?.from?.pathname || "/";

  const onFinish: FormProps<LoginTypes>["onFinish"] = async (values) => {
    try {
      const data = sanitizeFormValue(values, { ignoreKeys: ["remember"] });
      const { success } = await login(data).unwrap();
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
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ remember: true }}
      >
        <AuthHeader
          title="Welcome back!"
          description="Login to access your account and continue your journey with us."
        />
        <Form.Item<LoginTypes>
          label="E-mail Address"
          name="email"
          rules={[{ required: true }, { validator: emailValidator }]}
        >
          <Input
            prefix={<Iconify icon="ant-design:user-outlined" />}
            placeholder="e.g: some@example.com"
          />
        </Form.Item>

        <Form.Item<LoginTypes>
          label="Password"
          name="password"
          rules={[{ required: true }, { validator: passwordValidator }]}
        >
          <Input.Password
            prefix={<Iconify icon="ant-design:lock-outlined" />}
            placeholder="e.g: ********"
          />
        </Form.Item>

        <Flex
          justify="space-between"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
          <Form.Item<LoginTypes>
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link to="/auth/send-otp">Forgot Password!</Link>
        </Flex>

        <FormSubmit name="Login" loading={isLoading} />
      </Form>

      {message && (
        <Typography.Paragraph>
          <Alert type="error" message={message} banner closable />
        </Typography.Paragraph>
      )}
    </React.Fragment>
  );
};

export default Login;
