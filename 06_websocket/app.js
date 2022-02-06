const express = require("express");
const app = express();
const server = require("http").createServer(express);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 8081;

let connetions = [];
let number_off_connections = 0;
io.on("connection", (socket)=>{
connections[socket.id] = socket;
number_off_connections++;
console.log("client connected. number_off_connections: ", number_off_connections);
socket.on("disconnect", (socket)=>{
    delete connections[socket.id];
    number_off_connections--;
    console.log("client connected. number_off_connections: ", number_off_connections);
});


});



server.listen(PORT);
