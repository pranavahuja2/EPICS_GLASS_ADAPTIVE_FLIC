const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:8100');

// basic client code
socket.on('open', function() {
  console.log('Connected to Server');
  socket.send('Hello from client');
});

// socket.on('message', function(data) {
//   console.log('Received from server: ' + data);
// });

// moves right or left depending on server input
socket.on('message', function(data) {
    console.log("Server says:" + data);
    if (data == "Right") {
        console.log("Moving screen right");
    } else if (data == "Left") {
        console.log("Moving screen left");
    }
})

socket.on('close', function() {
  console.log('Disconnected from server');
});