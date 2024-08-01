import { BiSupport, BiUser } from "react-icons/bi";
import { FaInfo } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiCalendarCheckLine } from "react-icons/ri";
// export const dashboardPages = [
//   { label: "Home", href: "/dashboard" },
//   { label: "Profile", href: "/dashboard/profile" },
//   { label: "Bookings", href: "/dashboard/bookings" },
//   { label: "Settings", href: "/dashboard/profile/settings" },
//   { label: "Help", href: "/dashboard/profile/help-support" },
// ];

export const dashboardPages = [
  {
    label: "Dashboard",
    href: "/user",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    label: "My Bookings",
    href: "/user/bookings",
    icon: <RiCalendarCheckLine />,
  },
  {
    label: "Services",
    href: "/user/services",
    icon: <GrServices />,
  },
  // {
  //   label: "Help & Support",
  //   href: "/user/help-support",
  // },
];

export const profileDrops = [
  {
    label: "My Profile",
    href: "/user/profile",
    icon: <BiUser />,
  },
  {
    label: "Help & Support",
    href: "/user/help-support",
    icon: <BiSupport />,
  },
  {
    label: "About Us",
    href: "/user/about-us",
    icon: <FaInfo />,
  },
];
