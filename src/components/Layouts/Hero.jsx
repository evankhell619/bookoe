import React from "react";
import RatingInput from "../Elements/RatingInput";
import Button from "../elements/Button";
import { useState, useEffect } from "react";
import TextTruncate from "react-text-truncate";

const path = "https://bookapi.cm.hmw.lol/api/books/";

const Hero = () => {
  const [bookList, setBookList] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await fetch(path);
      const responseJson = await response.json();
      const databookList = responseJson.data;
      setBookList(databookList);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const heroIndex1 = randomIndex(0, bookList.length - 1);
  const heroIndex2 = randomIndex(0, bookList.length - 1);
  const heroIndex3 = randomIndex(0, bookList.length - 1);

  // console.log(heroIndex3);
  // console.log(bookList);

  return (
    <>
      {bookList.length > 0 ? (
        <div className="px-28 mt-[20px] w-[1141px] h-[422px] mx-auto relative ">
          <div className="w-[1141px] h-[522px] left-0 top-0 mb-10 absolute bg-bgHero rounded-[15px]">
            <div className="w-[408px] h-[390px] left-[660px] top-[66px]  absolute">
              <img
                className="w-[196px] h-[272px] left-[212px] top-[58px] absolute rounded-[10px]"
                src={bookList.length > 0 ? bookList[heroIndex1]?.image_url : ""}
              />
              <img
                className="w-[236px] h-[327px] left-[124px] top-[31px] absolute rounded-[10px]"
                src={bookList.length > 0 ? bookList[heroIndex2]?.image_url : ""}
              />
              <img
                className="w-[280px] h-[390px] left-0 top-0 absolute rounded-[10px]"
                src={bookList.length > 0 ? bookList[heroIndex3]?.image_url : ""}
              />
            </div>
            {/* End Book */}
            <div className="max-w-[525px] max-h-[390px] left-[71px] top-[66px] absolute">
              <p className="left-[3px] top-0 text-purp font-semibold font-cus[Poppins] text-[20px]">
                MUST READ
              </p>
              <p className="left-0 top-[38px]  text-primary text-[62px] font-semibold font-cus['Poppins'] leading-[72px] ">
                <TextTruncate
                  line={2}
                  element="span"
                  truncateText="…"
                  text={bookList[heroIndex3]["title"]}
                />
              </p>
              <article className="left-[3px] mt-[20px] flex text-black text-base font-medium font-cus['Poppins']">
                {bookList[heroIndex3]["author"]["name"]}
                <span className=" left-[15px] ">
                  <RatingInput checked={bookList[heroIndex3]["rating"]} />
                </span>
              </article>
              <div className=" max-w-[446px] max-h-[72px] relative">
                <article className=" font-normal  left-[3px] mt-[30px] absolute text-black text-base font-cus['Poppins'] ">
                  <TextTruncate
                    line={4}
                    element="span"
                    truncateText="…"
                    text={bookList[heroIndex3]["synopsis"]}
                  />
                </article>
              </div>
              <div className="mt-[140px]">
                <Button color="bg-purp text-white px-6 w-[193px]">
                  Read Book &rarr;
                </Button>
                <Button color="text-purp px-7 ml-[10px] w-[315px] ">
                  See All Recomendations
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen flex justify-center items-center">
          <div className="text-3xl font-semibold">Loading...</div>
        </div>
      )}
    </>
  );
};

export default Hero;
