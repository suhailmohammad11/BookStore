const mongoose= require("mongoose")

const cartSchema= mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items:[
        {
            bookId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Book",
                required:true
            }
        }
    ]
})

module.exports=mongoose.model("Cart", cartSchema)