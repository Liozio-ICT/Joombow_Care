import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const listItems = [
    ["Car Servicing", "Operational Maintenance", "Tune Ups", "Diagnosis"],

    [
      "Wear & Tear Repairs",
      "Suspension Systems ",
      "Axle Systems",
      "Brake Systems",
    ],

    [
      "Troubleshooting Electrical Faults",
      "Starter Motor Services",
      "Battery Testing & Replacement",
      "Alternator Repairs",
    ],

    ["AC Servicing", "Gas Refill & Servicing", "AC System Cleaning"],

    ["Tyre change", "Tyre Repair", "Alignment & Balancing", "Tyre Sip & Trim"],
  ];
  const services = [
    {
      title: "Service & Maintenance",

      content:
        "At JOOMBOW Car Care & Repair, we offer exclusive maintenance services tailored to keep your vehicle running smoothly. Our comprehensive options include Car Servicing, Operational Maintenance, Tune Ups, and Brake Systems. With our dedicated team and state-of-the-art equipment, you can trust us to deliver the best care for your vehicle, ensuring it performs at its peak.",
      imageUrl:
        "https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.webp?b=1&s=170667a&w=0&k=20&c=oDNgnbBqr6dQ01ZwhbLF5NA3gJRS2ISvrcnKpCSFirs=",
    },
    {
      title: "General Mechanical",

      content:
        "At Joombow Car Care and Repair Center, we provide comprehensive general mechanical services to keep your vehicle running smoothly and safely. Our offerings include wear & tear repairs to address common issues like worn-out brakes and leaking fluids, suspension system maintenance for a smooth and comfortable ride, axle system inspections and repairs to ensure efficient power transmission, and brake system services to guarantee reliable stopping power under all conditions.",
      imageUrl:
        "https://media.istockphoto.com/id/1157179147/photo/checking-oil-in-car-engine.webp?b=1&s=170667a&w=0&k=20&c=zy6pdwK_hpfdedHHMwyAXjGZqKWYhM0by27d5Bf2JAA=",
    },
    {
      title: "Electrical Services",

      content:
        "Modern vehicles rely heavily on complex electrical systems. At Joombow Car Care & Repair Center, Our electrical services include battery testing and replacement, alternator repairs, starter motor services, and troubleshooting of electrical faults. We also handle advanced diagnostics for issues related to your car's lighting, sensors, and onboard computer systems.",
      imageUrl:
        "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716320436/electrical_h34xr1.jpg",
    },
    {
      title: "A/C Maintenance",

      content:
        "At Joombow Car Care and Repair Center, we understand the importance of maintaining your vehicle's air conditioning system for optimal performance and comfort. Our comprehensive A/C maintenance services cover essential components such as AC servicing, gas refill & servicing, and AC system cleaning. From thorough inspections to checking for leaks and ensuring proper refrigerant levels, we're dedicated to keeping your A/C system efficient and reliable. Trust us to keep you cool and comfortable on the road.",
      imageUrl:
        "https://res.cloudinary.com/dnldaz7oh/image/upload/v1716320109/Car_AC_gelgbh.jpg",
    },
    {
      title: "Tyre Maintenance",

      content:
        "At JOOMBOW Car Care & Repair, we provide top-notch tyre maintenance services to keep your vehicle rolling smoothly. Our services include tyre change, tyre repair, alignment & balancing, and tyre sip and trim. Whether you need a quick tyre fix or a complete alignment, our skilled technicians are equipped to handle all your tyre maintenance needs with precision and care.",
      imageUrl:
        "https://res.cloudinary.com/dnldaz7oh/image/upload/v1713270574/nitrogen-air_w0buji.jpg",
    },
    // {
    //   title: "Body Work & Spraying ",

    //   content:
    //     "At JOOMBOW Car Care & Repair, we've got you covered with our top-notch body work and spraying services. Whether its paint spraying, anti-corrosion work, scratch or bumper repair, or even accident damage restoration, our skilled team ensures your car looks fantastic. With our attention to detail and advanced equipment, we'll have your vehicle looking brand new in no time. Trust us to bring out the best in your car's appearance and keep it protected against wear and tear!",
    //   imageUrl:
    //     "https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/pexels-khunkorn-laowisit-5233258_onjgmd.jpg",
    // },
  ];

  const renderServices = () => {
    return services.map((service, index) => (
      <figure
        key={index}
        className="relative transform object-contain transition-all duration-300 hover:scale-105"
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-80 rounded-[5px]"></div> */}

        {/* Image */}

        {/* Text */}
        <div className="mx-2 h-auto border border-gray-800 md:mx-4 lg:mx-6">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="h-[250px] w-full rounded-[5px] object-cover"
          />
          <div className="fle items-center justify-center p-3 shadow-lg">
            {/* w-[450px] h-[250px] border-red-500 */}
            <h2 className="text-cente pt-2 font-clash text-[23px] font-bold text-white md:text-[35px]">
              {service.title}
            </h2>

            <ul style={{ listStyleType: "square" }} className="p-4">
              {listItems[index].map((item, idx) => {
                return (
                  <li
                    className="font-clash text-[18px] font-normal leading-7 text-gray-400"
                    key={idx}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className="font-clash text-[18px] font-normal leading-7 text-gray-400">
              {service.content}
            </p>
          </div>
        </div>
      </figure>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          pauseOnHover: false,
        },
      },
    ],
  };

  return (
    <div>
      <main id="services" className="bg-black px-4 py-1">
        <h1
          data-aos="fade-up"
          className="bb py-8 text-center font-clash text-[45px] font-bold text-[#FD1014]"
        >
          Our Services
        </h1>
        <Slider {...settings}>{renderServices()}</Slider>
      </main>
    </div>
  );
}

export default Services;
