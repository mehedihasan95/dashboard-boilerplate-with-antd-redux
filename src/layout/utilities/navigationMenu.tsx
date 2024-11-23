import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import Iconify from "../../config/IconifyConfig";
import { truncateText } from "../../utilities/helper.function";

export type NavigationItem = {
  key: string;
  label: string;
  to?: string;
  icon: string;
  children?: NavigationItem[];
  category?: string;
};

const icons = { create: "pajamas:todo-add", list: "typcn:th-list" };

export const navigationMenu: NavigationItem[] = [
  {
    category: "MAIN MENU",
    key: "main-menu",
    label: "MAIN MENU",
    icon: "mdi:menu",
    children: [
      {
        key: "/",
        to: "/",
        label: "Dashboard",
        icon: "streamline:dashboard-circle-solid",
      },
    ],
  },
  {
    category: "SERVICES",
    key: "services",
    label: "SERVICES",
    icon: "icons8:services",
    children: [
      {
        key: "/flight",
        to: "/flight",
        label: "Flight",
        icon: "mdi:flight",
        children: [
          {
            key: "/flight/flight-search",
            to: "/flight/flight-search",
            label: "Flight Search",
            icon: "carbon:flight-schedule",
          },
          {
            key: "/flight/list",
            to: "/flight/list",
            label: "Booking List",
            icon: icons.list,
          },
        ],
      },
      {
        key: "/hotel",
        to: "/hotel",
        label: "Hotel",
        icon: "icon-park-outline:hotel",
        children: [
          {
            key: "/hotel/hotel-search",
            to: "/hotel/hotel-search",
            label: "Hotel Search",
            icon: "material-symbols-light:flights-and-hotels-outline-sharp",
          },
          {
            key: "/hotel/list",
            to: "/hotel/list",
            label: "Booking List",
            icon: icons.list,
          },
        ],
      },
    ],
  },

  {
    category: "PAYMENT",
    key: "payment",
    label: "PAYMENT",
    icon: "mage:dollar",
    children: [
      {
        key: "/payment",
        to: "/payment",
        label: "Payments",
        icon: "mdi:instant-deposit",
        children: [
          {
            key: "/payment/add-deposit",
            to: "/payment/add-deposit",
            label: "Add Deposit",
            icon: "mdi:instant-deposit",
          },
          {
            key: "/payment/transaction-history",
            to: "/payment/transaction-history",
            label: "Transaction History",
            icon: icons.list,
          },
        ],
      },
    ],
  },

  {
    category: "SUPPORT",
    key: "support",
    label: "SUPPORT",
    icon: "mdi:support",
    children: [
      {
        key: "/booking-support",
        to: "/booking-support",
        label: "Booking Support",
        icon: "material-symbols:support",
      },
      {
        key: "/configuration",
        to: "/configuration",
        label: "Configuration",
        icon: "hugeicons:configuration-01",
        children: [
          {
            key: "/configuration/travelers",
            to: "/configuration/travelers",
            label: "Travelers",
            icon: icons.list,
          },
        ],
      },
      {
        key: "/administration",
        to: "/administration",
        label: "Administration",
        icon: "eos-icons:admin",
        children: [
          {
            key: "/administration/users",
            to: "/administration/users",
            label: "Users",
            icon: icons.list,
          },
          {
            key: "/administration/role",
            to: "/administration/role",
            label: "Role",
            icon: icons.list,
          },
        ],
      },
    ],
  },
];

export const renderMenuItem = (
  item: NavigationItem
): Required<MenuProps>["items"][number] => ({
  key: item.key,
  label: item.children ? (
    truncateText(item.label)
  ) : (
    <NavLink
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "normal",
        };
      }}
      to={String(item.to)}
    >
      {truncateText(item.label)}
    </NavLink>
  ),
  icon: <Iconify icon={item.icon} />,
  children: item.children?.map(renderMenuItem),
  type: item.category ? "group" : "item",
});
