const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');

const socket = io('http://localhost:3030', {
  transports: ['websocket'],
  forceNew: true
});
const api = feathers();

api.configure(socketio(socket));

const counts = api.service('counts');

counts.remove(1)
  .then(message => console.log(message));
