import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://bookapi.cm.hmw.lol/api/books/${bookId}`
        );
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{bookDetails.title}</h2>
      <p>Author: {bookDetails.author.name}</p>
      <p>Synopsis: {bookDetails.synopsis}</p>
    </div>
  );
};

export default BookDetails;
