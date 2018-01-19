const io = require('socket.io-client')
const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')

const socket = io('http://localhost:3030', {
  transports: ['websocket'],
  forceNew: true
})
const api = feathers()

api.configure(socketio(socket))

export const counts = api.service('counts')
