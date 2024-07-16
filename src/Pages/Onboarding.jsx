

import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

const Onboarding = () => {
  return (
    <>
      <ScrollRestoration />
      <main className="container relative">
        <div className="overlay fixed inset-0 z-40 bg-black opacity-30 "></div>
        <section className="Obdesc z-50 w-full h-[20rem] top-[1rem] b absolute flex items-center justify-center">
          {/* <div>
            <img
              src="https://res.cloudinary.com/durbee4ln/image/upload/v1706504042/CarWASH/image_1_1_nibhmo.png"
             className='w-full h-[300px] object-cover'
              alt=""
            />
          </div> */}
        </section>
        <div>
          <img
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1706504054/CarWASH/portrait-young-african-guy-accepts-order-by-phone-motorbike-holding-boxes-with-pizza-sit-his-bike-urban-place_3_emq7ii.svg"
            className="w-full h-[400px] object-cover"
            alt=""
          />
        </div>
        <section className="Obdesc z-50 w-[100%]  mt-[-2rem] h-[25rem] rounded-[2rem] bg-red-500 relative">
          <div className='flex justify-center px-2 pt-4'>


            <div className="desc w-[90%] ">
              <h2>covient carwash</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sequi quaerat qu

                i animi aut, facere hic? Voluptatum voluptate nesciunt eligendi!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Onboarding;
