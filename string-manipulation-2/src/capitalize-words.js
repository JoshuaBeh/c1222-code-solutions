/* exported capitalizeWords */

/* - Create a new array containing the lower cased version of the given string,
     separated by spaces
   - Use a for loop to iterate through the array
   - Capitalize the first letter of each word (array index) and add it to the
     rest of the string (at the current index)
   - After the for loop, combine the words (array indexes) at the spaces and
     insert them into a new variable
   - Return the new string */
function capitalizeWords(string) {
  var arrString = string.toLowerCase().split(' ');
  for (var i = 0; i < arrString.length; i++) {
    arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
  }
  var newString = arrString.join(' ');
  return newString;
}

/* The function below this line works, but the 2 below that one (3 and 4) don't.
   I messed with them for a few hours trying everything I could think of. Was I
   close to a solution with either of them? */

// eslint-disable-next-line no-unused-vars
function capitalizeWords2(string) {
  var arrString = string.toLowerCase();
  var newArr = [];
  for (var i = 0; i < arrString.length; i++) {
    newArr.push(arrString[i]);
  }
  for (var j = 0; j < newArr.length; j++) {
    if (j === 0) {
      newArr[j] = newArr[j].toUpperCase();
    } else if (newArr[j] === ' ') {
      newArr[j + 1] = newArr[j + 1].toUpperCase();
    }
  }
  var newString = newArr.join('');
  return newString;
}

// eslint-disable-next-line no-unused-vars
function capitalizeWords3(string) {
  var arrString = string.toLowerCase().split(' ');
  for (var i = 0; i < arrString.length; i++) {
    for (var j = 0; j < arrString[i].length; j++) {
      if (arrString[i][0]) {
        arrString[i][j] = arrString[i][j].toUpperCase();
      } else if (arrString[i][j] === ' ') {
        arrString[i][j + 1] = arrString[i][j + 1].toUpperCase();
      }
    }
  }
  var newString = arrString.join(' ');
  return newString;
}

// eslint-disable-next-line no-unused-vars
function capitalizeWords4(string) {
  var arrString = string.toLowerCase();
  for (var i = 0; i < arrString.length; i++) {
    if (i === 0) {
      arrString[i] = arrString[i].charAt(0).toUpperCase();
    } else if (arrString[i] === ' ') {
      arrString[i + 1] = arrString[i + 1].charAt(i + 1).toUpperCase();
    }
  }
  return arrString;
}
