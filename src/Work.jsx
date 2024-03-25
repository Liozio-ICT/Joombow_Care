import React from "react";

function Work() {
  return (
    <section id="review" className="relative">
      <div class="bg-black w-full h-full absolute top-0 left-0 opacity-50"></div>
      <div className="bg-container  bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1711181695/ugxtc5soae5sjv7xq7qd.jpg')] bg-no-repeat bg-center bg-cover  w-full h-[680px] flex items-center justify-center">
        <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between text-white mx-auto w-[80%] ">
          <div className="text-center font-clash">
            <p className="font-bold text-[45px]">500+</p>
            <p className="font-semibold text-[20px]">Verhicle Serviced</p>
          </div>
          <div className="text-center font-clash lg:py-0  py-10">
            <p className="font-bold text-[45px]">500+</p>
            <p className="font-semibold text-[20px]">Happy Clients</p>
          </div>
          <div>
            <p className="font-bold text-[45px]">1000+</p>
            <p className="font-semibold text-[20px]">Socials & Likes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
