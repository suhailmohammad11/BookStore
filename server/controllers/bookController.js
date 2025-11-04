const Book = require("../models/booksModel");

// retrieve all books
const getBooks = async (req, res) => {
  const userId=req.user._id;
  try {
    const bookData = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(bookData );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//retrieve one book
const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const oneBook = await Book.findById({ _id: id });
    res.status(200).json( oneBook );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//create a book
const addBook = async (req, res) => {
    const { title,author, price, desc } = req.body;
  try {
    if(req.user.type !=="admin"){
      return res.status(403).json({ error: "Only admins can add books" });
    }
    const createData = new Book({ title,author, price, desc })
     const book= await createData.save();
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//edit book
const editBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, price, desc } = req.body;
    const updatedData = await Book.findByIdAndUpdate(
      { _id: id },
      { title, author, price, desc },
      { new: true }
    );
    res.status(200).json(updatedData);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

//Delete Book
const removeBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData= await Book.findByIdAndDelete({_id:id})
    res.status(200).json({ deletedData });   
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

module.exports = { getBooks, getBook, addBook, editBook, removeBook };
