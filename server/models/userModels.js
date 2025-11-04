const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

//static signup
userSchema.statics.signup = async function(name,email, password, type){
    const exists=await this.findOne({email})
    if(exists){
        throw Error("User already exists, Please login")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user= await User.create({name, email, password: hashedPassword, type})
    return user;
}

//static login

userSchema.statics.login = async function(email, password, type){
    const user = await this.findOne({email, type})
    if(!user){
        throw Error("Invalid Credentials")
    }

    const match= await bcrypt.compare(password, user.password)
    if(!match){
        throw Error("Incorrect Password")
    }

    return user;
}


const User = new mongoose.model("User", userSchema);

module.exports = User;
