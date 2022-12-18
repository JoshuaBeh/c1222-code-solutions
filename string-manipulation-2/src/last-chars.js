/* exported lastChars */

/* - Create an empty string
   - Set the start point of the for loop to the length of the given string minus
     the given length
   - Use a for loop to iterate through the string
   - Check if the value of the start point of the loop is greater than the
     length of the given string, and if so, return the given string
   - Otherwise, add the letter at the current index to the empty string
   - Return the new string */
function lastChars(length, string) {
  var newString = '';
  var i = string.length - length;
  for (i; i < string.length; i++) {
    if (length > string.length) {
      return string;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
