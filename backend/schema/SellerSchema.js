const {Schema} = require("mongoose");

const SellerSchema = new Schema({
    sellerName:{
        type:String,
        required:[true,"Seller name is required"],
    },
    email:{
        type:String,
        required:[true,"email required"]
    },
    phoneNumber:{
        type:String,
        required:true,
    }
})

module.exports = {SellerSchema};