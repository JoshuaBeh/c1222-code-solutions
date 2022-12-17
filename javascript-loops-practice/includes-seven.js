/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== 7) {
      /* Do Nothing */
    } else if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
