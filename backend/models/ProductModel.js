const {ProductSchema} = require('../schema/ProductSchema');
const {model} = require("mongoose");

const ProductModel = new model("Product",ProductSchema);
module.exports = {ProductModel};