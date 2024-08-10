const {model} = require("mongoose");
const SellerSchema = require("../schema/SellerSchema");

const SellerModel = new model("Seller",SellerSchema);
module.exports = {SellerModel};