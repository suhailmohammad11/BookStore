const mongoose= require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("COnnection Established")
})
.catch(err=>{
    console.log(`Error is : ${err}`)
})
