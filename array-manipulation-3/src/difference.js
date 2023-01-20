/* exported difference */

/* - Create an empty array
   - Loop through both arrays seperately
   - At each index, check if every value of the other array is not equal to
     the current index of the array we are looping through
   - If true, push the value of the current index to the new array
   - Return the new array */
function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.every(index => index !== first[i])) {
      newArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.every(index => index !== second[j])) {
      newArr.push(second[j]);
    }
  }
  return newArr;
}
