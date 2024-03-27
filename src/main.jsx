import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ContactPage from "./component/ContactPage.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import CreatePassword from "./Pages/CreatePassword.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
// import Otp from "./component/Otp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contactPage",
    element: <ContactPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/createpassword",
    element: <CreatePassword />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  // {
  //   path: "/otp",
  //   element: <Otp />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
