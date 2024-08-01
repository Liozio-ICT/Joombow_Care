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

      <Header />
      <main className="mx-auto !w-full max-w-screen-2xl container min-h-[100dvh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
