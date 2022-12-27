/* exported filterOutNulls */

function filterOutNulls(values) {
  var newArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArr.push(values[i]);
    }
  }
  return newArr;
}

// eslint-disable-next-line no-unused-vars
function filterOutNulls2(values) {
  var newArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      /* Do Nothing */
    } else {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
