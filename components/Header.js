import React from "react";
import { Link } from "react-scroll/modules";
import { GiFullPizza } from "react-icons/gi";
const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className={`z-50 absolute top-0 left-0 h-screen w-screen bg-[#91461d] transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-[#91461d] h-20">
        {" "}
        {/*logo container*/}
        <a
          className=" text-4xl font-bold border-2 p-2 text-white  border-white shadow-md rounded-xl"
          href="/"
        >
          KPS
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4 text-white cursor-pointer"
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
          className="text-xl font-normal my-4 text-white cursor-pointer"
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
          className="text-xl font-normal text-white my-4 cursor-pointer"
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
      <div className="absolute ">
        <div className="flex w-screen h-20 justify-center items-center">
          <a
            className="z-50 text-4xl font-bold border-2 p-2 text-orange-700  border-orange-700 shadow-md rounded-xl cursor-pointer "
            href="/"
          >
            KPS
          </a>
        </div>
      </div>
      <nav className="flex filter drop-shadow-md h-20 items-center justify-between">
        <MobileNav open={open} setOpen={setOpen} />

        <div className=" ml-4 flex justify-between">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden cursor-pointer"
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
            <div className="flex m-4 gap-8 opacity-100 ">
              <Link to="home" className="cursor-pointer text-white text-xl">
                Home
              </Link>
              <Link to="product" className="cursor-pointer text-white text-xl">
                Product
              </Link>
              <Link to="contact" className="cursor-pointer text-white text-xl">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-cente mr-8">
          <div className="relative text-right cursor-pointer">
            <a className="absolute  bg-red-600 -top-2 -right-1 p-1 text-sm text-white">
              0
            </a>
            <GiFullPizza className="cursor-pointer text-white" size={40} />
          </div>
        </div>
      </nav>
    </div>
  );
};
