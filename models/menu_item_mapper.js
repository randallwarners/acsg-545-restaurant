class MenuItemMapper {
  static GetActiveMenu () {
    return [
      {
        id: 1,
        name: 'taco',
        description: 'Your choice of meat served in a soft or hard shell tortilla with guac, salsa, sour cream, cheese and topped with hand-cut lettuce',
        image: 'images/taco.png'
      },
      {
        id: 2,
        name: 'Burrito',
        description: 'Your choice of chicken, beef or fish wrapped in a warm flour, tortilla with rice, lettuce, fajita veggies and topped with guac, salsa, queso, sour cream or cheese.',
        image: 'images/burrito.png'
      },
      {
        id: 3,
        name: 'Burrito Bowls',
        description: 'Your choice of chicken, beef or fish served in a delicious bowl with rice, lettuce, fajita veggies and topped with guac, salsa, queso, sour cream or cheese.',
        image: 'images/bowl.png'
      },
      {
        id: 4,
        name: 'Side of Fresh Guacamole',
        description: 'Delicious Guacamole',
        image: 'images/side.png'
      },
      {
        id: 5,
        name: 'Chips',
        description: 'Delicious Side Chips',
        image: 'images/side.png'
      },
      {
        id: 6,
        name: 'Chips & Salsa',
        description: 'Delicious Chips and Salsa',
        image: 'images/side.png'
      },
      {
        id: 7,
        name: 'Mexican Coca-Cola',
        description: 'Tasty soda to go with your meal',
        image: 'images/drink.png'
      },
      {
        id: 8,
        name: 'Bottled Water',
        description: 'Refreshing water',
        image: 'images/drink.png'
      }
    ]
  }
}

module.exports = MenuItemMapper
