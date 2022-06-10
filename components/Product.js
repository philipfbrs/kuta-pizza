import React from "react";
import { Link } from "react-scroll/modules";
export const Product = () => {
  return (
    <div name="product" className="flex w-screen h-full bg-white">
      <div className="flex flex-col items-center py-24">
        <h1 className="font-bold text-2xl p-4">Pizza for fun!</h1>
        <p className="px-20 p-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="grid grid-cols-1 md:flex md:flex-row p-8 gap-2 ">
          <div className="flex flex-col rounded-lg max-w-full p-4 border-2 items-center">
            <img src="https://ik.imagekit.io/rb3it67b9/pizza-main_oAc0RlPJw.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1653882760689" priority="true" ></img>
            <h1 className="p-4 text-orange-800">Peperoni</h1>
            <p>P500</p>
          </div>
          <div className="flex flex-col rounded-lg max-w-full p-4 border-2 items-center">
            <img src="https://ik.imagekit.io/rb3it67b9/pizza-main_oAc0RlPJw.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1653882760689" priority="true" ></img>
            <h1 className="p-4 text-orange-800">Peperoni</h1>
            <p>P500</p>
          </div>
          <div className="flex flex-col rounded-lg max-w-full p-4 border-2 items-center">
            <img src="https://ik.imagekit.io/rb3it67b9/pizza-main_oAc0RlPJw.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1653882760689"priority="true" ></img>
            <h1 className="p-4 text-orange-800">Peperoni</h1>
            <p>P500</p>
          </div>
          <div className="flex flex-col rounded-lg max-w-full p-4 border-2 items-center">
            <img src="https://ik.imagekit.io/rb3it67b9/pizza-main_oAc0RlPJw.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1653882760689" priority="true" ></img>
            <h1 className="p-4 text-orange-800">Peperoni</h1>
            <p>P500</p>
          </div>
        </div>
      </div>
    </div>
  );
};
