/* exported omit */

/* - Create an empty object
   - Use a for in loop to access the given object
   - Check if every index's value of the given array is not equal to the given
     object's properties
   - If so, create a new property in the new object and set it equal to the
     given object's property
   - Return the new object */

function omit(source, keys) {
  var newObj = {};
  for (var prop in source) {
    if (keys.every(index => index !== prop)) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}

// eslint-disable-next-line no-unused-vars
function omit2(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (prop !== keys[i] && prop !== keys[i++]) {
        newObj[prop] = source[prop];
      }
    }
  }
  return newObj;
}
