
const {dataEntry,itemData,stockData, getProduct} = require("../controller/product");
const { saveMessage, getMessages ,deleteMessage, checkExpiryDate} = require("../controller/message");

const { stockDecrementer } = require("../controller/stock");
const router = require('express').Router();

const createRouterWithIO = (io) => {
    router.get("/dataEntry", dataEntry);
    router.post("/itemData", itemData);
    router.post("/stockData", stockData);
    router.post("/stockDecrementer", (req, res) => stockDecrementer(req, res, io)); // Pass io to the controller
    router.post("/saveMessage", saveMessage);
    router .get("/getMessages", getMessages);
    router.get("/getProduct", getProduct);
    router.delete("/deleteMessage",deleteMessage);
    router.get("/checkExpiryDate", checkExpiryDate);
    
  
    return router;
  };


module.exports = createRouterWithIO;