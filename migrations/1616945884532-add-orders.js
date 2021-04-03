'use strict'

const app = require('../app')
const db = app.get('db')

module.exports.description = 'includes orders, order items, and users'

module.exports.up = function (next) {
  db.serialize(function () {
    db.run(`
      CREATE TABLE user (
        id INTEGER PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        first TEXT NOT NULL,
        last TEXT NOT NULL
      );
    `)

    db.run(`
      CREATE TABLE role (
        user INTEGER,
        role INTEGER,
        PRIMARY KEY (user, role),
        FOREIGN KEY (user)
          REFERENCES user (id)
      );
    `)

    db.run(`
      CREATE TABLE [order] (
        id INTEGER PRIMARY KEY,
        user INTEGER,
        time TEXT,
        status TEXT,
        price REAL,
        tax REAL,
        FOREIGN KEY (user)
          REFERENCES user (id)
      );
    `)

    db.run(`
      CREATE TABLE menu (
        id INTEGER PRIMARY KEY,
        name TEXT,
        active INTEGER
      );
    `)

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

    db.run(`
      CREATE TABLE order_item (
        [order] INTEGER,
        item INTEGER,
        quantity TEXT,
        PRIMARY KEY ([order], item),
        FOREIGN KEY ([order])
          REFERENCES [order] (id),
        FOREIGN KEY (item)
          REFERENCES item (id)
      );
    `)

    db.run(`
      CREATE TABLE menu_item (
        menu INTEGER,
        item INTEGER,
        PRIMARY KEY (menu, item),
        FOREIGN KEY (menu)
          REFERENCES menu (id),
        FOREIGN KEY (item)
          REFERENCES item (id)
      );
    `, next)
  })
}

module.exports.down = function (next) {
  db.serialize(function () {
    db.run('DROP TABLE user;')
    db.run('DROP TABLE role;')
    db.run('DROP TABLE [order];')
    db.run('DROP TABLE menu;')
    db.run('DROP TABLE item;')
    db.run('DROP TABLE order_item;')
    db.run('DROP TABLE menu_item;', next)
  })
}
