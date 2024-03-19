import React from "react";
import SwiperSlide from "./Components/Layout/Swiper";
import Slider from "./Components/Layout/Slider";
import Member from "./Components/Layout/Member";
import First from "./Components/Layout/First";
export default function Home() {
  return (
    <>
      <div className=" h-auto bg-[url('public/hero_bg.jpeg')] bg-cover bg-fixed	 bg-[50%]">
        <div className=" w-full h-auto bg-fixed">
          <div className="grid h-auto items-center text-white w-full p-[10%] ">
            <p className=" text-4xl w-[65%] font-bold lg:text-8xl md:text-7xl sm:text-5xl">
              Creativity In <br /> Our Blood Line
            </p>
            <div className="h-[200px] w-full  flex">
              <p className="h-[200px] w-[45%] flex items-center text-[17px] font-serif sm:text-[20px] md:text-[20px] lg:text-[23px] ">
                Get a Quote
                <i className="bi bi-arrow-right pt-[5px] text-2xl"></i>
              </p>
              <p className="h-[200px] w-[55%] flex items-center text-[14px] font-serif  lg:text-2xl md:text-1xl sm:text-[20px]">
                We deliver best problem solving solution for our client and
                provide finest finishing product in present and upcoming future.
              </p>
            </div>
          </div>
          <div className=" bg-neutral-800 h-auto w-full flex items-center justify-center">
            <div className="bg-neutral-900 h-auto w-[80%] mt-[-50px] sm:mt-[-80px] rounded-xl grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-[10px] items-center justify-around">
              <div className="h-[250px] w-[100%] rounded-xl p-[15px] overflow-scroll sm:overflow-hidden lg:overflow-hidden border-2 border-solid border-black">
                <h1 className="text-[40px] font-bold text-white">
                  Our fun fact
                </h1>
                <p className="text-[18px] text-left text-slate-300 font-normal	 lg:text-[17px] md:text-[18px] sm:text-[20px]">
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis.
                </p>
              </div>
              <div className="bg-neutral-900 h-[250px] w-[100%] rounded-xl p-[25px]  border-2 border-solid border-black sm:overflow-hidden lg:overflow-hidden overflow-scroll">
                <h1 className="text-[40px] font-bold text-orange-600 lg:text-[40px] md:text-[30px]">
                  40K+
                  <span className="text-[20px]  text-slate-300 sm:text-[20px]  font-normal md:text-[15px] lg:text-[17px]">
                    Global Happy Clients
                  </span>
                </h1>
                <h2 className="text-[40px] font-bold pt-[25px] text-orange-600 lg:text-[40px] md:text-[30px]">
                  245+
                  <span className="text-[20px]  text-slate-300  font-normal sm:text-[20px] md:text-[15px] lg:text-[17px]">
                    Team Members
                  </span>
                </h2>
              </div>
              <div className="bg-neutral-900 h-[250px] w-[100%] rounded-xl p-[25px]  border-2 border-solid border-black overflow-scroll sm:overflow-hidden lg:overflow-hidden">
                <h1 className="text-[40px] font-bold text-orange-600 lg:text-[40px] md:text-[30px]">
                  50K+
                  <span className="text-[20px]  text-slate-300  font-normal md:text-[15px] sm:text-[20px] lg:text-[17px]">
                    Global Happy Clients
                  </span>
                </h1>
                <h2 className="text-[40px] font-bold pt-[25px] text-orange-600">
                  550+
                  <span className="text-[20px]  text-slate-300 sm:text-[20px] font-normal md:text-[15px] lg:text-[17px]">
                    Team Members
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 h-auto w-full pt-[20px] grid md:grid-cols-2 sm:grid-cols-1 ">
            <div className=" h-[400px] w-[100%]   items-center justify-center flex">
              <p className="pl-[20px] text-[30px] font-bold  text-white w-[60%]">
                <span className="text-[20px] text-gray-400 sm:text-[20px] md:text-[20px] ">
                  What Can We Do
                </span>{" "}
                <br /> Services we can help you with <br />
                <span className="text-[20px] text-gray-400">
                  See All Services
                </span>{" "}
                <i className="bi bi-arrow-right pt-[5px] text-2xl"></i>
              </p>
            </div>
            <div className=" h-[500px] w-[100%]">
              <div className=" h-[500px] w-full flex justify-between text-white text-1xl text-center font-bold">
                <First />
              </div>
            </div>
          </div>
          <div className="bg-neutral-800  h-auto w-full text-white p-[30px] text-center">
            <span className="text-2xl font-bold text-gray-400">
              Latest Projects
            </span>
            <p className="text-4xl font-bold">Portfolio to explore</p>
          </div>
          <div className="flex items-center justify-center bg-neutral-800">
            <SwiperSlide />
          </div>
          <div className="bg-neutral-800 h-auto w-full  grid md:grid-cols-2 sm:grid-cols-1 ">
            <div className=" h-auto w-[100%]   items-center justify-center flex">
              <p className="pl-[20px] text-[35px] font-bold  text-white w-[60%]">
                <span className="text-[20px] text-gray-400 sm:text-[20px] md:text-[25px] ">
                  Our Awards
                </span>{" "}
                <br /> We get multiple <br /> awards
              </p>
            </div>
            <div className=" h-auto w-[100%] grid sm:grid-cols-1 grid-cols-1">
              <Slider />
            </div>
          </div>
          <div className="bg-neutral-800 h-auto flex items-center justify-center">
            <h1 className="text-[20px] p-[20px] text-center lg:text-[40px] sm:text-[30px] font-bold text-white w-[80%] ">
              Our agile process is ability to adapt and respond to change. Agile
              organizations view change as an opportunity, not a threat.
            </h1>
          </div>
          <div className="bg-neutral-800 h-auto w-full flex items-center justify-center p-[20px]">
            <div className="h-auto w-[70%]">
              <iframe
                className="rounded-2xl"
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/VcaAVWtP48A?si=fxl76Tkix2KgnV07"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              >
                <i className="bi bi-play-circle h-[500px] text-orange-600"></i>
              </iframe>
            </div>
          </div>
          <div className="bg-neutral-800 h-auto w-full p-[20px]">
            <div className="text-center ">
              {" "}
              <h1 className="text-[25px] lg:text-[30px] text-gray-400">
                our Team
              </h1>
              <h2 className="text-[20px] lg:text-[40px] sm:text-[30px] text-white font-bold">
                Awesome team members
              </h2>
            </div>
          </div>
          <div className="">
            <div className="bg-neutral-800 h-auto p-[120px] w-full items-center justify-center flex">
              <div className=" h-auto w-[100%]">
                <Member />
              </div>
            </div>
          </div>
          <div className="bg-red-500 h-[550px] w-full flex">
            <div className="bg-slate-400 h-[550px] w-[40%]"></div>
            <div className="bg-slate-800 h-[550px] w-[60%] flex items-center justify-center">
              <div className="">
                <h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--fa"
                    width="1.19em"
                    height="1em"
                    viewBox="0 0 1664 1408"
                  >
                    <path
                      fill="currentColor"
                      d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136m896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136"
                    ></path>
                  </svg>
                </h1>
                <p>
                  I wish I would have thought of it first. Creative agency is
                  the most tech valuable business resource we have ever
                  purchased. Dude your stuff is the bomb! eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt to the explicabo.
                </p>
                <span className="">
                  <svg
                    width="136"
                    height="25"
                    viewBox="0 0 136 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.928 4.09314L8.48684 9.04266L3.02517 9.83892C2.04573 9.98098 1.65321 11.1885 2.36349 11.88L6.31488 15.7305L5.38031 21.1697C5.21208 22.1529 6.24759 22.8894 7.11488 22.4296L12.0009 19.8613L16.8868 22.4296C17.7541 22.8856 18.7896 22.1529 18.6214 21.1697L17.6868 15.7305L21.6382 11.88C22.3485 11.1885 21.956 9.98098 20.9765 9.83892L15.5149 9.04266L13.0738 4.09314C12.6364 3.2109 11.3691 3.19968 10.928 4.09314Z"
                      fill="#FF4A17"
                    />
                    <path
                      d="M38.928 4.09314L36.4868 9.04266L31.0252 9.83892C30.0457 9.98098 29.6532 11.1885 30.3635 11.88L34.3149 15.7305L33.3803 21.1697C33.2121 22.1529 34.2476 22.8894 35.1149 22.4296L40.0009 19.8613L44.8868 22.4296C45.7541 22.8856 46.7896 22.1529 46.6214 21.1697L45.6868 15.7305L49.6382 11.88C50.3485 11.1885 49.956 9.98098 48.9765 9.83892L43.5149 9.04266L41.0738 4.09314C40.6364 3.2109 39.3691 3.19968 38.928 4.09314Z"
                      fill="#FF4A17"
                    />
                    <path
                      d="M66.928 4.09314L64.4868 9.04266L59.0252 9.83892C58.0457 9.98098 57.6532 11.1885 58.3635 11.88L62.3149 15.7305L61.3803 21.1697C61.2121 22.1529 62.2476 22.8894 63.1149 22.4296L68.0009 19.8613L72.8868 22.4296C73.7541 22.8856 74.7896 22.1529 74.6214 21.1697L73.6868 15.7305L77.6382 11.88C78.3485 11.1885 77.956 9.98098 76.9765 9.83892L71.5149 9.04266L69.0738 4.09314C68.6364 3.2109 67.3691 3.19968 66.928 4.09314Z"
                      fill="#FF4A17"
                    />
                    <path
                      d="M94.928 4.09314L92.4868 9.04266L87.0252 9.83892C86.0457 9.98098 85.6532 11.1885 86.3635 11.88L90.3149 15.7305L89.3803 21.1697C89.2121 22.1529 90.2476 22.8894 91.1149 22.4296L96.0009 19.8613L100.887 22.4296C101.754 22.8856 102.79 22.1529 102.621 21.1697L101.687 15.7305L105.638 11.88C106.349 11.1885 105.956 9.98098 104.977 9.83892L99.5149 9.04266L97.0738 4.09314C96.6364 3.2109 95.3691 3.19968 94.928 4.09314Z"
                      fill="#FF4A17"
                    />
                    <path
                      d="M122.928 4.09314L120.487 9.04266L115.025 9.83892C114.046 9.98098 113.653 11.1885 114.363 11.88L118.315 15.7305L117.38 21.1697C117.212 22.1529 118.248 22.8894 119.115 22.4296L124.001 19.8613L128.887 22.4296C129.754 22.8856 130.79 22.1529 130.621 21.1697L129.687 15.7305L133.638 11.88C134.349 11.1885 133.956 9.98098 132.977 9.83892L127.515 9.04266L125.074 4.09314C124.636 3.2109 123.369 3.19968 122.928 4.09314Z"
                      fill="#FF4A17"
                    />
                  </svg>
                </span>
                <h1 className="bg-slate-200 h-[200px]">
                  <p>Ahon Monsery</p>
                  <p></p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
