/* exported swapChars */

/* - Create a variable to hold the array version of the string split by each letter
   - Create a variable to hold the first letter given (first index given)
   - Set the first letter given (first index given) equal to the
     second letter given (second index given)
   - Set the second letter given equal to the variable holding the first letter given
   - Create a new string that contains the combined version of the array version
     of the string
   - Return the new string */
function swapChars(firstIndex, secondIndex, string) {
  var arrString = string.split('');
  var firstLetter = arrString[firstIndex];
  arrString[firstIndex] = arrString[secondIndex];
  arrString[secondIndex] = firstLetter;
  var newString = arrString.join('');
  return newString;
}
