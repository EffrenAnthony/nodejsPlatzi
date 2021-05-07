const express = require('express')
const app = express()
const server = require('http').Server(app)
const cors = require('cors')
const bodyParser = require('body-parser')

const socket = require('./socket')
const router = require('./network/routes')

// DB CONFIG
const db = require('./db')
const { config }= require('./config/index')
db(config.mongodb)
// const router = require('./components/message/network')

app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(router)
socket.connect(server)

router(app)


app.use(config.publicRoute, express.static('public'))
const port = config.port
server.listen(port, () => {
  console.log(`Listening on ${config.host}:${config.port}`);
})

