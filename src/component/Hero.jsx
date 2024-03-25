import React from "react";
import Discount from "./Discount";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <Navbar />

      <div className=" relative w-full h-[300px] lg:h-[680px] md:h-[680px] center md:bg-cover lg:bg-cover bg-cover object-contain bg-no-repeat bg-origin-content bg-red-700 bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1710929583/bcrajqc3yy3wsojmktj1.png')]">
        <div className="text-[#FFFFFF] font-clash font-bold  md:text-[50px] lg:text-[50px] ml-[2rem] md:ml-[6rem] lg:ml-[6rem] pt-4 md:pt-[200px] lg:pt-[200px]">
          <div className="content flex flex-col justify-center leading-10 ">
            <h3 className="tracking-wider text-[25px]">
              Joombow Car care & Repair Centre
            </h3>
            <h1 className="tracking-wider text-[35px]">Southwest Nigeria</h1>
            <h1 className="tracking-wider text-[#EAB251] text-[45px]">
              Auto Detailing
            </h1>
          </div>
          <div className=" py-4 md:py-10 lg:py-10">
            <button className="bg-[#fd1014d1] border-none text-[30px] py-[10px] lg:py-[16px] md:py-[16px] px-[35px] md:px-[48px] lg:px-[48px] rounded-2xl transition-transform duration-300 ease hover:w-[300px] hover:bg-[#CA0007]">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Discount />
    </div>
  );
}

export default Hero;
