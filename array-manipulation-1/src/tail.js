/* exported tail */

/* - Create an empty array to store all elements that are not at index [0]
   - Create a for loop to individually add all elements of the array except for index [0]
   - Use an if statement to check if the array is not at index [0], and if so,
     push the element to the new array
   - Return the new array */
function tail(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
