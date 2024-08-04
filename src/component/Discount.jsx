import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Discount() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error(
      "Ooops! You need to create an account to enjoy this offer. Sign up now!",
    );
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      <div className="discount bg-[black] text-[#fd1014d1]">
        <div className="container relative bottom-[30px] left-0 right-0 m-auto w-[95%] rounded-sm bg-[#D14B46] p-6 shadow-lg md:bottom-[60px] md:p-10 lg:bottom-[60px] lg:p-10">
          <div className="md:text-[35x px] bg-[#D9D9D9] text-center font-clash text-[20px] font-bold text-[#fd1014d1] lg:text-[35px]">
            <h1 className="tracking-wider">
              20% Off Car Care For First 100 Registered Users
            </h1>
          </div>
          <p className="font-montserrat pt-4 text-[16px] font-normal text-white md:text-[18px] lg:text-[18px]">
            Fill out and claim this offer today! We will contact you via phone
            call or text shortly.
          </p>
          <form>
            <div className="input-field my-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              <div>
                <input
                  className="w-full rounded-[3px] border-[1px] border-slate-200 bg-[#FCFBFB] px-4 py-[.6rem] text-black outline-none focus:border focus:border-gray-300"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </div>
              <div>
                <input
                  className="w-full rounded-[3px] border-[1px] border-slate-200 bg-[#FCFBFB] px-4 py-[.6rem] text-black outline-none focus:border focus:border-gray-300"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <input
                  className="w-full rounded-[3px] border-[1px] border-slate-200 bg-[#FCFBFB] px-4 py-[.6rem] text-black outline-none focus:border focus:border-gray-300"
                  type="tel"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div>
                <input
                  className="w-full rounded-[3px] border-[1px] border-slate-200 bg-[#FCFBFB] px-4 py-[.6rem] text-black outline-none focus:border focus:border-gray-300"
                  type="text"
                  placeholder="Car Type"
                />
              </div>
              <div>
                <input
                  className="w-full rounded-[3px] border-[1px] border-slate-200 bg-[#FCFBFB] px-4 py-[.6rem] text-black outline-none focus:border focus:border-gray-300"
                  type="text"
                  placeholder="Car Model"
                />
              </div>
              <div>
                <input
                  className="w-full rounded-[3px] border-[1px] border-slate-200 bg-[#FCFBFB] px-4 py-[.6rem] text-black outline-none focus:border focus:border-gray-300"
                  type="text"
                  placeholder="Car Year"
                />
              </div>
            </div>
            <div className="button py-2">
              <button
                onClick={handleSubmit}
                type="button"
                className="w-full rounded-sm border border-[#F8CB47] bg-[#080808] py-[12px] text-white transition duration-200 hover:bg-gray-900"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Discount;
