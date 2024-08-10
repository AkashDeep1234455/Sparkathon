if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const port = 8080||process.env.PORT;
const dbConnect = require("./config/dbConnect");




app.listen(port,()=>{
    console.log("app listening to port",port);
    dbConnect();
})