import React from "react";
import { Home } from "./Main/Home";

import { Service } from "./Main/Service";
import { Product } from "./Main/Product";
export const Main = (props) => {
  const {getPizzas} = props;
  return (
    <>
    <Home/>
    <Service/>
    <Product getPizzas = {getPizzas}/>
    </>
  );
};
