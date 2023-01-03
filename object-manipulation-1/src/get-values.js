/* exported getValues */

/* - Create an empty array
   - Use a for loop to itterate through the object
   - Push the values of the object's properties to the new array
   - Return the new array */
function getValues(object) {
  var newArr = [];
  for (var prop in object) {
    newArr.push(object[prop]);
  }
  return newArr;
}
