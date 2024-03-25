import React from "react";
import { FaPhone } from "react-icons/fa";
// import { Link } from "react-router-dom";
function Review() {
  return (
    <div>
      <div id="review" className="py-8">
        <h1 className="font-clash text-[#fd1014d1] font-bold text-[35px] text-center">
          Our Customer’s Review
        </h1>
      </div>
      <div className="bg-[#FD1014] w-full text-[#FFFFFF] rounded-lg text-center lg:px-0 px-4 py-8">
        <div className="py-8">
          <h1 className="font-bold text-[30px] font-clash">
            Have a Question? Leave a Message.
          </h1>
          <p className="font-normal text-[18px] lg:text-[20px] font-montserrat">
            We guarantee to respond within 24 hours. <br /> Text or Call us Now!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#00000080] flex items-center justify-center gap-3 font-clash text-[white] border-none text-[20px] py-[14px] px-[28px] rounded transition-transform duration-300 ease hover:scale-105">
            <FaPhone
              style={{ transform: "rotate(90deg)" }}
              className="text-white font-bold text-[18px]"
            />
            +234 91 327 153 11
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
