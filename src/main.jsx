import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Forgotpswd from './Pages/Forgotpswd.jsx';
import Onboarding from './Pages/Onboarding.jsx';
import User from './Pages/User.jsx';
import ResetPassword from './Pages/Newpassword.jsx';
import ContactPage from './component/ContactPage.jsx';

const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contactpage",
    element: <ContactPage />,
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

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

