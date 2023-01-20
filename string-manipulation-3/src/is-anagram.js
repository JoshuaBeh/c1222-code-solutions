/* exported isAnagram */

/* - Create two empty arrays
   - Iterate through both given strings and at each index, check if the value
     of the index is a space
   - If it is not, push the value of the index to the relative array
   - Sort each array alphabetically and make them strings
   - Then, check if the strings are equal to each other
   - If so, return true
   - Otherwise, return false */

function isAnagram(firstString, secondString) {
  var firstArr = [];
  var secondArr = [];

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstArr.push(firstString[i]);
    }
  }

  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondArr.push(secondString[j]);
    }
  }
  var copyFirstString = firstArr.sort().join('');
  var copySecondString = secondArr.sort().join('');
  if (copyFirstString === copySecondString) {
    return true;
  } else {
    return false;
  }
}
