import { RouteObject } from "react-router-dom";
import Products from "../modules/Products/pages/Products";
import Profile from "../modules/SystemConfig/Profile/pages/Profile";
import Settings from "../modules/SystemConfig/Settings/Settings";

type AppRouteObject = RouteObject & {
  children?: AppRouteObject[];
};

export const appRoutes: AppRouteObject[] = [
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "system-config",
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
];
