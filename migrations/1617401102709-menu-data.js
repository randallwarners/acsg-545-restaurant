'use strict'

const app = require('../app')
const db = app.get('db')

module.exports.description = ''

module.exports.up = function (next) {
  db.serialize(function () {
    db.run(`INSERT INTO menu (name, active) VALUES ('default', 1);`)

    // base menu items
    db.run(`
      INSERT INTO item (name, image)
      VALUES
      ('taco', 'images/taco.png'),
      ('burrito', 'images/burrito.png'),
      ('burrito bowl', 'images/bowl.png'),
      ('guacamole', 'images/guac.png'),
      ('chips', 'images/chips.png'),
      ('chips and salsa', 'images/chips_and_salsa.png'),
      ('bottled water', 'images/water.png'),
      ('fountain drink', 'images/drink.png'),
      ('mexican coca-cola', 'images/cola.png')
    `)

    db.run(`
      INSERT INTO category (name)
      VALUES
      ('entree'),
      ('side'),
      ('drink')
    `)

    db.run(`
      INSERT INTO menu_item (menu, item, category, price, active)
      SELECT m.id, i.id, c.id, 0, 1
      FROM item i
      LEFT JOIN category c ON c.name = 'entree'
      CROSS JOIN menu m
      WHERE i.name IN ('taco', 'burrito', 'burrito bowl')
    `)

    db.run(`
      INSERT INTO menu_item (menu, item, category, price, active)
      SELECT m.id, i.id, c.id, 2, 1
      FROM item i
      LEFT JOIN category c ON c.name = 'side'
      CROSS JOIN menu m
      WHERE i.name IN (
        'guacamole',
        'chips and salsa'
      )
    `)

    db.run(`
      INSERT INTO menu_item (menu, item, category, price, active)
      SELECT m.id, i.id, c.id, 1.5, 1
      FROM item i
      LEFT JOIN category c ON c.name = 'side'
      CROSS JOIN menu m
      WHERE i.name = 'chips'
    `)

    db.run(`
      INSERT INTO menu_item (menu, item, category, price, active)
      SELECT m.id, i.id, c.id, 2, 1
      FROM item i
      LEFT JOIN category c ON c.name = 'drink'
      CROSS JOIN menu m
      WHERE i.name IN (
        'bottled water',
        'mexican coca-cola'
      )
    `)

    db.run(`
      INSERT INTO menu_item (menu, item, category, price, active)
      SELECT m.id, i.id, c.id, 1.5, 1
      FROM item i
      LEFT JOIN category c ON c.name = 'drink'
      CROSS JOIN menu m
      WHERE i.name = 'fountain drink'
    `)

    // child menu items
    db.run(`
      INSERT INTO item (name, image)
      VALUES
      ('chicken', 'images/chicken.png'),
      ('steak', 'images/steak.png'),
      ('barbacoa', 'images/barbacoa.png'),
      ('carnitas', 'images/carnitas.png'),
      ('sofritas', 'images/sofritas.png'),
      ('white rice', 'images/white_rice.png'),
      ('brown rice', 'images/brown_rice.png'),
      ('cauliflower rice', 'images/cauliflower_rice.png'),
      ('black beans', 'images/black_beans.png'),
      ('pinto beans', 'images/pinto_beans.png'),
      ('guacamole', 'images/guacamole.png'),
      ('fresh tomato salsa', 'images/tomato_salsa.png'),
      ('roasted chili-corn salsa ', 'images/chili_corn_salsa.png'),
      ('tomatillo green chili salsa', 'images/green_chili_salsa.png'),
      ('sour cream', 'images/sour_cream.png'),
      ('fajita veggies', 'images/fajita_veggies.png'),
      ('cheese', 'images/cheese.png'),
      ('romaine lettuce', 'images/romaine_lettuce.png'),
      ('queso blanco', 'images/queso_blano.png')
    `)

    db.run(`
      INSERT INTO category (name, type)
      VALUES
      ('base', 'one'),
      ('rice', 'one'),
      ('beans', 'one'),
      ('extras', 'many')
    `)

    //TODO: add item parts

    /*
    db.run(`
      INSERT INTO item_part (parent, child, category, price, default)
      ('chicken', 'images/chicken.png', 7),
      ('steak', 'images/steak.png', 8.35),
      ('barbacoa', 'images/barbacoa.png', 8.35),
      ('carnitas', 'images/carnitas.png', 7.5),
      ('sofritas', 'images/sofritas.png', 7),
      ('white rice', 'images/white_rice.png', 0),
      ('brown rice', 'images/brown_rice.png', 0),
      ('cauliflower rice', 'images/cauliflower_rice.png', 2),
      ('black beans', 'images/black_beans.png', 0),
      ('pinto beans', 'images/pinto_beans.png', 0),
      ('guacamole', 'images/guacamole.png', 2),
      ('fresh tomato salsa', 'images/tomato_salsa.png', 0),
      ('roasted chili-corn salsa ', 'images/chili_corn_salsa.png', 0),
      ('tomatillo green chili salsa', 'images/green_chili_salsa.png', 0),
      ('sour cream', 'images/sour_cream.png', 0),
      ('fajita veggies', 'images/fajita_veggies.png', 0),
      ('cheese', 'images/cheese.png', 0),
      ('romaine lettuce', 'images/romaine_lettuce.png', 0),
      ('queso blanco', 'images/queso_blano.png', 1.25)
    `)
    */

    db.run('SELECT 1;', next)
  })
}

module.exports.down = function (next) {
  db.serialize(function () {
    db.run('DELETE FROM menu;')
    db.run('DELETE FROM menu_item;')
    db.run('DELETE FROM category;')
    db.run('DELETE FROM item_part;')
    db.run('DELETE FROM item;', next)
  })
}
