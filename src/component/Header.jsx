import React from "react";

function Header() {
  return (
    <>
      <div
        id="home"
        className="general-container bg-[#FCFBFB] hidden lg:block py-4">
        <div className="header w-[95%] m-auto lg:flex hidden items-center justify-between">
          <div className="logo flex items-center gap-4">
            <img
              className="w-full h-[200px] lg:h-[100px] object-cover"
              src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
              alt="Logo"
            />
            <h1 className="text-[#FD1014] font-clash font-bold text-[30px]">
              Joombow Car care & Repair Centre
            </h1>
          </div>
          <div className="logo">
            <h1 className="text-[#FD1014] text-center font-clash font-bold text-[30px]">
              Address
            </h1>
            <p className="text-[#000000] text-center font-clash font-normal text-[20px]">
              No 3 Wole Olanipekun Crescent. <br /> State sect, Agodi , ibadan,
              Oyo state, Nigeria
            </p>
          </div>
          <div className="logo">
            <h1 className="text-[#FD1014] text-center font-clash font-bold text-[20px]">
              Call : <span className="text-[#000000]">+234 91 327 153 11</span>
            </h1>
            <h1 className="text-[#FD1014] text-center font-clash font-bold text-[20px]">
              Contact :{" "}
              <span className="text-[#000000]">business@liozio.com</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
