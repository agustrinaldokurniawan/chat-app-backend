const server = require('./app');

const {Server} = require('socket.io');

const io = new Server(server, {cors: {origin: '*'}});

io.on('connection', () => {
  console.log('Socket Io Connected ');
});
