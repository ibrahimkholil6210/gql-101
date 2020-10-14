const Author = require("../models/Author");

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
