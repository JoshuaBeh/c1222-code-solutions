console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'player1',
    hand: []
  },
  {
    name: 'player2',
    hand: []
  },
  {
    name: 'player3',
    hand: []
  },
  {
    name: 'player4',
    hand: []
  }
];

var deck = [
  {
    value: 1,
    rank: '1',
    suit: 'club'
  },
  {
    value: 1,
    rank: '1',
    suit: 'diamond'
  },
  {
    value: 1,
    rank: '1',
    suit: 'heart'
  },
  {
    value: 1,
    rank: '1',
    suit: 'spade'
  },
  {
    value: 2,
    rank: '2',
    suit: 'club'
  },
  {
    value: 2,
    rank: '2',
    suit: 'diamond'
  },
  {
    value: 2,
    rank: '2',
    suit: 'heart'
  },
  {
    value: 2,
    rank: '2',
    suit: 'spade'
  },
  {
    value: 3,
    rank: '3',
    suit: 'club'
  },
  {
    value: 3,
    rank: '3',
    suit: 'diamond'
  },
  {
    value: 3,
    rank: '3',
    suit: 'heart'
  },
  {
    value: 3,
    rank: '3',
    suit: 'spade'
  },
  {
    value: 4,
    rank: '4',
    suit: 'club'
  },
  {
    value: 4,
    rank: '4',
    suit: 'diamond'
  },
  {
    value: 4,
    rank: '4',
    suit: 'heart'
  },
  {
    value: 4,
    rank: '4',
    suit: 'spade'
  },
  {
    value: 5,
    rank: '5',
    suit: 'club'
  },
  {
    value: 5,
    rank: '5',
    suit: 'diamond'
  },
  {
    value: 5,
    rank: '5',
    suit: 'heart'
  },
  {
    value: 5,
    rank: '5',
    suit: 'spade'
  },
  {
    value: 6,
    rank: '6',
    suit: 'club'
  },
  {
    value: 6,
    rank: '6',
    suit: 'diamond'
  },
  {
    value: 6,
    rank: '6',
    suit: 'heart'
  },
  {
    value: 6,
    rank: '6',
    suit: 'spade'
  },
  {
    value: 7,
    rank: '7',
    suit: 'club'
  },
  {
    value: 7,
    rank: '7',
    suit: 'diamond'
  },
  {
    value: 7,
    rank: '7',
    suit: 'heart'
  },
  {
    value: 7,
    rank: '7',
    suit: 'spade'
  },
  {
    value: 8,
    rank: '8',
    suit: 'club'
  },
  {
    value: 8,
    rank: '8',
    suit: 'diamond'
  },
  {
    value: 8,
    rank: '8',
    suit: 'heart'
  },
  {
    value: 8,
    rank: '8',
    suit: 'spade'
  },
  {
    value: 9,
    rank: '9',
    suit: 'club'
  },
  {
    value: 9,
    rank: '9',
    suit: 'diamond'
  },
  {
    value: 9,
    rank: '9',
    suit: 'heart'
  },
  {
    value: 9,
    rank: '9',
    suit: 'spade'
  },
  {
    value: 10,
    rank: '10',
    suit: 'club'
  },
  {
    value: 10,
    rank: '10',
    suit: 'diamond'
  },
  {
    value: 10,
    rank: '10',
    suit: 'heart'
  },
  {
    value: 10,
    rank: '10',
    suit: 'spade'
  },
  {
    value: 10,
    rank: 'jack',
    suit: 'club'
  },
  {
    value: 10,
    rank: 'jack',
    suit: 'diamond'
  },
  {
    value: 10,
    rank: 'jack',
    suit: 'heart'
  },
  {
    value: 10,
    rank: 'jack',
    suit: 'spade'
  },
  {
    value: 10,
    rank: 'queen',
    suit: 'club'
  },
  {
    value: 10,
    rank: 'queen',
    suit: 'diamond'
  },
  {
    value: 10,
    rank: 'queen',
    suit: 'heart'
  },
  {
    value: 10,
    rank: 'queen',
    suit: 'spade'
  },
  {
    value: 10,
    rank: 'king',
    suit: 'club'
  },
  {
    value: 10,
    rank: 'king',
    suit: 'diamond'
  },
  {
    value: 10,
    rank: 'king',
    suit: 'heart'
  },
  {
    value: 10,
    rank: 'king',
    suit: 'spade'
  },
  {
    value: 11,
    rank: 'ace',
    suit: 'club'
  },
  {
    value: 11,
    rank: 'ace',
    suit: 'diamond'
  },
  {
    value: 11,
    rank: 'ace',
    suit: 'heart'
  },
  {
    value: 11,
    rank: 'ace',
    suit: 'spade'
  }
];

/* - Create an empty array to hold each players cards
   - Create a copy of the deck, so we don't destroy the original
   - Loop through the players array
   - At each iteration, remove 2 cards from the copy deck and push them to the
     temporary array
   - Then, set the current player's hand equal to the temporary array
   - Set the temporary array back to empty
   - After the for loop, create four variables holding the value of each player's
     cards added together
   - Check which player's hand has the highest number
   - Log the player with the highest number hand to the console */
function cardgame() {
  var tempArr = [];
  var tempDeck = deck.slice();

  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < 2; j++) {
      var deckCard;
      deckCard = tempDeck.splice([Math.floor(Math.random() * tempDeck.length)], 1);
      tempArr.push(deckCard[0]);
    }
    players[i].hand = tempArr;
    tempArr = [];
  }

  var player1Count = players[0].hand[0].value + players[0].hand[1].value;
  var player2Count = players[1].hand[0].value + players[1].hand[1].value;
  var player3Count = players[2].hand[0].value + players[2].hand[1].value;
  var player4Count = players[3].hand[0].value + players[3].hand[1].value;

  if (player1Count > player2Count && player1Count > player3Count && player1Count > player4Count) {
    console.log('You are the winner!', players[0]);
  } else if (player2Count > player1Count && player2Count > player3Count && player2Count > player4Count) {
    console.log('You are the winner!', players[1]);
  } else if (player3Count > player1Count && player3Count > player2Count && player3Count > player4Count) {
    console.log('You are the winner!', players[2]);
  } else if (player4Count > player1Count && player4Count > player2Count && player4Count > player3Count) {
    console.log('You are the winner!', players[3]);
  }
}

cardgame();
