import { Alert, Form, Input, Typography, type FormProps } from "antd";
import React from "react";
import AuthHeader from "./AuthHeader";
import { useMatchOTPMutation } from "../api/authEndpoint";
import { AuthError, ForgotPassword } from "../types/AuthTypes";
import FormSubmit from "../../../common/Antd/Button/FormSubmit";
import { otpValidator } from "../../../utilities/form.validation";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { sanitizeFormValue } from "react-form-sanitization";
import { AuthState, setMessage } from "../../../app/slice/authSlice";

const MatchOTP: React.FC = () => {
  const [matchOTP, { isLoading }] = useMatchOTPMutation();
  const { message } = useAppSelector(AuthState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [form] = Form.useForm();
  const email = searchParams.get("email") as string;

  const onFinish: FormProps<ForgotPassword>["onFinish"] = async (values) => {
    const result = sanitizeFormValue({
      ...values,
      otp_type: "reset_admin",
      email: email,
    });

    try {
      const { success, data } = await matchOTP(result).unwrap();
      if (success) {
        navigate({
          pathname: "/auth/forgot-password",
          search: `?email=${email}&token=${data?.token}`,
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
        title="Match OTP"
        description={`A 6 digit code has been sent to ${email} This OTP will be valid for next 3 minutes.`}
        timer={true}
      />

      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item<ForgotPassword>
          label="Enter your OTP"
          name="otp"
          rules={[{ required: true }, { validator: otpValidator }]}
        >
          <Input.OTP style={{ width: "100%" }} />
        </Form.Item>
        <FormSubmit name="Verify OTP" loading={isLoading} />
      </Form>

      {message && (
        <Typography.Paragraph>
          <Alert type="error" message={message} banner closable />
        </Typography.Paragraph>
      )}

      <Link to="/auth/send-otp">Resend OTP</Link>
    </React.Fragment>
  );
};

export default MatchOTP;
