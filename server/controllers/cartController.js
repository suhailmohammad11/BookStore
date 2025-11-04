const Cart = require("../models/cartModels");

// Add book to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bookId } = req.body;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const alreadyExists = cart.items.some(
      (item) => item.bookId.toString() === bookId
    );

    if (alreadyExists) {
      return res.status(400).json({ message: "Book already exists in the cart" });
    }

    cart.items.push({ bookId });
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get cart for logged-in user
const getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cartData = await Cart.findOne({ userId }).populate("items.bookId");
    if (!cartData) {
      return res.status(200).json({ items: [] });
    }
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove book from cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bookId } = req.params; // from URL param

    const cartExist = await Cart.findOne({ userId });

    if (!cartExist) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cartExist.items = cartExist.items.filter(
      (item) => item.bookId.toString() !== bookId
    );
    await cartExist.save();

    res.status(200).json(cartExist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addToCart, getCart, removeFromCart };
