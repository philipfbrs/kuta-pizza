import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#985b00] flex h-full w-screen justify-evenly gap-4 pb-48">
      <div className="p-8">
        <h1 className="uppercase font-semibold text-white">Menu</h1>
      </div>
      <div className="p-8">
        <h1 className="uppercase font-semibold text-white">Partner Stites</h1>
      
      </div>
      <div className="p-8 flex flex-col items-center gap-4">
        <h1 className="uppercase font-semibold text-white">Connect with us</h1>
        <h1>Facebook</h1>
        <h1>Twitter</h1>
        <h1>Instagram</h1>
      </div>
    </div>
  );
};
