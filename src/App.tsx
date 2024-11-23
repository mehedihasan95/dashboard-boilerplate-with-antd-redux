import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { ConfigProvider, FloatButton, App as AntdContainer, theme } from "antd";
import NotificationConfig from "./config/NotificationConfig";
import ModalConfig from "./config/ModalConfig";
import DrawerConfig from "./config/DrawerConfig";
import { useAppSelector } from "./app/store";
import { ThemeState } from "./app/slice/themeSlice";
import useBreakpoint from "./hooks/useBreakpoint";

const App: React.FC = () => {
  const {
    mode,
    colorPrimary,
    fontFamily,
    fontSize,
    siderBg,
    itemBg,
    headerBg,
  } = useAppSelector(ThemeState);
  const { xs } = useBreakpoint();

  const isLight: boolean = mode === "light" ? true : false;

  const getAlgorithm = () => {
    if (xs) {
      return [
        isLight ? theme.defaultAlgorithm : theme.darkAlgorithm,
        theme.compactAlgorithm,
      ];
    }
    return isLight ? theme.defaultAlgorithm : theme.darkAlgorithm;
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: getAlgorithm(),
        token: {
          colorPrimary,
          fontFamily,
          fontSize,
        },
        components: {
          Layout: {
            siderBg,
            headerBg,
            algorithm: true,
          },
          Menu: {
            itemBg,
            algorithm: true,
          },
        },
      }}
    >
      <AntdContainer>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
        <NotificationConfig />
        <ModalConfig />
        <DrawerConfig />
        <FloatButton.BackTop />
      </AntdContainer>
    </ConfigProvider>
  );
};

export default App;
