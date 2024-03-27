import React, { useState } from "react";
import Loader from "../component/Loader";
import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      if (!email || !password) {
        toast.error("Please enter both email and password.");
        return;
      }

      const response = await fetch("https://resp-one.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);

        if (data.token) {
          navigate("/user");
        } else {
          console.error("User is not registered.");
        }
      } else {
        const errorData = await response.json();
        toast.error(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
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
      // toast.error('Could not login with Google');
      console.log("Could not login with Google", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <main className="loginCon">
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
        <main class="px-6 min-h-[100vh] bg-black pb-[2rem] lg:hidden">
          <span className="prevLink lg:hidden px-4 pt-4 block">
            <Link to="/">
              <GrFormPreviousLink className="text-[1.5rem] border border-gray-200 rounded-3xl text-[#ffffff]" />
            </Link>
          </span>
          <div className="logo w-[200px] h-[200px] object-cover m-auto">
            <img
              src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
              className="logo"
              alt="Logo"
            />
          </div>
          <div className="text pb-6">
            <h2 className="text-[2rem] text-[#ffffff] text-center font-clash capitalize font-bold">
              Welcome Back
            </h2>
            <p className="text-[1rem] text-[#ffffff] text-center font-montserrat capitalize ">
              Enter your login details
            </p>
          </div>
          <form className="mt-[1rem]" id="registrationForm">
            <div class="inputCon py-2">
              <label class="block text-[#ffffff] font-semibold text-[16px]">
                Email:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="text"
                class="capitalize  border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 mt-1 mb-2"
              />
            </div>

            <div class="inputCon py-2">
              <label class="block text-[#ffffff] font-semibold text-[16px]">
                Password:
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="text"
                class="capitalize border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 mt-1 mb-2"
              />
            </div>

            <h2 className="fgpsw text-right my-2 text-sm text-sky-400 font-semibold mon hover:text-sky-500 transition">
              <Link to="/reset"> I forgot my password!</Link>
            </h2>
            <div class="mt-[2rem]">
              <button
                type="button"
                onClick={handleLogin}
                class="btn text-[18px] text-white font-montserrat font-semibold cursor-pointer
             w-full rounded-md outline-none py-3 hover:text-[#ffffff] bg-[#FD1014] hover:bg-[#E3383B] transition">
                Login
              </button>

              <div className="text-[#ffffff] my-5">
                <h2>
                  Already have an account?{" "}
                  <span className="log font-bold text-[#FD1014] hover:text-[#E3383B] transition">
                    <Link to="/signup">Signup</Link>{" "}
                  </span>{" "}
                </h2>
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

              <button
                type="button"
                onClick={handleOAuth}
                className="  w-full border-red-500 border
         py-3 px-4 rounded-[10px] flex items-center text-[18px] font-semibold mon text-[#ffffff] duration-300 ease-in-out justify-center hover:bg-[#E3383B] hover:text-[#FCFBFB] transition">
                <FcGoogle className="mr-2 text-[28px] " />
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
            src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711544467/istockphoto-1347150429-612x612_kxwt2o.jpg"
            className="w-full object-cover h-[784px]"
            alt="car care image"
          />

          <div className="absolute inset-0 bg-black opacity-70 h-[49rem] w-full"></div>

          <div className="absolute inset-0 flex  justify-center  w-full  text-white ">
            <form
              class=" w-[50%]  mt-[2rem] bg-[#433F3FCC]"
              id="registrationForm">
              <main class="px-[1rem] block">
                <Link to="/">
                  <GrFormPreviousLink className="text-[1.5rem] text-white border border-gray-200 rounded-3xl mt-8 mb-10" />
                </Link>

                <div className="text pb-6">
                  <h2 className="text-[2rem] text-[#ffffff] text-center font-clash capitalize font-bold">
                    Welcome Back
                  </h2>
                  <p className="text-[1.1rem] text-[#ffffff] text-center font-montserrat capitalize ">
                    Enter your login details
                  </p>
                </div>
                <form class="mt-[1rem]" id="registrationForm">
                  <div class="inputCon my-[1rem]">
                    <label class="block text-slate-100 font-semibold text-[16px]">
                      Email:
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="text"
                      class="apitalize text-[#010102] font-montserrat font-normal text-[14px] border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] px-4 mt-1 mb-2 bg-[#FCFBFB] focus:border focus:border-gray-400"
                    />
                  </div>

                  <div class="inputCon">
                    <label class="block text-slate-100 font-semibold text-[16px]">
                      Password:
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type="text"
                      class="capitalize text-[#010102] font-montserrat font-normal text-[14px]  border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[5px] mt-1 mb-2 px-4 bg-[#FCFBFB] focus:border focus:border-gray-400"
                    />
                  </div>

                  <h2 className="fgpsw text-right my-2 text-sm text-sky-400 font-semibold mon  hover:text-sky-500 transition">
                    <Link to="/reset"> I forgot my password!</Link>
                  </h2>
                  <div class="mt-[1rem]">
                    <button
                      type="button"
                      onClick={handleLogin}
                      class="btn text-[18px] text-white font-montserrat font-semibold cursor-pointer
                     w-full rounded-md outline-none hover:text-[#ffffff] py-3 bg-[#FD1014] hover:bg-[#E3383B] transition">
                      Login
                    </button>

                    <div className="text my-5">
                      <h2>
                        Already have an account?{" "}
                        <span className="log font-bold text-[#FD1014] hover:text-[#E3383B] transition">
                          <Link to="/signup">Signup</Link>{" "}
                        </span>{" "}
                      </h2>
                    </div>

                    {loading && (
                      <div
                        className="fixed top-0 left-0 right-0 bottom-0 z-20
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
    </div>
  );
}

export default Login;
