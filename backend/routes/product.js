const {dataEntry,itemData,stockData} = require("../controller/product");
const { stockDecrementer } = require("../controller/stock");
const router = require('express').Router();

router.get("/dataEntry",dataEntry);
router.post("/itemData",itemData);
router.post("/stockData",stockData);
router.post("/stockDecrementer", stockDecrementer);


module.exports = router;