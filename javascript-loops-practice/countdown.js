/* exported countdown */
function countdown(number) {
  var arr = [];
  for (var i = 0; i <= number; i++) {
    arr.unshift(i);
  }
  return arr;
}

// eslint-disable-next-line no-unused-vars
function countdown2(number) {
  var arr = [];
  var i = 0;
  for (number; number >= i; number--) {
    arr.push(number);
  }
  return arr;
}
