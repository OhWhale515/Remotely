const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve the client-side files
app.use(express.static(__dirname + '/public'));

// Socket.io logic
io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle screen sharing data from the client
  socket.on('screenData', (data) => {
    // Broadcast the received screen data to all connected clients
    socket.broadcast.emit('screenData', data);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
