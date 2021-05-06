const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function(req, res){
  controller.getMessages()
  .then((messageList) => {
    response.success(req, res, messageList, 200)
  })
  .catch((error) => {
    response.error(req, res, error, 'Unexpected Error', 500)
  })

  // console.log(req.headers)
  // res.header({
  //   "custom-header":"Nuestro valor personalizado"
  // })
  // // res.send('Lista de mensaje')
  // response.success(req, res, "Lista de mensajes")
})
router.post('/', function(req, res){
  // console.log(req.query)
  // console.log(req.body)
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
      response.success(req, res, fullMessage, 201)
    })
    .catch(()=>{
      response.error(req, res, 'Información invalida', 400, 'Error en el controlador')
    })
  // if (req.query.error == "ok") {
  //   response.error(req, res, 'Error simulado', 500, 'Es solo una simulación de los errores')
    
  // } else {
  //   response.success(req, res, 'Creado correctamente', 201)
  // }
  // res.status(201).send('mensaje "' + req.body.text +'" añadido correctamente')
  // res.status(201).send([{
  //   error: '',
  //   body: 'creado correctamente'
  // }])
})
// app.use('/', function(req, res){
//   res.send('Hola')
// })

module.exports = router