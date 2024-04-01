import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const YourComponent = ({ Gmail }) => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // Array to store individual digits
  const [error, setError] = useState("");
  const [isVerificationSuccess, setVerificationSuccess] = useState(false);

  const handleVerification = async () => {
    // Basic input validation
    if (!Gmail || otp.some((digit) => !digit)) {
      setError("Please fill in the OTP fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://resp-one.vercel.app/verify", {
        email: Gmail,
        otp: otp.join(""),
      });
      const { message, token } = response.data;

      // Handle the success response here
      console.log(message);
      console.log(token);

      // Reset error state on successful verification
      setError("");

      // Set verification success state
      setVerificationSuccess(true);
    } catch (error) {
      // Handle errors
      setError(error.response ? error.response.data.message : error.message);
      console.error(
        "Error verifying OTP:",
        error.response ? error.response.data.message : error.message
      );

      // Reset verification success state on error
      setVerificationSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move focus to the next input when a digit is entered
    if (index < 3 && value !== "") {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const hideEmail = (email) => {
    const atIndex = email.indexOf("@");
    const maskedPart = email.slice(1, atIndex).replace(/./g, "*");
    return email[0] + maskedPart + email.slice(atIndex);
  };

  return (
    <>
      <div
        className="flex lg:hidden flex-col  
     px-6 pt-8 bg-white fixed top-0 z-50 bottom-0 w-full left-0 right-0">
        <h2 className="oo text-[27px] font-clash font-bold">Enter OTP</h2>
        <p className="mon my-4">
          A 4 digit code has been sent to
          <span className="gg  font-semibold focus:outline-none text-[20px]">
            {" "}
            {hideEmail(Gmail)}{" "}
          </span>
          Please enter it below to verify your account.
        </p>
        <div></div>

        {/*} Display error message if there is any */}
        {error && <p className="text-red-500 mb-4 font-bold mon">{error}</p>}

        {/* Display congratulatory message on successful verification */}
        {isVerificationSuccess && (
          <>
            <div className="versucess w-full z-50 fixed bg-white top-0 left-0 right-0 bottom-0 px-6">
              <div className="sucImg w-[350px] m-auto">
                <img
                  src="https://res.cloudinary.com/durbee4ln/image/upload/v1706504044/CarWASH/Frame_51087_n4jq1c.png"
                  alt=""
                />
              </div>

              <h2 className="ts font-clash text-center font-bold text-[27px]">
                Register Successfully!
              </h2>
              <p className="am mon my-4 text-center">
                Congratulation! your account already created. Please login to
                get amazing experience.
              </p>

              <div className="btt">
                <button
                  type="button"
                  class="btn text-[18px] text-white font-semibold cursor-pointer
                          w-full rounded-md outline-none py-3 bg-[#FD1014] hover:bg-[#E3383B] transition mt-4">
                  <Link to="/login"> Login</Link>
                </button>
              </div>
            </div>
          </>
        )}

        {/* OTP input fields */}
        <div className="flex space-x-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-input-${index}`}
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="border p-2 w-16 h-16 rounded-md  focus:border-slate-600 focus:border border-gray-400 text-center outline-none"
            />
          ))}
        </div>

        <div className="ver mt-[2rem] w-full">
          <button
            onClick={handleVerification}
            className=" w-full  mon text-white py-4 px-4 rounded mt-4 bg-[#FD1014] hover:bg-[#E3383B] transition">
            Verify OTP
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

      <section className="art lg:block  hidden  bg-red-500 w-full p-6">
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 z-40">
          <img
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1707031675/rsz_car-img_dfy7bc.jpg"
            className="w-full object-cover lg:h-[900px]"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-70  h-[50rem] w-full"></div>
        </div>
        <div className="flex flex-col overlay fixed bg-[#433F3FCC]  top-[10rem] z-50 bottom-0 h-[30rem] w-full left-0 right-0 md:w-1/3 mx-auto px-6">
          <h2 className="oo font-clash text-[20px] font-bold text-slate-100 pt-8">
            Enter OTP
          </h2>
          <p className="mon my-4 text-slate-100 pb-2">
            A 4 digit code has been sent to
            <span className="gg font-semibold text-[20px] text-slate-100">
              {" "}
              {hideEmail(Gmail)}{" "}
            </span>
            Please enter it below to verify your account.
          </p>

          {/* Display error message if there is any */}
          {error && <p className="text-red-500 mb-4 font-bold mon">{error}</p>}

          {/* Display congratulatory message on successful verification */}
          {isVerificationSuccess && (
            <>
              <div className="versucess w-full z-50 fixed px-4 bg-white text-slate-800 top-0 left-0 right-0 bottom-0">
                <section className="mm flex justify-center">
                  <div className="w-[50%]">
                    <div className="sucImg w-[350px] h-[350px] m-auto">
                      <img
                        src="https://res.cloudinary.com/durbee4ln/image/upload/v1706504044/CarWASH/Frame_51087_n4jq1c.png"
                        alt=""
                      />
                    </div>

                    <h2 className="ts font-clash text-center font-bold text-[27px] pt-6">
                      Register Successfully
                    </h2>
                    <p className="am mon my-5 text-center">
                      Congratulations! Your account has been created. Please
                      login to get an amazing experience.
                    </p>
                    <div className="btt">
                      <button
                        type="button"
                        className="btn text-[18px] text-white font-semibold cursor-pointer w-full rounded-md outline-none py-3 bg-[#FD1014] hover:bg-[#E3383B] mt-4 transition">
                        <Link to="/login">Login</Link>
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}

          {/* OTP input fields */}
          <div className="flex space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`otp-input-${index}`}
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="border p-2 w-16 h-16 rounded-md text-slate-900 focus:border-slate-600 focus:border border-gray-400 text-center outline-none"
              />
            ))}
          </div>

          <div className="ver mt-[2rem] w-full">
            <button
              onClick={handleVerification}
              className="w-full mon text-white py-4 px-4 rounded mt-4 bg-[#FD1014] hover:bg-[#E3383B] transition">
              Verify OTP
            </button>
          </div>

          {loading && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-white w-full flex items-center justify-center">
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
    </>
  );
};

export default YourComponent;
