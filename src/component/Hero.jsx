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

      <section className="heroContainer relative lg:hidden over">
        <div className="overlay inset-0 bg-black opacity-65 absolute"></div>
        <figure className="heroimgcontainer">
          <img
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/man-connecting-jumper-cables-to-battery_ysq6je.jpg"
            className="w-full h-[350px] lg:h-[600px] object-cover"
            alt="car care image"
          />
        </figure>

        <figcaption class="text-container absolute inset-0 flex items-center px-8 jusify-center">
          <section class="text-white t">
            <h3 class="text-3xl md:text-4xl lg:text-5xl mb-2">
              Joombow Car Care <br /> & Repair Centre
            </h3>
            <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">
              Southwest Nigeria
            </h1>
            <h1 class="text-[#EAB251]  text-3xl mb-6">
              {" "}
              <AutoType />
            </h1>

            <div class="mb-6">
              <Link
                to="/signup"
                class="bg-red-600 w-[50%] hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-transform duration-300 ease transform hover:scale-105">
                Book Now
              </Link>
            </div>
          </section>
        </figcaption>
      </section>

      {/*destop */}

      <section className="heroContainer hidden lg:block relative over">
        <div className="overlay inset-0 bg-black opacity-75 absolute"></div>
        <figure className="heroimgcontainer w-full">
          <img
            src="https://media.istockphoto.com/id/1469656819/photo/automobile-mechanic-repairman-hands-repairing-a-car-engine-automotive-workshop-with-a-wrench.jpg?s=612x612&w=0&k=20&c=K6ieJylvjUwYusGYOcUHOVcu6HO9Xrb2GcVmrh9tcAY="
            className="w-full lg:h-[500px] object-cover"
            alt=""
          />
        </figure>

        <figcaption class="text-container absolute inset-0 flex items-center justify-center text-white">
          <section className="pl-[5rem] pr-[20rem]">
            <h3 class="  text-5xl mb-2">Joombow Car Care & Repair Centre</h3>
            <h1 class="text-[35px] mb-2">Southwest Nigeria</h1>
            <h1 class="text-[#EAB251] text-7xl mb-6">
              {" "}
              <AutoType />
            </h1>
            <div className="py-6 flex items-center gap-[80px]">
              <div>
                <Link
                  to="/signup"
                  class="bg-red-600 hover:bg-red-700 text-white py-5 px-12 rounded-lg transition-transform duration-300 ease transform hover:scale-105">
                  Book Car Care
                </Link>
              </div>
              <div>
                <Link
                  to="/signup"
                  class="bg-red-600 hover:bg-red-700 text-white py-5 px-12 rounded-lg transition-transform duration-300 ease transform hover:scale-105">
                  Explore our Car Wash
                </Link>
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
