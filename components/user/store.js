// const db = require('mongoose')
const Model = require('./model')

// 
function addUser(user){
  const myUser = new Model(user)
  return myUser.save()
}

async function getUser(){
  const users = await  Model.find()
  return users
}
module.exports = {
  add: addUser,
  list: getUser
  // list: getMessage,
  // updateText: updateText,
  // remove: removeMessage
}
