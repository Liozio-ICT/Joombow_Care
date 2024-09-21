import ProfileListItem from "../../../components/ProfileListItem";
import { FaSignOutAlt } from "react-icons/fa";
import { FaCheck, FaCamera, FaUserXmark, FaX } from "react-icons/fa6";
import { useState } from "react";
import { cn } from "../../../utils/tailwind";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { useAuth } from "../../../provders/AuthProvider";
import { useEffect } from "react";
import apiClient, { API_URL } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const navigate = useNavigate();
  const { logout, getUserData, updateUser, token } = useAuth()
  const [photo, setPhoto] = useState(
    useAuth().user?.photo ??
    `https://ui-avatars.com/api/?name=${useAuth().user?.firstName?.replaceAll(" ", "+") ?? "Joombow"}+${useAuth().user?.lastName?.replaceAll(" ", "+") ?? "User"}`,
  );
  const [photoInput, setPhotoInput] = useState()
  const [modalType, setModalType] = useState();
  const [modalStep, setModalStep] = useState();

  const list = [
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

  const handlePhotoUpload = async (e) => {
    e.preventDefault()
    try {
      let body = new FormData();
      body.append("photo", photoInput);
      const response = await fetch(`${API_URL}/user/me/update-photo`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body,
      });

      const { message, error, user } = await response.json();
      console.log({ photoInput, error, user, message })
      if (response.ok) {
        setPhotoInput()
        return toast.success(message);
      }
      toast.error(message);
    } catch (error) {
      console.log({ error });
      toast.error(error?.message);
      toast.error(error.response.json().message)
    } finally {
      getUserData().then((data) => setPhoto(data.photo));
    }
  };

  const handlePhotoChange = async (input) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(input);
      fileReader.onload = () => setPhoto(fileReader.result);
    } catch (error) {
      console.log({ error });
      setPhoto(photo ??
        `https://ui-avatars.com/api/?name=${firstName?.replaceAll(" ", "+") ?? "Joombow"}+${lastName?.replaceAll(" ", "+") ?? "User"}`,
      );
      toast.error(error?.message);
      toast.error(error.response.json().message)
    }
  };

  const handleLogout = async () => {
    // api request logics
    const { message, done } = await logout()
    if (done) {
      return navigate("/login");
    }

    toast.error(message)
    setModalType()
    setModalStep()

  };
  const deleteAccount = async () => {
    // api request logics

    try {
      const { message } = await apiClient.delete('user/me').json()

      setModalStep("success");
      toast.success(message)

      logout()
    } catch (error) {
      toast.error(error.message)
      toast.error(error.response.json().message)
    }

  }


  useEffect(() => {
    getUserData().then((e) => {
      // console.log(e)
      updateUser(e)
      setPhoto(e?.photo ?? `https://ui-avatars.com/api/?name=${e?.firstName?.replaceAll(' ', '+') ?? 'Joombow'}+${e?.lastName?.replaceAll(' ', '+') ?? 'User'}`)
    }).catch(err =>
      toast.error(err.message)
    )
  }, [])

  return (
    <>
      <ScrollRestoration />

      <div className="max-w-screen-sm mx-auto grid gap-10">

        {/* photo */}
        <form onSubmit={handlePhotoUpload} className="text-center *:p-3 *:md:p-5 rounded-lg shadow overflow-clip">
          <h2 className="wrapper !bg-brand-red text-white font-semibold">
            My Profile
          </h2>
          <div className="photo aspect-square w-24 mx-auto rounded-full relative mt-2 border-2 border-brand-red/25 bg-dark-2">
            <div className="absolute inset-0 overflow-clip rounded-full">
              <img
                src={photo}
                alt={useAuth().user?.name}
                className="size-full object-cover"
              />
            </div>
            <label
              htmlFor={`${useAuth().user?.email}_photo`}
              className="absolute bottom-0 translate-y-[50%] left-[50%] -translate-x-[50%] flex size-8 cursor-pointer items-center justify-center rounded-full bg-black text-white p-1.5"
            >
              <input
                type="file"
                name="photo"
                id={`${useAuth().user?.email}_photo`}
                hidden
                onChange={(e) => {
                  handlePhotoChange(e.target.files[0])
                  setPhotoInput(e.target.files[0])
                }}
              />
              <FaCamera className="size-full object-contain" />
            </label>
          </div>

          <div className="">
            <p className="text-xl font-semibold capitalize">{useAuth().user?.firstName ?? ''} {useAuth().user?.lastName ?? ''} </p>
            <small className="lowercase">{useAuth().user?.email} </small>
          </div>

          <div className="!pt-0 pb-5">
            <button type="submit" className="mx-auto rounded  hover:scale-105 transition-all duration-200 hover:bg-opacity-75 bg-brand-red text-white p-2 px-4">
              Save changes
            </button>
          </div>
        </form>

        {/* data */}
        <div className="rounded-lg shadow overflow-clip">
          <EditProfile />
        </div>

        {/* verify email */}


        {/* update password */}
        <div className="rounded-lg shadow overflow-clip">
          <ChangePassword />
        </div>

        {/* danger zone */}

        <div className="rounded-lg shadow overflow-clip text-center *:p-3 *:md:p-5">
          <h2 className="wrapper !bg-brand-red text-white font-semibold">
            Danger Zone
          </h2>
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
        </div>
      </div>



      {/* modal */}

      <div
        className={cn(
          "fixed inset-0 -z-[99999] opacity-0 flex p-3 items-center justify-center bg-slate-950/25 transition-all",
          { "z-[999999] opacity-100": modalType },
        )}
      >
        <div
          className={cn(
            "relative grid gap-5 rounded-xl bg-white p-4 transition-all duration-500",
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
                    className="rounded-lg bg-brand-red text-white p-2 px-3 outline-none"
                    onClick={() => {
                      modalType === "delete" ? deleteAccount() : handleLogout();
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="rounded-lg border border-brand-red bg-transparent p-2 px-3 outline-none"
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
                <div className="mx-auto aspect-square rounded-full bg-brand-red text-white">
                  <FaCheck size={48} />
                </div>
                <div className="mx-auto">
                  <strong>Successful</strong>
                  <p>You’ve successfully deleted your account. Goodbye </p>
                </div>
                <button
                  className="mx-auto w-full max-w-[15rem] rounded-lg bg-brand-red p-2 px-3 outline-none"
                  onClick={() => {
                    logout()
                    navigate("/signup")
                  }}
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
