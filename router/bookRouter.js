const express = require("express");
const router = express.Router();

const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  searchBook,
} = require("../controller/bookController");
const { upload } = require("../utils/multer");
router.route("/create").post(upload, createBook);
router.post;
router.route("/").get(getBooks);
router.route("/:id").get(getBook);
router.route("/search").get(searchBook);
router.route("/:id/update").patch(updateBook);
router.route("/:id/delete").delete(deleteBook);

module.exports = router;
