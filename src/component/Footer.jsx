import { useEffect, useState } from "react";
import React from "react";
import { MdOutlineStarHalf } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  });
  return (
    <>
      <main id="contact" className="footerCont">
        <footer
          id="contact"
          class="bg-[#1D1D1D] text-light-gray font-montserrat text-white">
          <div
            data-aos="fade-up"
            id="section9"
            class="ninth-section footer-container w-[90%] m-auto pt-8">
            <div class="footer-star flex items-center justify-center">
              <MdOutlineStarHalf class="w-[20px] h-[20px]" />
              <MdOutlineStarHalf class="w-[20px] h-[20px]" />
              <MdOutlineStarHalf class="w-[20px] h-[20px]" />
              <MdOutlineStarHalf class="w-[20px] h-[20px]" />
              <MdOutlineStarHalf class="w-[20px] h-[20px]" />
            </div>
            <div class="footer-container container flex flex-col justify-between lg:flex-row pt-12">
              <div class="footer-content leading-8">
                <h3 class="font-semibold text-center lg:text-start bb">
                  Stay Connected
                </h3>
                <p class="text-[16px] flex  justify-center space-x-4 ">
                  <a
                    class="hover:bg-transparent hover:dark:text-[#FD1014] transition"
                    href="#">
                    {" "}
                    Facebook{" "}
                  </a>
                  <a
                    class="hover:bg-transparent hover:dark:text-[#FD1014] transition"
                    href="#">
                    {" "}
                    Twitter{" "}
                  </a>
                  <a
                    class="hover:bg-transparent hover:dark:text-[#FD1014] transition"
                    href="#">
                    {" "}
                    Instagram{" "}
                  </a>
                  <a
                    class="hover:bg-transparent hover:dark:text-[#FD1014] transition"
                    href="#">
                    {" "}
                    Linkedin{" "}
                  </a>
                </p>
              </div>
              <div class="footer-links my-8 lg:my-0">
                <h2 class="text-center text-light-red  bb">
                  <span>Our Links</span>
                </h2>
                <div class="flex flex-col text-center  items-center gap-2 ">
                  <ul class="leading-8 font-normal pt-2 text-[14px] flex space-x-4 md:text-[16px] text-balance">
                    <a href="#home">
                      <li class="md:hover:bg-transparent hover:dark:text-[#FD1014] transition">
                        <span>Home</span>
                      </li>
                    </a>
                    <a href="#about">
                      <li class="hover:bg-transparent hover:dark:text-[#FD1014] transition">
                        About Us
                      </li>
                    </a>
                    {/* <a href="#"><li class="hover:bg-transparent hover:dark:text-[#FD1014] transition">Timeline</li></a> */}
                    <a href="#services">
                      <li class="hover:bg-transparent hover:dark:text-[#FD1014] transition">
                        Our Services
                      </li>
                    </a>
                  </ul>
                  <ul class="leading-8 flex  space-x-4 font-normal text-[14px] md:text-[16px] text-balance">
                    <a href="#why">
                      <li class="hover:bg-transparent hover:dark:text-[#FD1014] transition">
                        Why Us
                      </li>
                    </a>
                    {/* <a href="#review">
                      <li class="hover:bg-transparent px-6 hover:dark:text-[#FD1014] transition">
                        Reviews
                      </li>
                    </a> */}
                    <a href="#contact">
                      <li class="hover:bg-transparent hover:dark:text-[#FD1014] transition">
                        Contact Us
                      </li>
                    </a>
                    <a href="#sign">
                      <li class="hover:bg-transparent hover:dark:text-[#FD1014] transition">
                        Sign Up
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
              <div class="footer-info leading-8 text-[16px] font-normal text-balance">
                <h2 class="text-light-red text-center mt-3 md:mt-0 lg:text-left bb">
                  <span>Contact Us</span>
                </h2>
                <div class="footer-contact flex items-center justify-center lg:justify-start gap-2">
                  <img src="/images/call.png" alt="" />
                  <p class="text-[14px] md:text-[16px]">
                    <span>Phone No.:</span> +234 6707653444
                  </p>
                </div>
                <div class="footer-contact flex items-center justify-center md:justify-items-start gap-4 text-balance">
                  {/* <img src="/images/location.png" alt="" /> */}
                  <p class="text-[14px] md:text-[16px]" id="location">
                    {" "}
                    <span>Email Address: </span>
                    business@liozio.com
                  </p>
                </div>
              </div>
            </div>
            <div class="footer-end text-center pb-4 pt-12 font-normal lg:text-[14px] text-[12px] text-balance">
              <p>copyright &copy; JOOMBOW {currentYear}.all rights reserved</p>
              <button
                // data-aos="fade-up"
                className=" bg-red-500 animate-bounce lg:w-[150px] w-[30px] rounded-full drop-shadow-md ml-auto transition-all duration-300 transform hover:scale-105 flex ite  justify-center py-2 lg:py-3 capitalize bg-gradient-to-r  text-center from-[#0F042F] to-[#FD1014] focus:ring-4 focus:ring-gray-100 focus:outline-none scroll-smooth"
                to="#">
                {" "}
                <div id="home">
                  <a
                    href="#home"
                    className="flex items-center justify-center gap-2">
                    <FaArrowAltCircleUp />
                    <h3 className="font-clash hidden lg:block ">Back To Top</h3>
                  </a>
                </div>
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Footer;
