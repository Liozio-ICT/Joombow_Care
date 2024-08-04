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
        className={`nav-header border-b border-gray-500 bg-[black] ${
          isScrolled
            ? "fixed left-0 right-0 top-0 z-[100] w-full shadow-sm"
            : ""
        } `}
      >
        <div class="navLinks m-auto hidden w-[85%] items-center justify-between py-4 text-[#0C0C0C] lg:flex">
          <ul className="flex gap-16 text-white">
            <a
              href="#home"
              className="fonth block text-[20px] font-semibold transition hover:text-[#FD1014]"
            >
              Home
            </a>

            <a
              href="#about"
              className="fonth block text-[20px] font-semibold transition hover:text-[#FD1014]"
            >
              About
            </a>
            <a
              href="#services"
              className="fonth block text-[20px] font-semibold transition hover:text-[#FD1014]"
            >
              Our Services
            </a>

            <a
              href="#why"
              className="fonth block text-[20px] font-semibold transition hover:text-[#FD1014]"
            >
              {" "}
              Why us
            </a>
            <a
              href="#carmake"
              className="fonth block text-[20px] font-semibold transition hover:text-[#FD1014]"
            >
              {" "}
              Car Make
            </a>

            <a
              href="#contact"
              className="fonth block text-[20px] font-semibold transition hover:text-[#FD1014]"
            >
              Contact Us
            </a>

            {loading && (
              <div className="fixed bottom-0 left-0 right-0 top-0 flex w-full items-center justify-center bg-white">
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
            className="ease block w-[15%] rounded-[20px] border-none bg-[#fd1014d1] px-6 py-4 text-center text-[16px] text-[white] transition-transform duration-300 hover:bg-[#CA0007]"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* mobile  */}

      <nav
        className={`border-b border-gray-500 bg-[#c44141] ${
          isScrolled ? "fixed left-0 right-0 top-0 z-[100]" : ""
        }`}
      >
        <div class="navLink text-[#0C0C0C] lg:hidden">
          <section
            className={`flex h-[3.5rem] w-full items-center justify-between bg-black px-4`}
          >
            <Link to="tel:+234 0904 444 4765">
              <FaPhone
                style={{ transform: "rotate(90deg)" }}
                className="cursor-pointer text-[1.6rem] font-bold text-white"
              />
            </Link>
            <div>
              <img
                className="h-[150px] w-[150px] object-cover"
                src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                alt="Logo"
              />
            </div>

            <div onClick={toggle}>
              <FaBars className="cursor-pointer text-[1.6rem] text-white" />
            </div>
          </section>

          <div
            className={`nav-container relative bg-black ${
              isOpen ? "active" : ""
            }`}
          >
            <div className="relative m-auto flex w-[95%] items-center justify-center p-2">
              <img
                className="h-[150px] w-[150px] object-cover"
                src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                alt="Logo"
              />
              <FaTimes
                onClick={toggle}
                className="absolute right-0 top-10 cursor-pointer text-[2rem] text-white"
              />
            </div>
            <div>
              <ul className="px-2 text-center text-white">
                <a
                  onClick={toggle}
                  href="#home"
                  className="fonth block border-b border-dashed border-gray-700 py-4 text-[20px] transition hover:text-[#FD1014]"
                >
                  Home
                </a>

                <a
                  onClick={toggle}
                  href="#about"
                  className="fonth font-s block border-b border-dashed border-gray-700 py-4 text-[20px] transition hover:text-[#FD1014]"
                >
                  About
                </a>
                <a
                  onClick={toggle}
                  href="#services"
                  className="fonth block border-b border-dashed border-gray-700 py-4 text-[20px] transition hover:text-[#FD1014]"
                >
                  Our Services
                </a>

                <a
                  onClick={toggle}
                  href="#why"
                  className="fonth block border-b border-dashed border-gray-700 py-4 text-[20px] transition hover:text-[#FD1014]"
                >
                  {" "}
                  Why us
                </a>
                <a
                  onClick={toggle}
                  href="#carmake"
                  className="fonth block border-b border-dashed border-gray-700 py-4 text-[20px] font-semibold transition hover:text-[#FD1014]"
                >
                  {" "}
                  Car Make
                </a>

                <a
                  href="#contact"
                  onClick={toggle}
                  className="fonth d block border-b border-dashed border-gray-700 py-4 text-[20px] transition hover:text-[#FD1014]"
                >
                  Contact Us
                </a>

                <div className="pb-10 pt-8">
                  <Link to="/signup" className="block w-full text-center">
                    <button className="w-[80%] transform rounded-[30px] border-none bg-[#EAB251] px-[28px] py-[14px] text-[16px] text-white transition-transform duration-300 ease-in-out hover:scale-105">
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
