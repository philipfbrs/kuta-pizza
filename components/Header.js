import React from "react";
import { Link } from "react-scroll/modules";
import { GiFullPizza } from "react-icons/gi";
const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#91461d] transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-[#91461d] h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-bold text-white" href="/">
          KPS
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4 cursor-pointer"
          to="home"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </Link>
        <Link
          className="text-xl font-normal my-4 cursor-pointer"
          to="product"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Product
        </Link>
        <Link
          className="text-xl font-normal my-4 cursor-pointer"
          to="contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};
export const Header = ({ open, setOpen }) => {
  return (
    <div className="fixed w-screen bg-[rgba(0,0,0,0.25)]">
      <nav className="flex filter drop-shadow-md px-4 py-4 h-20 items-center">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-3/12 flex items-center">
          <a className="text-lg ml-5 font-bold" href="/">
            KPS
          </a>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div
            className="-z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:block ">
            <div className="flex gap-8 mr-4 opacity-100">  
            <Link to="home" className="cursor-pointer text-white text-lg">Home</Link>
            <Link to="product" className="cursor-pointer text-white text-lg">Product</Link>
            <Link to="contact" className="cursor-pointer text-white text-lg">Contact</Link>
            <GiFullPizza className="cursor-pointer text-white" size={30}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
