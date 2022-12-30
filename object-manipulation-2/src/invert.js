/* exported invert */

/* - Create an empty object
   - Use a for in loop to iterate through the given object
   - Set the new object's property to the value of the given object's property
     at the current iteration and set that equal to the given object's property
     at the current iteration
   - Return the new object */
function invert(source) {
  var newObj = {};
  for (var prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
}
