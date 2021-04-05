'use strict'

const app = require('../app')
const db = app.get('db')

module.exports.description = `
  move price and category to item_part, so that a type can be
  used to determine if a category allows for one or many selections
`

module.exports.up = function (next) {
  db.serialize(function () {
    db.run('DROP TABLE order_item;')
    db.run(`
      CREATE TABLE order_item (
        [order] INTEGER,
        item INTEGER,
        price REAL,
        quantity INTEGER DEFAULT 1,
        PRIMARY KEY ([order], item),
        FOREIGN KEY ([order])
          REFERENCES [order] (id),
        FOREIGN KEY (item)
          REFERENCES item (id)
      );
    `)

    db.run('DROP TABLE menu_item;')
    db.run(`
      CREATE TABLE menu_item (
        menu INTEGER,
        item INTEGER,
        category INTEGER,
        price REAL,
        active INTEGER DEFAULT 1,
        PRIMARY KEY (menu, item),
        FOREIGN KEY (menu)
          REFERENCES menu (id),
        FOREIGN KEY (item)
          REFERENCES item (id),
        FOREIGN KEY (category)
          REFERENCES category (id)
      );
    `)

    db.run('DROP TABLE item_part;')
    db.run(`
      CREATE TABLE item_part (
        parent INTEGER,
        child INTEGER CHECK (parent <> child),
        category INTEGER,
        price REAL DEFAULT 0,
        [default] INTEGER DEFAULT 0,
        hidden INTEGER DEFAULT 0,
        PRIMARY KEY (parent, child),
        FOREIGN KEY (parent)
          REFERENCES item (id),
        FOREIGN KEY (child)
          REFERENCES item (id),
        FOREIGN KEY (category)
          REFERENCES category (id)
      );
    `, next)

    db.run('DROP TABLE [order];')
    db.run(`
      CREATE TABLE [order] (
        id INTEGER PRIMARY KEY,
        user INTEGER,
        time TEXT,
        status TEXT,
        tax REAL,
        FOREIGN KEY (user)
          REFERENCES user (id)
      );
    `)

    db.run('DROP TABLE item;')
    db.run(`
      CREATE TABLE item (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        image TEXT
      );
    `)

    db.run(`
      CREATE TABLE category (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        type TEXT
      );
    `, next)
  })
}

module.exports.down = function (next) {
  db.serialize(function () {
    db.run('DROP TABLE order_item;')
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

    db.run('DROP TABLE menu_item;')
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
    `)

    db.run('DROP TABLE item_part;')
    db.run(`
      CREATE TABLE item_part (
        parent INT,
        child INT CHECK (parent <> child),
        PRIMARY KEY (parent, child),
        FOREIGN KEY (parent)
          REFERENCES item (id),
        FOREIGN KEY (child)
          REFERENCES item (id)
      );
    `)

    db.run('DROP TABLE [order];')
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

    db.run('DROP TABLE category;', next)
  })
}
