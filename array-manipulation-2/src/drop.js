/* exported drop */

/* - Create an empty array
   - Use a for loop to iterate through the array and set the start of the loop
     equal to the given count
   - If the given count is greater than the given array's length, return the given array
   - Otherwise, push the current index's value of the given array to the new array
   - Return the new array */
function drop(array, count) {
  var newArr = [];
  var i = count;
  for (i; i < array.length; i++) {
    if (count > array.length) {
      return array;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
