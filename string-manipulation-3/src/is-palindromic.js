/* exported isPalindromic */

/* - Create two empty arrays
   - Use a for loop to iterate through the given string
   - At each iteration, check if the current index's value is equal to a space
   - If it is not, push the value of the index to the forward array
   - After the for loop, join the forward array into a string

   - Now, use a for loop to iterate through the forward array backwards
   - At each iteration push the value of the index to the backwards array
   - After the for loop, join the backwards array into a string

   - Check if the backwards string is equal to the forward string
   - If it is, return true
   - Otherwise, return false */

function isPalindromic(string) {
  var backwardsArr = [];
  var forwardArr = [];
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      forwardArr.push(string[j]);
    }
  }
  var forwardString = forwardArr.join('');

  for (var i = forwardArr.length; i >= 0; i--) {
    backwardsArr.push(forwardArr[i]);
  }

  var backwardsString = backwardsArr.join('');
  if (backwardsString === forwardString) {
    return true;
  } else {
    return false;
  }
}
