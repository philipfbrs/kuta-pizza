import React from "react";
import { ServiceItems } from "../Cards/ServiceItems";
import { MdPhoneInTalk } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa";
import {IoMdPizza} from "react-icons/io";
export const Service = () => {
  return (
    <div name="service">
    <h1 className="flex text-center  justify-center w-screen bg-slate-200 py-10 text-4xl font-light">Want to eat pizza?</h1>
    <div className="flex flex-col md:flex-row items-center justify-center w-screen h-fit bg-slate-200 text-[#91461d] p-8 gap-4">
      <ServiceItems Item = {MdPhoneInTalk} title="Call" desc = "Call our hotline: 7911-22-33"/>
      <ServiceItems Item = {FaMotorcycle} title="Deliver" desc="Delivery fast"/>
      <ServiceItems Item = {IoMdPizza} title="Eat" desc="fill your tummy with this delicious pizza"/>
    </div>
    </div>
  );
};
