/* exported getKeys */

/* - Create an empty array
   - Iterrate through the object using a for loop
   - Push the object's properties to the new array
   - Return the new array */
function getKeys(object) {
  var newArr = [];
  for (var prop in object) {
    newArr.push(prop);
  }
  return newArr;
}
