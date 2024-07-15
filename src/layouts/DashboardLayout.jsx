import { Outlet } from "react-router-dom";
import { dashboardPages, user } from "./constants";
import { Link, useNavigate } from "react-router-dom";
import MobileFooter from "../components/MobileFooter.jsx";
import "./dashboard.css";
import Loader from "../component/Loader.jsx";
import { useAuth } from "../provders/AuthProvider.jsx";
import { ScrollRestoration } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const DashboardLayout = () => {
  const { logout } = useAuth()

  const navigate = useNavigate()
  const handleLogout = async () => {
    // api handleLogout call
    const { done, message } = await logout()
    if (done) return navigate('/')

    toast.error(message)
  }
  return (
    <>
      <Loader />

      <ScrollRestoration />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


      <main className="dashboard">
        <aside className="sidebar pt-20">
          <div className="flex grow flex-col gap-3 p-3">
            <p className="rounded-lg bg-white/25 p-2 px-3">Dashboard</p>
            {dashboardPages.map(({ label, href }, idx) => (
              <Link
                key={idx}
                className="rounded-lg p-2 px-3 hover:bg-white/25"
                to={href}
              >
                {label}{" "}
              </Link>
            ))}
          </div>

          <div className="sticky bottom-0 flex flex-col p-3 px-5">
            <button className="flex text-white/50" type="button" onClick={handleLogout}>
              <small>Logout</small>
            </button>
            <p>{user.name}</p>
            <small className=" text-white/50">{user.email}</small>
          </div>
        </aside>

        <section className="page">
          <Outlet />
        </section>
      </main>
      <MobileFooter />
    </>
  );
};

export default DashboardLayout;
