const WebSocket = require('ws');
const server = new WebSocket.Server({port: 8100});

// basic server code 
server.on('connection', function(socket) {
  console.log('Client connected');
  socket.on('message', function(message) {
    console.log('Received: ' + message);
    // socket.send('Echo: ' + message);
  });
  
  // when the flic is pressed
  let android_screen = true;
  setInterval(() => { //swiping screen
    android_screen = !android_screen
    let movement = android_screen ? "Right" : "Left";
    socket.send(movement);
    console.log('Client :' + movement);
    android_screen = !android_screen;
  }, 5000); // sends signals every 5 seconds
  socket.send('Hello from server');
});

// console.log('WebSocket server is running on ws://localhost:8080');
// running on Port 8080