import socketio from 'socket.io-client';

const socket = socketio('http://localhost:3333/', { autoConnect: false });

export function subscribeToNewDevs(subscribeFunction) {
  socket.on('newdev', subscribeFunction);
}

export function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();
}

export function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}
