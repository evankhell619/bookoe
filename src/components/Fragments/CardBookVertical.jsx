import React from "react";
import RatingCircle from "../Elements/RatingCircle";
import RatingInput from "../Elements/RatingInput";
import Button from "../elements/Button";
import TextTruncate from "react-text-truncate";

const CardBookVertical = (props) => {
  const { title, author, synopsis, image_url, id } = props;
  return (
    <div className="flex px-5 relative mt-[288px] ">
      {/* <div className="w-[1241px] h-auto  "> */}
      <div className="w-[263px] h-[551px]  ">
        <img
          className="w-[260px] h-[340px] border rounded-lg"
          src={image_url}
        />
        <div className="mt-[10px]">
          <p className="text-[24px] py-[0px] text-black font-semibold leading-8 font-cus[Poppins]">
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={title}
            />
          </p>
          <p className=" text-[20px] py-[0px] text-black  font-normal font-cus['Poppins']">
            by {author.name}
          </p>
          <div className="mt-[15px] mb-[27px] ">
            <RatingInput className="flex w-[25px] gap-0"></RatingInput>
          </div>
          <Button color="text-violet-500 px-7  mt-[29px] w-full">
            Read Book
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CardBookVertical;
