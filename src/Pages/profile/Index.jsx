import TitleHeader from "../../components/TitleHeader";
import ProfileListItem from "../../components/ProfileListItem";
import { FaEdit, FaInfoCircle, FaSignOutAlt } from "react-icons/fa";
import { FaCheck, FaGear, FaMessage, FaUserXmark, FaX } from "react-icons/fa6";
import { useState } from "react";
import { cn } from "../../utils/tailwind";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { useAuth } from "../../provders/AuthProvider";
import { useEffect } from "react";
import apiClient from "../../utils/apiClient";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const [modalType, setModalType] = useState();
  const [modalStep, setModalStep] = useState();
  const navigate = useNavigate();
  const { logout, user, getUserData } = useAuth()

  const list = [
    {
      label: "Edit Profile",
      to: "/dashboard/profile/edit",
      icon: <FaEdit />,
    },
    {
      label: "Settings",
      to: "/dashboard/profile/settings",
      icon: <FaGear />,
    },
    {
      label: "Help & Support",
      to: "/dashboard/profile/help-support",
      icon: <FaMessage />,
    },
    {
      label: "About Us",
      to: "/dashboard/profile/about-us",
      icon: <FaInfoCircle />,
    },
    {
      label: "Delete Account",
      icon: <FaUserXmark />,
      danger: true,
      onClick: () => setModalType("delete"),
    },
    {
      label: "Logout",
      icon: <FaSignOutAlt />,
      danger: true,
      onClick: () => setModalType("logout"),
    },
  ];

  const handleLogout = async () => {
    // api request logics
    const { message, done } = await logout()
    if (done)
      return navigate("/");

    toast.error(message)
    setModalType()
    setModalStep()

  };
  const deleteAccount = async () => {
    // api request logics
    const response = await apiClient.delete('/user/me')
    const { message } = await response.json()

    if (response.ok) { return setModalStep("success"); }

    toast.error(message)
  };

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <ScrollRestoration />

      <div className="!p-0">
        <div className="profile-header *:p-3 *:md:p-5">
          <div className="wrapper !bg-brand-red">
            <TitleHeader title={"My Profile"} />
          </div>
          <div className="photo  aspect-square w-24 overflow-clip rounded-full border-2 border-white bg-dark-2">
            <img className="size-full object-cover min-w-full" src={`https://ui-avatars.com/api/?color=ffffff&background=fd1014&rounded=true&ame=${user?.firstName?.replaceAll(' ', '+') ?? 'Joombow'}+${user?.lastName?.replaceAll(' ', '+') ?? 'User'}`} />
          </div>

          <div className="info !py-0">
            <p className="text-xl font-semibold capitalize">{user?.firstName ?? ''} {user?.lastName ?? ''} </p>
            <small className="lowercase">{user?.email} </small>
          </div>
        </div>
      </div>
      <ul className="grid gap-2">
        {list.map(({ label, icon, danger, to, onClick }) => (
          <li key={label} className={`${danger ? "text-brand-red" : ""}`}>
            <ProfileListItem
              label={label}
              icon={icon}
              to={to}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>

      {/* modal */}

      <div
        className={cn(
          "fixed inset-0 -z-[99999] flex items-center justify-center bg-slate-950/25 transition-all",
          { "z-[999999]": modalType },
        )}
      >
        <div
          className={cn(
            "relative grid gap-5 rounded-xl bg-dark-1 p-4 transition-all duration-500",
            {
              "scale-0": !modalType,
            },
          )}
        >
          <button
            className="ms-auto border-none p-2 outline-none"
            onClick={() => {
              setModalStep();
              setModalType();
            }}
          >
            <FaX size={16} />
          </button>

          <div className="grid gap-5 px-10 text-center">
            {modalStep !== "success" ? (
              <>
                <p className="">
                  Are you sure you want to{" "}
                  {modalType === "delete" ? "Delete account" : "Logout"}
                  {""}?
                </p>
                <div className="flex flex-wrap items-center justify-between gap-x-5 *:grow">
                  <button
                    className="rounded-lg bg-brand-red p-2 px-3 outline-none"
                    onClick={() => {
                      modalType === "delete" ? deleteAccount() : handleLogout();
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="rounded-lg border border-white bg-transparent p-2 px-3 outline-none"
                    onClick={() => {
                      setModalStep();
                      setModalType();
                    }}
                  >
                    No
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mx-auto aspect-square rounded-full bg-brand-red">
                  <FaCheck size={48} />
                </div>
                <div className="mx-auto">
                  <strong>Successful</strong>
                  <p>You’ve successfully deleted your account. Goodbye </p>
                </div>
                <button
                  className="mx-auto w-full max-w-[15rem] rounded-lg bg-brand-red p-2 px-3 outline-none"
                  onClick={() => navigate("/")}
                >
                  Ok
                </button>
              </>
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
