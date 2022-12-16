/* exported reverseWord */

/* - Create an empty string to store the reversed characters
   - Use a for loop to iterrate backwards through the string
   - Combine the empty string with word[i]
   - Return the now not empty string */
function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
