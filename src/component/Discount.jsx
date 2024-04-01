import React from "react";

function Discount() {
  return (
    <div>
      <div className="discount bg-[white] text-[#fd1014d1]">
        <div className="container bg-[#D14B46] m-auto p-6 md:p-10 lg:p-10 w-[95%] relative left-0 right-0 bottom-[30px] md:bottom-[60px]  lg:bottom-[60px] shadow-lg rounded-sm">
          <div className="bg-[#D9D9D9] text-[#fd1014d1] font-clash font-bold text-[20px] md:text-[35px] lg:text-[35px] text-center">
            <h1 className="tracking-wider">20% Off All Car Care Packages</h1>
          </div>
          <p className="font-montserrat font-normal text-[16px] md:text-[18px] lg:text-[18px] text-white pt-4">
            Fill out and claim this offer today! We will contact you via phone
            call or text shortly.
          </p>
          <form action="/">
            <div className="input-field grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
              <div>
                <input
                  className="border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </div>
              <div>
                <input
                  className="border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <input
                  className="border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
                  type="tel"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div>
                <input
                  className="border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
                  type="text"
                  placeholder="Car Type"
                />
              </div>
              <div>
                <input
                  className="border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
                  type="text"
                  placeholder="Car Model"
                />
              </div>
              <div>
                <input
                  className="border-[1px] border-slate-200 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
                  type="text"
                  placeholder="Car Year"
                />
              </div>
            </div>
            <div className="button py-2">
              <button className="bg-[#080808] hover:bg-gray-900 rounded-sm border border-[#F8CB47] w-full py-[12px] text-white transition duration-200">
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
