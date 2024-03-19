// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Member() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%] cursor-e-resize">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className="w-[100%] h-[280px] rounded-xl"
              src="public/member_1.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[280px] rounded-xl"
              src="public/member_2.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[280px] rounded-xl"
              src="public/member_3.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[280px] rounded-xl"
              src="public/member_4.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[280px] rounded-xl"
              src="public/member_2.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[280px] rounded-xl"
              src="public/member_3.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[280px] rounded-xl"
              src="public/member_4.jpeg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
