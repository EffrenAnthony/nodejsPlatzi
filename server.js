const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = express.Router()

var app = express()

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

router.get('/message', function(req, res){
  console.log(req.headers)
  res.header({
    "custom-header":"Nuestro valor personalizado"
  })
  // res.send('Lista de mensaje')
  response.success(req, res, "Lista de mensajes")
})
router.post('/message', function(req, res){
  // console.log(req.query)
  // console.log(req.body)
  if (req.query.error == "ok") {
    response.error(req, res, 'Error simulado', 500, 'Es solo una simulación de los errores')
    
  } else {
    response.success(req, res, 'Creado correctamente', 201)
  }
  // res.status(201).send('mensaje "' + req.body.text +'" añadido correctamente')
  // res.status(201).send([{
  //   error: '',
  //   body: 'creado correctamente'
  // }])
})
// app.use('/', function(req, res){
//   res.send('Hola')
// })

app.use('/app', express.static('public'))
const port = 3000
app.listen(port)
console.log(`Listening on http://localhost:${port}`);
