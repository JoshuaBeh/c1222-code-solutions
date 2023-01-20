/* exported unique */

/* - Create an empty array
   - Loop through the given array
   - At every index, check if the value of the index is not equal to
     all of the values in the new array
   - If true, push the value of the current index of the given array to the new array
   - After the for loop, return the new array */
function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (newArr.every(index => index !== array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
