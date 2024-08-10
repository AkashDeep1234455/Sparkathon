const {Model} = require("mongoose");
const SellerSchema = require("../schema/SellerSchema");

const SellerModel = new Model("Seller",SellerSchema);
module.exports = {SellerModel};