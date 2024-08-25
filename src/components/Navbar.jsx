import { useState } from "react";
import {menu,close} from "../assets";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
      <nav className="flex justify-between w-full">
        <div className="w-1/3">
          <img className=" rounded-full ml-[20px] w-[100px] h-[100px]" src=""></img>
        </div>
        <div className="flex justify-center items-center w-2/3">
          <ul className="list-none sm:flex hidden justify-evenly flex-1">
            <li className="mr-4 cursor-pointer text-white italic">Swiggy Corporate</li>
            <li className="mr-4 sm:flex hidden cursor-pointer text-white italic">Search</li>
            <li className="mr-4 md:flex hidden cursor-pointer text-white italic">Offers</li>
            <li className="mr-4 lg:flex hidden cursor-pointer text-white italic">Help</li>
            <li className="mr-4 xl:flex hidden cursor-pointer text-white italic">SignIn</li>
            <li className="mr-4 2xl:flex hidden cursor-pointer text-white italic">Cart</li>
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[32px] h-[32px] object-contain mr-4"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div className={`${toggle ? "flex" : "hidden"} rounded-xl absolute top-20 my-2`}>
              <ul className="list-none flex flex-col justify-end flex-1">
                <li className="mr-4 cursor-pointer text-white italic">Swiggy Corporate</li>
                <li className="mr-4 cursor-pointer text-white italic">Search</li>
                <li className="mr-4 cursor-pointer text-white italic">Offers</li>
                <li className="mr-4 cursor-pointer text-white italic">Help</li>
                <li className="mr-4 cursor-pointer text-white italic">SignIn</li>
                <li className="mr-4 cursor-pointer text-white italic">Cart</li>
              </ul>
             </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;