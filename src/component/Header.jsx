import React from "react";

function Header() {
  return (
    <>
      <div
        id="home"
        className="general-container bg-[#FCFBFB] hidden lg:block py-4">
        <div className="header w-[95%] m-auto lg:flex hidden items-center gap-[140px]">
          <div className="logo flex items-center ">
            <img
              className="w-full h-[200px] lg:h-[100px] lg:w-[200px] object-cover"
              src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-[#FD1014] font-clash  font-semibold text-[50px]">
              Joombow Car care & Repair Centre
            </h1>
          </div>
          {/* <div className="logo">
            <h1 className="text-[#FD1014] text-center  font-meduim text-[20px] font-bold">
              Address
            </h1>
            <p className="text-[#000000]  text-[16px]">
              No 3 Wole Olanipekun Crescent. <br /> State sect, Agodi , ibadan,
              Oyo state, Nigeria
            </p>
          </div> */}
          {/* <div className=" font-meduim">
            <h1 className="text-[#FD1014] flex font-bold  text-[15px]">
              Call :{" "}
              <span className="text-[#000000] font-light text-[16px] ml-3">
                +234 91 327 153 11
              </span>
            </h1>
            <h1 className="text-[#FD1014] flex font-bold  text-[16px]">
              Contact:{" "}
              <span className="ml-3 font-light text-[16px] text-[#000000]">business@liozio.com</span>
            </h1>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
