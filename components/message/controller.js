const store = require('./store')

function addMessage(user, message){
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[message controller] No hay usuario o mensaje');
      reject('Los datos son incorrectos')
      return false
    }
    const fullMessage = {
      user,
      message,
      date: new Date().toISOString()
    }
    // console.log(fullMessage);
    store.add(fullMessage)
    resolve(fullMessage)
  })
}

function getMessages(){
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

function updateMessage(id, message){
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data')
      return false
    }
    const result = await store.updateText(id, message)
    resolve(result)
  })
}
module.exports = {
  addMessage,
  getMessages,
  updateMessage
}