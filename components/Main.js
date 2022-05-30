import React from "react";
import { Link } from "react-scroll/modules";
import {HiArrowNarrowRight} from "react-icons/hi"
export const Main = () => {
  return (
    <div name="home" className=" flex h-screen w-screen bg-cover  md:bg-[position:50%]"  style={{ backgroundImage: `url("bg_main.jpg")` }}>
        <div className="flex flex-col items-center md:items-start md:text-left justify-center text-center h-full w-full p-20 py-36 md:pb-64 ">
          <h1 className="text-2xl md:text-3xl ">Welcome to </h1>
          <h1 className="text-6xl md:text-7xl  font-normal">Kuta's Pizza Shop</h1>
          <div className="py-2">
          <Link  to="product" smooth={true} duration={500}>
            <button className="text-base md:text-lg text-[#91461d] group border-2 border-[#91461d] px-6 py-3 my-2 flex items-center hover:bg-[#91461d] hover:border-white hover:text-white">
              {" "}
              See our products
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 "></HiArrowNarrowRight>
              </span>
            </button>
          </Link>
        </div>
        </div>

       
    </div>
  );
};
