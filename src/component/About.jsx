import React from "react";

function About() {
  return (
    <>
      <main
        id="about"
        className="abtContainer flex gap-6 flex-wrap lg:flex-nowrap py-2 md:py-6 lg:py-6 px-4 lg:px-[4rem] bg-black">
        <div data-aos="fade-up" className="abt w-full lg:w-[40%] mb-2">
          <img
            src="https://res.cloudinary.com/dcz2xlx1b/image/upload/v1745088466/Joombow_Easter_g5aevj.jpg"
            className="w-full h-[300px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            alt="Image"
          />
        </div>
        <section className="lg:ml-[2rem] maincon  w-full lg:w-[60%]">
          <div className="abtTest w-full  ">
            <h1
              id="about"
              data-aos="fade-up"
              className=" font-bold  text-[#FD1014] text-[35px]">
              About Us
            </h1>
            <p
              data-aos="fade-up"
              className="abtd my-2 text-white text-[16px] md:text-[18px] leading-8">
               Revitalize your driving experience with Joombow Car Care & Repair
              Centre, your trusted automotive partner in the lively city of
              Ibadan, Nigeria. Nestled in a prime location, we take pride in
              delivering a comprehensive suite of services, from indulgent car
              detailing to precision mechanical repairs, ensuring your vehicle
              stays in peak condition. At Joombow, we are committed to not just
              meeting but exceeding your expectations, making your journey
              smooth, safe, and stylish.
            </p>
          </div>

          <div className="abtTest w-full">
            <h1 className="text-[20px] text-white md:text-[25px] lg:text-[25px] my-5 font-bold bb ">
              Joombow Car Care & Repair Centre - Elevating Your Drive, Ensuring
              Reliability!
            </h1>
          </div>

          <div className="abtTest py-4  md:pt-2 lg:pt-2 w-full">
            <img
              className="w-full h-[300px]   object-cover  rounded-lg shadow-lg"
              src="https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/pexels-khunkorn-laowisit-5233258_onjgmd.jpg"
              alt="Image"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
