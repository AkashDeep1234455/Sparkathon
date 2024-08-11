// schema/ProductSchema.js
const { Schema } = require('mongoose');

const ProductSchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: [true, 'product name required'],
    },
    image: {
        type: String,
    },
    main_category: {
        type:String,
        required: true
    },
    category: {
        type: String,
        required: [true],
    },
    brand: {
        type: String,
        required: [true],
    },
    supplierId: {
        type: Schema.Types.ObjectId,
        ref: 'SellerModel'
    },
    stockDescription: [{
        type: Schema.Types.ObjectId,
        ref: 'StockModel'
    }]
});

module.exports = { ProductSchema };
