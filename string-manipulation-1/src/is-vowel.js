/* exported isVowel */

/* - Create a new variable containing the lowercased version of the character
   - Check if the character is equal to (a or e or i or o or u)
   - Return the variable */
function isVowel(char) {
  var updated = char.toLowerCase();
  if (updated === 'a' || updated === 'e' || updated === 'i' || updated === 'o' || updated === 'u') {
    return true;
  } else {
    return false;
  }
}

// eslint-disable-next-line no-unused-vars
function isVowel2(char) {
  var updatedChar = char.toLowerCase();
  var newArr = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] === updatedChar) {
      return true;
    }
  }
}
