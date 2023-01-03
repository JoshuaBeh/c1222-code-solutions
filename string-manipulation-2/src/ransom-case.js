/* exported ransomCase */

/* - Create an empty string
   - Use a for loop to iterate through the given string
   - Use an if statement to check if the current index of the string is
     divisible by 2 or is strictly === 0, and if so, add the lowercased version
     of the current letter to the empty string
   - Otherwise, add the uppercased version of the current letter to the
     empty string
   - Return the new version of the string */
function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0 || i === 0) {
      newWord += string[i].toLowerCase();
    } else {
      newWord += string[i].toUpperCase();
    }
  }
  return newWord;
}
