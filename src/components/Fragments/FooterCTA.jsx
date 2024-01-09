import React from "react";
import Input from "../Elements/Input";
import Button from "../elements/Button";

const FooterCTA = () => {
  return (
    <div className="px-28 mt-[107px] w-[1141px] h-[303px] mx-auto relative ">
      <div className="w-[1141px] h-[303px] left-0 top-0 mb-10 absolute bg-purp rounded-[15px] ">
        <article className="max-w-[794px] text-center text-[42px] font-semibold font-cus['Poppins'] text-white mt-[44px] mx-[224px] ">
          Join our newsletter to get our latest recommendation!
        </article>
        <div className="flex content-center ml-[71px]">
          <Input />
          <Button color="text-[16px] w-[99px] ml-[8px] mt-[22px] bg-white border border-white  ">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
