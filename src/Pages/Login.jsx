import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../component/firebaseConfig";
import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../component/Loader";
import apiClient from "../utils/apiClient";
import { ScrollRestoration } from "react-router-dom";
import { useAuth } from "../provders/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      setLoading(true);

      if (!email || !password) {
        toast.error("Please enter both email and password.");
        return;
      }

      const response = await apiClient.post("/user/login", { email, password });

      const { message, token, user } = await response.json()
      if (response.ok) {
        toast.success(message);
        login(token, user)
        navigate("/dashboard")
        // navigate("/dashboard");
      } else {
        toast.error(`Login failed: ${message}`);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
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

      const response = await apiClient.post("/user/login/google", {
        name: result?.user.displayName,
        email: result?.user.email,
      });


      const { message, token, user } = await response.json()
      if (response.ok) {
        toast.success(message);
        login(token, user)
        navigate("/launch");
      }
    } catch (error) {
      // toast.error('Could not login with Google');
      console.log("Could not login with Google", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="loginCon bg-black">
      <ScrollRestoration />

      <Loader />
      <span className="prevLink lg:hidden px-4 pt-4 block">
        <Link to="/">
          <GrFormPreviousLink className="text-[1.5rem] border border-slate-200 text-white rounded-3xl" />
        </Link>
      </span>
      <main className="px-6 min-h-[100vh] lg:hidden">
        <div className="logo w-[200px] h-[200px] object-cover m-auto">
          <img
            src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
            className="logo"
            alt="Logo"
          />
        </div>
        <h2 className="text-[1.7rem] text-slate-200 font-clash capitalize font-bold mb-8">
          login
        </h2>
        <form className="mt-[1rem]" id="registrationForm">
          <div className="inputCon">
            <label className="block text-[#010102] font-semibold text-[16px]">
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="text"
              placeholder="Enter Email"
              className="apitalize text-black border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300"
            />
          </div>

          <div className="inputCon py-2">
            <label className="block text-[#010102] font-semibold text-[16px]">
              Password:
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="text"
              placeholder="Enter Password"
              className="apitalize text-black border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 "
            />
          </div>

          <h2 className="fgpsw text-right my-2 text-sm text-sky-400 font-semibold mon hover:text-sky-500 transition">
            <Link to="/reset"> I forgot my password!</Link>
          </h2>
          <div className="mt-[1rem] ">
            <button
              type="button"
              onClick={handleLogin}
              className="btn text-[18px] text-white font-montserrat font-semibold cursor-pointer
             w-full rounded-md outline-none py-3 bg-[#FD1014] hover:bg-[#E3383B] transition">
              Login
            </button>

            {/* <Link
              type="button"
              to="/launch"
              className="btn text-[18px] text-white font-montserrat font-semibold cursor-pointer text-center w-full rounded-md outline-none py-3 bg-[#FD1014] hover:bg-[#E3383B] transition">
              Login
            </Link> */}

            <div className="text my-5 text-slate-200">
              <h2>
                I don't have an account?{" "}
                <span className="log font-bold text-[#FD1014] hover:text-[#E3383B] transition">
                  <Link to="/signup">Signup</Link>{" "}
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
              className="  w-full border-red-500 border
         py-3 px-4 rounded-[10px] flex items-center text-[18px] font-semibold mon justify-center hover:bg-[#E3383B] text-[#FCFBFB] ease-in-out duration-300 transition">
              <FcGoogle className="mr-2 text-[28px]" />
              Login with google
            </button>
            <button
              type="button"
              onClick={handleOAuth}
              className="oAuthBtn hidden"
              style={{
                display: "flex",
                alignItems: "center ",
                justifyContent: "center",
              }}>
              <div className="authContent">
                <p className="authText hidden text-slate-200"> Google</p>
              </div>
            </button>
          </div>
        </form>
      </main>

      {/* desktop */}

      <div className="r w-full hidden lg:block">
        <span className="prevLink z-[2] absolute block">
          <img
            src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
            className="w-[250px] h-[250px] object-cover"
            alt="Logo"
          />
        </span>
        <img
          src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg"
          className="w-full object-cover h-[780px]"
          alt=""
        />

        <div className="absolute inset-0 bg-black opacity-70 h-[49rem] w-full"></div>

        <div className="absolute inset-0 flex  justify-center  w-full  text-white ">
          <form
            className=" w-[50%]  mt-[2rem] bg-[#433F3FCC]"
            id="registrationForm">
            <main className="px-[1rem] block">
              <Link to="/">
                <GrFormPreviousLink className="text-[1.5rem] text-white border border-gray-200 rounded-3xl mt-8 mb-10" />
              </Link>

              <h2 className=" text-slate-100 text-[1.7rem] font-clash capitalize font-bold mb-8">
                login
              </h2>
              <form className="mt-[1rem]" id="registrationForm">
                <div className="inputCon my-[1rem]">
                  <label className="block text-slate-100 font-semibold text-[16px]">
                    Email:
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="text"
                    placeholder="Enter Email"
                    className="apitalize border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 my-2 bg-[#FCFBFB] focus:border text-black focus:border-gray-400"
                  />
                </div>

                <div className="inputCon">
                  <label className="block text-slate-100 font-semibold text-[16px]">
                    Password:
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="text"
                    placeholder="Enter Password"
                    className="apitalize  text-slate-900  border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] my-2 px-4 bg-[#FCFBFB] focus:border focus:border-gray-400"
                  />
                </div>

                <h2 className="fgpsw text-right my-2 text-sm text-sky-400 font-semibold mon  hover:text-sky-500 transition">
                  <Link to="/reset"> I forgot my password!</Link>
                </h2>
                <div className="mt-[1rem]">
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="btn text-[18px] text-white font-montserrat font-semibold cursor-pointer
                     w-full rounded-md outline-none py-3 bg-[#FD1014] hover:bg-[#E3383B] transition">
                    Login
                  </button>
                  {/* <Link
                    // type="button"
                    to="/launch"
                    className="btn mt-6 text-[18px] font-montserrat text-white font-semibold cursor-pointer rounded-md outline-none p-3 text-center block bg-[#FD1014] hover:bg-[#E3383B] transition">
                    Login
                  </Link> */}

                  <div className="text my-5">
                    <h2>
                      I don't have an account?{" "}
                      <span className="log font-bold text-[#FD1014] hover:text-[#E3383B] transition">
                        <Link to="/signup">Signup</Link>{" "}
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
                    className="  w-full border-red-500 border
                    py-3 px-4 rounded-[10px] flex items-center text-[18px] font-semibold mon justify-center hover:bg-[#E3383B] transition">
                    <FcGoogle className="mr-2 text-[28px]" />
                    Login with google
                  </button>
                  <button
                    type="button"
                    onClick={handleOAuth}
                    className="oAuthBtn hidden"
                    style={{
                      display: "flex",
                      alignItems: "center ",
                      justifyContent: "center",
                    }}>
                    <div className="authContent">
                      <p className="authText hidden"> Google</p>
                    </div>
                  </button>
                </div>
              </form>
            </main>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
