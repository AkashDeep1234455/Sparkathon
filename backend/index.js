if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const cron = require("node-cron");
const app = express();
const bodyParser = require("body-parser");

// Socket.IO setup
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
const axios = require('axios');

app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080; // Corrected the order of precedence
const dbConnect = require("./config/dbConnect");
const cors = require("cors");

///
const createRouterWithIO = require("./routes/product");

const allowedOrigins = ["http://localhost:5173", "http://localhost:8080"];
const corsConfig = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) != -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
function expiryChecker() {
  console.log("running")
  axios.get("http://localhost:8080/checkExpiryDate")
    .then((res) => {
      console.log("check");
    })
    .catch((err) => {
      console.error(err);
    });
}

cron.schedule("0 9 * * *", expiryChecker, {
  timezone: "Asia/Kolkata"
});

app.use(cors());
app.use(express.json());

app.use("/", createRouterWithIO(io));

io.on("connection", (socket) => {
  console.log("a user connected");
  // Additional socket logic can go here
});

server.listen(port, () => {
  console.log("App listening on port", port);
  dbConnect();
});
