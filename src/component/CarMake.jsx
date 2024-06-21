import React from "react";

function CarMake() {
  return (
    <main id="carmake" className=" py-8 bg-white">
      <div className="w-[90%] m-auto">
        <div className="text-center">
          <h1 className="text-red-600 font-bold text-[35px] font-seri text-center">
            Car Make
          </h1>
          <p className="font-normal text-[20px] font-clash">
            At Joombow Car Care & Repair Center, we repair the following make of
            cars
          </p>
        </div>
        <section className="py-4 ">
          <div className="general-container py-2">
            <h2 className="text-[20px] font-bold font-seri py-4">Japanese</h2>
            <div
              data-aos="fade-up"
              className="container w-full m-auto flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="bg-red-00 p">
                <div className="">
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-cover transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716392915/honda_d4qopd.jpg"
                    alt=""
                  />
                  <h3 className="font-bold font-clash text-center text-[20px]  py-2">
                    Honda
                  </h3>
                </div>
              </div>
              <div className="bg-red-0">
                <div className="">
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-cover transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716393191/nissan_l7li4x.jpg"
                    alt="Nissan"
                  />
                </div>
                <h3 className="font-bold font-clash text-center text-[20px] py-2">
                  Nissan
                </h3>
              </div>
              <div className="bg-red-00">
                <div>
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-cover transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716393558/toyota_tlvnjf.jpg"
                    alt="Toyota"
                  />
                </div>
                <h3 className="font-bold font-clash text-center text-[20px]  py-2">
                  Toyota
                </h3>
              </div>
            </div>
          </div>
          <div className="general-container py-2">
            <h2 className="font-clas text-[20px] font-bold py-4">Korean</h2>
            <div
              data-aos="fade-up"
              className="container w-full m-auto flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="bg-red-00 p">
                <div className="">
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-contain transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716397735/hyundai_un6tx6.jpg"
                    alt="Hyundai"
                  />
                </div>
                <h3 className="font-bold font-clash text-center text-[20px] py-2">
                  Hyundai
                </h3>
              </div>
              <div className="bg-red-0">
                <div>
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-contain transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716399800/pexels-mikebirdy-4037760_ckbafc.jpg"
                    alt="Kia"
                  />
                </div>
                <h3 className="font-bold font-clash text-center text-[20px]  py-2">
                  Kia
                </h3>
              </div>
            </div>
          </div>
          <div className="general-container py-2">
            <h2 className="font-clas text-[20px] font-bold py-4">German</h2>
            <div
              data-aos="fade-up"
              className="container w-full m-auto flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="bg-red-00 p">
                <div>
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-contain transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716399370/pexels-mikebirdy-892522_cgzorq.jpg"
                    alt=""
                  />
                </div>
                <h3 className="font-bold font-clash text-center text-[20px] py-2">
                  BMW
                </h3>
              </div>
              <div className="bg-red-0">
                <div>
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-contain transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716400011/pexels-mikebirdy-810357_lc6ooy.jpg"
                    alt=""
                  />
                </div>
                <h3 className="font-bold font-clash text-center text-[20px]  py-2">
                  Mercedes Benz
                </h3>
              </div>
            </div>
          </div>
          <div className="general-container py-2">
            <h2 className="font-clas text-[20px] font-bold py-4">American</h2>
            <div
              data-aos="fade-up"
              className="container w-full m-auto flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="bg-red-00 p">
                <div>
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-contain transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716399150/pexels-mikebirdy-1007410_vutflt.jpg"
                    alt=""
                  />
                </div>
                <h3 className="font-bold font-clash text-center text-[20px]  py-2">
                  Ford
                </h3>
              </div>
              <div className="bg-red-00 p">
                <div>
                  <img
                    className="rounded-lg w-[600px] h-[300px] object-contain transform transition hover:scale-105"
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716402689/pexels-chaiya-saleethong-497043682-16033914_jpwbor.jpg"
                    alt=""
                  />
                </div>
                <h3 className="font-bold font-clash text-center text-[20px]  py-2">
                  Ford (Truck)
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CarMake;
