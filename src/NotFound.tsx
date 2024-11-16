import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import React from "react";
import {
  ErrorResponse,
  NavigateFunction,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import Iconify from "./config/IconifyConfig";

const NotFound: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const error = useRouteError();

  const { data, status, statusText } = error as ErrorResponse;

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <Result
        status={status as ResultStatusType}
        title={statusText}
        subTitle={data}
        extra={
          <Button
            icon={<Iconify icon="pajamas:go-back" />}
            size="small"
            shape="round"
            onClick={() => navigate(-1)}
            type="link"
            danger
          >
            GO BACK
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
