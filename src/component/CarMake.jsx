import React from "react";
import CarCardList from "./CarCardList";

function CarMake() {
  return (
    <main id="carmake" className="bg-white py-8">
      <div className="m-auto w-[90%]">
        <div className="text-center">
          <h1 className="font-seri text-center text-[35px] font-bold text-red-600">
            Car Make
          </h1>
          <p className="font-clash text-[20px] font-normal">
            At Joombow Car Care & Repair Center, we repair the following make of
            cars
          </p>
        </div>
        <section className="grid gap-10 py-4">
          <CarCardList
            title="Japanese"
            items={[
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716392915/honda_d4qopd.jpg",
                make: "Honda",
              },
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716393191/nissan_l7li4x.jpg",
                make: "Nissan",
              },
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716393558/toyota_tlvnjf.jpg",
                make: "Toyota",
              },
            ]}
          />

          <CarCardList
            title="Korean"
            items={[
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716397735/hyundai_un6tx6.jpg",
                make: "Hyundai",
              },
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716399800/pexels-mikebirdy-4037760_ckbafc.jpg",
                make: "Kia",
              },
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1721232890/hayundai_ge8w2k.jpg",
                make: "Hyundai",
              },
            ]}
          />

          <CarCardList
            title="German"
            items={[
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716399370/pexels-mikebirdy-892522_cgzorq.jpg",
                make: "BMW",
              },
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716400011/pexels-mikebirdy-810357_lc6ooy.jpg",
                make: "Mercedes Benz",
              },
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1721233327/bmw_lwqvuf.avif",
                make: "BMW",
              },
            ]}
          />

          <CarCardList
            title="American"
            items={[
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716399150/pexels-mikebirdy-1007410_vutflt.jpg",
                make: "Ford",
              },
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716402689/pexels-chaiya-saleethong-497043682-16033914_jpwbor.jpg",
                make: "Ford (Truck)",
              },
              {
                image:
                  "https://res.cloudinary.com/dnldaz7oh/image/upload/v1721233550/ford_k4kkbs.avif",
                make: "Ford",
              },
            ]}
          />
        </section>
      </div>
    </main>
  );
}

export default CarMake;
