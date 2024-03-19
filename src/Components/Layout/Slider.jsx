// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function main() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%] bg-neutral-800 cursor-e-resize">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-1 p-[10px]">
              <div className=" h-[500px] w-full flex  text-white">
                <div className=" h-[500px] w-[50%]">
                  <div className=" h-[250px] w-full flex items-center justify-center">
                    <ul>
                      <li className="text-[20px] font-bold text-orange-600 sm:text-[30px] lg:text-[30px]">
                        2020
                      </li>
                      <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                        New technology innvovation
                      </li>
                      <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                        Honarable mention
                      </li>
                      <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                        Desktop exelence
                      </li>
                    </ul>
                  </div>
                  <div className=" h-[250px] w-full flex items-center justify-center">
                    <ul>
                      <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                        2022
                      </li>
                      <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                        UI/UX design of the month
                      </li>
                      <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                        Website of the day
                      </li>
                      <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                        Mobile exelence
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" h-[500px] w-[50%]">
                  <div className=" h-[250px] w-full flex items-center justify-center">
                    <ul>
                      <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                        2019
                      </li>
                      <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                        Google awards
                      </li>
                      <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                        Website of the day
                      </li>
                      <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                        Mobile exelence
                      </li>
                    </ul>
                  </div>
                  <div className=" h-[250px] w-full flex items-center  justify-center">
                    <ul>
                      <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                        2021
                      </li>
                      <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                        CSS awards design
                      </li>
                      <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                        Honarable mention
                      </li>
                      <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                        Desktop exelence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[500px] w-full flex  text-white">
              <div className=" h-[500px] w-[50%]">
                <div className=" h-[250px] w-full flex items-center justify-center">
                  <ul>
                    <li className="text-[20px] font-bold text-orange-600 sm:text-[30px] lg:text-[30px]">
                      2020
                    </li>
                    <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                      New technology innvovation
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Honarable mention
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Desktop exelence
                    </li>
                  </ul>
                </div>
                <div className=" h-[250px] w-full flex items-center justify-center">
                  <ul>
                    <li className="text-[20px] font-bold text-orange-600 sm:text-[30px] lg:text-[30px]">
                      2020
                    </li>
                    <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                      New technology innvovation
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Honarable mention
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Desktop exelence
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" h-[500px] w-[50%]">
                <div className=" h-[250px] w-full flex items-center justify-center">
                  <ul>
                    <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                      2019
                    </li>
                    <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                      Google awards
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Website of the day
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Mobile exelence
                    </li>
                  </ul>
                </div>
                <div className=" h-[250px] w-full flex items-center  justify-center">
                  <ul>
                    <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                      2019
                    </li>
                    <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                      Google awards
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Website of the day
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Mobile exelence
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[500px] w-full flex  text-white">
              <div className=" h-[500px] w-[50%]">
                <div className=" h-[250px] w-full flex items-center justify-center">
                  <ul>
                    <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                      2019
                    </li>
                    <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                      Google awards
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Website of the day
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Mobile exelence
                    </li>
                  </ul>
                </div>
                <div className=" h-[250px] w-full flex items-center justify-center">
                  <ul>
                    <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                      2021
                    </li>
                    <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                      CSS awards design
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Honarable mention
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Desktop exelence
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" h-[500px] w-[50%]">
                <div className=" h-[250px] w-full flex items-center justify-center">
                  <ul>
                    <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                      2022
                    </li>
                    <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                      UI/UX design of the month
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Website of the day
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Mobile exelence
                    </li>
                  </ul>
                </div>
                <div className=" h-[250px] w-full flex items-center  justify-center">
                  <ul>
                    <li className="text-[20px] font-bold text-orange-600  sm:text-[30px] lg:text-[30px]">
                      2021
                    </li>
                    <li className="text-[13px] font-bold sm:text-[20px] lg:text-[20px]">
                      CSS awards design
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Honarable mention
                    </li>
                    <li className="text-slate-300 text-[15px]  sm:text-[18px] lg:text-[20px]">
                      Desktop exelence
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
}
