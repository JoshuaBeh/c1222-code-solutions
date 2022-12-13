function convertMinutesToSeconds(minutes) {
  var minToSec = minutes * 60;
  return minToSec;
}
console.log('convertMinutesToSeconds function result:', convertMinutesToSeconds(6));

function greet(name) {
  var greeting = 'Hi, ' + name + '!';
  return greeting;
}
console.log('greet function result:', greet('Cody'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('getArea function result:', getArea(8, 4));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('getFirstName function result:', getFirstName({ firstName: 'Ichigo', lastName: 'Kurosaki' }));

function getLastElement(array) {
  var lastElement = '';
  var i = 0;
  while (i < array.length - 1) {
    i++;
    lastElement = array[i];
  }
  return lastElement;
}
console.log('getLastElement function result:', getLastElement(['propane', 'and', 'propane', 'accessories']));
