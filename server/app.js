const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect(
  'mongodb://localhost/exampleServer',
  { useNewUrlParser: true }
)

app.use('/users', require('./users/routes'))

app.get('/', (_, res) => res.send({ ping: 'ok', route: '/' }))

module.exports = app
