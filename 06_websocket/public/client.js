let socket = io();

socket.on("server-to-client",(message)=>{
    console.log(message);
    socket.emit("client-to-servet", "Hello from client");
});