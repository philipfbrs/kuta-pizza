import React from "react";

export const Items = (props) => {
    const {src,title,cost} = props;
  return (
    <div className="flex flex-col rounded-lg max-w-full object-cover p-4 border-2 items-center">
      <img
        src={src}
        className="md:w-full md:h-60 w-screen h-full"
      ></img>
      <h1 className="p-4 text-orange-800">{title}</h1>
      <p>{cost}</p>
    </div>
  );
};
