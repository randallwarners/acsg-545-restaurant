'use strict'

const app = require('../app')
const db = app.get('db')

module.exports.description = ''

module.exports.up = function (next) {
  db.serialize(function () {
    db.run('SELECT 1;')
    db.run('SELECT 2;', next) // include next callback only on last transaction
  })
}

module.exports.down = function (next) {
  db.serialize(function () {
    db.run('SELECT 1;')
    db.run('SELECT 2;', next) // include next callback only on last transaction
  })
}
