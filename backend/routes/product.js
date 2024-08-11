const {dataEntry,itemData,stockData} = require("../controller/product");
const router = require('express').Router();

router.get("/dataEntry",dataEntry);
router.post("/itemData",itemData);
router.post("/stockData",stockData);

module.exports = router;