/* exported takeRight */

/* - Create an empty array
   - Use an if statement to check if the given count is greater than the given
     array's length, and if so, return a copy of the given array
   - Use a for loop that starts at the given array's length minus the given count
     to iterate through the array, and at each iteration, push the value
     of the current index to the new array
   - Return the new array */
function takeRight(array, count) {
  var newArr = [];
  var i = array.length - count;
  if (count > array.length) {
    return array.slice();
  }
  for (i; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
