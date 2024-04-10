import React from "react";

function Work() {
  return (
    <section id="review" className="relative">
      <div class="bg-black w-full h-full absolute top-0 left-0 opacity-60"></div>
      <div className="bg-container  bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1712046874/bipoc-specialist-car-service-using-professional-mechanical-tool-repair-broken-ignition-system-licensed-specialist-garage-fixing-client-automobile-ensuring-optimal-automotive-performance_p4zulj.jpg')] bg-no-repeat bg-center bg-cover  w-full h-[680px] flex items-center justify-center">
        <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-[100px] justify-between text-white mx-auto w-[80%] ">
          <a
            href="https://joombow-web-application.vercel.app/"
            target="blank"
            className="text-center font-clash border-4 border-red-600 p-6 transition transform hover:scale-105 duration-300 ease-in-out">
            <p className="font-semibold text-[20px] lg:text-[30px]">
              Book Car Wash
            </p>
          </a>
          {/* <div className="text-center font-clash">
            <p className="font-bold text-[45px] lg:text-[50px]">500+</p>
            <p className="font-semibold text-[20px] lg:text-[30px]">
              Verhicle Serviced
            </p>
          </div> */}

          <a href="/" className="text-center font-clash lg:py-0  py-10">
            <div className="logo flex items-center ">
              <img
                className="w-full h-[200px] lg:h-[150px] lg:w-[350px] object-cover"
                src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1707161130/JOOMBOW/rpj2kpw4bbo9ngkd5zob.png"
                alt="Logo"
              />
            </div>
          </a>
          {/* <div className="text-center font-clash lg:py-0  py-10">
            <p className="font-bold text-[45px] lg:text-[50px]">500+</p>
            <p className="font-semibold text-[20px] lg:text-[30px]">
              Happy Clients
            </p>
          </div> */}

          <a
            href="/signup"
            className="text-center font-clash border-4 border-red-600 p-6 transition transform hover:scale-105 duration-300 ease-in-out">
            <p className="font-semibold text-[20px] lg:text-[30px]">
              Book Car Care
            </p>
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
