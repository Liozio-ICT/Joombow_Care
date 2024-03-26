import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1711459461/5c466b9cdd_bj7b9l.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
