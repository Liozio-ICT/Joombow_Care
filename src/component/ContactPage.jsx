import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import ArrowRight from "./ArrowRight";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className=" relative bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1712047560/garage-serviceman-holds-mockup-device_ggdnc3.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="overlay absolute inset-0 bg-black opacity-70"></div>
      <section className=" relative z-50 w-full md:w-[50%] lg:w-[50%] lg:p-0 md:p-0 p-6 m-auto">
        <div className="py-8">
          <Link to="/">
            <ArrowRight />
          </Link>
        </div>
        <div className="py-8 md:leading-10 lg:leading-10 text-slate-100">
          <h1 className="text-center font-clash  font-bold text-[25px] lg:text-[25px]">
            Do you've questions or need assistance? Let us know how to help you.
          </h1>
          <p className="text-center font-normal font-montserrat text-[18px] md:text-[20px] lg:text-[20px]">
            Email us below to any question related to our service.
          </p>
        </div>

        <form action="/">
          <div>
            <input
              className="border-[1px] font-montserrat font-normal border-slate-800 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-gray-200 focus:border focus:border-gray-300 text-black"
              type="text"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="py-8">
            <input
              className="border-[1px] font-montserrat font-normal border-slate-800 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-gray-200 focus:border focus:border-gray-300 text-black"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <textarea
              className="border-[1px] font-montserrat font-normal border-slate-800 outline-none w-full h-[200px] py-[.6rem] rounded-[3px] px-4 bg-gray-200  focus:border focus:border-gray-300 text-black"
              name="message"
              id="message"
              placeholder="Message"></textarea>
          </div>
          <div className=" py-4 md:py-10 lg:py-10 m-auto flex items-center justify-center">
            <button
              className="bg-[#FF192DD1] border-none text-[20px] py-[10px] lg:py-[16px] md:py-[16px] px-[35px] md:px-[48px] lg:px-[48px] rounded-2xl text-white transition-transform hover:scale-105 duration-300 ease"
              type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 pb-6">
          <a
            className="transition ease-in-out duration-200 hover:transform hover:scale-150"
            href="/">
            <FaFacebook size={25} color="#3b5998" />
          </a>
          <a
            className="transition ease-in-out duration-200 hover:transform hover:scale-150"
            href="/">
            <FaInstagram size={25} color="#e4405f" />
          </a>
          <a
            className="transition ease-in-out duration-200 hover:transform hover:scale-150"
            href="/">
            <svg
              className="w-6 h-6 text-gray-800 cursor-pointer dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
            </svg>
          </a>
          <a
            className="transition ease-in-out duration-200 hover:transform hover:scale-150"
            href="/">
            <FaTiktok size={25} color="#ffffff" />
          </a>
          <a
            className="transition ease-in-out duration-200 hover:transform hover:scale-150 "
            href="/">
            <FaYoutube size={25} color="#ff0000" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
