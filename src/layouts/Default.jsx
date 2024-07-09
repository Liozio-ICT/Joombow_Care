import { Outlet } from "react-router-dom";
import "./default.css";

const Default = () => {
  return (
    <div className="default-bg">
      <section className="page">
        <Outlet />
      </section>
    </div>
  );
};

export default Default;
