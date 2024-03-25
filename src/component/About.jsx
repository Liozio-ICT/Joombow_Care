import React from "react";

function About() {
  return (
    <>
      <main
        id="about"
        className="abtContainer flex gap-6 flex-wrap lg:flex-nowrap py-2 md:py-6 lg:py-6 px-4 lg:px-[4rem] bg-white">
        <div data-aos="fade-up" className="abt w-full lg:w-[40%] mb-8">
          <img
            src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1710941278/qowgaxnzsivunwkx6nhm.png"
            className="w-full h-[300px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            alt="Image"
          />
        </div>
        <section className="lg:ml-[2rem] maincon  w-full lg:w-[60%]">
          <div className="abtTest w-full  ">
            <h1
              id="about"
              data-aos="fade-up"
              className=" font-bold bb font-clash text-[#FD1014] text-[45px]">
              About Us
            </h1>
            <p
              data-aos="fade-up"
              className="abtd my-2 font-montserrat text-[18px] leading-8">
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
            <h1
              data-aos="fade-up"
              className="text-[20px] md:text-[25px] lg:text-[25px] my-5 font-bold bb font-clash">
              Joombow Car Care & Repair Centre - Elevating Your Drive, Ensuring
              Reliability!
            </h1>
          </div>

          <div className="abtTest py-4  md:pt-2 lg:pt-2 w-full">
            <img
              className="w-[600px] h-[300px]  ml-auto  rounded-lg shadow-lg"
              src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711208928/images_a05wxz.jpg"
              alt="Image"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
