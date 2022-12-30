/* exported union */

/* - Create an empty array
   - Loop through the first array and push all of the values to the new array
   - Loop through the second array to check if every value of the first array
     is not equal to the value of the current index of the second array
   - If true, push the value of the current index to the new array
   - After the for loop, return the new array */
function union(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (first.every(index => index !== second[j])) {
      newArr.push(second[j]);
    }
  }
  return newArr;
}
