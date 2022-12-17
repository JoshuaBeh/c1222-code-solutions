/* exported initial */

/* - Create an empty array to store all elements that are not at index [0]
   - Create a for loop to individually add all elements of the array except for the last index
   - Use an if statement to check if the array is not at the last index, and if so,
     push the element to the new array
   - Return the new array */
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
