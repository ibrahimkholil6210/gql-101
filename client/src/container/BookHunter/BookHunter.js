import React, { useState } from "react";
import Books from "../../components/Books/Books";
import AddBook from "../../components/Books/AddBook/AddBook";
import BookDetails from "../../components/Books/BookDetails/BookDetails";

const BookHunter = () => {
  const [id, setId] = useState("");
  return (
    <div>
      <h1>Books Header</h1>
      <Books clickHandler={setId} />
      <BookDetails id={id} />
      <AddBook />
    </div>
  );
};

export default BookHunter;
