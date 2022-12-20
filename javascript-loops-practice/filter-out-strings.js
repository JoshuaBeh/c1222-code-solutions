/* exported filterOutStrings */

function filterOutStrings(values) {
  var newArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArr.push(values[i]);
    }
  }
  return newArr;
}

// eslint-disable-next-line no-unused-vars
function filterOutStrings2(values) {

  var newArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      /* Do Nothing */
    } else {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
