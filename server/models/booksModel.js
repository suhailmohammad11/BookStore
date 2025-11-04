const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 50,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;
