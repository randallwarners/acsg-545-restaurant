class OrderMapper {
  static FindById (id) {
    return [
      {
        id: 1,
        name: 'taco',
        image: 'images/taco.png',
        price: 6,
        quantity: 1
      },
      {
        id: 3,
        name: 'Burrito Bowls',
        image: 'images/bowl.png',
        price: 8,
        quantity: 1
      },
      {
        id: 4,
        name: 'Side of Fresh Guacamole',
        image: 'images/side.png',
        price: 2,
        quantity: 1
      },
      {
        id: 8,
        name: 'Bottled Water',
        image: 'images/drink.png',
        price: 1.5,
        quantity: 1
      }
    ]
  }
}

module.exports = OrderMapper
