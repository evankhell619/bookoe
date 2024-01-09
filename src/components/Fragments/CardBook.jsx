import React from "react";
import RatingCircle from "../Elements/RatingCircle";
import RatingInput from "../Elements/RatingInput";
import Button from "../elements/Button";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

const CardBook = (props) => {
  const { title, author, synopsis, image_url, id } = props;

  return (
    <div className="flex px-9 relative mt-[180px]   ">
      {/* <div className="w-[1241px] h-auto  "> */}
      <div className="w-[564px] h-[346px] grid grid-cols-2 ">
        <img
          className="w-[277px] h-[346px] border rounded-lg"
          src={image_url}
        />
        <div className="ml-[16px]">
          <p className="text-[24px] py-[5px] text-black font-semibold font-cus[Poppins]">
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={title}
            />
          </p>
          <p className=" text-[20px] py-[5px] text-black  font-normal font-cus['Poppins']">
            by {author.name}
          </p>
          <article className="mt-[15px] mb-[27px] ">
            <RatingCircle>
              <span className="inline align-baseline font-normal">
                <RatingInput checked={true} readOnly />
              </span>
            </RatingCircle>
          </article>
          <p>
            <TextTruncate
              line={3}
              element="span"
              truncateText="…"
              text={synopsis}
            />
          </p>
          {/* <Link to={`/books/${id}`}> */}
          <Button color="text-purp px-7  mt-[20px] w-full">Read Book</Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CardBook;
