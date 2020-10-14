const Book = require("../models/Book");

exports.addBook = async ({ name, genre, authorId }) => {
  const addBook = await Book.create({
    name,
    genre,
    authorId,
  });
  return addBook;
};

exports.findBookById = async ({ id }) => {
  const findBook = await Book.findById(id);
  return findBook;
};

exports.findBookByAuthor = async ({ authorId }) => {
  const findBooks = await Book.find({ authorId });
  return findBooks;
};
