const { saveMessage, getMessages ,deleteMessage} = require("../controller/message");
const {dataEntry,itemData,stockData} = require("../controller/product");
const { stockDecrementer } = require("../controller/stock");
const router = require('express').Router();

const createRouterWithIO = (io) => {
    router.get("/dataEntry", dataEntry);
    router.post("/itemData", itemData);
    router.post("/stockData", stockData);
    router.post("/stockDecrementer", (req, res) => stockDecrementer(req, res, io)); // Pass io to the controller
    router.post("/saveMessage", saveMessage);
    router .get("/getMessages", getMessages);
    router.delete("/deleteMessage",deleteMessage);
  
    return router;
  };


module.exports = createRouterWithIO;