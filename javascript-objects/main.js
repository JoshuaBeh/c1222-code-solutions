var student = {
  firstName: 'Joshua',
  lastName: 'Beh',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Maserati',
  model: 'Any',
  year: '2022'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('vehicle object:', vehicle);

var pet = {
  name: 'London',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('pet object:', pet);
