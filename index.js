const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  socket.on('joinGroup', (groupId) => {
    socket.join(groupId);
  });

  socket.on('chatMessage', ({ groupId, user, text }) => {
    io.to(groupId).emit('chatMessage', { user, text });
  });

  socket.on('joinCode', (groupId) => {
    socket.join('code_' + groupId);
  });

  socket.on('codeUpdate', ({ groupId, code }) => {
    io.to('code_' + groupId).emit('codeUpdate', code);
  });
});

server.listen(5000, () => console.log('Server listening on port 5000'));