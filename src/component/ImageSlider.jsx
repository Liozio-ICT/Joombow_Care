import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewSlider = () => {

  const reviews = [
    { name: "John Doe", location: "California, USA", text: "Great product, highly recommended!", rating: 5, profilePic: "https://i.pinimg.com/236x/8b/15/7b/8b157b1d7d2392163058e0829ca028f5.jpg" },
    { name: "Jane Smith", location: "New York, USA", text: "Good quality, fast shipping.", rating: 4, profilePic: "https://i.pinimg.com/236x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg" },
    { name: "Alex Johnson", location: "Texas, USA", text: "Average product, could be better.", rating: 3, profilePic: "https://i.pinimg.com/236x/a2/3c/24/a23c2402885d815dfc6a588c6bef488e.jpg" }
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
      }
    ]
  };

  return (
    <div className="relative mb-10 px-4 ">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-item flex flex-col  items-center justify-center text-center border p-8  rounded-lg shadow-lg">
            <div className="profile-info">
              <figure className="slider-img flex justify-center mb-4">
                <img src={review.profilePic} alt={review.name} className="profile-pic rounded-full w-20 h-20 mb-2" />
              </figure>
              <p className="rating flex space-x-3 justify-center">
                 {renderStars(review.rating)}
              </p>
              <div className="name-location">
                <p className="name text-lg font-semibold">{review.name}</p>
                <p className="location text-sm text-gray-600">{review.location}</p>
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
