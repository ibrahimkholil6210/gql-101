const Book = require("../models/Book");

exports.addBook = async ({ name, genre, authorId }) => {
  const addBook = await Book.create({
    name,
    genre,
    authorId,
  });
  return addBook;
};
