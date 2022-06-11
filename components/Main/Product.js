import React from "react";
import { Items } from "../Cards/Items"
export const Product = (props) => {
  const { getPizzas } = props;
  return (
    <div name="product" className="flex w-screen h-full bg-white">
      <div className="flex flex-col items-center py-24">
        <h1 className="font-bold text-4xl p-4">Pizza for fun!</h1>
        <p className="px-20 p-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="grid grid-cols-1 md:flex md:flex-row p-8 md:gap-6  gap-8">
          {getPizzas.map((element,id) => {
            return(
            <Items key={id}
              src={element.linkImagen}
              title={element.nombre}
              cost={element.precio}
            />
          )
          })}
        </div>
      </div>
    </div>
  );
};
