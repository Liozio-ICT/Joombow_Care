import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaCar } from "react-icons/fa";

function Work() {
  return (
    <section id="review" className="relative">
      <div class="bg-black w-full h-full absolute top-0 left-0 opacity-60"></div>
      <div className="bg-container  bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1712046874/bipoc-specialist-car-service-using-professional-mechanical-tool-repair-broken-ignition-system-licensed-specialist-garage-fixing-client-automobile-ensuring-optimal-automotive-performance_p4zulj.jpg')] bg-no-repeat bg-center bg-cover  w-full h-[680px] flex items-center justify-center">
        <div className="container relative z-10 flex flex-col lg:flex-row items-center lg:gap-0 gap-[40px] justify-between text-white mx-auto w-[90%] ">
          <a
            href="https://wa.me/message/TGFCMDCSQOTJI1"
            target="blank"
            className="text-center font-clash p-6 transition transform hover:scale-105 duration-300 ease-in-out">
            <FaUsers className="font-semibold text-[100px] lg:flex-0 flex items-center justify-center m-auto lg:text-[200px]" />
            <span className="font-bold text-[20px] block lg:text-[40px]">
              Help &amp; Support
            </span>
          </a>
          {/* <div className="text-center font-clash">
            <p className="font-bold text-[45px] lg:text-[50px]">500+</p>
            <p className="font-semibold text-[20px] lg:text-[30px]">
              Verhicle Serviced
            </p>
          </div> */}

          <a
            href="https://wa.me/message/TGFCMDCSQOTJI1"
            className="text-center font-clash p-6 transition transform hover:scale-105 duration-300 ease-in-out">
            <MdMessage className="font-semibold text-[100px] lg:flex-0 flex items-center justify-center m-auto lg:text-[150px]" />
            <span className="font-bold block text-[20px] lg:text-[40px]">
              Messaging
            </span>
          </a>
          {/* <div className="text-center font-clash lg:py-0  py-10">
            <p className="font-bold text-[45px] lg:text-[50px]">500+</p>
            <p className="font-semibold text-[20px] lg:text-[30px]">
              Happy Clients
            </p>
          </div> */}

          <a
            href="/"
            className="text-center font-clash p-6 transition transform hover:scale-105 duration-300 ease-in-out">
            <FaCar className="font-semibold text-[100px] lg:text-[200px] lg:flex-0 flex items-center justify-center m-auto" />
            <span className="font-bold block text-[20px] lg:text-[40px]">
              Joombow Services
            </span>
          </a>
          {/* <div className="text-center font-clash lg:py-0  py-10">
            <p className="font-bold text-[45px] lg:text-[50px]">1000+</p>
            <p className="font-semibold text-[20px] lg:text-[30px]">
              Socials & Likes
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Work;
