const ProductSchema = require('../schema/ProductSchema');
const {Model} = require("mongoose");

const ProductModel = new Model("Product",ProductSchema);
module.exports = {ProductModel};