const {Schema} = require("mongoose");

const ProductSchema = new Schema({
    productName:{
        type:String,
        required:[true,'product name required'],
    },
    category:{
        type:String,
        required:[true],
    },
    brand:{
        type:String,
        required:[true],
    },
    supplierId:{
        type:Schema.Types.ObjectId,
        ref:"SellerModel"
    },
    stockDescription:[{
        type:Schema.Types.ObjectId,
        ref:"StockModel"
    }]

})

module.exports = {ProductSchema};