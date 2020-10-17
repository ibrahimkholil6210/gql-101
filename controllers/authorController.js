const Author = require("../models/Author");

exports.authors = async () => {
  const authors = await Author.find();
  return authors;
};

exports.addAuthor = async ({ name, age }) => {
  const addAuthor = await Author.create({
    name,
    age,
  });
  return addAuthor;
};

exports.findAuthorById = async ({ authorId }) => {
  const findOne = await Author.findById(authorId);
  return findOne;
};
