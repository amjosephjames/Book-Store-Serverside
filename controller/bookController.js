const express = require("express");
const bookModel = require("../model/bookModel");
const cloudinary = require("cloudinary");

const createBook = async (req, res) => {
  try {
    const cloudImg = await cloudinary.uploader.upload(req.file.path);
    const { author, title, pdfUrl, category, summary } = req.body;

    const book = await bookModel.create({
      author,
      title,
      pdfUrl,
      category,
      summary,

      coverImage: cloudImg.secure_url,
      // authorImage: author.charAt(0).toUpperCase(),
    });

    return res.status(201).json({
      message: "created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occoured",
      data: error,
    });
  }
  console.log(error);
};

const getBooks = async (req, res) => {
  try {
    const book = await bookModel.find();
    return res.status(200).json({
      message: "all books found",
      data: book,
    });
  } catch (error) {
    return res.status(400).json({
      message: "books not found",
    });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);

    return res.status(200).json({
      message: "book singly found",
    });
  } catch (error) {
    return res.status(400).json({
      message: "book not found",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title } = req.body;
    const book = await bookModel.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true }
    );
    return res.status(200).json({ message: "updated", data: book });
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const book = await bookModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};

const searchBook = async (req, res) => {
  try {
    const queryData = req.query;
    const makeSearch = await bookModel.find(queryData);
    return res.status(200).json("data found");
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};
module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  searchBook,
};
