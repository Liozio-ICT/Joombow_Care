import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../component/firebaseConfig";
import Otp from "../component/Otp";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Loader from "../component/Loader";
import apiClient from "../utils/apiClient";
import { ScrollRestoration, useSearchParams } from "react-router-dom";
import { useAuth } from "../provders/AuthProvider";
import Input from "../components/Input";
import "./auth.css";

const Signup = () => {
  const [showOTPForm, setShowOTPForm] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

  // const handleSignup = async () => {
  //   try {
  //     setLoading(true);

  //     if (!firstName || !email || !phoneNumber || !password) {
  //       setMessage("Please fill in all the required fields.");
  //       toast.error("Please fill in all the required fields.");

  //       return;
  //     }

  //     // Password validation using regular expression
  //     // const passwordRegex =
  //     //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\d)(?=.*[\W]).{8,}$/;

  //     // // /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

  //     // if (!passwordRegex.test(password)) {
  //     //   toast.error(
  //     //     "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.",
  //     //   );
  //     //   return; // Prevent signup process from proceeding
  //     // }

  //     if (!phoneNumber) {
  //       toast.error("Invalid phone Number.");
  //       return;
  //     }

  //     const { message } = await apiClient
  //       .post(`user/register`, {
  //         json: {
  //           firstName,
  //           lastName,
  //           email,
  //           phoneNumber,
  //           password,
  //           referralCode,
  //         },
  //       })
  //       .json();

  //     toast.success(message);
  //     // Handle additional logic based on the response if needed
  //     setShowOTPForm(true);
  //   } catch (error) {
  //     console.log(error);
  //     setMessage("Error signing up. Please try again later.");
  //     toast.error(error.message || "Error signing up. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSignup = async () => {
    try {
      setLoading(true);

      if (!firstName || !lastName || !email || !phoneNumber || !password) {
        setMessage("Please fill in all the required fields.");
        toast.error("Please fill in all the required fields.");
        return;
      }

      const response = await apiClient.post(`user/register`, {
        json: {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          referralCode,
        },
      });

      const { message } = await response.json();

      toast.success(message);
      setShowOTPForm(true);
      navigate(
        `/otp/${encodeURIComponent(email)}/${encodeURIComponent("sms")}/${encodeURIComponent(6)}`,
      );
    } catch (error) {
      console.error("Signup error:", error);

      let errorMessage = "Error signing up. Please try again later.";

      // Check if the error response has a JSON body
      if (error.response) {
        try {
          const errorData = await error.response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          console.error("Error parsing error response:", jsonError);
        }
      }

      setMessage(errorMessage);
      toast.error(errorMessage);
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

      const { message, token, user } = await apiClient
        .post("user/register/google", {
          json: {
            name: result?.user.displayName,
            email: result?.user.email,
          },
        })
        .json();

      toast.success(message);
      // Handle additional logic based on the response if needed
      login(token, user);
    } catch (error) {
      toast.error(error.message);
      toast.error(error.response.json().message);
      console.log("Could not login with Google", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setReferralCode(searchParams.get("ref"));
  }, []);

  return (
    <>
       <ToastContainer />
      <Loader />
      <ScrollRestoration />

      <section className="bg-black lg:hidden">
        <span className="prevLink block px-4 pt-4">
          <Link to="/">
            <GrFormPreviousLink className="rounded-3xl border border-gray-200 text-[1.5rem] text-white" />
          </Link>
        </span>
        <main className="min-h-[100vh] px-6 pb-[2rem]">
          {showOTPForm ? (
            // <Otp Gmail={phoneNumber} />
            <Otp to={email} />
          ) : (
            <div className="logo">
              <img
                src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                className="m-auto h-[200px] w-[200px] object-cover"
                alt="background image"
              />
            </div>
          )}

          <h2 className="mb-8 font-clash text-[1.7rem] font-bold capitalize text-slate-200">
            SignUp
          </h2>
          <form className="mt-[1rem]" id="registrationForm ">
            <div className="inputCon text-slate-200">
              <Input
                label={"First Name:"}
                name={"firstName"}
                value={firstName}
                setValue={setFirstName}
                placeholder="Enter First Name"
                error={""}
              />
            </div>
            <div className="inputCon text-slate-200">
              <Input
                label={"Last Name:"}
                name={"lastName"}
                value={lastName}
                setValue={setLastName}
                placeholder="Enter Last Name"
                error={""}
              />
            </div>
            <div className="inputCon text-slate-200">
              <Input
                label={"Email:"}
                name={"email"}
                value={email}
                setValue={setEmail}
                placeholder="Enter Email"
                error={""}
              />
            </div>
            <div className="inputCon text-slate-200">
              <Input
                label={"Phone Number:"}
                name={"phoneNumber"}
                value={phoneNumber}
                setValue={setPhoneNumber}
                placeholder="Enter Phone Number"
                error={""}
              />
            </div>
            <div className="inputCon text-slate-200">
              <Input
                label={"Password:"}
                name={"password"}
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Enter Password"
                error={""}
              />
            </div>
            <div className="inputCon text-slate-200">
              <Input
                label={"Referral Code (Optional):"}
                name={"referralCode"}
                value={referralCode}
                setValue={setReferralCode}
                placeholder="Enter Referral Code"
                error={""}
              />
            </div>

            {/* <div className="inputCon text-slate-200">
              <Input
                label={"Password:"}
                name={"password"}
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Enter Password"
                error={""}
              />
            </div> */}

            {/* <div className="inputCon text-slate-200">
              <Input
                label={"Referral code:"}
                name={"referralCode"}
                value={referralCode}
                setValue={setReferralCode}
                placeholder="Enter Referral code"
                error={""}
              />
            </div> */}

            <button
              type="button"
              onClick={handleSignup}
              className="btn font-montserrat mt-6 cursor-pointer rounded-md bg-[#FD1014] py-3 text-[18px] font-semibold text-white outline-none transition hover:bg-[#E3383B]"
            >
              Next
            </button>

            <div className="text my-3 text-slate-200">
              <h2>
                Already have an account?{" "}
                <span className="log font-bold text-[#FD1014] transition hover:text-[#E3383B]">
                  <Link to="/login">Login</Link>{" "}
                </span>{" "}
              </h2>
            </div>
            <button
              type="button"
              onClick={handleOAuth}
              className="mon flex w-full items-center justify-center rounded-[10px] border border-red-500 px-4 py-3 text-[18px] font-semibold text-slate-200 transition duration-300 hover:bg-[#E3383B]"
            >
              <FcGoogle className="mr-2 text-[28px]" />
              Login with Google
            </button>
          </form>
        </main>
      </section>

      {loading && (
        <div className="fixed inset-0 z-[99999] flex w-full items-center justify-center bg-white">
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

      <>
        {/* desktop */}
        <Loader />

        <div className="hidden w-full lg:block">
          <img
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg"
            className="fixed inset-0 -z-20 size-full object-cover"
            alt="bh image"
          />
          <div className="fixed inset-0 -z-10 bg-black opacity-70"></div>

          <div className="relative flex">
            <span className="prevLink absolute z-50 block">
              <div className="logo m-auto h-[250px] w-[250px] object-cover">
                <img
                  src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                  className="Logo"
                  alt="Logo"
                />
              </div>
            </span>
            <div className="z-50 flex w-full grow justify-center p-6 pb-20 text-white">
              <form
                className="mt-[.3rem] h-fit max-w-[50%] grow self-start rounded-lg bg-[#433F3FCC] px-4"
                id="registrationForm"
              >
                <span className="prevLink mt-8 block px-4">
                  <Link to="/">
                    <GrFormPreviousLink className="rounded-3xl border border-gray-200 text-[1.5rem] text-white" />
                  </Link>
                </span>
                <h2 className="my-4 font-clash text-[1.7rem] font-bold capitalize">
                  signup
                </h2>
                <div className="inputCon w-full">
                  <Input
                    label={"First Name:"}
                    name={"firstName"}
                    value={firstName}
                    setValue={setFirstName}
                    placeholder="Enter First Name"
                    error={""}
                  />
                  {/* <Input
                    label={"Full Name:"}
                    name={"fullName"}
                    value={fullName}
                    setValue={setFullName}
                    placeholder="Enter Full Name"
                    error={""}
                  /> */}
                </div>
                {/* <div className="inputCon my-[.3rem]">
                  <Input
                    label={"Phone Number:"}
                    name={"phoneNumber"}
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                    placeholder="Enter Phone Number"
                    error={""}
                  />
                </div> */}
                <div className="inputCon text-slate-200">
                  <Input
                    label={"Last Name:"}
                    name={"lastName"}
                    value={lastName}
                    setValue={setLastName}
                    placeholder="Enter Last Name"
                    error={""}
                  />
                </div>
                <div className="inputCon text-slate-200">
                  <Input
                    label={"Email:"}
                    name={"email"}
                    value={email}
                    setValue={setEmail}
                    placeholder="Enter Email"
                    error={""}
                  />
                </div>
                <div className="inputCon text-slate-200">
                  <Input
                    label={"Phone Number:"}
                    name={"phoneNumber"}
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                    placeholder="Enter Phone Number"
                    error={""}
                  />
                </div>
                <div className="inputCon text-slate-200">
                  <Input
                    label={"Password:"}
                    name={"password"}
                    value={password}
                    setValue={setPassword}
                    type="password"
                    placeholder="Enter Password"
                    error={""}
                  />
                </div>
                <div className="inputCon text-slate-200">
                  <Input
                    label={"Referral Code (Optional):"}
                    name={"referralCode"}
                    value={referralCode}
                    setValue={setReferralCode}
                    placeholder="Enter Referral Code"
                    error={""}
                  />
                </div>
                {/* <div className="inputCon">
                  <Input
                    label={"Password:"}
                    name={"password"}
                    value={password}
                    setValue={setPassword}
                    type="password"
                    placeholder="Enter Password"
                    error={""}
                  />
                </div> */}
                {/* <div className="inputCon">
                  <Input
                    label={"Referral code:"}
                    name={"referralCode"}
                    value={referralCode}
                    setValue={setReferralCode}
                    placeholder="Enter Referral code"
                    error={""}
                  />
                </div> */}
                <button
                  type="button"
                  onClick={handleSignup}
                  className="font-montserrat mt-4 w-full cursor-pointer rounded-md bg-[#FD1014] py-3 text-[18px] font-semibold text-white outline-none transition hover:bg-[#E3383B]"
                >
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
                <button
                  type="button"
                  onClick={handleOAuth}
                  className="my-5 flex w-full items-center justify-center rounded-[10px] border border-red-500 px-4 py-3 text-[18px] font-semibold transition hover:bg-[#E3383B]"
                >
                  <FcGoogle className="mr-2 text-[18px]" />
                  Login with Google
                </button>
              </form>
              <section className="">
                {/* <main className=" ">
                  {showOTPForm ? (
                    <Otp Gmail={phoneNumber} />
                  ) : (
                    <div className="logo pt-[4rem]"></div>
                  )}
                  <h2 className="text-[2rem] capitalize font-bold">SignUp</h2>
                </main> */}
              </section>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Signup;
