import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Services() {

  const services = [
    { title: "Exterior and Interior Detailing", imageUrl: "https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.webp?b=1&s=170667a&w=0&k=20&c=oDNgnbBqr6dQ01ZwhbLF5NA3gJRS2ISvrcnKpCSFirs=" },
    { title: "Full Body Correction", imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwcmVwYWlyfGVufDB8fDB8fHww" },
    { title: "Auto Body Repairs", imageUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/pexels-khunkorn-laowisit-5233258_onjgmd.jpg" },
    { title: "Paint Protection", imageUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1711811511/Care_care/c7a5051da3038d83bb39bedbca8fa035_jtyj8f.jpg" },
    { title: "Accessories Installation", imageUrl: "https://media.istockphoto.com/id/1157179147/photo/checking-oil-in-car-engine.webp?b=1&s=170667a&w=0&k=20&c=zy6pdwK_hpfdedHHMwyAXjGZqKWYhM0by27d5Bf2JAA=" },
    { title: "Interior Coating", imageUrl: "https://media.istockphoto.com/id/1165311626/photo/mechanic-using-a-ratchet-wrench.webp?b=1&s=170667a&w=0&k=20&c=MUSHOeiWp3U06Jir7MJDtTRF5GpRSjPFzkgU8QNhp4w=" }
  ];

  const renderServices = () => {
    return services.map((service, index) => (
    

      <figure key={index} className="relative transition-all duration-300   transform hover:scale-105 object-contain">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-80 rounded-[5px]"></div>
  
  {/* Image */}
  <img src={service.imageUrl} alt={service.title} className="w-full h-[250px] object-cover rounded-[5px]" />
  
  {/* Text */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="border w-[450px] h-[250px] border-red-500 flex items-center justify-center shadow-lg">
      <h2 className="text-[35px] text-white font-clash font-bold text-center">{service.title}</h2>
    </div>
  </div>
</figure>

    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
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
          arrows:false,
          pauseOnHover: false
        }
      }
    ]
  };

  return (
    <div>
      <main id="services" className="bg-black px-4 py-14">
        <h1 className="font-bold bb font-clash text-[#FD1014] text-[45px] text-center py-8">Our Services</h1>
        <Slider {...settings}>
          {renderServices()}
        </Slider>
      </main>
    </div>
  );
}

export default Services;
