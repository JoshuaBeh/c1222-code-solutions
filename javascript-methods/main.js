var one = 1;
var two = 2;
var three = 3;
var maximumValue = Math.max(one, two, three);
console.log('value of maximumValue:', maximumValue);

var heroes = [
  'superhero1',
  'superhero2',
  'superhero3',
  'superhero4'
];

var randomNumber = Math.random();
randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Book of HTML',
    author: 'Tim Berners-Lee'
  },
  {
    title: 'Book of CSS',
    author: 'Håkon Wium Lie'
  },
  {
    title: 'Book of JavaScript',
    author: 'Brendan Eich'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Joshua Beh';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
