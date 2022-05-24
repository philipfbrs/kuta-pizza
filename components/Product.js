import React from "react";

export const Product = () => {
  return (
    <div className="flex w-screen h-full bg-white">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl p-4">Pizza for fun!</h1>
        <p className="px-20 p-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="grid grid-cols-2 md:flex md:flex-row p-8 gap-2 ">
          <div className="flex flex-col rounded-lg max-w-full p-4 border-2 items-center">
            <img src="./pizza-main.jpeg"></img>
            <h1 className="p-4 text-orange-800">Peperoni</h1>
            <p>P500</p>
          </div>
          <div className="flex flex-col rounded-lg max-w-full p-4 border-2 items-center">
            <img src="./pizza-main.jpeg"></img>
            <h1 className="p-4 text-orange-800">Peperoni</h1>
            <p>P500</p>
          </div>
          <div className="flex flex-col rounded-lg max-w-full p-4 border-2 items-center">
            <img src="./pizza-main.jpeg"></img>
            <h1 className="p-4 text-orange-800">Peperoni</h1>
            <p>P500</p>
          </div>
          <div className="flex flex-col rounded-lg max-w-full p-4 border-2 items-center">
            <img src="./pizza-main.jpeg"></img>
            <h1 className="p-4 text-orange-800">Peperoni</h1>
            <p>P500</p>
          </div>
        </div>
      </div>
    </div>
  );
};
