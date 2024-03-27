import React, { useState } from "react";
import Loader from "../component/Loader";
import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [message, Setmessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://resp-one.vercel.app/forgot-password",
        { email }
      );
      Setmessage(response.data.message);

      // If password reset is successful, navigate to the change password page
      if (response) {
        navigate("/new"); // Replace '/change-password' with your desired route
      }
    } catch (error) {
      console.error(error);
      toast.error("enter a valid email");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Loader />
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

      <body className="bg-black">
        <main className="container min-h-[100vh]  px-6 lg:hidden ">
          <Loader />
          <span className="prevLink block py-8">
            <Link to="/login">
              <GrFormPreviousLink className="text-[1.5rem] text-[#ffffff] border border-gray-200 rounded-3xl " />
            </Link>
          </span>

          <div className="text text-[#ffffff] pb-3">
            <h2 className="text-[1.7rem] font-clash font-semibold mb-8 ">
              Forgot Password
            </h2>
            <p>
              Don’t worry it happens. Please enter the email address linked to
              your account.
            </p>
          </div>

          <div className="inpt py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-3 rounded-md px-4 border  w-full bg-[#FCFBFB] focus:border focus:border-gray-300 outline-none"
              value={email}
              onChange={(e) => Setemail(e.target.value)}
            />
            {message && (
              <p className="mt-4 px-2 capitalize font-semibold text-red-500">
                {message}
              </p>
            )}
          </div>
          <div className="fbtn py-2">
            <button
              className="w-full text-white py-3 bg-[#FD1014] hover:bg-[#E3383B] font-montserrat transition rounded-md"
              onClick={handleForgotPassword}>
              Reset Password
            </button>
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
        </main>
      </body>

      {/* desktop */}

      <div className=" w-full hidden lg:block">
        <img
          src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711544467/istockphoto-1347150429-612x612_kxwt2o.jpg"
          className="w-full object-cover h-[784px]"
          alt="car care image"
        />

        <div className="absolute inset-0 bg-black opacity-70  h-[49rem] w-full"></div>

        <div className="absolute inset-0 flex  justify-center  items-center w-full  text-white ">
          <section className="forge  w-[40%] bg-[#433F3FCC] opacity-100  h-[30rem] mt-[2rem] pt-4 px-6">
            <div className="container mx-auto mt-8 px-[1rem] hidden lg:block">
              <Loader />
              <span className="prevLink my-4 block mb-8">
                <Link to="/login">
                  <GrFormPreviousLink className="text-[1.5rem] border border-gray-200 rounded-3xl" />
                </Link>
              </span>
              <h2 className="text-2xl font-semibold mb-2 mon">
                Forgot Password
              </h2>
              <p>
                Don’t worry it happens. Please enter the email address linked to
                your account.
              </p>

              <div className="inpt my-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-3 text-[#010102] font-montserrat font-normal text-[14px] rounded-md px-2 border outline-none w-full bg-[#FCFBFB] focus:border focus:border-gray-400"
                  value={email}
                  onChange={(e) => Setemail(e.target.value)}
                />
                {message && (
                  <p className="mt-4 px-2 capitalize font-semibold text-red-500">
                    {message}
                  </p>
                )}
              </div>
              <div className="fbtn">
                <button
                  className="w-full text-white py-3 rounded-md bg-[#FD1014] hover:bg-[#E3383B] transition"
                  onClick={handleForgotPassword}>
                  Reset Password
                </button>
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
}

export default ForgotPassword;
