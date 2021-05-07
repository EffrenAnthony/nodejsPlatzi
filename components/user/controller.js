const store = require('./store')

function addUser(name){

  if(!name){
    return Promise.reject('Invalid name')
  }
  const user = {
    name,
  }
  return store.add(user)
}

function getUser(){
  try{
    const users = store.list()
    return users
  }
  catch(err){
    console.log(err)
  }
}

module.exports = {
  addUser,
  getUser
}