import React from 'react'
import {
  createBrowserRouter,
} from "react-router-dom";
import Default from "./layouts/Default";
import DashboardLayout from "./layouts/DashboardLayout";
import App from './App.jsx'
import './index.css'
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Forgotpswd from './Pages/Forgotpswd.jsx';
import Onboarding from './Pages/Onboarding.jsx';
import User from './Pages/User.jsx';
import ResetPassword from './Pages/Newpassword.jsx';
import Launch from './Pages/Launch.jsx';
import Notifications from "./Pages/Notifications";
import BookingIndex from "./Pages/booking/Index";
import NewBooking from "./Pages/booking/NewBooking";
import Invite from "./Pages/Invite";
import Dashboard from "./Pages/Dashboard";
import ProfileLayout from "./layouts/ProfileLayout";
import Profile from "./Pages/profile/Index";
import EditProfile from "./Pages/profile/EditProfile";
import AboutUs from "./Pages/profile/AboutUs";
import HelpSupport from "./Pages/profile/HelpSupport";
import Settings from "./Pages/profile/Settings";
import ChangePassword from "./Pages/profile/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/welcome",
        element: <Onboarding />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/launch",
        element: <Launch />
      },
      {
        path: "/reset",
        element: <Forgotpswd />
      },
      {
        path: "/new",
        element: <ResetPassword />
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/invite",
        element: <Invite />,
      },
      {
        path: "/bookings/",
        children: [
          {
            path: "",
            element: <BookingIndex />,
          },
          {
            path: "new",
            element: <NewBooking />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/profile/",
    element: <ProfileLayout />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "edit",
        element: <EditProfile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "settings/change-password",
        element: <ChangePassword />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "help-support",
        element: <HelpSupport />,
      },
    ],
  },
]);

export default router;

// const paths = [
//   "REFER AND EARN WASH CREDIT",
//   "Notifications",
//   "Confirm details",
//   "My Bookings",
//   "Bookings",
//   "dashboard",
// ];
