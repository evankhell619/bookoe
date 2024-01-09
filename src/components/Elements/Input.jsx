import React from "react";

const Input = () => {
  return (
    <div className="w-[345px] h-[50px] border rounded-lg bg-white ml-[259px] mt-[22px] mb-[61px]">
      <svg
        className="ml-[19px] my-4 absolute "
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="21"
        viewBox="0 0 28 21"
        fill="none"
      >
        <path
          d="M26 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18.2C0 18.7304 0.210714 19.2391 0.585786 19.6142C0.960859 19.9893 1.46957 20.2 2 20.2H26C26.5304 20.2 27.0391 19.9893 27.4142 19.6142C27.7893 19.2391 28 18.7304 28 18.2V2C28 1.46957 27.7893 0.960859 27.4142 0.585786C27.0391 0.210714 26.5304 0 26 0ZM26 2V3.4L14.63 8.7C14.4333 8.79409 14.218 8.84292 14 8.84292C13.782 8.84292 13.5667 8.79409 13.37 8.7L2 3.4V2H26ZM2 18.2V5.6L12.53 10.52C12.9914 10.7306 13.4928 10.8396 14 10.8396C14.5072 10.8396 15.0086 10.7306 15.47 10.52L26 5.6V18.2H2Z"
          fill="#8170F2"
        />
      </svg>
      <input
        type="text"
        className=" w-full h-full border rounded-lg bg-white text-center text-[16px] text-slate-600 font-light font-cus['Poppins']"
        placeholder="Enter your email"
      />
    </div>
  );
};

export default Input;
