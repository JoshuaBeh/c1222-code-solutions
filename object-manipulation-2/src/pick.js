/* exported pick */

/* - Create an empty object
   - Use a for loop to iterate through the given array
   - Nest a for in loop to iterate through the object given at every index of the
     array's for loop
   - Check if the property in the object given is strictly equal to the value of the
     array's current index and the property's value does not equal undefined
   - If true, set the property in the new object equal to the property in the
     given object
   - Return the new object */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (prop === keys[i] && source[prop] !== undefined) {
        newObj[prop] = source[prop];
      }
    }
  }
  return newObj;
}
