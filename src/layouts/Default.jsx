import { Outlet } from "react-router-dom";
import "./default.css";
import Loader from "../component/Loader";

const Default = () => {
  return (
    <>
      <Loader />

      <div className="default-bg">
        <section className="page">
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default Default;
