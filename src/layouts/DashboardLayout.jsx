import { Outlet } from "react-router-dom";
import Loader from "../component/Loader.jsx";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const DashboardLayout = () => {


  return (
    <>
      <Loader />

      <ScrollRestoration />
      <div className="grid grid-rows-[auto_1fr_auto] max-w-full min-h-[100dvh]">
        <Header />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
