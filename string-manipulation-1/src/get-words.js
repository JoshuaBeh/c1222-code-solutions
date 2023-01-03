/* exported getWords */

/* - Create an empty array
   - Create an empty string to store the combined string[i]'s without spaces
   - Use a for loop, so we can use i as a reference point in the string
   - Use an if statement to check for spaces, if there are no spaces at string[i],
     combine string[i] with the empty string
   - Once there is a space, push the newString into the array and set the newString
     back to empty.
   - After the for loop, use an if statement to check if there is a word left over
     in newString
   - Return the array */
function getWords(string) {
  var newArr = [];
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    } else {
      newArr.push(newString);
      newString = '';
    }
  }
  if (newString !== '') {
    newArr.push(newString);
  }
  return newArr;
}
