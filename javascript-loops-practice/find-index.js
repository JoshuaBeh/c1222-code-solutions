/* exported findIndex */
function findIndex(array, value) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      newArr.push(i);
      newArr.push(array[i]);
    }
  }
  if (newArr[1] === value) {
    return newArr[0];
  } else {
    return -1;
  }
}
