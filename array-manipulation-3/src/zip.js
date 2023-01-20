/* exported zip */

/* - Create an empty array to hold the final version of the given arrays
   - Create a temporary array to hold the value of each arrays' current index
   - Create a variable to hold the shorter array's length
   - Check which array's length is shorter and set the variable above equal to
     that array's length. If they are equal length, set it to either length
   - Loop through the arrays and push both values at the current index to the
     temporary array
   - Then push the temporary array to the final version of the given arrays
   - Then reset the temporary array back to empty
   - After the for loop, return the final version of the given arrays */
function zip(first, second) {
  var zippedArr = [];
  var tempArr = [];
  var arrLength;

  if (first.length > second.length) {
    arrLength = second.length;
  } else if (second.length > first.length || second.length === first.length) {
    arrLength = first.length;
  }

  for (var i = 0; i < arrLength; i++) {
    tempArr.push(first[i]);
    tempArr.push(second[i]);
    zippedArr.push(tempArr);
    tempArr = [];
  }
  return zippedArr;
}
