// const db = require('mongoose')
const Model = require('./model')
// const { config }= require('../../config/index')

// db.Promise = global.Promise
// db.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// }).then(() => console.log('[db] Contected to DB'))
// const list = []

function addMessage(message) {
  // list.push(message)
  const myMessage = new Model(message)
  myMessage.save()
}
// ? se cambió filtro de usuario a filtro de chat para tener todos los mensajes de un chat en vez de un usuario
function getMessage(filterUser) {
  // return list
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterUser !== null) {
      // filter = { user: filterUser}
      filter = { chat: filterUser}
    }
    Model.find(filter)
    .populate('user')
    .exec((error, populated) => {
      if (error) {
        reject(error)
        return false
      }
      resolve(populated)
    })
  })
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  })
  
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage
  // get
  // update
  // delete
}
