// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function main() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[70%]  bg-neutral-800 cursor-e-resize rounded-xl">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className="w-[100%] h-[400px] rounded-xl"
              src="public/slider.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[400px] rounded-xl"
              src="public/slider2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[400px] rounded-xl"
              src="public/slider3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[400px] rounded-xl"
              src="public/slider4.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
