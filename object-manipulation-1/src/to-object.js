/* exported toObject */

/* - Create an empty object
   - Create a prop variable to store the first index of the array
   - Set the new object's property value equal to the second index of the array
   - Return the new object */
function toObject(keyValuePair) {
  var newObj = {};
  var prop = keyValuePair[0];
  newObj[prop] = keyValuePair[1];
  return newObj;
}
