import React from "react";
import Blob from "../assets/blobs/blob.svg";
import Blob1 from "../assets/blobs/blob2.svg";
export const Main = () => {
  return (
    <div className="mt-16 flex h-screen w-screen ">
      {" "}
      <div className="relative h-full w-full ">
        <div className="flex flex-col items-center md:items-start md:text-left justify-center text-center h-full w-full p-20 md:pb-64 ">
          <h1 className="text-xl md:text-2xl -z-40">Welcome to </h1>
          <h1 className="text-6xl md:text-7xl -z-40 font-normal">Kuta's Pizza Shop</h1>
        </div>

        <Blob className="absolute w-full -z-50 top-0 right-0 transform md:translate-x-1/4 md:-translate-y-[50%] translate-x-[30%] -translate-y-[30%] sm:translate-x-[25%] sm:-translate-y-[30%]" />
        <Blob1 className="absolute w-full rotate-45 -z-50 bottom-0 left-0 transform md:-translate-x-1/2 md:translate-y-1/2 -translate-x-[40%] translate-y-[40%]" />
      </div>
    </div>
  );
};
