'use strict'

const app = require('../app')
const db = app.get('db')

module.exports.description = ''

module.exports.up = function (next) {
  db.serialize(function () {
    db.run('DROP TABLE item;')
    db.run(`
      CREATE TABLE item (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        category TEXT,
        image TEXT,
        [default] INTEGER,
        price REAL,
        active INTEGER DEFAULT 1
      );
    `)
    db.run(`
      CREATE TABLE item_part (
        parent INT,
        child INT CHECK (parent <> child),
        PRIMARY KEY (parent, child),
        FOREIGN KEY (parent)
          REFERENCES item (id),
        FOREIGN KEY (child)
          REFERENCES item (id)
      )
    `, next)
  })
}

module.exports.down = function (next) {
  db.serialize(function () {
    db.run('DROP TABLE item;')
    db.run(`
      CREATE TABLE item (
        id INTEGER PRIMARY KEY,
        parent INTEGER,
        name TEXT NOT NULL,
        category TEXT,
        image TEXT,
        [default] INTEGER,
        price REAL,
        active INTEGER,
        FOREIGN KEY (parent)
          REFERENCES item (id)
        );
    `)
    db.run('DROP TABLE item_part;', next)
  })
}
