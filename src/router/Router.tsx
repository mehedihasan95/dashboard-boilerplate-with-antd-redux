import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/page/MainLayout";
import NotFound from "../NotFound";
import { appRoutes } from "./AppRoutes";
import Dashboard from "../modules/Dashboard/api/Dashboard";
import Auth from "../modules/Auth/pages/Auth";
import Login from "../modules/Auth/pages/Login";
import SendOTP from "../modules/Auth/components/SendOTP";
import MatchOTP from "../modules/Auth/components/MatchOTP";
import NewPassword from "../modules/Auth/components/NewPassword";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PrivateRouter children={<MainLayout />} />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        ...appRoutes.map(({ path, element, children }) => ({
          path: path,
          element: element,
          children: children,
        })),
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "send-otp",
          element: <SendOTP />,
        },
        {
          path: "match-otp",
          element: <MatchOTP />,
        },
        {
          path: "new-password",
          element: <NewPassword />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
