import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import App from "./App.jsx";
import "./index.css";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Forgotpswd from "./Pages/Forgotpswd.jsx";
import Onboarding from "./Pages/Onboarding.jsx";
// import User from './Pages/User.jsx';
import ResetPassword from "./Pages/Newpassword.jsx";
import Launch from "./Pages/Launch.jsx";
import Notifications from "./Pages/user/message/notification.jsx";
import Messages from "./Pages/user/message/message.jsx";
import BookingIndex from "./Pages/user/booking/Index";
import NewBooking from "./Pages/user/booking/NewBooking";
import Invite from "./Pages/user/Invite.jsx";
import Dashboard from "./Pages/user/Dashboard";
import Profile from "./Pages/user/profile/Index";
import AboutUs from "./Pages/user/AboutUs";
import HelpSupport from "./Pages/user/HelpSupport";
import PrivateRoute from "./PrivateRoute.jsx";
import Services from "./Pages/user/Services.jsx";
import AuthRoute from "./AuthRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/welcome",
    element: <Onboarding />,
  },
  {
    path: "/launch",
    element: <Launch />,
  },
  {
    path: "/reset",
    element: <Forgotpswd />,
  },
  {
    path: "/new",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <AuthRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "user/",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "messages",
            element: <Messages />,
          },
          {
            path: "help-support",
            element: <HelpSupport />,
          },
          {
            path: "invite",
            element: <Invite />,
          },
          {
            path: "about-us",
            element: <AboutUs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "bookings/",
            children: [
              {
                path: "",
                element: <BookingIndex />,
              },
              {
                path: "new",
                element: <NewBooking />,
              },
              {
                path: ":id",
                element: <NewBooking />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
