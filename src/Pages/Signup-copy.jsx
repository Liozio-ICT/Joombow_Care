import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../component/firebaseConfig";
import Otp from "../component/Otp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../component/Loader";

const Signup = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setLoading(true);

      if (!firstName || !lastName || !email || !phoneNumber || !password) {
        setMessage("Please fill in all the required fields.");
        toast.error("Please fill in all the required fields.");

        return;
      }

      // Password validation using regular expression
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&^#.])[A-Za-z\d$@$!%*?&^#.]{8,}$/;

      if (!passwordRegex.test(password)) {
        toast.error(
          "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
        );
        return; // Prevent signup process from proceeding
      }

      // Email validation using regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Invalid email address.");
        return;
      }

      const response = await axios.post("https://resp-one.vercel.app/signup", {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        referralCode,
      });

      toast.success(response.data.message);
      setShowOTPForm(true);
      // Handle additional logic based on the response if needed
    } catch (error) {
      console.error(error);
      setMessage("Error signing up. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const Gauth = getAuth(app);

      const result = await signInWithPopup(Gauth, provider);
      console.log("AUTH", result);

      const res = await fetch("https://resp-one.vercel.app/save-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result?.user.displayName,
          email: result?.user.email,
        }),
      });
      const data = await res?.json();
      if (data?.success) {
        navigate("/user");

      }
    } catch (error) {
      console.log("Could not login with Google", error);
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
      <body className="lg:hidden bg-black">
        <span className="prevLink px-4 pt-4 block">
          <Link to="/">
            <GrFormPreviousLink className="text-[1.5rem] border border-gray-200 text-white rounded-3xl" />
          </Link>
        </span>
        <main className="px-6 min-h-[100vh] pb-[2rem]">
          {showOTPForm ? (
            <Otp Gmail={email} />
          ) : (
            <div className="logo">
              <img
                src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                className="w-[200px] h-[200px] m-auto object-cover"
                alt="background image"
              />
            </div>
          )}

          <h2 className="text-[1.7rem] text-slate-200 font-clash capitalize font-bold mb-8">
            SignUp
          </h2>
          <form className="mt-[1rem]" id="registrationForm ">
            <div className="inputCon text-slate-200 ">
              <label className="block  font-semibold text-[16px] ">
                First Name:
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="firstName"
                type="text"
                className={`bg-[#FCFBFB] text-black focus:border focus:border-gray-300 capitalize border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] mb-1 mt-1 px-4 ${message && !firstName ? "border-red-500" : ""
                  }`}
              />
            </div>

            <div className="inputCon text-slate-200 py-2">
              <label className="block  font-semibold text-[16px]">Last Name:</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                type="text"
                className={`bg-[#FCFBFB] text-black focus:border focus:border-gray-300 capitalize border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] mb-1 mt-1 px-4 ${message && !lastName ? "border-red-500" : ""
                  }`}
              />
            </div>

            <div className="inputCon text-slate-200">
              <label className="block font-semibold text-[16px]">Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="text"
                className={`bg-[#FCFBFB] text-black focus:border focus:border-gray-300 apitalze border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] mb-1 mt-1 px-4 ${message && !email ? "border-red-500" : ""
                  }`}
              />
            </div>

            <div className="inputCon text-slate-200">
              <label className="block font-semibold text-[16px]">Phone No:</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="phoneNumber"
                type="text"
                className={`bg-[#FCFBFB] text-black focus:border focus:border-gray-300
                 capitalize border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] mb-1 mt-1 px-4 ${message && !phoneNumber ? "border-red-500" : ""
                  }`}
              />
            </div>

            <div className="inputCon text-slate-200">
              <label className="block font-semibold text-[16px]">Password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="text"
                className={`bg-[#FCFBFB] text-black focus:border focus:border-gray-300 apitalize border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] mb-1 mt-1 px-4 ${message && !password ? "border-red-500" : ""
                  }`}
              />
            </div>

            <div className="inputCon text-slate-200">
              <label className="block font-semibold text-[16px]">
                Referral code:
              </label>
              <input
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                id="referralCode"
                type="text"
                className={`bg-[#FCFBFB] text-black focus:border focus:border-gray-300 capitalize border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] mb-1 mt-1 px-4 ${message && !referralCode ? "border-red-500" : ""
                  }`}
              />
            </div>

            <button
              type="button"
              onClick={handleSignup}
              className="btn mt-6 text-[18px] font-montserrat text-white font-semibold cursor-pointer w-full rounded-md outline-none py-3 bg-[#FD1014] hover:bg-[#E3383B] transition">
              Next
            </button>

            <div className="text my-3 text-slate-200">
              <h2>
                Already have an account?{" "}
                <span className="log font-bold text-[#FD1014] hover:text-[#E3383B] transition">
                  <Link to="/login">Login</Link>{" "}
                </span>{" "}
              </h2>
            </div>
            {loading && (
              <div
                className="fixed top-0 left-0 right-0 bottom-0
                   bg-white w-full flex items-center justify-center">
                <div className="dot-spinner">
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={handleOAuth}
              className="w-full border-red-500 border py-3 px-4 rounded-[10px] flex items-center text-[18px] font-semibold mon text-slate-200 duration-300 justify-center hover:bg-[#E3383B] transition">
              <FcGoogle className="mr-2 text-[28px]" />
              Login with Google
            </button>

            {loading && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-white w-full flex items-center justify-center">
                <div className="dot-spinner">
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                </div>
              </div>
            )}
          </form>
        </main>
      </body>

      <>
        {/* desktop */}

        <div className="r w-full hidden lg:block">
          <span className="prevLink  absolute z-[2] block">
            <div className="logo m-auto w-[250px] h-[250px] object-cover">
              <img
                src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                className="Logo"
                alt="Logo"
              />
            </div>
          </span>
          <img
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg"
            className="w-full object-cover h-[780px]"
            alt="bh image"
          />

          <div className="absolute inset-0 bg-black opacity-70  h-[49rem] w-full"></div>

          <div className="absolute inset-0 flex  justify-center  w-full  text-white  px-6 ">
            <form
              className=" h-[775px] w-[50%]  mt-[.3rem] px-4 rounded-lg self-start bg-[#433F3FCC]"
              id="registrationForm">
              <span className="prevLink px-4 block mt-8">
                <Link to="/">
                  <GrFormPreviousLink className="text-[1.5rem] text-white border border-gray-200 rounded-3xl" />
                </Link>
              </span>

              <h2 className="text-[1.7rem] font-clash capitalize font-bold my-4">
                signup
              </h2>

              <div className="inputCon w-full">
                <label className="block text-slate-100 font-semibold text-[14px] ">
                  First Name:
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstName"
                  type="text"
                  className={` border-[1px] border-slate-200 text-black outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-400 mb-2 ${message && !firstName ? "border-red-500" : ""
                    }`}
                />
              </div>

              <div className="inputCon">
                <label className="block text-slate-100 font-semibold text-[14px]">
                  Last Name:
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastName"
                  type="text"
                  className={`border-[1px] border-slate-200 text-black outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-400 mb-2  ${message && !lastName ? "border-red-500" : ""
                    }`}
                />
              </div>

              <div className="inputCon my-[.3rem]">
                <label className="block text-slate-100 font-semibold text-[14px]">
                  Email:
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="text"
                  className={`border-[1px] mt-1 mb-2 text-black  border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] 
                  focus:border focus:border-gray-400 ${message && !email ? "border-red-500" : ""
                    }`}
                />
              </div>

              <div className="inputCon my-[.3rem]">
                <label className="block text-slate-100 font-semibold text-[14px]">
                  Phone No:
                </label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="phoneNumber"
                  type="text"
                  className={`border-[1px] mb-2 text-black border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-400 ${message && !phoneNumber ? "border-red-500" : ""
                    }`}
                />
              </div>

              <div className="inputCon">
                <label className="block text-slate-100 font-semibold text-[14px]">
                  Password:
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="text"
                  className={`border-[1px] mb-2 text-black border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border
                  focus:border-gray-400 ${message && !password ? "border-red-500" : ""
                    }`}
                />
              </div>

              <div className="inputCon">
                <label className="block text-slate-100 font-semibold text-[14px]">
                  Referral code:
                </label>
                <input
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  id="referralCode"
                  type="text"
                  className={`border-[1px] mb-2 text-black border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-400 ${message && !referralCode ? "border-red-500" : ""
                    }`}
                />
              </div>

              <button
                type="button"
                onClick={handleSignup}
                className="text-[18px] text-white font-montserrat font-semibold cursor-pointer
                w-full rounded-md outline-none py-3 bg-[#FD1014] hover:bg-[#E3383B] mt-4 transition">
                Next
              </button>

              <div className="text my-3">
                <h2>
                  Already have an account?{" "}
                  <span className="log font-bold text-[#FD1014] hover:text-[#E3383B]">
                    <Link to="/login">Login</Link>{" "}
                  </span>{" "}
                </h2>
              </div>
              {loading && (
                <div
                  className="fixed top-0 left-0 right-0 bottom-0 z-20
                   bg-white w-full flex items-center justify-center">
                  <div className="dot-spinner">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                  </div>
                </div>
              )}
              <button
                type="button"
                onClick={handleOAuth}
                className="w-full border-red-500 border
                py-3 px-4 rounded-[10px] flex items-center text-[18px] font-semibold mon justify-center hover:bg-[#E3383B] transition">
                <FcGoogle className="mr-2 text-[18px]" />
                Login with Google
              </button>

              {loading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-white w-full flex items-center justify-center">
                  <div className="dot-spinner">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                  </div>
                </div>
              )}
            </form>

            <body className="">
              <main className="  ">
                {showOTPForm ? (
                  <Otp Gmail={email} />
                ) : (
                  <div className="logo pt-[4rem]"></div>
                )}

                {/* <h2 className="text-[2rem] capitalize font-bold">SignUp</h2> */}
              </main>
            </body>
          </div>
        </div>
      </>
    </>
  );
};

export default Signup;
