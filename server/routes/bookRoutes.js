const express = require("express");
const router = express.Router();
const requireAuth=require("../middleware/requireAuth");
const { getBooks , getBook, addBook ,editBook, removeBook } = require("../controllers/bookController")
router.use(requireAuth);

router.get("/", getBooks);

router.get("/:id", getBook);

router.post("/", addBook);

router.patch("/:id", editBook);

router.delete("/:id", removeBook);

module.exports= router;