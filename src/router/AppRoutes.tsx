import { RouteObject } from "react-router-dom";
import Profile from "../modules/SystemConfig/Profile/pages/Profile";
import Settings from "../modules/SystemConfig/Settings/Settings";
import FlightSearch from "../modules/Flight/pages/FlightSearch";
import FlightBookingList from "../modules/Flight/pages/FlightBookingList";
import HotelSearch from "../modules/Hotel/pages/HotelSearch";
import HotelBookingList from "../modules/Hotel/pages/HotelBookingList";

type AppRouteObject = RouteObject & {
  children?: AppRouteObject[];
};

export const appRoutes: AppRouteObject[] = [
  {
    path: "/flight",
    children: [
      {
        path: "flight-search",
        element: <FlightSearch />,
      },
      {
        path: "list",
        element: <FlightBookingList />,
      },
    ],
  },
  {
    path: "/hotel",
    children: [
      {
        path: "hotel-search",
        element: <HotelSearch />,
      },
      {
        path: "list",
        element: <HotelBookingList />,
      },
    ],
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
