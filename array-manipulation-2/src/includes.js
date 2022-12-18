/* exported includes */

/*  */
function includes(array, value) {
  var empty1;
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      empty1 = true;
    }
  }
  if (empty1 === true) {
    return true;
  } else {
    return false;
  }
}
