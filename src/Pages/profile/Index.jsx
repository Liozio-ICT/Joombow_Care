import TitleHeader from "../../components/TitleHeader";
import ProfileListItem from "../../components/ProfileListItem";
import { user } from "../../layouts/constants";
import { FaEdit, FaInfoCircle, FaSignOutAlt } from "react-icons/fa";
import { FaCheck, FaGear, FaMessage, FaUserXmark, FaX } from "react-icons/fa6";
import { useState } from "react";
import { cn } from "../../utils/tailwind";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [modalType, setModalType] = useState();
  const [modalStep, setModalStep] = useState();
  const navigate = useNavigate();

  const list = [
    {
      label: "Edit Profile",
      to: "/profile/edit",
      icon: <FaEdit />,
    },
    {
      label: "Settings",
      to: "/profile/settings",
      icon: <FaGear />,
    },
    {
      label: "Help & Support",
      to: "/profile/help-support",
      icon: <FaMessage />,
    },
    {
      label: "About Us",
      to: "/profile/about-us",
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

  const logout = () => {
    // api request logics

    navigate("/");
  };
  const deleteAccount = () => {
    // api request logics

    setModalStep("success");
  };
  return (
    <>
      <div className="!p-0">
        <div className="profile-header *:p-3 *:md:p-5">
          <div className="wrapper !bg-brand-red">
            <TitleHeader title={"My Profile"} />
          </div>
          <div className="photo  aspect-square w-24 rounded-full border-2 border-white bg-dark-2"></div>

          <div className="info !py-0">
            <p className="text-xl font-semibold capitalize">{user.name} </p>
            <small className="lowercase">{user.email} </small>
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
                      modalType === "delete" ? deleteAccount() : logout();
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
