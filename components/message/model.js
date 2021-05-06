const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
  user: String,
  // de esa manera hacemos que solo se guarde si tenemos el mensaje
  message: {
    type: String,
    require: true
  },
  date: Date
})

const model = mongoose.model('Message', mySchema)
module.exports = model