const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

function generateMockData() {
  return {
    timestamp: new Date().toISOString(),
    active_users: Math.floor(Math.random() * 100),
    page_views: Math.floor(Math.random() * 200),
    avg_session_duration: (Math.random() * 5 + 1).toFixed(2),
  };
}

setInterval(() => {
  const data = generateMockData();
  io.emit('trafficData', data);
}, 3000);

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  socket.on('disconnect', () => console.log('Client disconnected:', socket.id));
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
