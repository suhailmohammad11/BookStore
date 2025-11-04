const express= require("express")
const router=express.Router();

const { getUsers, getUser , addUser, removeUser, loginUser, signUpUser }= require("../controllers/userController")
//get users
router.get("/", getUsers)

//get one user
router.get("/:id", getUser)

//add user
router.post("/", addUser)

//remove user
router.delete("/:id", removeUser)

//login user
router.post("/login", loginUser)

//signup user
router.post("/signup", signUpUser)
module.exports=router