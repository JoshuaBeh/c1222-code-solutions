/* exported isLowerCased */

/* - Create a new variable that contains the original word lowercased
   - Check if original word is lowercased, and if so, return true */
function isLowerCased(word) {
  var updated = word.toLowerCase();
  if (updated === word) {
    return true;
  } else {
    return false;
  }
}
