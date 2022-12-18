/* exported take */

/* - Create an empty array
   - Use a for loop to iterate through the array and set the length of the loop
     equal to the count given
   - If the given count is greater than the given array's length, return the given array
   - Otherwise, push the array at the current index to the new array
   - Return the new array */
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    if (count > array.length) {
      return array;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
