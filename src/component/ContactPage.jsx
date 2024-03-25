import React from "react";

function ContactPage() {
  return (
    <div className=" bg-[ur('https://res.cloudinary.com/dnldaz7oh/image/upload/v1711375249/istockphoto-695100728-612x612_no4ouq.jpg') bg-no-repeat bg-center] bg-cover">
      <section className=" h-screen w-[50%] m-auto">
        <div className="py-8 leading-10">
          <h1 className="text-center font-clash font-bold text-[25px]">
            Do you've questions or need assistance? Let us know how to help you.
          </h1>
          <p className="text-center font-normal font-montserrat text-[20px]">
            Email us below to any question related to our service.
          </p>
        </div>

        <form action="">
          <div>
            <input
              className="border-[1px] font-montserrat font-normal border-slate-200 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="py-8">
            <input
              className="border-[1px] font-montserrat font-normal border-slate-200 outline-none w-full py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              className="border-[1px] font-montserrat font-normal border-slate-200 outline-none w-full h-[200px] py-[.6rem] rounded-[3px] px-4 bg-[#FCFBFB] focus:border focus:border-gray-300 text-black"
              name="message"
              id="message"
              placeholder="Message"></textarea>
          </div>
          <div className=" py-4 md:py-10 lg:py-10 m-auto flex items-center justify-center">
            <button
              className="bg-[#FF192DD1] border-none text-[30px] py-[10px] lg:py-[16px] md:py-[16px] px-[35px] md:px-[48px] lg:px-[48px] rounded-2xl text-white transition-transform hover:scale-105 duration-300 ease"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;
