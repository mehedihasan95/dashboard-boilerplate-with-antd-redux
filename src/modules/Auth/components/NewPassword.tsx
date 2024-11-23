import React from "react";
import AuthHeader from "./AuthHeader";
import { Alert, Form, FormProps, Input, Typography } from "antd";
import { AuthError, ForgotPassword } from "../types/AuthTypes";
import { useForgotPasswordMutation } from "../api/authEndpoint";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";
import { sanitizeFormValue } from "react-form-sanitization";
import { passwordValidator } from "../../../utilities/form.validation";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { Link, useNavigate } from "react-router-dom";
import { AuthState, setMessage } from "../../../app/slice/authSlice";

const NewPassword: React.FC = () => {
  const [newPassword, { isLoading }] = useForgotPasswordMutation();
  const { message } = useAppSelector(AuthState);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const onFinish: FormProps<ForgotPassword>["onFinish"] = async (values) => {
    const data = sanitizeFormValue(values, {
      ignoreKeys: ["confirm_password"],
    });

    try {
      const { success } = await newPassword(data).unwrap();

      success && navigate({ pathname: "/auth/login" });
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
        title="Create New Password"
        description="Your New Password must be different from previous used password."
      />
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        name="dependencies"
      >
        <Form.Item<ForgotPassword>
          label="Enter New Password"
          name="password"
          rules={[{ required: true }, { validator: passwordValidator }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<ForgotPassword>
          label="Confirm Password"
          name="confirm_password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            { validator: passwordValidator },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <FormSubmit name="New Password" loading={isLoading} />
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

export default NewPassword;
