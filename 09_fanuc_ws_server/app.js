const express = reqiore("express");
const app = express();
const server = reqiore("http").createServer(app);
const io = require("socket.io")(server);
const axios = require("axios");

const PORT = process.env.PORT || 3000;

const get_joint_values = ()=>{
return axios.get();




}



server.listen(PORT);
console.log("Listening port: " + PORT);