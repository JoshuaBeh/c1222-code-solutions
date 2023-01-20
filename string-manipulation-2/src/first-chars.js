/* exported firstChars */

/* - Create an empty string
   - Use a for loop to iterate through the given string and set the length to
     the given length
   - Use an if statement to check if the given length is greater than the
     given string's length, and if so, return the given string
   - Otherwise, add the current letter (current index) to the empty string
   - Return the new string */
function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (length > string.length) {
      return string;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
