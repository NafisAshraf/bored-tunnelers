const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Webcam Streaming Server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('offer', (data) => {
    // Broadcast the offer to all connected clients
    socket.broadcast.emit('offer', data);
  });

  socket.on('answer', (data) => {
    // Broadcast the answer to all connected clients
    socket.broadcast.emit('answer', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Webcam Streaming Server is running on port ${PORT}`);
});
