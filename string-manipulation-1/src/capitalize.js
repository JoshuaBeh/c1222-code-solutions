/* exported capitalize */

/* - See all the letters of the string as seperate indexes
   - Capitalize the first letter of the string at index 0
   - Set the rest of the letters to lowercase
   - Return the string from the function */
function capitalize(word) {
  var updated = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return updated;
}
