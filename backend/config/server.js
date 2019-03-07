const port = 3003

const bodyParser = require('body-parser') // ajuda fazer o parse do body da requisição (json->obj, por exmeplo)
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server