import { Outlet } from "react-router-dom";
import MobileFooter from "../components/MobileFooter.jsx";
import "./profile.css";

const ProfileLayout = () => {
  return (
    <>
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
