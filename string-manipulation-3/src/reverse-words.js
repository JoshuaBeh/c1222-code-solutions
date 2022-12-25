/* exported reverseWords */

/* - Split the given string by spaces and create two empty arrays
   - Create a nested for loop to access each individual letter backwards, but
     at the starting word in the individual string
   - For every iteration of the outer for loop, loop through the word and
     push each letter to the temporary array
   - Then, make the temporary array a string and push it to the end array
   - Right after pushing the string, set the temporary array back to empty
   - Finally, make the end array into a string, joined by spaces and return it */

function reverseWords(string) {
  var splitString = string.split(' ');
  var tempArr = [];
  var endArr = [];
  for (var i = 0; i < splitString.length; i++) {
    for (var j = splitString[i].length - 1; j >= 0; j--) {
      tempArr.push(splitString[i][j]);
    }
    endArr.push(tempArr.join(''));
    tempArr = [];
  }
  var endString = endArr.join(' ');
  return endString;
}
