import React from "react";

export const ServiceItems = (props) => {
  const { Item, title, desc } = props;
  return (
    <div className="flex flex-col items-center text-center justify-center w-full h-full shadow-lg border-2 object-cover">
      <Item className="h-28 w-full "/>
      <div className="flex flex-col items-center py-8 gap-2">
      <h1 className=" text-2xl font-bold">{title}</h1>
      <p className="text-black">{desc}</p>
      </div>
    </div>
  );
};
