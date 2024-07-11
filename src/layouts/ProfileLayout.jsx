import { Outlet } from "react-router-dom";
import MobileFooter from "../components/MobileFooter.jsx";
import "./profile.css";
import Loader from "../component/Loader.jsx";

const ProfileLayout = () => {
  return (
    <>
      <Loader />

      <main className="background">
        <section className="wrapper">
          <div className="page">
            <Outlet />
          </div>
        </section>
      </main>
      <MobileFooter dark />
    </>
  );
};

export default ProfileLayout;
