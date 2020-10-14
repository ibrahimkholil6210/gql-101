const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: Number,
});

module.exports = mongoose.model("Book", bookSchema);
