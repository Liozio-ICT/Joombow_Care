import React from "react";

function CarCardList({ title = "", items = [] }) {
  return (
    <div className="general-container h-[20rem p- w-full rounded-[10px] bg-white md:p-2 md:shadow-lg">
      <h2 className="font-seri py-4 text-[20px] font-bold">{title} </h2>

      <div
        data-aos="fade-up"
        className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(min(200px,_100%),_1fr))] gap-6 px-4"
      >
        {items.map((item, index) => (
          <CarCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CarCardList;

const CarCard = ({ image, make }) => {
  return (
    <div className="car-card grid gap-1">
      <img
        className="h-[15rem] w-full transform overflow-clip rounded-lg object-cover transition hover:scale-105"
        src={image}
        alt={make}
      />
      <h3 className="py-2 text-center font-clash text-[20px] font-bold">
        {make}
      </h3>
    </div>
  );
};
