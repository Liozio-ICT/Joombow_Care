import React from "react";

function Header() {
  return (
    <>
      <div
        id="home"
        className="general-container bg-[#FCFBFB] hidden lg:block py-4">
        <div className="header w-[95%] m-auto lg:flex hidden items-center justify-between">
          <div className="logo flex items-center ">
            <img
              className="w-full h-[200px] lg:h-[100px] object-cover"
              src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
              alt="Logo"
            />
            <h1 className="text-[#FD1014]  font-semibold text-[20px]">
              Joombow Car care & Repair Centre
            </h1>
          </div>
          <div className="logo">
            <h1 className="text-[#FD1014] text-center  font-meduim text-[20px]">
              Address
            </h1>
            <p className="text-[#000000]  text-[15px]">
              No 3 Wole Olanipekun Crescent. <br /> State sect, Agodi , ibadan,
              Oyo state, Nigeria
            </p>
          </div>
          <div className=" font-meduim">
            <h1 className="text-[#FD1014] flex  text-[15px]">
              Call : <span className="text-[#000000] ml-3">+234 91 327 153 11</span>
            </h1>
            <h1 className="text-[#FD1014] flex   text-[15px]">
              Contact:  <span className="ml-3 text-[#000000]">business@liozio.com</span>
             
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
