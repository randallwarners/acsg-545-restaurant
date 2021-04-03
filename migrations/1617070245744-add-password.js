'use strict'

const app = require('../app')
const db = app.get('db')

module.exports.description = ''

module.exports.up = function (next) {
  db.serialize(function () {
    db.run('DROP TABLE user;')
    db.run(`
      CREATE TABLE user (
        id INTEGER PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        first TEXT NOT NULL,
        last TEXT NOT NULL
      );
    ;`, next)
  })
}

module.exports.down = function (next) {
  db.serialize(function () {
    db.run('DROP TABLE user;')
    db.run(`
      CREATE TABLE user (
        id INTEGER PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        first TEXT NOT NULL,
        last TEXT NOT NULL
      );
    ;`, next)
  })
}
