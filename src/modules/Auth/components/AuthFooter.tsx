import React from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";

const AuthFooter: React.FC = () => {
  const year: number = new Date().getFullYear();
  const { lg } = useBreakpoint();
  return (
    <React.Fragment>
      <footer
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: lg ? "end" : "center",
          padding: "1rem 2rem",
        }}
      >
        Copyright © {year}{" "}
        <a href="https://m360ict.com/" target="_blank">
          M360ICT.
        </a>{" "}
        All rights reserved.
      </footer>
    </React.Fragment>
  );
};

export default AuthFooter;
