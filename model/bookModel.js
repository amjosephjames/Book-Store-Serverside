const mongoose = require("mongoose");

const bookModel = new mongoose.Schema(
  {
    author: {
      type: String,
    },
    title: {
      type: String,
    },
    pdfUrl: {
      type: String,
    },
    category: {
      type: String,
    },
    summary: {
      type: String,
    },

    coverImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("books", bookModel);
