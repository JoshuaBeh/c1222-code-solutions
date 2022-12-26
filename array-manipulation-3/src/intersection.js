/* exported intersection */

/* - Create an empty array
   - Create a variable to hold the longer array's length
   - Check which array's length is longer and set the variable above equal to
     that array's length. If they are equal length, set it to either length
   - Create a nested for loop to check if there is a value in both arrays that are
     equal to each other
   - If there is, push the value of the current index to the new array
   - After the for loop, return the new array */
function intersection(first, second) {
  var newArr = [];
  var arrLength;

  if (first.length > second.length) {
    arrLength = first.length;
  } else if (second.length > first.length || second.length === first.length) {
    arrLength = second.length;
  }

  for (var i = 0; i < arrLength; i++) {
    for (var j = 0; j < arrLength; j++) {
      if (first[i] === second[j]) {
        newArr.push(first[i]);
      }
    }
  }
  return newArr;
}
