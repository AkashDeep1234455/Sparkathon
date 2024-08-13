const {Schema} = require("mongoose");

const MessageSchema = new Schema({
    message:{
        type:String,
        required:true,
    },
    messageId:{
        type:String,
        required:true,
    },
    criticalStock:{
        type:Number,
        required:true,
    },
    productId:{
        type:String,
        required:true,
    },
    stockQuantity:{
        type:Number,
        required:true,
    }
})

module.exports = {MessageSchema};