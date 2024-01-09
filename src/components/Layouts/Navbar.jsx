import React from "react";
import { Link } from "react-router-dom";
import Latest from "../../pages/LatestPage";

const Navbar = () => {
  return (
    <div className="px-28 navbar bg-base-100">
      <div className="navbar-start">
        <a className=" text-xl">
          <img
            src="/src/assets/nav.png"
            width="225px"
            height="71px"
            alt="bookoe"
            className="cursor-pointer transition-transform transform-gpu hover:scale-150 duration-300 ease-in-out mt-8"
          />
        </a>
      </div>
      <div className="navbar-center mt-[54px] mb-[14px]">
        <ul className="menu menu-horizontal px-1 ">
          <li className="font-cus[Poppins] text-[20px] text-navCol ">
            <a>All</a>
          </li>
          <li className="font-cus[Poppins] text-[20px] text-navCol">
            <a>Latest</a>
          </li>
          <li className="font-cus[Poppins] text-[20px] text-navCol">
            <a>Top Pick</a>
          </li>
        </ul>
        <div className="form-control w-[402px] h-[50px] mx-[16px] my[10px] font-cus[Poppins] text-[20px] font-light">
          <input
            type="text"
            placeholder="Search by title and author..."
            className="input input-bordered w-auto font-cus[Poppins] text-[20px] font-light outline-none "
          />
        </div>
        <div className=" w-[135px] h-[50px] font-cus[Poppins] text-[20px]  border border-purp rounded-md bg-white text-purp font-semibold text-center hover:bg-purp hover:text-white ">
          <button className="p-2 text-center  ">Edit List</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
