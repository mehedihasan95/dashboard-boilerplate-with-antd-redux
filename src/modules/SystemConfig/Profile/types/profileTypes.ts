export type ProfileTypes = {
  id: number;
  agency_id: number;
  name: string;
  email: string;
  mobile_number: string;
  photo: string;
  status: boolean;
  created_at: string;
  created_by: string;
  twoFA: number;
  otp: number;
  otpExpires: string;
  requested_status: string;
  agency_status: boolean;
  agency_name: string;
  agency_logo: string;
  send_email_id: string;
  send_email_pass: string;
  address: string;
  balance: string;
  permissions: {
    role_id: number;
    role_name: string;
    status: number;
    permissions: Array<{
      permission_id: number;
      permission_name: string;
      read: number;
      write: number;
      update: number;
      delete: number;
    }>;
  };
};
