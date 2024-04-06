import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
  const reviews = [
    {
      name: "John Doe",
      location: "Ibadan, Nigeria",
      text: "Great product, highly recommended!",
      rating: 5,
      profilePic:
        "https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg",
    },
    {
      name: "Ayomide Ayodele",
      location: "Ibadan, Nigeria",
      text: "Not only did Joombow Car Care exceed my expectations in terms of the quality of work, but their customer service was also exceptional.",
      rating: 4,
      profilePic:
        "https://i.pinimg.com/236x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg",
    },
    {
      name: "Deborah Adebanjo",
      location: "Ibadan, Nigeria",
      text: "Outstanding service! I brought my car to Joombow Car Care for detailing and maintenance, and I couldn't be happier with the results.",
      rating: 4,
      profilePic:
        "https://res.cloudinary.com/dnldaz7oh/image/upload/v1712238902/medium-shot-black-woman-portrait_2_mziym2.jpg",
    },
    {
      name: "Alex Johnson",
      location: "Ibadan, Nigeria",
      text: "Average product, could be better.",
      rating: 3,
      profilePic:
        "https://i.pinimg.com/236x/a2/3c/24/a23c2402885d815dfc6a588c6bef488e.jpg",
    },
    {
      name: "Evelyn Christopher",
      location: "Ibadan, Nigeria",
      text: "Average product, could be better.",
      rating: 3,
      profilePic:
        "https://res.cloudinary.com/dnldaz7oh/image/upload/v1712238443/side-view-smiley-woman_1_jgj8yl.jpg",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
        },
      },
    ],
  };

  return (
    <div className="relative mb-10 px-4">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review-item flex flex-col items-center justify-center text-center border p-8 rounded-lg shadow-lg"
            style={{ height: "auto" }}>
            <div className="profile-info">
              <figure className="slider-img flex justify-center mb-4">
                <img
                  src={review.profilePic}
                  alt={review.name}
                  className="profile-pic rounded-full w-20 h-20 mb-2 object-cover obnter"
                />
              </figure>
              <p className="rating flex space-x-3 justify-center">
                {renderStars(review.rating)}
              </p>
              <div className="name-location">
                <p className="name text-lg font-semibold">{review.name}</p>
                <p className="location text-sm text-gray-600">
                  {review.location}
                </p>
              </div>
            </div>
            <div className="review-text mt-4">
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
