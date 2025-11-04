const User = require("../models/userModels");
const createToken = require("../utils/token")

//login user
const loginUser = async(req, res)=>{
try{
  const {email , password , type}= req.body;
  const user= await User.login(email, password, type)  //from statics

  const token=createToken(user._id);
  res.status(200).json({name:user.name, email: user.email, token , type: user.type})
}catch(err){
  res.status(400).json({error:err.message})
}
}

//signup user
const signUpUser = async (req, res)=>{
  try{
    const { name, email , password ,type } = req.body;

    const user = await User.signup(name, email , password ,type)

    const token=createToken(user._id)
    res.status(201).json({name:user.name, email:user.email, token, type});

  }catch(err){
  res.status(400).json({error:err.message})
}
}
const getUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id
    const userData = await User.findById(id)
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const addUser = async (req, res) => {
  try {
    const newData = await User.create(req.body)
    res.status(200).json(newData)

  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};


const removeUser = async (req, res) => {
  try {
    const id= req.params.id;
    const data= await User.findByIdAndDelete({_id:id})
    res.status(200).json(data)
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
module.exports = {
  getUsers,
  getUser,
  addUser,
  loginUser,
  signUpUser,

  removeUser,
};
