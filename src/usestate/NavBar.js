import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div>
        <header className="flex justify-between bg-amber-600 text-white p-4">
          logo
          <ul className=" gap-7 hidden sm:flex">
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
            <li>Feature</li>
          </ul>
          <GiHamburgerMenu
            onClick={() => setOpen(!open)}
            className="text-2xl sm:hidden "
          />
        </header>

        <div
          className={`flex flex-col bg-black h-screen fixed inset-0 duration-300
         text-white items-center p-3 sm:translate-x-full ${
           open ? "translate-x-0" : "translate-x-full "
         } `}
        >
          <ul className="flex flex-col w-full">
            <div className="py-4">
              <BsFillArrowRightCircleFill
                onClick={() => setOpen(false)}
                className="text-white text-2xl scale-125"
              />
            </div>
            <li className="p-3 w-full hover:bg-purple-400 hover:border hover:border-white">
              Home
            </li>
            <li className="p-3 w-full hover:bg-purple-400 hover:border hover:border-white">
              About
            </li>
            <li className="p-3 w-full hover:bg-purple-400 hover:border hover:border-white">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
