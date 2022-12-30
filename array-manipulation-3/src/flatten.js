/* exported flatten */

/* - Create an empty array
   - Loop through the given array to check if the current index is an array
   - If it is, loop through that array and push the value of each index to
     the new array
   - Otherwise, push the value of the current index to the new array
   - After the for loop, return the new array */
function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
