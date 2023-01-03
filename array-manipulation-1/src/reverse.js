/* exported reverse */

/* - Create an empty array to store the reversed version of the array
   - Use a for loop to iterrate through the array to reverse each element individually
   - Unshift each element to the new array
   - return the new array */
function reverse(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
}
