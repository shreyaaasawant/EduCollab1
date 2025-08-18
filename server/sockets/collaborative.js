module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join study group room
    socket.on('joinGroup', (groupId) => {
      socket.join(`group_${groupId}`);
      io.to(`group_${groupId}`).emit('userJoined', socket.id);
    });

    // Real-time collaborative code
    socket.on('codeUpdate', ({ groupId, code }) => {
      socket.to(`group_${groupId}`).emit('codeUpdate', code);
    });

    // Chat in study group
    socket.on('chatMessage', ({ groupId, message }) => {
      io.to(`group_${groupId}`).emit('chatMessage', { sender: socket.id, message });
    });

    // Whiteboard event
    socket.on('whiteboardUpdate', ({ groupId, data }) => {
      socket.to(`group_${groupId}`).emit('whiteboardUpdate', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};