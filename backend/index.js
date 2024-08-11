if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const port = 8080||process.env.PORT;
const dbConnect = require("./config/dbConnect");
const routes = require("./routes/product");
const cors = require('cors');
const allowedOrigins = ["http://localhost:5173","http://localhost:8080"];

const corsConfig = {
    origin:function(origin,callback){
        if(allowedOrigins.indexOf(origin)!=-1){
            callback(null,true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    method:['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors());
app.use(express.json());

app.use("/",routes);




app.listen(port,()=>{
    console.log("app listening to port",port);
    dbConnect();
})