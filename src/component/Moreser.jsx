import React from "react";
import { FaPhone } from "react-icons/fa";

function Moreser() {
  return (
    <div>
      <div id="why" className="heading pb-4 pt-10 lg:pb-10">
        <h1
          data-aos="fade-up"
          className=" font-bold bb fonth text-center text-[#FD1014] text-[35px] md:text-[45px] lg:text-[45px]">
          What we Offer At Joombow
        </h1>
      </div>
      <main className="abtContainer flex gap-8 flex-wrap lg:flex-nowrap md:py-6 lg:py-6  lg:px-[2rem] bg-white">
        <section className="lg:ml-[2rem] maincon p-6 lg:p-0 w-full lg:w-[50%]">
          <div className="abtTest w-full md:py-4 lg:py-4 border-b border-gray-100 ">
            <h2 className="font-bold text-[25px]  fonth">
              State-of-the-Art Facilities:
            </h2>
            <p
              data-aos="fade-up"
              className="abtd my-2 font-montserrat text-[16px] leading-8">
               Experience modern facilities and cutting-edge technology for
              efficient and effective car detailing services. Benefit from
              state-of-the-art equipment and innovative techniques to ensure
              your vehicle receives top-notch treatment. Trust us for a thorough
              and professional approach, delivering unparalleled results that
              exceed your expectations. Elevate your car care experience with
              our commitment to excellence and precision.
            </p>
          </div>

          <div className="abtTest w-full py-4 border-b border-gray-100 ">
            <h2 className="font-bold text-[25px]  fonth">
          
              Customer-Centric Approach:
            </h2>
            <p
              data-aos="fade-up"
              className="abtd my-2 font-montserrat text-[16px] leading-8">
               Your satisfaction is paramount; our services are customized to
              suit your unique requirements. We prioritize understanding your
              preferences and delivering tailored solutions that exceed
              expectations. With a commitment to excellence, we ensure every
              aspect of our service caters directly to your needs, guaranteeing
              a personalized experience that leaves you fully satisfied. Trust
              us to go above and beyond in meeting and surpassing your
              expectations.
            </p>
          </div>
          <div className="abtTest w-full py-4 ">
            <h2 className="font-bold text-[25px]  fonth">
              Affordable Pricing:
            </h2>
            <p
              data-aos="fade-up"
              className="abtd my-2 font-montserrat text-[16px] leading-8">
              Experience top-tier automotive care at affordable rates. Our
              competitive pricing guarantees exceptional value for your money
              without compromising on quality. Trust us to deliver reliable
              service without breaking the bank. With a focus on affordability
              and excellence, we prioritize providing cost-effective solutions
              tailored to your needs. Enjoy peace of mind knowing that your
              vehicle is in expert hands, receiving quality care that won't
              stretch your budget.
            </p>
          </div>
        </section>

        <section data-aos="fade-up" className="abt w-full lg:w-[50%] mb-8">
          <div className="bg-black rounded-t p-6">
            <p className="text-white  text-balance text-center leading-8 font-normal text-[16px]">
              Secure your personalized service experience by booking your
              appointment now. <br />
              Our dedicated team is ready to tailor our services to meet your
              specific needs and preferences. <br />
              With convenient booking options, you can schedule your visit
              hassle-free, ensuring you receive the attention and care your
              vehicle deserves. <br />
              Don't wait any longer – reserve your spot today and let us provide
              you with an exceptional automotive service tailored just for you.
            </p>
            <div className=" flex items-center justify-center m-auto py-6">
              <button className="bg-[#fd1014d1] fonth text-[white] border-none text-[20px] py-[14px] px-[28px] rounded-2xl transition-transform duration-300 ease hover:bg-[#CA0007]">
                Book Now
              </button>
            </div>
          </div>
       
        </section>

        <section className="lg:ml-[2rem] maincon px-3  w-full lg:w-[60%]">
          <div className="abtTest w-full py-4 border-b border-gray-100 ">
            <h2 className="font-bold text-[25px]  fonth">
              Convenient Location:
            </h2>
            <p
              data-aos="fade-up"
              className="abtd my-2 font-montserrat text-[16px] leading-8">
              Conveniently situated in Ibadan, Nigeria, our location is
              strategically positioned to meet all your car care and repair
              requirements. Easily accessible, we provide a hassle-free solution
              for your automotive needs. Whether it's routine maintenance or
              repairs, trust us to deliver prompt and reliable service. With our
              convenient location, accessing quality car care has never been
              easier. Experience convenience and efficiency with us for all your
              automotive needs in Ibadan.
            </p>
          </div>

          <div className="abtTest w-full py-4 border-b border-gray-100 ">
            <h2 className="font-bold text-[25px] fonth">
              {" "}
              Get a repair estimate:
            </h2>
            <p
              data-aos="fade-up"
              className="abtd my-2 font-montserrat text-[16px] leading-8">
               Plan your budget effectively with just a click by getting a
              repair estimate. Our online tool provides quick and accurate cost
              assessments, empowering you to make informed decisions about your
              vehicle maintenance. Say goodbye to guesswork and unexpected
              expenses. With our convenient online service, you can anticipate
              and plan for your automotive needs with confidence. Experience
              seamless budget planning for your vehicle repairs with our
              user-friendly estimation tool.
            </p>
          </div>
          <div className="abtTest w-full py-4 ">
            <h2 className="font-bold text-[25px]  fonth">
              Experienced Team:
            </h2>
            <p
              data-aos="fade-up"
              className="abtd my-2 font-montserrat text-[16px] leading-8">
              Count on our skilled and dedicated technicians to deliver top-tier
              service with expertise and commitment. With years of experience
              and a passion for excellence, our team ensures your vehicle
              receives the highest standard of care. From routine maintenance to
              complex repairs, trust us to handle every aspect with precision
              and professionalism. Experience peace of mind knowing that your
              vehicle is in capable hands, receiving the quality service it
              deserves.
            </p>
          </div>
        </section>
      </main>
      <div className="bg-[#fd1014d1] flex flex-col lg:flex-row md:flex-row items-center justify-between md:rounded-lg lg:rounded-lg px-10">
        <div className="  md:py-6 lg:py-6 ">
          <button className="lg:bg-[#00000080] md:bg-[#00000080] fonth text-[white] border-none text-[20px] py-[14px] px-[28px] rounded-2xl transition-transform duration-300 ease hover:scale-105">
            Book Now
          </button>
        </div>
        <hr className=" block md:hidden lg:hidden w-full bg-gray-900" />
        <div className="  md:py-6 lg:py-6">
          <button className="lg:bg-[#00000080] md:bg-[#00000080] flex items-center justify-center gap-3 fonth text-[white] border-none text-[20px] py-[14px] px-[28px] rounded transition-transform duration-300 ease hover:scale-105">
            <FaPhone
              style={{ transform: "rotate(90deg)" }}
              className="text-white font-bold text-[18px]"
            />
            +234 91 327 153 11
          </button>
        </div>
      </div>
    </div>
  );
}

export default Moreser;
