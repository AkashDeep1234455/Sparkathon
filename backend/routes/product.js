const {dataEntry} = require("../controller/product");
const router = require('express').Router();

router.get("/dataEntry",dataEntry);

module.exports = router;