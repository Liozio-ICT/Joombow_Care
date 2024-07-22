import { useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../utils/apiClient";
import OtpInput from "../components/OtpInput";

const YourComponent = ({ Gmail }) => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState(Gmail);
  const [otp, setOtp] = useState(); // Array to store individual digits
  // const [otp, setOtp] = useState(["", "", "", ""]); // Array to store individual digits
  const [error, setError] = useState("");
  const [isVerificationSuccess, setVerificationSuccess] = useState(false);

  const handleVerification = async () => {
    // Basic input validation
    if (!Gmail || otp.length < 4) {
      setError("Please fill in the OTP fields.");
      return;
    }

    try {
      setLoading(true);
      console.log(otp);
      const response = await apiClient.post("/user/verify-email", {
        email: Gmail,
        otp,
      });

      const { message } = await response.json();

      // Handle the success response here
      console.log(message);

      // Reset error state on successful verification
      setError("");

      // Set verification success state
      setVerificationSuccess(true);
    } catch (error) {
      // Handle errors
      setError(error.response ? error.response.data.message : error.message);
      console.error(
        "Error verifying OTP:",
        error.response ? error.response.data.message : error.message,
      );

      // Reset verification success state on error
      setVerificationSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  // const handleOtpChange = (index, value) => {
  //   const newOtp = [...otp];
  //   newOtp[index] = value;

  //   // Move focus to the next input when a digit is entered
  //   if (index < 3 && value !== "") {
  //     document.getElementById(`otp-input-${index + 1}`).focus();
  //   }

  //   setOtp(newOtp);
  // };

  const hideEmail = () => {
    const atIndex = email.indexOf("@");
    const maskedPart = email.slice(1, atIndex).replace(/./g, "*");
    return email[0] + maskedPart + email.slice(atIndex);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex w-full flex-col bg-black px-6 pt-8 lg:hidden">
        <h2 className="oo font-clash text-[27px] font-bold">Enter OTP</h2>
        <p className="mon my-4 text-white">
          A 4 digit code has been sent to
          <span className="gg text-[20px] font-semibold focus:outline-none">
            {" "}
            {hideEmail(Gmail)}{" "}
          </span>
          Please enter it below to verify your account.
        </p>
        <div></div>

        {/*} Display error message if there is any */}
        {error && <p className="mon mb-4 font-bold text-red-500">{error}</p>}

        {/* Display congratulatory message on successful verification */}
        {isVerificationSuccess && (
          <>
            <div className="versucess fixed bottom-0 left-0 right-0 top-0 z-50 w-full bg-black px-6">
              <div className="sucImg m-auto w-[350px]">
                <img
                  src="https://res.cloudinary.com/durbee4ln/image/upload/v1706504044/CarWASH/Frame_51087_n4jq1c.png"
                  alt=""
                />
              </div>

              <h2 className="ts text-center font-clash text-[27px] font-bold text-white">
                Register Successfully!
              </h2>
              <p className="am mon my-4 text-center text-white">
                Congratulation! your account already created. Please login to
                get amazing experience.
              </p>

              <div className="btt">
                <button
                  type="button"
                  className="btn mt-4 w-full cursor-pointer rounded-md bg-[#FD1014] py-3 text-[18px] font-semibold text-white outline-none transition hover:bg-[#E3383B]"
                >
                  <Link to={"/login"}>Login</Link>
                </button>
              </div>
            </div>
          </>
        )}

        {/* OTP input fields */}

        <OtpInput length={4} setValue={setOtp} />

        {/* <div className="flex space-x-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-input-${index}`}
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="border p-2 w-16 h-16 rounded-md font-bold text-[20px] focus:border-slate-600 focus:border border-gray-400 text-center outline-none"
            />
          ))}
        </div> */}

        <div className="ver mt-[2rem] w-full">
          <button
            onClick={handleVerification}
            className="mon mt-4 w-full rounded bg-[#FD1014] px-4 py-4 text-white transition hover:bg-[#E3383B]"
          >
            Verify OTP
          </button>
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
      </div>

      <section className="art hidden w-full bg-red-500 p-6 lg:block">
        <div className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-gray-800">
          <img
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg"
            className="w-full object-cover lg:h-[900px]"
            alt=""
          />
          <div className="absolute inset-0 h-[50rem] w-full bg-black opacity-70"></div>
        </div>
        <div className="overlay fixed bottom-0 left-0 right-0 top-[10rem] z-50 mx-auto flex h-[30rem] w-full flex-col bg-[#433F3FCC] px-6 md:w-1/3">
          <h2 className="oo pt-8 font-clash text-[20px] font-bold text-slate-100">
            Enter OTP
          </h2>
          <p className="mon my-4 pb-2 text-slate-100">
            A 4 digit code has been sent to
            <span className="gg text-[20px] font-semibold text-slate-100">
              {" "}
              {hideEmail(Gmail)}{" "}
            </span>
            Please enter it below to verify your account.
          </p>

          {/* Display error message if there is any */}
          {error && <p className="mon mb-4 font-bold text-red-500">{error}</p>}

          {/* Display congratulatory message on successful verification */}
          {isVerificationSuccess && (
            <>
              <div className="versucess fixed bottom-0 left-0 right-0 top-0 z-50 w-full bg-white bg-[url('https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg')] bg-cover bg-center bg-no-repeat px-4 text-slate-800">
                <div className="absolute inset-0 h-[49rem] w-full bg-black opacity-70"></div>
                <section className="mm z-100 relative flex justify-center">
                  <div className="w-[50%]">
                    <div className="sucImg m-auto h-[350px] w-[350px]">
                      <img
                        src="https://res.cloudinary.com/durbee4ln/image/upload/v1706504044/CarWASH/Frame_51087_n4jq1c.png"
                        alt="sucess image"
                      />
                    </div>

                    <h2 className="ts pt-6 text-center font-clash text-[27px] font-bold text-white">
                      Register Successfully
                    </h2>
                    <p className="am mon my-5 text-center text-white">
                      Congratulations! Your account has been created. Please
                      login to get an amazing experience.
                    </p>
                    <div className="btt">
                      <button
                        type="button"
                        className="btn mt-4 w-full cursor-pointer rounded-md bg-[#FD1014] py-3 text-[18px] font-semibold text-white outline-none transition hover:bg-[#E3383B]"
                      >
                        <Link to="/login">Login</Link>
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}

          {/* OTP input fields */}
          <OtpInput length={4} setValue={setOtp} />

          {/* <div className="flex space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`otp-input-${index}`}
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="h-16 w-16 rounded-md border border-gray-400 p-2 text-center text-[20px] font-bold text-slate-900 outline-none focus:border focus:border-slate-600"
              />
            ))}
          </div> */}

          <div className="ver mt-[2rem] w-full">
            <button
              onClick={handleVerification}
              className="mon mt-4 w-full rounded bg-[#FD1014] px-4 py-4 text-white transition hover:bg-[#E3383B]"
            >
              Verify OTP
            </button>
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
        </div>
      </section>
    </>
  );
};

export default YourComponent;
