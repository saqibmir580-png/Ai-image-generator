import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div >
        <div className="flex items-center gap-2 sm:gap-3">
          <button  className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
            <img  className='w-5' src={assets.credit_star} alt="" />
            <p  className='text-xs sm:text-sm font-medium text-gray-600'>Credits left:5</p>
          </button>
          <p  className='text-gray-600 max-sm:hidden pl-4'>Hi,Saqib</p>
          <div className='relative group'>
            <img
              src={assets.profile_icon}
              className="w-10 drop-shadow"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
