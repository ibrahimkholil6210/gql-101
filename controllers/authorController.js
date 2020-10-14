const Author = require("../models/Author");

exports.addAuthor = async ({ name, age }) => {
  const addAuthor = await Author.create({
    name,
    age,
  });
  return addAuthor;
};
