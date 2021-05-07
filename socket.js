const socketIO = require('socket.io')
// USAMOS UN OBJETO PORQUE LOS OBJETOS SE GUARDAN COMO REFERENCIA
const socket = {}

function connect(server){
  socket.io = socketIO(server)
}

module.exports = {
  connect,
  socket
}