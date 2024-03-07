const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', socket => {
  console.log('New connection');

  socket.on('streamer-signal', data => {
    // Broadcast the signaling data to all connected viewers
    io.emit('viewer-signal', data);
  });

  socket.on('disconnect', () => {
    console.log('Connection closed');
  });
});

server.listen(8080, () => {
  console.log('Signaling server listening on port 8080');
});
