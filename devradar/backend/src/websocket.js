import socketio from 'socket.io';
import calculaDistance from './utils/calculeDistance';

let io;
const connections = [];

function setupWebSocket(server) {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: techs.split(',').map(tech => tech.trim()),
    });
  });
}

function findConnections(coordinates, techs) {
  return connections.filter(
    connection =>
      calculaDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(item => techs.includes(item))
  );
}

function sendMessage(to, message, data) {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
}

export { setupWebSocket, findConnections, sendMessage };
