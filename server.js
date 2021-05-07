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
db(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`)
// const router = require('./components/message/network')

app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(router)
socket.connect(server)

router(app)


app.use('/app', express.static('public'))
const port = 3000
server.listen(port)
console.log(`Listening on http://localhost:${port}`);
