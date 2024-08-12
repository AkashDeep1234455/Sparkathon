if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();

// Socket.IO setup
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 8080; // Corrected the order of precedence
const dbConnect = require("./config/dbConnect");
const cors = require('cors');

///
const createRouterWithIO = require("./routes/product");

const allowedOrigins = ["http://localhost:5173", "http://localhost:8080"];
const corsConfig = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) != -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsConfig));
app.use(express.json());

app.use("/", createRouterWithIO(io));

io.on('connection', (socket) => {
    console.log('a user connected');
    // Additional socket logic can go here
});

server.listen(port, () => {
    console.log("App listening on port", port);
    dbConnect();
});
