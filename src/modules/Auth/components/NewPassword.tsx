import React from "react";
import AuthHeader from "./AuthHeader";
import { Form, FormProps, Input } from "antd";
import { ForgotPassword } from "../types/AuthTypes";
import { useForgotPasswordMutation } from "../api/authEndpoint";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";
import { sanitizeFormValue } from "react-form-sanitization";

const NewPassword: React.FC = () => {
  const [newPassword, { isLoading }] = useForgotPasswordMutation();

  const [form] = Form.useForm();

  const onFinish: FormProps<ForgotPassword>["onFinish"] = async (values) => {
    const data = sanitizeFormValue(values, {
      ignoreKeys: ["confirm_password"],
    });
    await newPassword(data);
  };

  return (
    <React.Fragment>
      <AuthHeader title="Create New Password" description="sdsdsd" />
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        name="dependencies"
      >
        <Form.Item<ForgotPassword>
          label="Enter Password"
          name="password"
          rules={[{ required: true }]}
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
    </React.Fragment>
  );
};

export default NewPassword;
