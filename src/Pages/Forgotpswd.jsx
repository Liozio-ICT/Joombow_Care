import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import Loader from "../component/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "../utils/apiClient";

const Forgotpswd = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [message, Setmessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      setLoading(true);
      const response = await apiClient.post(
        "/user/forgot-password",
        { email }
      );
      const { message} = response.json()
      Setmessage(message);

      // If password reset is successful, navigate to the change password page
      if (response.ok) {
        navigate("/new"); // Replace '/change-password' with your desired route
      }
      else
        toast.error(message)
    } catch (error) {
      console.error(error);
      toast.error("enter a valid email");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container px-6 lg:hidden bg-black h-screen ">
        <Loader />
        <span className="prevLink py-4 block mb-8">
          <Link to="/login">
            <GrFormPreviousLink className="text-[1.5rem] border border-gray-200 rounded-3xl text-slate-200" />
          </Link>
        </span>
        <h2 className="text-[1.7rem] font-clash font-semibold mb-8 text-slate-200">
          Forgot Password
        </h2>
        <p className="text-slate-200">
          Don’t worry it happens. Please enter the email address linked to your
          account.
        </p>

        <div className="inpt py-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-3 rounded-md px-2 border  w-full bg-[#FCFBFB] focus:border focus:border-gray-300 outline-none"
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
      </div>

      {/* desktop */}

      <div className=" w-full hidden lg:block">
        <img
          src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg"
          className="w-full object-cover h-[780px]"
          alt=""
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
                  className="py-3 rounded-md px-2 border outline-none text-slate-900 w-full bg-[#FCFBFB] focus:border focus:border-gray-400"
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
};

export default Forgotpswd;
