import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#985b00] flex h-full w-screen justify-evenly gap-0 md:gap-4 py-10">
      <div className="p-4 md:p-8 flex flex-col items-center gap-4">
        <h1 className="uppercase font-semibold text-white">Menu</h1>
        <h1>Home</h1>
        <a>Product</a>
        <a>Contact us</a>
      </div>
      <div className="p-4 md:p-8 flex flex-col items-center gap-4 md:gap-4">
        <h1 className="uppercase font-semibold text-white">Partner Stites</h1>
        <a>My Own Website</a>
        <a>Accounts Crud</a>
      </div>
      <div className="p-4 md:p-8 flex flex-col items-center gap-4">
        <h1 className="uppercase font-semibold text-white">Connect with us</h1>
        <a>Facebook</a>
        <a>Twitter</a>
        <a>Instagram</a>
      </div>
    </div>
  );
};
