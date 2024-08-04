import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineStarHalf } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
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
          class="text-light-gray font-montserrat bg-[#1D1D1D] text-white"
        >
          <div
            data-aos="fade-up"
            id="section9"
            class="ninth-section footer-container m-auto w-[90%] pt-8"
          >
            <div class="footer-star flex items-center justify-center">
              <MdOutlineStarHalf class="h-[20px] w-[20px]" />
              <MdOutlineStarHalf class="h-[20px] w-[20px]" />
              <MdOutlineStarHalf class="h-[20px] w-[20px]" />
              <MdOutlineStarHalf class="h-[20px] w-[20px]" />
              <MdOutlineStarHalf class="h-[20px] w-[20px]" />
            </div>
            <div class="footer-container container flex flex-col justify-between pt-12 lg:flex-row">
              <div class="footer-content leading-8">
                <h3 class="bb py-3 text-center text-[18px] font-bold text-[#FD1014] lg:text-start">
                  Stay Connected
                </h3>
                <p class="flex justify-center space-x-4 text-[16px]">
                  <a
                    target="_blank"
                    class="transition hover:bg-transparent hover:dark:text-[#FD1014]"
                    href="https://www.facebook.com/share/pNNwjpkqrtggdzvW/?mibextid=qi2Omg"
                  >
                    {" "}
                    Facebook{" "}
                  </a>
                  <a
                    target="_blank"
                    class="transition hover:bg-transparent hover:dark:text-[#FD1014]"
                    href="https://x.com/Liozio_Joombow/status/1817858442683396459?t=dvdV-ldWHW0HRavST3wKyw&s=19"
                  >
                    {" "}
                    Twitter{" "}
                  </a>
                  <a
                    target="_blank"
                    class="transition hover:bg-transparent hover:dark:text-[#FD1014]"
                    href="https://www.instagram.com/liozio_joombow?igsh=MWRsZW90enAzZGZleQ=="
                  >
                    {" "}
                    Instagram{" "}
                  </a>
                </p>
              </div>
              <div class="footer-links my-8 lg:my-0">
                <h2 class="text-light-red bb py-3 text-center text-[18px] font-bold text-[#FD1014]">
                  <span>Our Links</span>
                </h2>
                <div class="flex flex-col items-center gap-2 text-center">
                  <ul class="flex space-x-4 text-balance pt-2 text-[14px] font-normal leading-8 md:text-[16px]">
                    <a href="#home">
                      <li class="transition md:hover:bg-transparent hover:dark:text-[#FD1014]">
                        <span>Home</span>
                      </li>
                    </a>
                    <a href="#about">
                      <li class="transition hover:bg-transparent hover:dark:text-[#FD1014]">
                        About Us
                      </li>
                    </a>
                    {/* <a href="#"><li class="hover:bg-transparent hover:dark:text-[#FD1014] transition">Timeline</li></a> */}
                    <a href="#services">
                      <li class="transition hover:bg-transparent hover:dark:text-[#FD1014]">
                        Our Services
                      </li>
                    </a>
                  </ul>
                  <ul class="flex space-x-4 text-balance text-[14px] font-normal leading-8 md:text-[16px]">
                    <a href="#why">
                      <li class="transition hover:bg-transparent hover:dark:text-[#FD1014]">
                        Why Us
                      </li>
                    </a>
                    {/* <a href="#review">
                      <li class="hover:bg-transparent px-6 hover:dark:text-[#FD1014] transition">
                        Reviews
                      </li>
                    </a> */}

                    <Link to="/signup">
                      <li class="transition hover:bg-transparent hover:dark:text-[#FD1014]">
                        Sign Up
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div class="footer-info text-balance text-[16px] font-normal leading-8">
                <h2 class="text-light-red bb py-3 text-center text-[18px] font-bold text-[#FD1014] md:mt-0 lg:text-left">
                  <span>Contact Us</span>
                </h2>
                <div class="footer-contact flex flex-col items-center justify-center gap-2 md:justify-start lg:block">
                  {/* <img src="/images/call.png" alt="" /> */}
                  <a
                    href="tel:+234 0904 444 4765"
                    class="flex items-center gap-4 text-[14px] md:text-[16px] hover:dark:text-[#FD1014]"
                  >
                    <span>
                      <FaPhone />
                    </span>
                    +234 0904 444 4765
                  </a>
                  <a
                    href="mailto:TLS@liozio.com"
                    class="flex items-center gap-4 text-[14px] md:text-[16px] hover:dark:text-[#FD1014]"
                  >
                    <span>
                      <FaEnvelope />
                    </span>
                    TLS@liozio.com
                  </a>
                  <div class="footer-contact flex items-center gap-4 text-balance md:justify-items-start">
                    <FaLocationDot />

                    <p
                      class="text-balance text-[14px] md:text-[16px]"
                      id="location"
                    >
                      No 3, Chief Wole Olanipekun Crescent, <br /> State
                      Secretariat, Agodi, Ibadan, Oyo State, Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-end text-balance pb-4 pt-12 text-center text-[12px] font-normal lg:text-[14px]">
              <p>copyright &copy; JOOMBOW {currentYear}.all rights reserved</p>
              <a
                // onClick={scrollToTop}
                // data-aos="fade-up"
                className="ite ml-auto flex w-[50px] transform animate-bounce cursor-pointer justify-center scroll-smooth rounded-full bg-red-500 bg-gradient-to-r from-[#0F042F] to-[#FD1014] py-2 text-center capitalize drop-shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-[150px] lg:py-3"
                href="#home"
              >
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <FaArrowAltCircleUp />
                  <h3 className="hidden font-clash lg:block">Back To Top</h3>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Footer;
