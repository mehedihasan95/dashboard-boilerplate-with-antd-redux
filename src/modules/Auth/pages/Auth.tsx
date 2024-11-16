import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { AuthState, clearMessage } from "../../../app/slice/authSlice";

const Auth: React.FC = () => {
  const year: number = new Date().getFullYear();
  const { message } = useAppSelector(AuthState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(clearMessage());
      }, 5000);
    }
  }, [message]);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <div
        style={{
          minHeight: "50vh",
          position: "relative",
        }}
      >
        {/* <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          autoPlay
          loop
          muted
        >
          <source src={auth_bg} type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
      </div>

      <h1
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          lineHeight: 0,
        }}
      >
        M360ICT
      </h1>
      <Card
        style={{
          width: "25vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "340px",
        }}
      >
        <Outlet />
      </Card>

      <footer
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "center",
          padding: "0.5rem",
        }}
      >
        Copyright © {year}{" "}
        <a href="https://m360ict.com/" target="_blank">
          M360ICT.
        </a>{" "}
        All rights reserved.
      </footer>
    </div>
  );
};

export default Auth;
