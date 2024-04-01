// src/ResetPassword.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import Loader from "../component/Loader";
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://resp-one.vercel.app/reset-password",
        { email, otp, newPassword }
      );
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Error resetting password. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
      <div className="container mx-auto mt-10 px-6 lg:hidden">
        <span className="prevLink my-4 block mb-8">
          <Link to="/reset">
            <GrFormPreviousLink className="text-[1.5rem] border border-gray-200 rounded-3xl" />
          </Link>
        </span>

        <h2 className="text-[1.7rem] font-clash font-bold mb-4">
          Create new Password
        </h2>
        <p className="my-4 text-[#010102] font-montserrat">
          Your password should be strong and secured.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="border-[1px] font-montserrat border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 mt-1 mb-2 bg-[#FCFBFB] focus:border focus:border-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter OTP"
          className="border-[1px] font-montserrat border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 my-2 bg-[#FCFBFB] focus:border focus:border-gray-400"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter new password"
          className="border-[1px] font-montserrat border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 my-2 bg-[#FCFBFB] focus:border focus:border-gray-400"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          className="text-[18px] text-white font-montserrat font-semibold cursor-pointer
                     w-full rounded-md outline-none py-3 bg-[#FD1014] hover:bg-[#E3383B] mt-4 transition"
          onClick={handleResetPassword}>
          Reset Password
        </button>
        {message && <p className="mt-4">{message}</p>}

        {loading && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0
                   bg-white w-full flex items-center justify-center">
            <div class="dot-spinner">
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
            </div>
          </div>
        )}
      </div>
      {/* desktop  */}
      <div className="r w-full hidden lg:block md:hidden">
        <img
          src="https://res.cloudinary.com/durbee4ln/image/upload/v1707031675/rsz_car-img_dfy7bc.jpg"
          className="w-full object-cover lg:h-[800px]"
          alt=""
        />

        <div className="absolute inset-0 bg-black opacity-60  h-[50rem] w-full"></div>

        <div className="absolute inset-0 flex  justify-center  items-center w-full text-white ">
          <section className="forge  w-[50%] bg-[#433F3FCC] opacity-100  h-[35rem]  mt-[2rem] pt-4 px-">
            <div className="container mx-auto mt-8 px-[1rem] hidden lg:block">
              <Loader />
              <span className="prevLink my-4 block">
                <Link to="/reset">
                  <GrFormPreviousLink className="text-[1.5rem] border border-gray-200 rounded-3xl" />
                </Link>
              </span>

              <div className="container mx-auto mt-10 px-[1rem]">
                <h2 className="text-[1.7rem] font-clash font-bold mb-4">
                  Create new Password
                </h2>
                <p className="my-4">
                  Your password should be strong and secured.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-slate-900  border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] mt-1 mb-2 px-4 bg-[#FCFBFB] focus:border focus:border-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="text-slate-900  border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] my-2 px-4 bg-[#FCFBFB] focus:border focus:border-gray-400"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="text-slate-900  border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] my-2 px-4 bg-[#FCFBFB] focus:border focus:border-gray-400"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  className="text-[18px] text-white font-montserrat font-semibold cursor-pointer
                  w-full rounded-md outline-none mt-4 py-3 bg-[#FD1014] hover:bg-[#E3383B] transition"
                  onClick={handleResetPassword}>
                  Reset Password
                </button>
                {message && <p className="mt-4">{message}</p>}
              </div>

              {loading && (
                <div
                  className="fixed top-0 left-0 right-0 bottom-0
                   bg-white w-full flex items-center justify-center">
                  <div class="dot-spinner">
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
