let wss = require("ws").Server; 
let ms=""; 

let server = new wss({ port: 591 }); 

let clients = new Set(); 



server.on("connection", function(socket) { 

clients.add(socket); 
console.log("connect"); 









socket.on("message", function(message) { 


console.log(message); 
for(let interlocutor of clients) { 

interlocutor.send(message); 
message=message; 
ms=ms+message+"\n"; 
} 
}); 

socket.on("close", function() { 

clients.delete(socket); 
}); 
});