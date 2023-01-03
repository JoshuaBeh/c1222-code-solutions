/* exported isUpperCased */

/* - Create a new variable that contains the original word uppercased
   - Check if original word is uppercased, and if so, return true */
function isUpperCased(word) {
  var updated = word.toUpperCase();
  if (updated === word) {
    return true;
  } else {
    return false;
  }
}
