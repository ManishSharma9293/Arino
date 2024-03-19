// import React from 'react'
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black dark:bg-gray-900 sticky top-0 z-[5]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-6xl text-white font-bold">
            <span className="text-orange-500">A</span>rino
          </h1>
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <i
              className={`bi md:hidden text-white text-[35px] bi-${
                open ? "x" : "list"
              }`}
            ></i>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
              <Link
                to={"/"}
                className={`block py-2 px-3 ${
                  location == "/" ? "text-orange-600" : "text-white"
                }`}
              >
                HOME
              </Link>
              <Link
                to={"/about"}
                className={`block py-2 px-3 ${
                  location == "/about" ? "text-orange-600" : "text-white"
                }`}
              >
                ABOUT
              </Link>
              <Link
                to={"/services"}
                className={`block py-2 px-3 ${
                  location == "/services" ? "text-orange-600" : "text-white"
                }`}
              >
                SERVICES
              </Link>
              <Link
                to={"/portfoliyo"}
                className={`block py-2 px-3 ${
                  location == "/portfoliyo" ? "text-orange-600" : "text-white"
                }`}
              >
                PORTFOLIYO
              </Link>
              <Link
                to={"/blog"}
                className={`block py-2 px-3 ${
                  location == "/blog" ? "text-orange-600" : "text-white"
                }`}
              >
                BLOG
              </Link>
              <Link
                to={"/page"}
                className={`block py-2 px-3 ${
                  location == "/page" ? "text-orange-600" : "text-white"
                }`}
              >
                PAGES
              </Link>
            </ul>
          </div>
          <div className={`w-full  ${open ? "block" : "hidden"}`}>
            <ul className="font-medium  p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse">
              <Link
                to={"/"}
                className={`block py-2 px-3 ${
                  location == "/" ? "text-orange-600" : "text-white"
                }`}
              >
                HOME
              </Link>
              <Link
                to={"/about"}
                className={`block py-2 px-3 ${
                  location == "/about" ? "text-orange-600" : "text-white"
                }`}
              >
                ABOUT
              </Link>
              <Link
                to={"/services"}
                className={`block py-2 px-3 ${
                  location == "/services" ? "text-orange-600" : "text-white"
                }`}
              >
                SERVICES
              </Link>
              <Link
                to={"/portfoliyo"}
                className={`block py-2 px-3 ${
                  location == "/portfoliyo" ? "text-orange-600" : "text-white"
                }`}
              >
                PORTFOLIYO
              </Link>
              <Link
                to={"/blog"}
                className={`block py-2 px-3 ${
                  location == "/blog" ? "text-orange-600" : "text-white"
                }`}
              >
                BLOG
              </Link>
              <Link
                to={"/page"}
                className={`block py-2 px-3 ${
                  location == "/page" ? "text-orange-600" : "text-white"
                }`}
              >
                PAGES
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
