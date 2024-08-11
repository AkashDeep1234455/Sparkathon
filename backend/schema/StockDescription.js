const {Schema} = require("mongoose");

const StockSchema = new Schema({
    productId:{
        type:String,
        required:true,
    },
    stockQuantity:{
        type:Number,
        required:true,
    },
    expiryDate:{
        type:Date
    },
    minStock:{
        type:Number,
    }
})

module.exports = {StockSchema};