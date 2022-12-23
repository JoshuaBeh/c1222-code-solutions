/* exported defaults */

/* - Create two empty arrays to store each Object's properties
   - Create a variable to store properties of the Objects
   - Create a variable to strore the string 'null'
   - Use a for in loop for each Object

   - At each iteration of the for in loop, set the tempVariable equal to the
     property of the object and push that variable to the array for the object

   - After the variable is pushed, set it back to empty and push the property's
     value to the array

   - If the property is null, push the nullString to the array

   - After each array is filled with the object's properties and values, check
     if the targets object's array has a length of 0. If it does, set the target
     object equal to source object

   - Now, iterate through both arrays
   - At each iteration, check if the object's property is equal to the string 'null',
     if it is, set the target's property equal to the value of the current index of the
     for loop and set the property's value to null

   - Otherwise, check if the value of the source array's index is not equal to the
     value of the target array's index. If it isn't set the target's property equal to
     the value of the current index and set the property's value to the value of the
     current index plus 1 */
function defaults(target, source) {
  var propArr = [];
  var keyArr = [];
  var tempVariable = '';
  var nullString = 'null';
  for (var prop in source) {
    tempVariable = prop;
    propArr.push(tempVariable);
    tempVariable = '';
    propArr.push(source[prop]);
  }

  for (var key in target) {
    tempVariable = key;
    keyArr.push(tempVariable);
    tempVariable = '';
    if (target[key] === null) {
      keyArr.push(nullString);
    } else {
      keyArr.push(target[key]);
    }
  }

  if (keyArr.length === 0) {
    Object.assign(target, source);
  }

  for (var i = 0; i < propArr.length; i += 2) {
    for (var j = 0; j < keyArr.length; j += 2) {
      if (keyArr[j] === 'null') {
        target[propArr[i]] = null;
      } else if (propArr[i] !== keyArr[j]) {
        target[propArr[i]] = propArr[i + 1];
      }
    }
  }
}
