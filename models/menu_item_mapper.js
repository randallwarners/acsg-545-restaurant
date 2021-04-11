class MenuItemMapper {
  static GetActiveMenu () {
    return [
      {
        id: 1,
        name: 'taco',
        description: 'Your choice of meat served in a soft or hard shell tortilla with guac, salsa, sour cream, cheese and topped with hand-cut lettuce',
        image: 'images/taco.png',
        category: 'entree',
        price: 6
      },
      {
        id: 2,
        name: 'Burrito',
        description: 'Your choice of chicken, beef or fish wrapped in a warm flour, tortilla with rice, lettuce, fajita veggies and topped with guac, salsa, queso, sour cream or cheese.',
        image: 'images/burrito.png',
        category: 'entree',
        price: 8
      },
      {
        id: 3,
        name: 'Burrito Bowls',
        description: 'Your choice of chicken, beef or fish served in a delicious bowl with rice, lettuce, fajita veggies and topped with guac, salsa, queso, sour cream or cheese.',
        image: 'images/bowl.png',
        category: 'entree',
        price: 8
      },
      {
        id: 4,
        name: 'Side of Fresh Guacamole',
        description: 'Delicious Guacamole',
        image: 'images/side.png',
        category: 'side',
        price: 2
      },
      {
        id: 5,
        name: 'Chips',
        description: 'Delicious Side Chips',
        image: 'images/side.png',
        category: 'side',
        price: 1.5
      },
      {
        id: 6,
        name: 'Chips & Salsa',
        description: 'Delicious Chips and Salsa',
        image: 'images/side.png',
        category: 'side',
        price: 2
      },
      {
        id: 7,
        name: 'Mexican Coca-Cola',
        description: 'Tasty soda to go with your meal',
        image: 'images/drink.png',
        category: 'drink',
        price: 2
      },
      {
        id: 8,
        name: 'Bottled Water',
        description: 'Refreshing water',
        image: 'images/drink.png',
        category: 'drink',
        price: 1.5
      }
    ]
  }

  static FindById (id) {
    return {
      id: 2,
      name: 'Burrito',
      description: 'Your choice of chicken, beef or fish wrapped in a warm flour, tortilla with rice, lettuce, fajita veggies and topped with guac, salsa, queso, sour cream or cheese.',
      image: 'images/burrito.png',
      category: 'entree',
      price: 8,
      parts: [
        {
          category: 'base',
          type: 'one',
          items: [
            {
              id: 10,
              name: 'chicken',
              description: '',
              image: 'images/chicken.png',
              price: 8
            },
            {
              id: 11,
              name: 'steak',
              description: '',
              image: 'images/steak.png',
              price: 8.5
            }
          ]
        },
        {
          category: 'rice',
          type: 'one',
          items: [
            {
              id: 15,
              name: 'white rice',
              description: '',
              image: 'images/white_rice.png',
              price: 0
            },
            {
              id: 16,
              name: 'brown rice',
              description: '',
              image: 'images/brown_rice.png',
              price: 0
            }
          ]
        },
        {
          category: 'beans',
          type: 'one',
          items: [
            {
              id: 15,
              name: 'black beans',
              description: '',
              image: 'images/black_beans.png',
              price: 0
            },
            {
              id: 16,
              name: 'pinto beans',
              description: '',
              image: 'images/pinto_beans.png',
              price: 0
            }
          ]
        },
        {
          category: 'extras',
          type: 'any',
          items: [
            {
              id: 15,
              name: 'guacamole',
              description: '',
              image: 'images/guacamole.png',
              price: 2
            },
            {
              id: 16,
              name: 'sour cream',
              description: '',
              image: 'images/sour_cream.png',
              price: 0
            },
            {
              id: 16,
              name: 'fresh tomato salsa',
              description: '',
              image: 'images/tomato_salsa.png',
              price: 0
            }
          ]
        }
      ]
    }
  }

  static getItems(){
    return[
            {
              id: 10,
              category: 'Base',
              name: 'chicken',
              description: '',
              image: 'images/chicken.png',
              price: 8
            },
            {
              id: 11,
              category: 'Base',
              name: 'steak',
              description: '',
              image: 'images/steak.png',
              price: 8.5

        },

            {
              id: 15,
              category: 'Rice',
              name: 'white rice',
              description: '',
              image: 'images/whiteRice.png',
              price: 0
            },
            {
              id: 16,
              category: 'Rice',
              name: 'brown rice',
              description: '',
              image: 'images/brownRice.png',
              price: 0

        },

            {
              id: 15,
              category: 'Beans',
              name: 'black beans',
              description: '',
              image: 'images/blackBeans.png',
              price: 0
            },
            {
              id: 16,
              category: 'Beans',
              name: 'pinto beans',
              description: '',
              image: 'images/pintoBeans.png',
              price: 0
        },
            {
              id: 15,
              category: 'Extras',
              name: 'guacamole',
              description: '',
              image: 'images/guacamole.png',
              price: 2
            },
            {
              id: 16,
              category: 'Extras',
              name: 'sour cream',
              description: '',
              image: 'images/sourCream.png',
              price: 0
            },
            {
              id: 16,
              category: 'Extras',
              name: 'fresh tomato salsa',
              description: '',
              image: 'images/tomatoSalsa.png',
              price: 0
            }

      ]
    }

}

module.exports = MenuItemMapper
