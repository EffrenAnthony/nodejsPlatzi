const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
  chat:{
    type: Schema.ObjectId,
    ref: 'Chat'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  // de esa manera hacemos que solo se guarde si tenemos el mensaje
  message: {
    type: String,
    require: true
  },
  date: Date,
  file: String,
})

const model = mongoose.model('Message', mySchema)
module.exports = model