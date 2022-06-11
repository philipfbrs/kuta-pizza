import React from "react";

export const Footer = () => {
  return (
    <div name="contact" className="bg-[#91461d] flex flex-col md:flex-row h-full w-screen justify-start md:justify-evenly gap-0 md:gap-4 py-10">
      <div className="p-4 md:p-8 flex flex-col items-center gap-4">
        <h1 className="uppercase font-semibold text-white">Menu</h1>
        <a className="cursor-pointer">Home</a>
        <a className="cursor-pointer">Product</a>
        <a className="cursor-pointer">Contact us</a>
      </div>
      <div className="p-4 md:p-8 flex flex-col items-center gap-4">
        <h1 className="uppercase font-semibold text-white">Partner Stites</h1>
        <a className="cursor-pointer">My Own Website</a>
        <a className="cursor-pointer">Accounts Crud</a>
      </div>
      <div className="p-4 md:p-8 flex flex-col items-center gap-4">
        <h1 className="uppercase font-semibold text-white">Connect with us</h1>
        <a className="cursor-pointer">Facebook</a>
        <a className="cursor-pointer">Twitter</a>
        <a className="cursor-pointer">Instagram</a>
      </div>
    </div>
  );
};
