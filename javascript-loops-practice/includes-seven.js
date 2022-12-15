/* exported includesSeven */
function includesSeven(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      newArr.push(array[i]);
    }
  }
  if (newArr[0] === 7) {
    return true;
  } else {
    return false;
  }
}
