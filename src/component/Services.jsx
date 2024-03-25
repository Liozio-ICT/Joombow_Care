import React from "react";

function Services() {
  return (
    <div>
      <main id="services" className="bg-black px-10 py-14">
        <h1 className=" font-bold bb font-clash text-[#FD1014] text-[45px] text-center py-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="img  bg-no-repeat bg-center transition-all duration-300 transform hover:scale-105 object-contain bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1710949495/fhuvzohdi3acxpcpsr15.png')]">
            <div className="flex items-center justify-center p-6">
              <div className="border px-2 md:px-8 lg:px-8 border-red-500 flex items-center justify-center shadow-lg">
                <h2 className="text-[35px] text-white font-clash font-bold text-center py-[120px]">
                  Exterior and interior detailing
                </h2>
              </div>
            </div>
          </div>
          <div className="img bg-no-repeat bg-center transition-all duration-300 transform hover:scale-105 object-contain bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1710949496/tbpppqmys2dytfdulu5r.png')]">
            <div className="flex items-center justify-center p-6">
              <div className="border w-[350px] h-[350px] border-red-500 flex items-center justify-center shadow-lg">
                <h2 className="text-[35px] text-white font-clash font-bold text-center py-[120px]">
                  Full budy Correction
                </h2>
              </div>
            </div>
          </div>
          <div className="img bg-no-repeat bg-center transition-all duration-300 transform hover:scale-105 object-contain bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1710949495/odn3lhgahwbkfvhna2dl.png')]">
            <div className="flex items-center justify-center p-6">
              <div className="border w-[350px] h-[350px] border-red-500 flex items-center justify-center shadow-lg">
                <h2 className="text-[35px] text-white font-clash font-bold text-center py-[120px]">
                  Auto Body Repairs
                </h2>
              </div>
            </div>
          </div>
          <div className="img  bg-no-repeat bg-center object-contain transition-all duration-300 transform hover:scale-105 bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1710949495/kxrcxdhbq4nuqgtx7l5r.png')]">
            <div className="flex items-center justify-center p-6">
              <div className="border w-[350px] h-[350px] border-red-500 flex items-center shadow-lg justify-center">
                <h2 className="text-[35px] text-white font-clash font-bold text-center py-[120px]">
                  Paunt Protection
                </h2>
              </div>
            </div>
          </div>
          <div className="img bg-no-repeat bg-center transition-all duration-300 transform hover:scale-105 object-contain bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1710949495/mkmzjbp4drh7kioxlkre.png')]">
            <div className="flex items-center justify-center p-6">
              <div className="border w-[350px] h-[350px] border-red-500 flex items-center justify-center shadow-lg">
                <h2 className="text-[35px] text-white font-clash font-bold text-center py-[120px]">
                  Accessories Installation
                </h2>
              </div>
            </div>
          </div>
          <div className="img transition-all duration-200 transform hover:scale-105  bg-no-repeat bg-center object-contain bg-[url('https://res.cloudinary.com/dnldaz7oh/image/upload/v1710949495/vxmsnmvk3crtynl6tatn.png')]">
            <div className="flex items-center justify-center p-6">
              <div className="border w-[350px] h-[350px] border-red-500 flex items-center justify-center shadow-lg">
                <h2 className="text-[35px] text-white font-clash font-bold text-center py-[120px]">
                  Interior Coating
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
