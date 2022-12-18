/* exported dropRight */

/* - Create an empty array
   - Check if the given count is greater than the given array's length, and if so,
     return the given array
   - Use a for loop that runs only when zero is less than the given array's
     length minus the given count to iterate through the array, and at each iteration,
     push the value at the current index of the given array
   - Return the new array */
function dropRight(array, count) {
  var newArr = [];
  var newLength = array.length - count;
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < newLength; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
