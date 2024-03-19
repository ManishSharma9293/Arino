// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function First() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%] h-full cursor-e-resize">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className="w-[90%] h-[200px] rounded-xl hover: shadow-2xl duration-300 hover:shadow-red-600/100"
              src="public/service_1.jpeg"
              alt=""
            />
            UI/UX design
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[90%] h-[200px] rounded-xl hover: shadow-2xl duration-300 hover:shadow-red-600/100"
              src="public/service_2.jpeg"
              alt=""
            />{" "}
            Reactjs Development
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[90%] h-[200px] rounded-xl hover: shadow-2xl duration-300 hover:shadow-red-600/100"
              src="public/service_3.jpeg"
              alt=""
            />
            Digital Marketing
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[90%] h-[200px] rounded-xl hover: shadow-2xl duration-300 hover:shadow-red-600/100"
              src="public/service_4.jpeg"
              alt=""
            />
            Technology
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
