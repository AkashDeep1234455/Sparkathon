const {model, Model} = require("mongoose");
const StockDescription = require("../schema/StockDescription");

const StockModel = new Model("Stock",StockDescription);

module.exports = {StockModel};