import React from "react";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* desktop  */}
      <Loader />
      <nav
        className={`nav-header bg-[black] border-b border-gray-500 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-[100] w-full shadow-sm"
            : ""
        } `}>
        <div class="navLinks text-[#0C0C0C] hidden lg:flex items-center py-4 justify-between w-[85%] m-auto">
          <ul className="flex gap-16 text-white">
            <a
              href="#home"
              className="block fonth  font-semibold text-[20px] hover:text-[#FD1014] transition">
              Home
            </a>

            <a
              href="#about"
              className="block fonth  font-semibold text-[20px] hover:text-[#FD1014] transition">
              About
            </a>
            <a
              href="#services"
              className="block fonth  font-semibold text-[20px] hover:text-[#FD1014] transition">
              Our Services
            </a>

            <a
              href="#why"
              className="block fonth  font-semibold text-[20px] hover:text-[#FD1014] transition">
              {" "}
              Why us
            </a>
            <a
              href="#review"
              className="block fonth  font-semibold text-[20px] hover:text-[#FD1014] transition">
              Review
            </a>
           
              <a href ='#contact' className="block fonth  font-semibold text-[20px] hover:text-[#FD1014] transition">
                Contact Us
              </a>
           
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
          </ul>
          <Link
            to="/signup"
            className="bg-[#fd1014d1]  text-[white] border-none text-[16px] 
          py-4 px-6 w-[15%] rounded-[20px] text-center block transition-transform duration-300 ease hover:bg-[#CA0007]">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* mobile  */}

      <nav
        className={`bg-[#c44141] border-b border-gray-500 ${
          isScrolled ? "fixed top-0 left-0 right-0 z-[100]" : ""
        }`}>
        <div class="navLink text-[#0C0C0C] lg:hidden">
          <section
            className={`flex items-center h-[3.5rem] px-4  justify-between w-full bg-black`}>
            <Link to="/">
              <FaPhone
                style={{ transform: "rotate(90deg)" }}
                className="text-white cursor-pointer font-bold text-[1.6rem]"
              />
            </Link>
            <div>
              <img
                className="w-full h-[100px] object-cover"
                src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                alt="Logo"
              />
            </div>

            <div onClick={toggle}>
              <FaBars className="text-white text-[1.6rem] cursor-pointer" />
            </div>
          </section>

          <div
            className={`relative nav-container bg-black ${
              isOpen ? "active" : ""
            }`}>
            <div className="relative w-[95%] m-auto p-2">
              <img
                className="w-full h-[100px] object-cover"
                src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                alt="Logo"
              />
              <FaTimes
                onClick={toggle}
                className=" text-white cursor-pointer text-[2rem] absolute top-10 right-0"
              />
            </div>
            <div>
              <ul className=" text-white text-center px-2">
                <a
                  onClick={toggle}
                  href="#home"
                  className="block fonth py-4 border-b border-dashed border-gray-700   text-[20px] hover:text-[#FD1014] transition">
                  Home
                </a>

                <a
                  onClick={toggle}
                  href="#about"
                  className="block fonth py-4 border-b border-dashed border-gray-700  font-s text-[20px] hover:text-[#FD1014] transition">
                  About
                </a>
                <a
                  onClick={toggle}
                  href="#services"
                  className="block fonth py-4 border-b border-dashed border-gray-700   text-[20px] hover:text-[#FD1014] transition">
                  Our Services
                </a>

                <a
                  onClick={toggle}
                  href="#why"
                  className="block fonth py-4 border-b border-dashed border-gray-700   text-[20px] hover:text-[#FD1014] transition">
                  {" "}
                  Why us
                </a>
                <a
                  onClick={toggle}
                  href="#review"
                  className="block fonth py-4 border-b border-dashed border-gray-700  f text-[20px] hover:text-[#FD1014] transition">
                  Review
                </a>
                
                  <a href ='#contact'
                    onClick={toggle}
                    className="block fonth py-4 border-b border-dashed border-gray-700 d text-[20px] hover:text-[#FD1014] transition">
                    Contact Us
                  </a>
             
                <div className="pt-8 pb-10">
                  <Link to="/signup" className="block w-full text-center">
                    <button
                      className="bg-[#EAB251] text-white text-[16px]
     py-[14px] px-[28px] w-[80%] rounded-[30px] border-none transition-transform duration-300 ease-in-out transform hover:scale-105">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
