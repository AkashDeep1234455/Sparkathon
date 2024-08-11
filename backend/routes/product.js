const {dataEntry,itemData} = require("../controller/product");
const router = require('express').Router();

router.get("/dataEntry",dataEntry);
router.post("/itemData",itemData);

module.exports = router;