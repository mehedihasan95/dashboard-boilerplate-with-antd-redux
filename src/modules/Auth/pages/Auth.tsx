import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { AuthState, clearMessage } from "../../../app/slice/authSlice";
import { Outlet } from "react-router-dom";
import useBreakpoint from "../../../hooks/useBreakpoint";
import { ThemeState } from "../../../app/slice/themeSlice";
import AuthFooter from "../components/AuthFooter";
import AuthCarousel from "../components/AuthCarousel";
import { auth_slider } from "../../../utilities/image.collection";
import useAuthCarousel from "../hooks/useAuthCarousel";

const Auth: React.FC = () => {
  const { mode } = useAppSelector(ThemeState);
  const { message } = useAppSelector(AuthState);
  const dispatch = useAppDispatch();
  const { lg } = useBreakpoint();
  const { active } = useAuthCarousel();

  useEffect(() => {
    if (!message) return;
    const timer: NodeJS.Timeout = setTimeout(() => {
      dispatch(clearMessage());
    }, 30000);
    return () => clearTimeout(timer);
  }, [message, dispatch]);

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: mode === "light" ? "#f3f3f4" : "#141414",
        display: "flex",
        flexDirection: lg ? "row" : "column",
      }}
    >
      {lg && (
        <div
          style={{
            width: "40%",
            maxWidth: "500px",
            minWidth: "300px",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <AuthCarousel />
        </div>
      )}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: lg ? "start" : "center",
          padding: lg ? "3rem" : "1rem",
          backgroundColor:
            mode === "light"
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(31, 31, 31, 0.9)",
          backgroundImage: lg
            ? "none"
            : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${auth_slider[active]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: lg ? "400px" : "350px",
            padding: "1rem",
            background: !lg ? "rgba(255, 255, 255, 0.2)" : "transparent",
            boxShadow: !lg ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
            backdropFilter: !lg ? "blur(10px)" : "none",
            border: !lg ? "1px solid rgba(255, 255, 255, 0.3)" : "none",
            borderRadius: "12px",
          }}
        >
          <Outlet />
        </div>
      </div>

      <AuthFooter />
    </section>
  );
};

export default Auth;
