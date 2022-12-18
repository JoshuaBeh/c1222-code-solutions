/* exported chunk */

/* - Create an empty array
   - Check if the given size is greater than the given array's length, and if so,
     return the given array
   - Use a for loop to iterate through the array, that iterates by the current
     index plus the given size
   - For every iteration, push a slice (the current index to the current index plus the given size)
     of the given array to the new array
   - Return the new array */

function chunk(array, size) {
  var newArr = [];
  if (size > array.length) {
    return array;
  }
  for (var i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;
}

/* This one was fun to figure out */
// eslint-disable-next-line no-unused-vars
function chunkOptional(array, size) {
  var tempArr = [];
  var newArr2 = [];
  if (size > array.length) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    tempArr.push(array[i]);
    if (tempArr.length === size) {
      newArr2.push(tempArr);
      tempArr = [];
    }
  }
  if (tempArr.length !== 0) {
    newArr2.push(tempArr);
  }
  return newArr2;
}
