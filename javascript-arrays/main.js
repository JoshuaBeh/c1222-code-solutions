var colors = [
  'red',
  'white',
  'blue'
];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

var colorsAmerican = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log('colorsAmerican value:', colorsAmerican);

colors[2] = 'green';
var colorsMexican = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log('colorsMexican value:', colorsMexican);
console.log('value of colors:', colors);

var students = [
  'John',
  'Josh',
  'Joe',
  'Jean'
];

var numberOfStudents = students.length;
console.log('numberOfStudents length:', numberOfStudents);

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('value of lastStudent:', lastStudent);
console.log('value of students:', students);
