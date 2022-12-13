var orderHistory = [
  {
    item1: {
      electronic: null,
      book: {
        name: 'JavaScript for impatient programmers',
        isbn: 1,
        hardcover: true,
        author: 'Rauschmayer, Dr. Axel',
        price: 31.55
      }
    },
    shipping: {
      orderNumber: 11439416898772232,
      orderPlaced: 'August 4, 2020',
      total: 34,
      shipTo: 'JS Masher',
      delivered: 'Aug 8, 2020',
      returnWindow: 'Sep 7, 2020'
    }
  },
  {
    item1: {
      electronic: null,
      book: {
        name: 'The Timeless Way of Building',
        isbn: 2,
        hardcover: false,
        author: 'Alexander, Christopher',
        price: 41.33
      }
    },
    shipping: {
      // eslint-disable-next-line no-loss-of-precision
      orderNumber: 11399842681280257,
      orderPlaced: 'July 19, 2020',
      total: 44.53,
      shipTo: 'JS Masher',
      delivered: 'Jul 20, 2020',
      returnWindow: 'Aug 19, 2020'
    }
  },
  {
    item1: {
      electronic: {
        name: 'Gamecube Controller Adapter',
        isbn: 3,
        edition: 'Super Smash Bros.',
        console: 'Wii U and PC',
        vibration: true,
        price: 15.98
      },
      book: null
    },
    shipping: {
      // eslint-disable-next-line no-loss-of-precision
      orderNumber: 11428755579059409,
      orderPlaced: 'July 4, 2020',
      total: 17.22,
      shipTo: 'JS Masher',
      delivered: 'Jul 7, 2020',
      returnWindow: 'Aug 5, 2020'
    }
  },
  {
    item1: {
      electronic: {
        name: 'GameCube Controller',
        isbn: 4,
        edition: 'Super Smash Bros.',
        console: 'GameCube',
        vibration: null,
        price: 94.95
      },
      book: null
    },
    item2: {
      electronic: null,
      book: {
        name: 'The Art of Sql',
        isbn: 5,
        hardcover: true,
        author: 'Faroult, Stephane',
        price: 33.99
      }
    },
    shipping: {
      orderNumber: 11328831772648248,
      orderPlaced: 'July 3, 2020',
      total: 138.93,
      shipTo: 'JS Masher',
      delivered: 'Jul 5, 2020',
      returnWindow: 'Aug 4, 2020'
    }
  }
];
