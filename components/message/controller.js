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
module.exports = {
  addMessage,
  getMessages
}