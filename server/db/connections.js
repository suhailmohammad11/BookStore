const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/BookStroreDB")
.then(()=>{
    console.log("COnnection Established")
})
.catch(err=>{
    console.log(`Error is : ${err}`)
})
