import React from "react";
import { useState, useEffect } from "react";
import CardBook from "../Fragments/CardBook";
import CardBookVertical from "../Fragments/CardBookVertical";

const path = "https://bookapi.cm.hmw.lol/api/books/";

const ListBooks = () => {
  const [cardList, setCardList] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(path);
      const responseJson = await response.json();
      const dataCardList = responseJson.data;
      setCardList(dataCardList);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const horiSection = cardList.slice(11, 15);
  const verticalSection = cardList.slice(5, 9);
  return (
    <div>
      <div className="w-full grid grid-cols-2 gap-8 px-16">
        {horiSection.map((book) => (
          <CardBook key={book.id} {...book} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center px-2 relative   ">
        {verticalSection.map((book) => (
          <CardBookVertical key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default ListBooks;
