class MenuItemMapper {
  static GetActiveMenu () {
    return [
      {
        id: 1,
        name: 'taco',
        description: 'delicious taco',
        image: 'images/taco.png'
      },
      {
        id: 2,
        name: 'burrito',
        description: 'delicious burrito',
        image: 'images/burrito.png'
      },
      {
        id: 3,
        name: 'bottled water',
        description: 'fresh water',
        image: 'images/water.png'
      }
    ]
  }
}

module.exports = MenuItemMapper
