const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.post('/', function(req, res){
  controller.addUser(req.body.name)
  .then(data => {
    response.success(req, res, data, 201)
  })
  .catch(err => {
    response.error(req, res, 'Internal Error',  500 ,err)
  })
})

router.get('/', function(req, res){
  controller.getUser()
  .then(users => {
    response.success(req, res, users, 200)
  })
  .catch(err => {
    response.error(req, res, 'Internal Error', 500, err)
  })
})

module.exports = router