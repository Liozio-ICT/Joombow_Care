import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Discount from "./Discount";
import Navbar from "./Navbar";
import AutoType from "./AutoType";
// import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <Navbar />

      <section className="heroContainer over relative lg:hidden">
        <div className="overlay absolute inset-0 bg-black opacity-65"></div>
        <figure className="heroimgcontainer">
          <img
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg"
            className="h-[350px] w-full object-cover lg:h-[600px]"
            alt="car care image"
          />
        </figure>

        <figcaption className="text-container jusify-center absolute inset-0 flex items-center px-8">
          <section id="home" className="t text-white">
            <h3 className="mb-2 text-3xl md:text-4xl lg:text-5xl">
              Joombow Car Care <br /> & Repair Centre
            </h3>
            <h1 class="mb-2 text-xl md:text-2xl lg:text-3xl">
              
            </h1>
            <h1 className="mb-6 text-3xl text-[#EAB251]">
              {" "}
              <AutoType />
            </h1>
            <section className="btnc flex w-full justify-center space-x-5">
              <div className="mb-6 w-full">
                <a
                  href="/signup"
                  class="ease block transform rounded-lg bg-red-600 px-2 py-3 text-center text-[12px] text-white transition-transform duration-300 hover:scale-105 hover:bg-red-700"
                >
                  Book car care
                </a>
              </div>
              <div className="mb-6 w-full">
                <a
                  // href={import.meta.env.VITE_CAR_WASH_URL ?? "https://joombow-web-application.vercel.app"}
                  href={import.meta.env.VITE_CAR_WASH_URL}
                  target="_blank"
                  className="ease block transform rounded-lg bg-red-600 px-6 py-3 text-[11px] text-white transition-transform duration-300 hover:scale-105 hover:bg-red-700"
                >
                  Our Car Wash
                </a>
              </div>
            </section>
          </section>
        </figcaption>
      </section>

      {/*destop */}

      <section className="heroContainer over relative hidden lg:block">
        <div className="overlay absolute inset-0 bg-black opacity-75"></div>
        <figure className="heroimgcontainer w-full">
          <img
            src="https://media.istockphoto.com/id/1469656819/photo/automobile-mechanic-repairman-hands-repairing-a-car-engine-automotive-workshop-with-a-wrench.jpg?s=612x612&w=0&k=20&c=K6ieJylvjUwYusGYOcUHOVcu6HO9Xrb2GcVmrh9tcAY="
            className="w-full object-cover lg:h-[500px]"
            alt="image"
          />
        </figure>

        <figcaption className="text-container absolute inset-0 flex items-center justify-center text-white">
          <section id="home" className="pl-[5rem] pr-[20rem]">
            <h3 className="mb-2 font-clash text-6xl">
              Joombow Car Care & Repair Centre
            </h3>
            <h1 className="mb-2 text-[35px]">Ibadan Nigeria</h1>
            <h1 className="mb-6 text-6xl text-[#EAB251]">
              {" "}
              <AutoType />
            </h1>
            <div className="flex items-center gap-[80px] py-6">
              <div>
                <Link
                  to="/signup"
                  className="ease transform rounded-lg bg-red-600 px-12 py-5 text-white transition-transform duration-300 hover:scale-105 hover:bg-red-700"
                >
                  Book Car Care
                </Link>
              </div>
              <div>
                <a
                  href="https://joombow-web-application.vercel.app"
                  target="_blank"
                  className="ease transform rounded-lg bg-red-600 px-12 py-5 text-white transition-transform duration-300 hover:scale-105 hover:bg-red-700"
                >
                  Explore our Car Wash
                </a>
              </div>
            </div>
          </section>
        </figcaption>
      </section>

      <Discount />
    </div>
  );
}

export default Hero;
