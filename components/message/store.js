const db = require('mongoose')
const Model = require('./model')
const { config }= require('../../config/index')

db.Promise = global.Promise
db.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('contected to DB'))
// const list = []

function addMessage(message) {
  // list.push(message)
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessage() {
  // return list
  const messages = await Model.find()
  return messages
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  })
  
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText
  // get
  // update
  // delete
}
