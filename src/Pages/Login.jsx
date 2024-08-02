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
import Input from "../components/Input";
import './auth.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);

      if (!email || !password) {
        toast.error("Please enter both email and password.");
        return;
      }

      const response = await apiClient.post("/user/login", { email, password });

      const { message, token, user } = await response.json();
      if (response.ok) {
        toast.success(message);
        login(token, user);
        navigate("/user");
        // navigate("/user");
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

      const { message, token, user } = await response.json();
      if (response.ok) {
        toast.success(message);
        login(token, user);
        return navigate("/user");
      }
      toast.error(message);
    } catch (error) {
      toast.error('Could not login with Google');
      console.log("Could not login with Google", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="loginCon bg-black">
      <ScrollRestoration />

      <Loader />
      <span className="prevLink block px-4 pt-4 lg:hidden">
        <Link to="/">
          <GrFormPreviousLink className="rounded-3xl border border-slate-200 text-[1.5rem] text-white" />
        </Link>
      </span>
      <main className="min-h-[100vh] px-6 lg:hidden">
        <div className="logo m-auto h-[200px] w-[200px] object-cover">
          <img
            src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
            className="logo"
            alt="Logo"
          />
        </div>
        <h2 className="mb-8 font-clash text-[1.7rem] font-bold capitalize text-slate-200">
          login
        </h2>
        <form className="mt-[1rem] text-white" id="registrationForm">
          <div className="inputCon">
            <Input
              label={"Email:"}
              name={"email"}
              type={"email"}
              value={email}
              setValue={setEmail}
              placeholder="Enter Email"
              error={""}
            />
          </div>

          <div className="inputCon py-2">

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

          <h2 className="fgpsw mon my-2 text-right text-sm font-semibold text-sky-400 transition hover:text-sky-500">
            <Link to="/reset"> I forgot my password!</Link>
          </h2>
          <div className="mt-[1rem]">
            <button
              type="button"
              onClick={handleLogin}
              className="btn font-montserrat w-full cursor-pointer rounded-md bg-[#FD1014] py-3 text-[18px] font-semibold text-white outline-none transition hover:bg-[#E3383B]"
            >
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
                <span className="log font-bold text-[#FD1014] transition hover:text-[#E3383B]">
                  <Link to="/signup">Signup</Link>{" "}
                </span>{" "}
              </h2>
            </div>

            {loading && (
              <div className="fixed bottom-0 left-0 right-0 top-0 flex w-full items-center justify-center bg-white">
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
              className="mon flex w-full items-center justify-center rounded-[10px] border border-red-500 px-4 py-3 text-[18px] font-semibold text-[#FCFBFB] transition duration-300 ease-in-out hover:bg-[#E3383B]"
            >
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
              }}
            >
              <div className="authContent">
                <p className="authText hidden text-slate-200"> Google</p>
              </div>
            </button>
          </div>
        </form>
      </main>

      {/* desktop */}

      <div className="r hidden w-full lg:block">
        <span className="prevLink absolute z-[2] block">
          <img
            src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
            className="h-[250px] w-[250px] object-cover"
            alt="Logo"
          />
        </span>
        <img
          src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg"
          className="h-[780px] w-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 h-[48.9rem] w-full bg-black opacity-70"></div>

        <div className="absolute inset-0 flex w-full justify-center text-white">
          <form className="mt-2 w-[50%] bg-[#433F3FCC]" id="registrationForm">
            <main className="block px-[1rem]">
              <Link to="/">
                <GrFormPreviousLink className="mb-10 mt-8 rounded-3xl border border-gray-200 text-[1.5rem] text-white" />
              </Link>

              <h2 className="mb-8 font-clash text-[1.7rem] font-bold capitalize text-slate-100">
                login
              </h2>
              <form className="mt-[1rem]" id="registrationForm">
                <div className="inputCon my-[1rem]">
                  <Input
                    label={"Email:"}
                    name={"email"}
                    type={"email"}
                    value={email}
                    setValue={setEmail}
                    placeholder="Enter Email"
                    error={""}
                  />
                </div>

                <div className="inputCon">
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

                <h2 className="fgpsw mon my-2 text-right text-sm font-semibold text-sky-400 transition hover:text-sky-500">
                  <Link to="/reset"> I forgot my password!</Link>
                </h2>
                <div className="mt-[1rem]">
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="btn font-montserrat w-full cursor-pointer rounded-md bg-[#FD1014] py-3 text-[18px] font-semibold text-white outline-none transition hover:bg-[#E3383B]"
                  >
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
                      <span className="log font-bold text-[#FD1014] transition hover:text-[#E3383B]">
                        <Link to="/signup">Signup</Link>{" "}
                      </span>{" "}
                    </h2>
                  </div>

                  {loading && (
                    <div className="fixed bottom-0 left-0 right-0 top-0 z-20 flex w-full items-center justify-center bg-white">
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
                    className="mon flex w-full items-center justify-center rounded-[10px] border border-red-500 px-4 py-3 text-[18px] font-semibold transition hover:bg-[#E3383B]"
                  >
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
                    }}
                  >
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
