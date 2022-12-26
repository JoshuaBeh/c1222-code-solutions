/* exported equal */

/* - Create a variable to hold the number of equal indices
   - Check if the first array's length is not equal to the second array's length,
     if so, return false
   - Loop through the first or second array, and check if their indices are equal
   - If so, increase the count by one
   - After the loop, check if the count is equal to the length of either array
   - If so, return true
   - Otherwise, return false */
function equal(first, second) {
  var count = 0;
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      count++;
    }
  }
  if (count === first.length) {
    return true;
  } else {
    return false;
  }
}
