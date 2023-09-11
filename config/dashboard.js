import {
  FiHome,
  FiList,
  FiPackage,
  FiPlus,
  FiSettings,
  FiUser,
} from "react-icons/fi";

export const dashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <FiHome />,
    },
    {
      title: "Products",
      href: "/dashboard/products",
      icon: <FiPackage />,
    },
    {
      title: "Invoices",
      href: "/dashboard/invoices",
      icon: <FiList />,
    },
    {
      title: "Create New",
      href: "/dashboard/invoices/create",
      icon: <FiPlus />,
    },
    {
      title: "My Profile",
      href: "/dashboard/profile",
      icon: <FiUser />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <FiSettings />,
    },
  ],
};
