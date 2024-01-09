import React from "react";
import { ReactSVG } from "react-svg";
import fb from "../../assets/icon/fb.svg";
import ig from "../../assets/icon/ig.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import tweet from "../../assets/icon/tweet.svg";
import yt from "../../assets/icon/yt.svg";

const Footer = () => {
  return (
    <div className="px-28  w-[1141px] h-[303px] mx-auto relative ">
      <div className="w-[1141px] h-[303px] left-0 top-0 mb-10 absolute ">
        <div className="w-full grid grid-cols-2 grid-rows-2 my-[33px] py-[33px]">
          <div className="col-span-2 flex justify-between items-center">
            <img
              src="/src/assets/nav.png"
              width="225px"
              height="71px"
              alt="bookoe"
              className=""
            />
            <div className="w-[526px]">
              <p className="text-[18px] leading-[30px] font-[DM Sans] font-normal text-footCol font-variant-ligatures">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          {/* <div className="h-[91px]"> */}
          <div className="flex justify-start items-end text-[18px] leading-[30px] font-[DM Sans] font-normal text-footCol font-variant-ligatures">
            Copyright © 2023 Codemasters.id | All Rights Reserved
          </div>
          <div className="flex justify-center items-center gap-x-[22px] place-self-end">
            <ReactSVG
              src={fb}
              className="cursor-pointer transition-transform transform-gpu hover:scale-150 duration-300 ease-in-out"
            />
            <ReactSVG
              src={tweet}
              className="cursor-pointer transition-transform transform-gpu hover:scale-150 duration-300 ease-in-out"
            />
            <ReactSVG
              src={ig}
              className="cursor-pointer transition-transform transform-gpu hover:scale-150 duration-300 ease-in-out"
            />
            <ReactSVG
              src={linkedin}
              className="cursor-pointer transition-transform transform-gpu hover:scale-150 duration-300 ease-in-out"
            />
            <ReactSVG
              src={yt}
              className="cursor-pointer transition-transform transform-gpu hover:scale-150 duration-300 ease-in-out"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
