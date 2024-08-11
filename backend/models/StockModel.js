const {model} = require("mongoose");
const {StockSchema} = require("../schema/StockDescription");

const StockModel = new model("Stock",StockSchema);

module.exports = {StockModel};