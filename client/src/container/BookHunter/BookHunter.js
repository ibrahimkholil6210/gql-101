import React from "react";
import Books from "../../components/Books/Books";
import AddBook from "../../components/Books/AddBook/AddBook";

export default function BookHunter() {
  return (
    <div>
      <h1>Books Header</h1>
      <Books />
      <AddBook />
    </div>
  );
}
