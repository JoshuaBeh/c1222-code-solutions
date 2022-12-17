/* exported compact */

/* - Create an empty array to store filtered version of inputed array
   - Use a for loop to loop through the array
   - Create an if statement to make sure the index of the array you are
     pushing to the new array doesn't include (empty strings, 0/-0, undefined, false, null, or NaN)
   - Push the filtered elements to the new array
   - Return the new array */
function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== '' && array[i] !== 0 && array[i] !== undefined && array[i] !== false && array[i] !== null && array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
