const express= require("express")
const requireAuth = require('../middleware/requireAuth');
const router=express.Router();
const {addToCart , getCart, removeFromCart } = require("../controllers/cartController")


router.use(requireAuth); 
//add to cart
router.post("/add",  addToCart);

//get cart
router.get("/", getCart)
//remove from cart
router.delete("/:bookId",removeFromCart)


module.exports=router