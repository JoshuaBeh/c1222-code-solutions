/* exported truncate */

/* Return a slice of the string from the starting index to the length provided */
function truncate(length, string) {
  return string.slice(0, length) + '...';
}

// eslint-disable-next-line no-unused-vars
function truncate2(length, string) {
  var newStr = '';
  for (var i = 0; i < length; i++) {
    newStr += string[i];
  }
  return newStr + '...';
}
