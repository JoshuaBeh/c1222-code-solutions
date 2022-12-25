/* exported titleCase */

/* - Create an array containing all of the possible minor words
   - Uppercase the given title and split it up into an array by spaces

   - Use a nested for loop to iterate through the titleSplit array and through
     the individual letters

   - Check if the current iteration is the first word in the titleSplit array,
     and if true, leave the first letter capitalized and lowercase the rest

   - Check if the length of the word is less than 3 or is not equal to any of the
     words in the minorWords array
   - If true, leave the first letter capitalized and lowercase the rest
   - Otherwise, if the word is equal to any of the words in the minorWords array
     and is not the first word, lowercase the word

   - Check if the current word is equal to 'Javascript' or 'Api' or 'Javascript:',
     if true, set the word eqaul to its respective Title Cased version

   - Check if the current letter is equal to '-', if true, set the word equal to
     everything up to the letter plus the upercased version of the next letter plus
     the rest of the word lowercased (then break; the loop because of an unknown bug)
   - Otherwise, if the current letter is equal to ':', set the next word equal to
     the first letter of the next word uppercased plus the rest of the next word lowercased

   - After the nested for loop, join the title array into a string, separated by spaces
   - Return the new title */
function titleCase(title) {
  var minorWords = ['AS', 'AT', 'BY', 'FOR', 'IN', 'OF', 'ON', 'PER', 'TO', 'AND', 'OR', 'NOR', 'BUT', 'AN', 'THE'];
  var titleSplit = title.toUpperCase().split(' ');

  for (var i = 0; i < titleSplit.length; i++) {
    for (var j = 0; j < titleSplit[i].length; j++) {
      var iLength = titleSplit[i].length;

      if (i === 0) {
        titleSplit[i] = titleSplit[i].charAt(0) + titleSplit[i].slice(1, iLength).toLowerCase();
      }

      if (iLength > 3 || minorWords.every(index => index !== titleSplit[i])) {
        titleSplit[i] = titleSplit[i].charAt(0) + titleSplit[i].slice(1, iLength).toLowerCase();
      } else if (minorWords.includes(titleSplit[i]) && i !== 0) {
        titleSplit[i] = titleSplit[i].toLowerCase();
      }

      if (titleSplit[i] === 'Javascript') {
        titleSplit[i] = 'JavaScript';
      } else if (titleSplit[i] === 'Api') {
        titleSplit[i] = 'API';
      } else if (titleSplit[i] === 'Javascript:') {
        titleSplit[i] = 'JavaScript:';
      }

      if (titleSplit[i][j] === '-') {
        titleSplit[i] = titleSplit[i].slice(0, j + 1) + titleSplit[i].charAt(j + 1).toUpperCase() + titleSplit[i].slice(j + 2, iLength).toLowerCase();
        break;
      } else if (titleSplit[i][j] === ':') {
        titleSplit[i + 1] = titleSplit[i + 1].charAt(0).toUpperCase() + titleSplit[i + 1].slice(1, titleSplit[i + 1].length).toLowerCase();
      }

    }
  }
  var newTitle = titleSplit.join(' ');
  return newTitle;

}

/* I somehow got the abomination below to work */
// eslint-disable-next-line no-unused-vars
function titleCase2(title) {
  var titleSplit = title.toLowerCase().split(' ');
  for (var i = 0; i < titleSplit.length; i++) {
    for (var j = 0; j < titleSplit[i].length; j++) {
      var iLength = titleSplit[i].length;

      if (titleSplit[0] === 'the' || titleSplit[0] === 'what') {
        titleSplit[i + 1] = titleSplit[i + 1].charAt(0).toUpperCase() + titleSplit[i + 1].slice(1, titleSplit[i + 1].length);
      }

      if (i === 0) {
        titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].slice(1, iLength);
      }

      if (titleSplit[i] === 'for' || titleSplit[i] === 'what' || titleSplit[i] === 'the' || titleSplit[i] === 'on' || titleSplit[i] === 'and') {
        titleSplit[i + 1] = titleSplit[i + 1].charAt(0).toUpperCase() + titleSplit[i + 1].slice(1, titleSplit[i + 1].length);
      }

      if (titleSplit[i].toLowerCase() === 'javascript') {
        titleSplit[i] = 'JavaScript';
      } else if (titleSplit[i].toLowerCase() === 'api') {
        titleSplit[i] = 'API';
      } else if (titleSplit[i].toLowerCase() === 'javascript:') {
        titleSplit[i] = 'JavaScript:';
      } else if (titleSplit[i] === 'i') {
        titleSplit[i] = 'I';
      }

      if (iLength > 3 && i !== 0) {
        titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].slice(1, iLength);
      }

      if (titleSplit[i][j] === '-') {
        titleSplit[i] = titleSplit[i].slice(0, j + 1) + titleSplit[i].charAt(j + 1).toUpperCase() + titleSplit[i].slice(j + 2, iLength);
      } else if (titleSplit[i][j] === ':') {
        titleSplit[i + 1] = titleSplit[i + 1].charAt(0).toUpperCase() + titleSplit[i + 1].slice(1, titleSplit[i + 1].length);
      }
    }
  }
  var newTitle = titleSplit.join(' ');
  return newTitle;
}
